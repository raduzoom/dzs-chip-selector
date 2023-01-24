"use strict";
const express = require('express');
const app = express();
const fs = require('fs');

const logFile = './my-errors.log';
const options = JSON.parse(fs.readFileSync('options.json', 'utf8'));

/** @type any */
let DELAY_TIME = 0.3;

app.get('/', (req, res) => {

  const serveJson = () =>{

    res.json(foundSubjects);
  }

  /** @type any */
  let query = '';
  /** @type any */
  let requestVersion = '0';

  if (req.query.search) {
    query = req.query.search;
  }
  if (req.query.requestVersion) {
    requestVersion = parseFloat(req.query.requestVersion);
  }
  if (req.query.delay) {
    DELAY_TIME = parseFloat(req.query.delay);
  }

  let foundSubjects = {foundSubjects: [], requestVersion: requestVersion};
  if (query) {
    query = query.toLowerCase();
    options.forEach(subject => {
      let subjectText = subject.htmlContent.toLowerCase();
      if (subjectText.indexOf(query) !== -1) {
        foundSubjects.foundSubjects.push(subject);
      }
    });
  }

  res.set('Content-Type', 'application/json');
  res.set('X-Request-Version', requestVersion);

  if(DELAY_TIME){
    setTimeout(() => {
      serveJson();
    }, DELAY_TIME * 1000);
  }else{
    serveJson();
  }
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
