const initialState = {
  allImages: [],
  renderedImages: [],
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case "FETCH_IMAGES_SUCCESS":
      console.log("HIEOIAH");
      return {
        allImages: action.payload,
      };
    case "FETCH_IMAGES_FAIL":
      console.log("FAILED");
      return state;
    default:
      return state;
  }
};

export const imageSelectors = {
  getImages: (state = initialState) => state,
};
