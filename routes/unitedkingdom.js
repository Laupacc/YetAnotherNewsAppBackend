var express = require('express');
var router = express.Router();

const fetch = require('node-fetch');

const NEWS_API_KEY = process.env.NEWS_API_KEY;


router.get('/business', (req, res) => {
    fetch(`https://newsdata.io/api/1/news?apikey=${NEWS_API_KEY}&country=gb&category=business&image=1&language=en`)
        .then(response => response.json())
        .then(data => {
            if (data.status === 'success') {
                res.json({ articles: data.results });
            } else {
                res.json({ articles: [] });
            }
        });
});

router.get('/entertainment', (req, res) => {
    fetch(`https://newsdata.io/api/1/news?apikey=${NEWS_API_KEY}&country=gb&category=entertainment&image=1&language=en`)
        .then(response => response.json())
        .then(data => {
            if (data.status === 'success') {
                res.json({ articles: data.results });
            } else {
                res.json({ articles: [] });
            }
        });
});

router.get('/top', (req, res) => {
    fetch(`https://newsdata.io/api/1/news?apikey=${NEWS_API_KEY}&country=gb&category=top&image=1&language=en`)
        .then(response => response.json())
        .then(data => {
            if (data.status === 'success') {
                res.json({ articles: data.results });
            } else {
                res.json({ articles: [] });
            }
        });
});

router.get('/health', (req, res) => {
    fetch(`https://newsdata.io/api/1/news?apikey=${NEWS_API_KEY}&country=gb&category=health&image=1&language=en`)
        .then(response => response.json())
        .then(data => {
            if (data.status === 'success') {
                res.json({ articles: data.results });
            } else {
                res.json({ articles: [] });
            }
        });
});

router.get('/science', (req, res) => {
    fetch(`https://newsdata.io/api/1/news?apikey=${NEWS_API_KEY}&country=gb&category=science&image=1&language=en`)
        .then(response => response.json())
        .then(data => {
            if (data.status === 'success') {
                res.json({ articles: data.results });
            } else {
                res.json({ articles: [] });
            }
        });
});

router.get('/sports', (req, res) => {
    fetch(`https://newsdata.io/api/1/news?apikey=${NEWS_API_KEY}&country=gb&category=sports&image=1&language=en`)
        .then(response => response.json())
        .then(data => {
            if (data.status === 'success') {
                res.json({ articles: data.results });
            } else {
                res.json({ articles: [] });
            }
        });
});

router.get('/technology', (req, res) => {
    fetch(`https://newsdata.io/api/1/news?apikey=${NEWS_API_KEY}&country=gb&category=technology&image=1&language=en`)
        .then(response => response.json())
        .then(data => {
            if (data.status === 'success') {
                res.json({ articles: data.results });
            } else {
                res.json({ articles: [] });
            }
        });
});

router.get('/education', (req, res) => {
    fetch(`https://newsdata.io/api/1/news?apikey=${NEWS_API_KEY}&country=gb&category=education&image=1&language=en`)
        .then(response => response.json())
        .then(data => {
            if (data.status === 'success') {
                res.json({ articles: data.results });
            } else {
                res.json({ articles: [] });
            }
        });
});

router.get('/environment', (req, res) => {
    fetch(`https://newsdata.io/api/1/news?apikey=${NEWS_API_KEY}&country=gb&category=environment&image=1&language=en`)
        .then(response => response.json())
        .then(data => {
            if (data.status === 'success') {
                res.json({ articles: data.results });
            } else {
                res.json({ articles: [] });
            }
        });
});

router.get('/food', (req, res) => {
    fetch(`https://newsdata.io/api/1/news?apikey=${NEWS_API_KEY}&country=gb&category=food&image=1&language=en`)
        .then(response => response.json())
        .then(data => {
            if (data.status === 'success') {
                res.json({ articles: data.results });
            } else {
                res.json({ articles: [] });
            }
        });
});

router.get('/lifestyle', (req, res) => {
    fetch(`https://newsdata.io/api/1/news?apikey=${NEWS_API_KEY}&country=gb&category=lifestyle&image=1&language=en`)
        .then(response => response.json())
        .then(data => {
            if (data.status === 'success') {
                res.json({ articles: data.results });
            } else {
                res.json({ articles: [] });
            }
        });
});

router.get('/politics', (req, res) => {
    fetch(`https://newsdata.io/api/1/news?apikey=${NEWS_API_KEY}&country=gb&category=politics&image=1&language=en`)
        .then(response => response.json())
        .then(data => {
            if (data.status === 'success') {
                res.json({ articles: data.results });
            } else {
                res.json({ articles: [] });
            }
        });
});


module.exports = router;
