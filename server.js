

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const itemRoutes = require('./expressRoutes/itemRoutes');

      const app = express();
      app.use(express.static('public'));
      app.use(bodyParser.json());
      app.use(cors());
      app.use('/items', itemRoutes);
      const port = process.env.PORT || 4000;

      const server = app.listen(port, function(){
        console.log('Listening on port ' + port);
      });