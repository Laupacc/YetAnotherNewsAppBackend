var express = require('express');
var router = express.Router();

const fetch = require('node-fetch');

const NEWS_API_KEY = process.env.NEWS_API_KEY;


router.get('/business', (req, res) => {
    Promise.all([
        fetch(`https://newsdata.io/api/1/news?apikey=${NEWS_API_KEY}&country=ca&category=business`),
        fetch(`https://newsdata.io/api/1/news?apikey=${NEWS_API_KEY}&country=ca&category=business&page=1714893922634312572`)
    ])
        .then(responses => Promise.all(responses.map(response => response.json())))
        .then(dataArray => {
            const articles = dataArray.map(data => {
                if (data.status === 'success') {
                    return data.results;
                } else {
                    return [];
                }
            });
            res.json({ articles });
        })
        .catch(error => {
            res.json({ articles: [] });
        });
});
router.get('/entertainment', (req, res) => {
    fetch(`https://newsdata.io/api/1/news?apikey=${NEWS_API_KEY}&country=ca&category=entertainment`)
        .then(response => response.json())
        .then(data => {
            if (data.status === 'success') {
                res.json({ articles: data.results });
            } else {
                res.json({ articles: [] });
            }
        });
});

router.get('/general', (req, res) => {
    fetch(`https://newsapi.org/v2/top-headlines?country=ca&category=general&apiKey=${NEWS_API_KEY}`)
        .then(response => response.json())
        .then(data => {
            if (data.status === 'ok') {
                res.json({ articles: data.articles });
            } else {
                res.json({ articles: [] });
            }
        });
});

router.get('/health', (req, res) => {
    fetch(`https://newsapi.org/v2/top-headlines?country=ca&category=health&apiKey=${NEWS_API_KEY}`)
        .then(response => response.json())
        .then(data => {
            if (data.status === 'ok') {
                res.json({ articles: data.articles });
            } else {
                res.json({ articles: [] });
            }
        });
});

router.get('/science', (req, res) => {
    fetch(`https://newsapi.org/v2/top-headlines?country=ca&category=science&apiKey=${NEWS_API_KEY}`)
        .then(response => response.json())
        .then(data => {
            if (data.status === 'ok') {
                res.json({ articles: data.articles });
            } else {
                res.json({ articles: [] });
            }
        });
});

router.get('/sports', (req, res) => {
    fetch(`https://newsapi.org/v2/top-headlines?country=ca&category=sports&apiKey=${NEWS_API_KEY}`)
        .then(response => response.json())
        .then(data => {
            if (data.status === 'ok') {
                res.json({ articles: data.articles });
            } else {
                res.json({ articles: [] });
            }
        });
});

router.get('/technology', (req, res) => {
    fetch(`https://newsapi.org/v2/top-headlines?country=ca&category=technology&apiKey=${NEWS_API_KEY}`)
        .then(response => response.json())
        .then(data => {
            if (data.status === 'ok') {
                res.json({ articles: data.articles });
            } else {
                res.json({ articles: [] });
            }
        });
});



module.exports = router;
