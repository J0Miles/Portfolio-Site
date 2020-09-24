export const modifiedFromAddress = (email, from) => {
  from = email.substring(0, email.indexOf("@"));
  return from;
};
