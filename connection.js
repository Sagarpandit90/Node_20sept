const mongoose = require('mongoose');

async function connection() {
    try {
        await mongoose.connect('mongodb://localhost:27017/batch-2-29sept')// agar hum yaha per db ka naam nhi dete hai to bydefault ye test naam ke db me store hoga.

        console.log("connection created");
        console.log();
    } catch (error) {
        console.log(error);
    }
}

module.exports = connection;


// st1) mongooose ko require krenge
// st2) ek connection naam  ka function banayenge
// st3) try() catch() laga hai
// st4) try() me mongoose connect krna hai
// st5)  abb esme se connection() ko export krna hai
// st6)  es function ko index.js(app.js) me require krna hai or call krna hai
// st7)  models folder me jana hai or model banana hai us file me jis(add aage ka usme likha hai)