export const validateAuth = (values: any) => {
  let errors = {};
  validateEmail(values.email, errors);
  validatePassword(values.password, errors);

  return errors;
};

export const validateInvoice = (values: any) => {
  let errors = {};
  validateDate(values.date, errors);
  validateClientId(values.clientId, errors);
  validateLines(values.lines, errors);

  return errors;
}

const validateEmail = (email: any, errors: any) => {
  if (!email) {
    errors.email = 'The email is required';
  } else {
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      errors.email = 'The email is not valid';
    }
  }
};

const validatePassword = (password: any, errors: any) => {
  if (!password) {
    errors.password = 'The password is required';
  } else {
    if (password.length < 8) {
      errors.password = 'The password must be at least 8 characters';
    }
  }
};

const validateDate = (date: any, errors: any) => {
  if (!date) {
    errors.date = 'The date is required';
  }
};

const validateClientId = (clientId: number, errors: any) => {
  if (!clientId) {
    errors.clientId = 'The client is required';
  }
};

const validateLines = (lines: any, errors: any) => {
  if (!lines || lines.length === 0) {
    errors.lines = 'The invoice must have at least one line';
  }
}