let db = require('./db');
db.connect();

const User = require('./User');

function run() {
    let vasya = new User("Вася");
    let petya = new User("Петя");

    vasya.hello(petya);

    console.log( db.getPhrase("Run successful") );
}

if (module.parent) {
    exports.run =  run;
} else {
    run();
}


