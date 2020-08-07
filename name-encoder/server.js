const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors =  require('cors');
const mongoose = require('mongoose');
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const PORT = process.env.PORT || 5000;
const nameRoutes = express.Router();
var fs = require('fs');

const codetoname = require("./routes/codetoname.route");
const nametocode = require("./routes/nametocode.route");
const getallnames = require("./routes/getallnames.route");
const envs = require("./configurations");
const db = require("./database");
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      version: "1.0.0",
      title: "Name Encoder API",
      description: "Name Encoding for Irish Names ",
      contact: {
        name: "Siddhartha Ranganathan"
      },
      servers: ["http://localhost:5000"]
    }
  },
  // ['.routes/*.js']
  apis: ['./routes/*.js']
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));


app.use(cors());
app.use(bodyParser.json());




/*mongoose.connect('mongodb+srv://Sid03:Gz-bTFY3n2BEwCb@cs648-92tok.mongodb.net/cs648', {useNewUrlParser: true});

const connection = mongoose.connection;

connection.once('open', function(){
  console.log("MongoDB Connection Successful");
});
*/


app.use('/allnames',getallnames);
app.use("/codes",nametocode);
app.use("/names",codetoname);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  const path = require('path');
  app.get('*', (req,res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })

}


var listener = app.listen(PORT, function () {
  console.log("Listening on port " + listener.address().port);
});