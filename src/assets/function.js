const EMAIL_REGEXP =
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

export const creatorCurrentTrack = (content, index) => {
  const trackObject = {
    id: content.id,
    name: content.name,
    author: content.author,
    track_file: content.track_file,
    key: index,
  };
  return trackObject;
};

export const validEmail = (email) => {
  const result = EMAIL_REGEXP.test(email)
    ? { validate: true, color: true }
    : { validate: false, color: false };
  return result;
};

export const validPassword = (password) => {
  const minLength = 8;
  const result =
    password.length >= minLength
      ? { validate: true, color: true }
      : { validate: false, color: false };
  return result;
};

export const handleValidName = (name) => {
  const minLength = 2;
  const result =
    name.length >= minLength
      ? { validate: true, color: true }
      : { validate: false, color: false };
  return result;
};

export const handleRepeatPasswordValidate =(password,repeatPassword) =>{
  const result = 
  password === repeatPassword
  ? { validate: true, color: true }
  : { validate: false, color: false }
  return result;
}