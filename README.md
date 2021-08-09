# Vetspire Take-home Challenge
## Sunil Gadgil, Austin TX

Hello! Thank you for giving me the opportunity to complete this take-home challenge.

I have created a simple React frontend with a Node/Express backend to serve up a list of dog breeds and images. There is also a capability to add new dog breeds and their images using the input form at the bottom of this SPA.

I decided to build this using an MVC design pattern, using a `.txt` file (to store dog breed names) and an `/images` folder for my models, a React frontend as the view, and my server logic as my controller.

There were several interesting challenges associated with this project, including properly configuring Webpack, using the `multer` module to upload image files to the project directory, and the decision of whether to use the `axios` or `fetch` API to communicate with the backend. I used `fetch`, because it was acting in a blocking way so that React waited to re-render components until data came back to update state. 

Bonus: You'll see two additional breeds in the list, beyond what I was originally given. Enjoy the pictures of my own Lhasa Apso and Shih Tzu in there! Thank you, and I hope you enjoy. -Sunil Gadgil

## Scripts to Run Project
`cd technical-interview-challenge` <br>
`npm start` to start `nodemon` server process <br>
`npm run-script build` to run React on `http://34.204.95.224:3000/` <br>
