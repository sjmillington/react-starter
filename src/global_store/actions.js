import { CHANGE_USERNAME } from './constants'

export const changeUsername = (username) => {
  return {
    type: CHANGE_USERNAME,
    username: username,
  };
};