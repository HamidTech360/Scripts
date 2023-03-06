export const upperCaseReg = new RegExp(/\p{Lu}/u);
export const specialCharsReg = new RegExp(/[ `!@#$%^&*()_+\-={};':"\\|,.<>?~]/);
export const numberReg = new RegExp(/\d/);
export const formatCamelCaseReg = (text) => {
  const result = text.replace(/([a-z](?=[A-Z]))/g, "$1 ");
  const finalResult = result.charAt(0).toUpperCase() + result.slice(1);
  return finalResult;
};