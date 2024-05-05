var express = require('express');
var router = express.Router();

const fetch = require('node-fetch');

const NEWS_API_KEY = process.env.NEWS_API_KEY;


router.get('/business', (req, res) => {
    fetch(`https://newsdata.io/api/1/news?apikey=${NEWS_API_KEY}&country=ca&category=business&image=1&language=en`)
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
    fetch(`https://newsdata.io/api/1/news?apikey=${NEWS_API_KEY}&country=ca&category=entertainment&image=1&language=en`)
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
    fetch(`https://newsdata.io/api/1/news?apikey=${NEWS_API_KEY}&country=ca&category=top&image=1&language=en`)
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
    fetch(`https://newsdata.io/api/1/news?apikey=${NEWS_API_KEY}&country=ca&category=health&image=1&language=en`)
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
    fetch(`https://newsdata.io/api/1/news?apikey=${NEWS_API_KEY}&country=ca&category=science&image=1&language=en`)
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
    fetch(`https://newsdata.io/api/1/news?apikey=${NEWS_API_KEY}&country=ca&category=sports&image=1&language=en`)
        .then(response => response.json())
        .then(data => {
            if (data.status === 'success') {
                // Remove duplicate titles
                const uniqueArticles = removeDuplicates(data.results, 'title');
                res.json({ articles: uniqueArticles });
            } else {
                res.json({ articles: [] });
            }
        })
        .catch(error => {
            console.error('Error fetching sports news:', error);
            res.status(500).json({ error: 'Failed to fetch sports news data' });
        });
});


router.get('/technology', (req, res) => {
    fetch(`https://newsdata.io/api/1/news?apikey=${NEWS_API_KEY}&country=ca&category=technology&image=1&language=en`)
        .then(response => response.json())
        .then(data => {
            if (data.status === 'success') {
                res.json({ articles: data.results });
            } else {
                res.json({ articles: [] });
            }
        });
});

function removeDuplicates(arr, prop) {
    const unique = [];
    const titles = new Set();
    for (const item of arr) {
        if (!titles.has(item[prop])) {
            titles.add(item[prop]);
            unique.push(item);
        }
    }
    return unique;
}


module.exports = router;
