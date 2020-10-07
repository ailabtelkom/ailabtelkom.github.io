import { NextSeo } from "next-seo";
import React from "react";

const posenet = () => {
  return (
    <div>
      <NextSeo
        title="Posenet"
        description={`PoseNet is a vision model that can be used to estimate the pose of a person in an image or video by estimating where key body joints are.`}
      />
      <iframe
        className="full"
        src="https://storage.googleapis.com/tfjs-models/demos/posenet/camera.html"
        allow="camera;microphone"
      />
      <style jsx>{`
        .full {
          margin: auto;
          margin-top: 50px;
          width: 60vw;
          height: 90vh;
        }
        @media screen and (max-width: 800px) {
          .full {
            width: 100vw;
          }
        }
      `}</style>
    </div>
  );
};

export default posenet;
