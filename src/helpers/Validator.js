export const alphanumeric = (input) => {
  return /^[0-9a-zA-Z ]{3,20}$/.test(input);
};

export const email = (input) => {
  return /^.+@[a-z]{3,6}\.(com|in)$/.test(input);
};

export const password = (input) => {
  return /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[0-9a-zA-Z!@#$%^&*]{8,15}$/.test(
    input
  );
};
