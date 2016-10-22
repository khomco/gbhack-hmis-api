var Client = require('node-rest-client').Client;
var Q = require('kew');

var host = 'localhost';
var port = '3000';
var url = 'http://' + host + ':' + port + '/api/commands';

function Commander() {
    var client = new Client();

    this.sendCommand = (command) => {
        console.log(command);
        var deferred = Q.defer();

        var request = {
            data: command,
            headers: {"Content-Type": "application/json"}
        };

        client.post(url, request, (data, response) => {
            console.log(data);
            deferred.resolve(data);
        }).on('error', (error) => {
            deferred.fail(error);
        });

        return deferred.promise;
    };
}

module.exports = Commander;