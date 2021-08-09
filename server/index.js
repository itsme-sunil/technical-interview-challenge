const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const cors = require('cors');
const imageFilePath = path.join(__dirname, '../images');
const breedsFilePath = path.join(__dirname, './db/breeds.txt');
const PORT = 3004;

const multer = require('multer');
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, imageFilePath);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
})
const upload = multer({ storage: storage });

app.use(express.static(__dirname + '/images'));
app.use('../images', express.static('images'));
app.use(express.json());
app.use(cors());

// controllers
const generateImageFileName = newDog => {
  imgName = newDog.toLowerCase().split(' ').join('_') + '.jpg';
  return imgName;
};

const generateData = (input) => {
  input = input.split('\n');
  let breeds = input.map(breed => (
    {
      name: breed,
      image: `${imageFilePath}/${generateImageFileName(breed)}`,
      fileName: generateImageFileName(breed)
    }
  ));

  breeds = breeds.sort((a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  });

  for (let i = 0; i < breeds.length - 1; i++) {
    if (breeds[i + 1].name === breeds[i].name) {
      breeds.splice(i + 1, 1);
      i--;
    }
  }

  return breeds;
};

// GET all breeds
app.get(`/`, (req, res) => {
  let breeds = [];
  let fileStream = fs
    .createReadStream(breedsFilePath, 'utf8')
    .on('error', (error) => {
      console.error(error);
    })
    .on('data', breedsFile => {
      breeds = generateData(breedsFile);
    })
    .on('end', () => {
      console.info('finished reading file...');
      res.send(breeds);
    });
});

// POST a new dog to the DB
app.post(`/`, (req, res) => {
  let appendBreed = fs.appendFile(breedsFilePath, '\n' + req.body.newBreed, (err) => {
    if (err) {
      console.error(err.message);
    } else {
      res.send('post successful');
    }
  });
});

app.post(`/upload`, upload.any('file'), (req, res) => {
  res.send(req.files[0]);
})

app.listen(PORT, () => {
  console.info(`Listening on port ${PORT}...`);
})