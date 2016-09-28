var heapdump = require('heapdump');
var express = require('express');
var router = express.Router();
var app = express();
var theThing = null;
var replaceThing = function() {
    console.log('in replaceThing function ')
    var origninThing = theThing;
    var unused = function(){
        if(origninThing) {
            console.log('hi');
        }
    };
    theThing = {
        longStr: new Array(1000000).join('*'),
        someMethod: function() {
            console.log('someMessage ')
        }
    };
};
router.get('/leak', function(req, res, next) {
    replaceThing();
    theThing = null;
    heapdump.writeSnapshot('testexpress' + Date.now() + '.heapsnapshot');
    return res.json({message: 'Everything is fine'})
});
app.get('/*', router);
app.listen(3000, function(err){
    console.log('express listening on 3000');
});
exports.default = app;