const initialState = {
  recourses: [],
};

const resourcesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_RESOURCES': {
      return {
        ...state,
        recourses: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
export default resourcesReducer;
