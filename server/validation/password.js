const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validatePasswordInput(data) {
  const errors = {};
  data.password = !isEmpty(data.password) ? data.password : '';

  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = 'Votre mot de passe doit être compris entre 6 et 30 caractères';
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = 'Le mot de passe est requis';
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
