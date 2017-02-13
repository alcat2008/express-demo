/* eslint-disable no-console */

const fs = require('fs');
const parseString = require('xml2js').parseString;

const debug = require('debug')('xmlparser:*');

function parseNumbers(str) {
  if (!isNaN(str)) {
    str = str % 1 === 0 ? parseInt(str, 10) : parseFloat(str);
  }
  return str;
}

const path = './dictionary.xml';

fs.readFile(path, (fsError, buffer) => {
  if (fsError) {
    debug('read error: ' + path);
    debug(fsError.message);
  } else {
    parseString(buffer.toString(),
      {
        trim: true,
        explicitArray: false,
        mergeAttrs: true,
        // valueProcessors: [parseNumbers],
        // attrValueProcessors: [parseNumbers],
      },
        (parseError, result) => {
          if (parseError) {
            debug('parse error: ' + path);
          } else {
            // debug(JSON.stringify(result));
            console.log(JSON.stringify(result));
          }
        });
  }
});

