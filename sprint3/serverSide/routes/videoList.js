const express = require('express');
const router = express.Router();

//data
const videoData = require('../data/videoDetails');
const mainPageVideo = require('../data/allVideoData');

router.get('/', (request, response) => {
    response.status(201).send(videoData);
})

router.get('/:id', (request, response) => {
    const video = mainPageVideo.find((element) => {
        element.id == request.params.id;
    })
    response.status(201).send(video);

})

module.exports = router;