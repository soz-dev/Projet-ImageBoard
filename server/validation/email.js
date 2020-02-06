const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateEmailInput(data) {
  const errors = {};
  data.email = !isEmpty(data.email) ? data.email : '';

  if (!Validator.isEmail(data.email)) {
    errors.email = 'Votre email est invalide';
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = 'Votre email est requis';
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
