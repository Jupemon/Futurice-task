export const fetchImages = () => {
  return async (dispatch: any) => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/photos");
      if (!res.ok) {
        throw "Could not fetch images";
      }
      const data = await res.json();
      dispatch({
        type: "FETCH_IMAGES_SUCCESS",
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: "FETCH_IMAGES_FAIL",
        payload: error,
      });
    }
  };
};
