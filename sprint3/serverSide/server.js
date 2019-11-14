const express = require('express');
const cors = require('cors');

const videoRoute = require('./routes/videoList');

const app = express();

app.use(cors());
app.use('/videos', videoRoute);

app.listen(8080, () => {
    console.log('======= The Server is working=======');
})