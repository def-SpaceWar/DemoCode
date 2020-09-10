import { React } from 'react';
const express = require('express');

express.get('/', async (req, res) => {
  return req.query;
});

express.get('/api', (req, res) => {
  return res.json();
});

function returnJSX() {
  var str = `${props}`; // The ${ ... } problem will be fixed soon!
  
  return (
    <div>
      <p>Hello World</p>
    </div>
  );
}

const arrowFunc = () => { console.log('abc') };