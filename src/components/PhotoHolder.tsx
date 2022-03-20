import * as React from "react";
import { connect } from "react-redux";
import { imagesActions } from "../actions";
import { imageSelectors } from "../reducers/images";
import Photo from "./Photo";

interface PhotoHolderProps {
  photos: any;
  fetchPhotos: any;
}

export interface PhotoInterface {
  albumId: number;
  id: number;
  thumbnailUrl: string;
  title: string;
  url: string;
}

interface PhotoHolderState {
  photos: PhotoInterface[];
}

class PhotoHolder extends React.Component<PhotoHolderProps, PhotoHolderState> {
  state = { photos: [] };

  fetchData = async () => {
    this.props.fetchPhotos();
  };
  componentDidMount() {
    if (this.props.photos.length <= 0) {
      this.fetchData();
    }
  }
  render() {
    return (
      <div>
        {this.props.photos.map((i: PhotoInterface) => {
          return (
            <Photo key={i.id} title={i.title} thumbnailUrl={i.thumbnailUrl} />
          );
        })}
      </div>
    );
  }
}

export default connect(
  (state: any) => ({
    photos: imageSelectors.getImages(state.images.allImages),
  }),
  (dispatch: any) => ({
    fetchPhotos: () => dispatch(imagesActions.fetchImages()),
  })
)(PhotoHolder);
