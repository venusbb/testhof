// submit.js
/* eslint no-console: ["error", { allow: ["warn", "error"] }] */

'use strict';
module.exports = config => superclass => class extends superclass {
  saveValues(req, res, next) {
    super.saveValues(req, res, next);
  }
};
