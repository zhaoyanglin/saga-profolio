const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/', (req, res) => {

    const queryText = 'SELECT * FROM "projects";'

    pool.query(queryText).then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('get Error: ', error);
        res.sendStatus(500);
    });
});

router.post('/', (req, res) => {
    console.log(req.body);

    const newProject = req.body

    const queryText = `INSERT INTO "projects"("name", "description", "thumbnail", "website", "github", "date_completed", "tag_id")
    VALUES($1, $2, $3, $4, $5, $6, $7);`

    const queryValue = [
        newProject.name,
        newProject.discription,
        newProject.thumbnail,
        newProject.website,
        newProject.github,
        newProject.date_completed,
        newProject.tag_id,
    ]

    pool.query(queryText, queryValue)
        .then(() => {
            res.send(201)
        }).catch((error => {
            res.sendStatus(500);
            console.log('error in post:', error);
        }))
})

router.delete('/:id', (req, res) => {

    const queryText = 'DELETE FROM "projects" WHERE id=$1';

    pool.query(queryText, [req.params.id])
        .then(() => {
            res.sendStatus(200)
        }).catch((error) => {
            console.log('DELETE projects query error: ', error);
            res.sendStatus(500);
        });
});

router.get('/tags', (req, res) => {

    const queryText = 'SELECT * FROM "tags";'

    pool.query(queryText).then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('get id Error: ', error);
        res.sendStatus(500);
    });
});

module.exports = router;
