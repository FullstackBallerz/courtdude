import axios from 'axios';
import Expo from "expo";
const { manifest } = Expo.Constants;
const ip = manifest.packagerOpts.dev
  ? manifest.debuggerHost.split(`:`).shift().concat(`:1337`)
  : `localhost:1337`;

const GOT_COURTS = 'GOT_COURTS';
const GOT_USER = 'GOT_USER'

export const gotCourts = courts => ({
  type: GOT_COURTS,
  courts
});

export const gotUser = user => ({
  type: GOT_USER,
  user
})

export const getCourts = () => {
  return async dispatch => {
    try {
      const { data } = await axios.get(`http://${ip}/api/courts`);
      dispatch(gotCourts(data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const getUser = (userInfo) => {
  return async dispatch => {
    try {
      const { data } = await axios.post(`http://${ip}/api/users`, userInfo)
      dispatch(gotUser(data))
      
    } catch (err) {
      console.log(err)
    }
  }
}

const initialState = {
  courts: [],
  user: {}
};

const courtReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_COURTS:
      return {
        ...state,
        courts: action.courts
      };

    case GOT_USER:
      return {
        ...state,
        user: action.user
      }
    default:
      return state;
  }
};

export default courtReducer;
