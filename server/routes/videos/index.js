const router = require('express').Router();
const youtubedl = require('youtube-dl');
const config = require('./config');
const createVideosDir = require('../../utils/createVideosDir');
const createZipFile = require('../../utils/createZipFile');

router.get('/video-info', (req, res) => {
    let videoLink = req.query["link"];
    youtubedl.getInfo(videoLink,[], [], function(err, info) {
        if (err) reject(err);
        res.send(info);
    });
});

router.get('/download-video', (req, res) => {
    let videoLink = req.query["link"];
    let videoName = req.query["name"];
    let format = req.query["format"];
    let video = youtubedl(videoLink,
        ['--format=best'],
        { cwd: __dirname}
    );

    res.set('Content-Disposition',  `attachment; filename="${videoName}.${format}"`);
    video.pipe(res);
});

router.get('/download-all-videos', (req, res) => {
    let videos = [];
    let videosDir = createVideosDir();
    let videosPaths = [];
    for (let currentVideo of videos) {
        let videoFileName = `${currentVideo.name}.${currentVideo.format}`;
        let videoFilePath = path.join(videosDir, videoFileName);
        videosPaths.push(videoFilePath);
        let video = youtubedl(currentVideo.url,
            ['--format=18'],
            { cwd: __dirname}
        );
        video.pipe(fs.createWriteStream(videoFilePath))
    }
    let videosZip = createZipFile(videosPaths);
    res.status(config.httpResponses.ok).send(videosZip);
});

module.exports = router;