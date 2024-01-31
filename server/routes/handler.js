const express = require('express');
const router = express.Router();

router.get('/home', (req, res) => {
    const str = [
        {
            "title": "finish KRM content",
            "details": "you must follow your guts and pray",
            "status": "incomplete"
        },
        {
            "title": "finish Task Management setup",
            "details": "you must follow codrkai",
            "status": "in progress"
        },
        {
            "title": "finish devotion",
            "details": "you must pray",
            "status": "complete"
        }
    ];
    res.end(JSON.stringify(str));
});

router.post('/createTask', (req, res) => {
    res.end('NA');
});

module.exports = router;