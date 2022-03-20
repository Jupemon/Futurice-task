import { FunctionComponent, useEffect } from "react";
import { connect } from "react-redux";
import { imageSelectors } from "../reducers/images";

const ErrorMessage: FunctionComponent = ({ state }: any) => {
  return <div>{state.error.errorMessage}</div>;
};

export default connect((state: any) => ({
  state: imageSelectors.getImages(state),
}))(ErrorMessage);
