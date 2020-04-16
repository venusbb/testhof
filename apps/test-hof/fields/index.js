'use strict';

module.exports = {
  name: {
    validate: 'required'
  },
  'provider-name': {
    validate: 'required'
  },
  'address-line-1': {
    validate: 'required'
  },
  'address-line-2': {},
  town: {
    validate: 'required'
  },
  country: {
    mixin: 'select',
    options: require('hof-util-countries')(),
    validate: 'required'
  },
  postcode: {
    validate: ['required', 'postcode']
  },
  'resident-in-uk': {
    mixin: 'radio-group',
    options: ['yes', 'no']
  },
  'have-tablets': {
    mixin: 'radio-group',
    options: ['yes', 'no'],
    validate: ['required']
  },
  'need-tablets': {
    mixin: 'radio-group',
    options: ['yes', 'no'],
    validate: ['required']
  },
  'have-wifi': {
    mixin: 'radio-group',
    options: ['yes', 'no'],
    validate: ['required']
  },
  'need-wifi': {
    mixin: 'radio-group',
    options: ['yes', 'no'],
    validate: ['required']
  },
  'email-address': {
    validate: ['required', 'email']
  },
  'phone-no': {
  }
};
