var test = require('tape-catch');

// var app = require('../index.js');

process.on('uncaughtException', err => {
    console.log('uncaughtException');
    console.log(err);
    process.exit(1);
});

test('beep boop', function (t) {
    t.plan(2);

    t.equal(1 + 1, 2);
    setTimeout(function () {
        t.deepEqual(
            'ABC'.toLowerCase().split(''),
            ['a','b','c']
        );
    });
});


test.onFinish(()=> {
    console.log('------------------------------------------->>>>>>');
    console.log('finish all test, and quit ');
    process.exit(0)
    }
);