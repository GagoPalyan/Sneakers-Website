import {
  cardCVCRegex,
  cardExpirationRegex,
  cardNumberRegex,
  cardOwnerNameRegex,
  cityRegex,
  emailRegex,
  nameRegex,
  passwordRegex,
  phoneNumberRegex,
  postalCodeRegex,
  smsRegex,
  stateRegex,
} from "./regex";

export const requiredValidation = {
  required: "Required Field",
};

export const emailValidation = {
  required: "Required Email Field",
  pattern: {
    value: emailRegex,
    message: "Invalid Email",
  },
};

export const passwordValidation = {
  required: "Required Password Field",
  pattern: {
    value: passwordRegex,
    message: "Invalid Password",
  },
};

export const addreasValidation = {
  required: "Required Addreas Field",
  minLength: {
    value: 5,
    message: "Specify the shipping address",
  },
};
export const countryValidation = {
  required: "Required Field",
  minLength: {
    value: 1,
    message: "Specify the shipping address",
  },
};

export const nameValidation = {
  required: "Required Field",
  pattern: {
    value: nameRegex,
    message: "Write your name",
  },
};

export const lastNameValidation = {
  required: "Required Field",
  pattern: {
    value: nameRegex,
    message: "Write your lastname",
  },
};

export const cityValidation = {
  required: "Required Field",
  pattern: {
    value: cityRegex,
    message: "Write your card number",
  },
};

export const stateValidation = {
  required: "Required Field",
  pattern: {
    value: stateRegex,
    message: "Write your card expiration",
  },
};

export const postalCodeValidation = {
  required: "Required Field",
  pattern: {
    value: postalCodeRegex,
    message: "Write your card CVC",
  },
};

export const phoneNumberValidation = {
  required: "Required Field",
  pattern: {
    value: phoneNumberRegex,
    message: "Write your name of owner",
  },
};

export const cardNumberValidation = {
  required: "Required Field",
  pattern: {
    value: cardNumberRegex,
    message: "Write your card number",
  },
};

export const cardExpirationValidation = {
  required: "Required Field",
  pattern: {
    value: cardExpirationRegex,
    message: "Write your card expiration",
  },
};

export const cardCVCValidation = {
  required: "Required Field",
  pattern: {
    value: cardCVCRegex,
    message: "Write your card CVC",
  },
};

export const cardNameValidation = {
  required: "Required Field",
  pattern: {
    value: cardOwnerNameRegex,
    message: "Write your name of owner",
  },
};

export const smsValidation = {
  required: "Required Field",
  minLength: {
    value: 3,
    message: "Invalid",
  },
  maxLength: {
    value: 15,
    message: "Invalid",
  },
};

export const messageValidation = {
  required: "Required Message Field",
  minLength: {
    value: 1,
    message: "Invalid Message",
  },
};
