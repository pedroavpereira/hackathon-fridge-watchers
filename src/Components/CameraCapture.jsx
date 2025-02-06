import React, { useRef, useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
import Webcam from "react-webcam";

const CameraCapture = ({ setFormImage, setShowCamera }) => {
  const webcamRef = useRef(null);
  const [image, setImage] = useState(null);

  const capture = (e) => {
    e.preventDefault();
    const imageSrc = webcamRef.current.getScreenshot();
    setImage(imageSrc);
  };

  const reset = (e) => {
    e.preventDefault();
    setImage(null);
  };

  const cancel = (e) => {
    e.preventDefault();
    setShowCamera(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormImage(image);
    setShowCamera(false);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      {!image ? (
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/png"
          className="w-80 min-h-40 h-fit border rounded-lg"
        />
      ) : (
        <img
          src={image}
          alt="Captured"
          className="w-80 min-h-40 h-fit border rounded-lg"
        />
      )}
      <div className="flex gap-2">
        <button
          onClick={cancel}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          <MdOutlineCancel />
        </button>
        {!image ? (
          <button
            onClick={capture}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
          >
            Take Photo
          </button>
        ) : (
          <button
            onClick={reset}
            className="bg-red-500 text-white px-4 py-2 rounded-lg"
          >
            Retake
          </button>
        )}

        {image && <button onClick={handleSubmit}>Submit</button>}
      </div>
    </div>
  );
};

export default CameraCapture;
