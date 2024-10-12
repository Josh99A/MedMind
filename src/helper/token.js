import bcrypt, { genSaltSync } from 'bcryptjs-react'
import { enc, algo } from 'crypto-js';

const makeToken = (email) => {
  let timestamp = new Date().toISOString();

  let hmac = algo.HMAC.create(algo.SHA256, email);

  hmac.update(timestamp);

  let token = hmac.finalize().toString(enc.Hex);

  return token;
};

const encryptToken = (token) => {
  const salt = genSaltSync(10)
  const hashedToken = bcrypt.hashSync(token, salt);

  return hashedToken;
};

const storeToken = (email, hashedToken) => {
  const userToken = { email, token: hashedToken };
  const json = JSON.stringify(userToken);

  localStorage.setItem('userToken', json);

};


const checkToken = (userToken, savedToken) => {
  const isValid = bcrypt.compareSync(userToken, savedToken)

  return isValid
}

export { makeToken, encryptToken, storeToken, checkToken };
