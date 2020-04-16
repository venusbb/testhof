'use strict';
const submit = require('./behaviours/submit');

module.exports = {
  name: 'test-hof',
  baseUrl: '/test-hof',
  steps: {
    '/name': {
      fields: ['provider-name'],
      next: '/address'
    },
    '/address': {
      fields: ['address-line-1', 'address-line-2', 'town', 'country', 'postcode'],
      next: '/contact'
    },
    '/contact': {
      fields: ['email-address', 'phone-no'],
      next: '/connect'
    },
    '/connect': {
      fields: ['have-tablets', 'need-tablets', 'have-wifi', 'need-wifi'],
      next: '/confirm'
    },
    '/confirm': {
      behaviours: ['complete', require('hof-behaviour-summary-page')],
      next: '/complete'
    },
    '/complete': {
      behaviours: submit({ key: 'name' }),
      template: 'confirmation'
    }
  }
};
