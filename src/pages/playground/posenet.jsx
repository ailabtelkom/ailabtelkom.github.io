import React from "react";

const posenet = () => {
  return (
    <div>
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
      `}</style>
    </div>
  );
};

export default posenet;
