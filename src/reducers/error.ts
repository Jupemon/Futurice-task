const initialState = {
  errorMessage: "",
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case "FETCH_IMAGES_FAIL":
      console.log("FAILED", action.payload);
      return {
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};
