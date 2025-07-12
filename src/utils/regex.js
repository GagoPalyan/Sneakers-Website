export const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

export const passwordRegex =
  /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;

export const nameRegex = /^[A-Z][a-z]+$/;

export const cityRegex = /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/;

export const stateRegex =
  /^(([Aa][EeLlKkSsZzRr])|([Cc][AaOoTt])|([Dd][EeCc])|([Ff][MmLl])|([Gg][AaUu])|([Hh][Ii])|([Ii][DdLlNnAa])|([Kk][SsYy])|([Ll][Aa])|([Mm][EeHhDdAaIiNnSsOoTt])|([Nn][EeVvHhJjMmYyCcDd])|([Mm][Pp])|([Oo][HhKkRr])|([Pp][WwAaRr])|([Rr][Ii])|([Ss][CcDd])|([Tt][NnXx])|([Uu][Tt])|([Vv][TtIiAa])|([Ww][AaVvIiYy]))$/;

export const postalCodeRegex = /^\d{5}(?:[-\s]\d{4})?$/;

export const phoneNumberRegex = /^\+(?:[0-9]●?){6,14}[0-9]$/;

export const cardNumberRegex =
  /^(?:4[0-9]{12}(?:[0-9]{3})?|3[47][0-9]{13}|5[1-5][0-9]{14}|2(?:2[2-9][0-9]{12}|[3-7][0-9]{13}))$/;

export const cardExpirationRegex = /^(0[1-9]|1[0-2])\/(2[5-9]|3[0-5])$/;

export const cardCVCRegex = /^[1-9]{3,3}$/;

export const cardOwnerNameRegex = /^[A-z]+ [A-z]+$/;

export const smsRegex = /^(?:\d{3,12}|[A-Za-z0-9]{6,10})$/;
