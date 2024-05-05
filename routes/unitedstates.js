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
    fetch(`https://newsdata.io/api/1/news?apikey=${NEWS_API_KEY}&country=us&category=business&image=1`)
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
    fetch(`https://newsdata.io/api/1/news?apikey=${NEWS_API_KEY}&country=us&category=entertainment&image=1`)
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
    fetch(`https://newsdata.io/api/1/news?apikey=${NEWS_API_KEY}&country=us&category=top&image=1`)
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
    fetch(`https://newsdata.io/api/1/news?apikey=${NEWS_API_KEY}&country=us&category=health&image=1`)
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
    fetch(`https://newsdata.io/api/1/news?apikey=${NEWS_API_KEY}&country=us&category=science&image=1`)
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
    fetch(`https://newsdata.io/api/1/news?apikey=${NEWS_API_KEY}&country=us&category=sports&image=1`)
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
    fetch(`https://newsdata.io/api/1/news?apikey=${NEWS_API_KEY}&country=us&category=technology&image=1`)
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
