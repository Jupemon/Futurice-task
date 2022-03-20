import { FunctionComponent } from "react";

interface PhotoProps {
  thumbnailUrl: string;
  title: string;
}

const Photo: FunctionComponent<PhotoProps> = ({ title, thumbnailUrl }) => {
  return (
    <div>
      <h1>{title}</h1>
      <img src={thumbnailUrl} alt={title} />
    </div>
  );
};

export default Photo;
