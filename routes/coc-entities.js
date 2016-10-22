var express = require('express');
var router = express.Router();

var Commander = require('../lib/commander');
var commander = new Commander();

router.post('/continuum-of-care-entities', (req, res) => {
    var command = {
        "action": "create-continuum-of-care-entity",
        "data": {
            "name": req.body.name,
            "address": {
                "street": req.body.street,
                "city": req.body.city,
                "zip": req.body.zip,
                "state": req.body.state
            }
        }
    };
    commander.sendCommand(command)
        .then((response) => {
            if(response.statusCode != 200) {
                console.log(response);
                res.status(200).json(response);
            } else {
                console.log(response);
                res.json(response);
            }
        })
        .fail((error) => {
            console.log(error);
            res.status(500).json(error);
        });
});

//router.put('/continuum-of-care-entities/:id', (request, response, next) => {
//
//});

//router.delete('/continuum-of-care-entities/:id', (request, response, next) => {
//
//});

//router.get('/continuum-of-care-entities', (req, res, next) => {
//
//});

//router.get('/continuum-of-care-entities/:id', (request, response, next) => {
//
//});
//

module.exports = router;
