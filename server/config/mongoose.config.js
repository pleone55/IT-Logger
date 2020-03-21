const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/it-logger", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
    .then(() => console.log("Established a connection to the database"))
    .catch(err => console.log("Could not establish a connection to the database"));