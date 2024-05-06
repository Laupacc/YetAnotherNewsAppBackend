var express = require('express');
var router = express.Router();

const fetch = require('node-fetch');

const NEWS_API_KEY = process.env.NEWS_API_KEY;

router.get('/search', (req, res) => {
    const search = req.query.qInMeta;
    fetch(`https://newsdata.io/api/1/news?apikey=${NEWS_API_KEY}&qInMeta=${search}&image=1&language=en`)
        .then(response => response.json())
        .then(data => {
            if (data.status === 'success') {
                res.json({ articles: data.results });
            } else {
                res.json({ articles: [] });
            }
        })
        .catch(error => {
            console.error("Error fetching news:", error);
            res.status(500).json({ error: "Error fetching news" });
        });
});


module.exports = router;
