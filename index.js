#! /usr/bin/env node
const analyze = require('tarq_core').analyze;

const main = () => {
  const fs = require('fs');
  let text = fs.readFileSync("index.js");
  const result = analyze("index.js", text.toString());
  fs.writeFileSync("output.json", result);
}

main();