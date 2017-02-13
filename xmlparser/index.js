/* eslint-disable no-console */

const fs = require('fs');
const parseString = require('xml2js').parseString;

const debug = require('debug')('xmlparser:*');

const dictionary = '/Users/alcat/git/be-lease-core-dsl/dictionary/dictionary.xml';

const path = dictionary;

fs.readFile(path, (fsError, buffer) => {
  if (fsError) {
    debug('read error: ' + path);
    debug(fsError.message);
  } else {
    parseString(buffer.toString(),
      { explicitArray: false, mergeAttrs: true },
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

