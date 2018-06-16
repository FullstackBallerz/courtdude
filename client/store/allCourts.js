import axios from 'axios';

const GOT_COURTS = 'GOT_COURTS';

export const gotCourts = courts => ({
  type: GOT_COURTS,
  courts
});

export const getCourts = () => {
  return async dispatch => {
    const courts = await axios.get('/courts');
    dispatch(gotCourts);
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
