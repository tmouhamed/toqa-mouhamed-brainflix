const express = require('express');
const router = express.Router();
const uuidv1 = require('uuid/v1')

//data
const mainPageVideo = require('./data/allVideoData');
const videoData = require('./data/videoDetails');

router.get('/', (request, response) => {
    response.status(201).json(mainPageVideo);
})
//getting the video from the video list by ID
router.get('/:id', (request, response) => {
    const matchingVideo = videoData.find(element => element.id === request.params.id);
    matchingVideo ?
        response.status(201).json(matchingVideo) :
        response.status(404).json({ message: 'No video with that id exists' });
})

router.post('/', (request, response) => {
    const video = request.body;
    let newId = uuidv1();

    const newVideo = {
        ...video,
        id: newId
    }
    
    mainPageVideo.push(newVideo);
    videoData.push(newVideo);

    response.status(200).send(newVideo)

})

module.exports = router;