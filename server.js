const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./server/config/mongoose.config');
require('./server/routes/logs.routes')(app);
require('./server/routes/techs.routes')(app);

app.listen(7000, () => {
    console.log("Now listening on port 7000")
});