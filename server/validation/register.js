const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateRegisterInput(data) {
  const errors = {};
  data.firstname = !isEmpty(data.firstname) ? data.firstname : '';
  data.lastname = !isEmpty(data.lastname) ? data.lastname : '';
  data.username = !isEmpty(data.username) ? data.username : '';
  data.email = !isEmpty(data.email) ? data.email : '';
  data.password = !isEmpty(data.password) ? data.password : '';

  if (!Validator.isLength(data.firstname, { min: 2, max: 30 })) {
    errors.firstname = 'Votre prénom doit contenir entre 2 et 30 caractères';
  }

  if (Validator.isEmpty(data.firstname)) {
    errors.firstname = 'Votre prénom est requis';
  }

  if (!Validator.isLength(data.lastname, { min: 2, max: 30 })) {
    errors.lastname = 'Votre nom doit contenir entre 2 et 30 caractères';
  }

  if (Validator.isEmpty(data.lastname)) {
    errors.lastname = 'Votre nom est requis';
  }

  if (!Validator.isLength(data.username, { min: 2, max: 30 })) {
    errors.username = 'Votre nom d\'utilisateur doit contenir entre 2 et 30 caractères';
  }

  if (Validator.isEmpty(data.username)) {
    errors.username = 'Votre nom d\'utilisateur est requis';
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = 'Votre email est invalide';
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = 'Votre email est requis';
  }

  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = 'Votre mot de passe doit contenir entre 6 et 30 caractères';
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = 'Votre mot de passe est requis';
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
