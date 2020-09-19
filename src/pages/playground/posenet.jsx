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
          width: 100vw;
          height: 100vh;
        }
      `}</style>
    </div>
  );
};

export default posenet;
