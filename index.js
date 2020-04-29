const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

const port = 3000;

app.get('/', (req, res) => res.send('Server is on!'))

app.listen(port, () => console.log(`Express app listening at http://localhost:${port}`))

// middlewares
// app.use(cors());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// mongoose.connect('mongodb://localhost:27017/relationships',{
//     useNewUrlParser: true,
//     useUnifiedTopology: true 
// })

