
var express = require('express');
var mongojs = require('mongojs');
var ObjectId = mongojs.ObjectId;
var bodyParser = require('body-parser')

var db = mongojs('fullstack', ['accounts']);
var app = express();


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(express.static(__dirname+'/public'))

app.get('/getData', function (req,res) {
  db.accounts.find({}, function (err, docs) {
res.send(docs);
  })
})

app.post('/save', function (req,res) {
  var obj = req.body.obj
  db.accounts.insert({name:obj.acc, deposit:obj.dep, cCard:obj.card}, function (err, docs) {
    db.accounts.find({}, function (err, docs) {
      res.send(docs);
    })
  })
})

app.post('/del', function (req, res) {
  var id = req.body.id;
  db.accounts.remove({_id:ObjectId(id)}, function (err, docs) {
    db.accounts.find({}, function (err, docs) {
      res.send(docs);
    })
  })
})


app.listen(3000, function () {
  console.log('Listening port 3000');
})
