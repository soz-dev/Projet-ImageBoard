const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateUsernameInput(data) {
  const errors = {};
  data.username = !isEmpty(data.username) ? data.username : '';

  if (!Validator.isLength(data.username, { min: 2, max: 30 })) {
    errors.username = 'Votre nom d\'utilisateur être compris entre 2 et 30 caractères';
  }

  if (Validator.isEmpty(data.username)) {
    errors.username = 'Le nom d\'utilisateur est requis';
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
