const initialState = {
  country: "germany",
};

const CountryReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_COUNTRY":
      return {
        ...state,
        country: action.payload,
      };
  }
};

export default CountryReducer;
