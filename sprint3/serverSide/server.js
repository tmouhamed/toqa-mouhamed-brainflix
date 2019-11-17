const express = require('express');
const cors = require('cors');

//routes
const videoRoute = require('./routes/videoList');

const app = express();

app.use(cors());
//for post
app.use(express.json());

app.use('/videos', videoRoute);

//listen to the server at this port
app.listen(8080, () => {
    console.log('======= The Server is working =======');
})