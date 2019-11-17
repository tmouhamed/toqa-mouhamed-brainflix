const express = require('express');
const router = express.Router();

//data
const mainPageVideo = require('./data/allVideoData');
const videoData = require('./data/videoDetails');

router.get('/', (request, response) => {
    response.status(201).json(mainPageVideo);
})
//getting the video from the video list by ID
router.get('/:id', (request, response) => {
    const matchingVideo = videoData.find( element => element.id === request.params.id);
    matchingVideo ? 
    response.status(201).json(matchingVideo):
    response.status(404).json({ message: 'No video with that id exists' });
})

router.post('/:id/comments', (request, response) => {
    console.log(response.data)
    response.send("Hello");

})

module.exports = router;