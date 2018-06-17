import axios from 'axios';
import Expo from "expo";
const { manifest } = Expo.Constants;
const ip = manifest.packagerOpts.dev
  ? manifest.debuggerHost.split(`:`).shift().concat(`:1337`)
  : `localhost:1337`;

const GOT_COURTS = 'GOT_COURTS';

export const gotCourts = courts => ({
  type: GOT_COURTS,
  courts
});

export const getCourts = () => {
  return async dispatch => {
    try {
      console.log('hello');
      const { data } = await axios.get(`http://${ip}/api/courts`);
      dispatch(gotCourts(data));
    } catch (err) {
      console.log(err);
    }
  };
};

const initialState = {
  courts: []
};

const courtReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_COURTS:
      return {
        ...state,
        courts: action.courts
      };
    default:
      return state;
  }
};

export default courtReducer;
