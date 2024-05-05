var express = require('express');
var router = express.Router();

const fetch = require('node-fetch');

const NEWS_API_KEY = process.env.NEWS_API_KEY;

// articles from the verge
// router.get('/theverge', (req, res) => {
//   fetch(`https://newsapi.org/v2/top-headlines?sources=the-verge&apiKey=${NEWS_API_KEY}`)
//     .then(response => response.json())
//     .then(data => {
//       if (data.status === 'ok') {
//         res.json({ articles: data.articles });
//       } else {
//         res.json({ articles: [] });
//       }
//     });
// });

router.get('/business', (req, res) => {
    fetch(`https://newsapi.org/v2/top-headlines?category=business&apiKey=${NEWS_API_KEY}`)
        .then(response => response.json())
        .then(data => {
            if (data.status === 'ok') {
                res.json({ articles: data.articles });
            } else {
                res.json({ articles: [] });
            }
        });
});

router.get('/entertainment', (req, res) => {
    fetch(`https://newsapi.org/v2/top-headlines?category=entertainment&apiKey=${NEWS_API_KEY}`)
        .then(response => response.json())
        .then(data => {
            if (data.status === 'ok') {
                res.json({ articles: data.articles });
            } else {
                res.json({ articles: [] });
            }
        });
});

router.get('/general', (req, res) => {
    fetch(`https://newsapi.org/v2/top-headlines?category=general&apiKey=${NEWS_API_KEY}`)
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
    fetch(`https://newsapi.org/v2/top-headlines?category=health&apiKey=${NEWS_API_KEY}`)
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
    fetch(`https://newsapi.org/v2/top-headlines?category=science&apiKey=${NEWS_API_KEY}`)
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
    fetch(`https://newsapi.org/v2/top-headlines?category=sports&apiKey=${NEWS_API_KEY}`)
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
    fetch(`https://newsapi.org/v2/top-headlines?category=technology&apiKey=${NEWS_API_KEY}`)
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
