const express = require('express');
const mongoose = require('mongoose');
const app = express();
const morgan = require('morgan');
const emps = require('./data');
const Employee = require('./models/employee');

app.use(morgan('dev'));
app.use(express.json());

// DB connect
const url = 'mongodb+srv://admin:1q2w3e4r@cluster0.ddjli.mongodb.net/soongon?retryWrites=true&w=majority';
const options = {
  useNewUrlParser:true
};
mongoose.connect(url, options)
  .then(() => console.log('connection ok..'))
  .catch((err) => console.log(err));

// 직원 전체보기
app.get('/employees', (req, res) => {
  Employee.find({}).exec((err, doc) => {
    res.send(doc);
  });
});
// 직원 상세보기
app.get('/employees/:empId', (req, res) => {
  const empId = req.params.empId;
  res.send(empId);
});
// 직원 등록
app.post('/employees', (req, res) => {
  const emp = req.body;
  console.log(emp);
  res.json(emp);
});
// 직원 수정
app.put('/employees', (req, res) => {

});
// 직원 삭제
app.delete('/employees/:empId', (req, res) => {

});


app.listen(3000, () => {
  console.log('server ready on port 3000');
});