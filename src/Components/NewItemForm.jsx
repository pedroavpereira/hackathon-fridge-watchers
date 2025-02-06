import { useEffect, useState } from "react";
import CameraCapture from "./CameraCapture";
import { IoIosCamera } from "react-icons/io";
import { createEntry, verifyInformationWithAI } from "../Services/apiRequests";
import LocalSpinner from "./LocalSpinner";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function NewItemForm() {
  const [itemName, setItemName] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [image, setImage] = useState("");

  const [showCamera, setShowCamera] = useState(false);

  const [isFetching, setIsFetching] = useState(false);

  console.log(isFetching);

  useEffect(
    function () {
      if (!image) return;

      async function fetchAiData() {
        try {
          setIsFetching(true);
          const payload = {
            image: image,
          };

          const newEntry = verifyInformationWithAI(payload);
        } catch (err) {
          console.log(err);
        } finally {
          //setIsFetching(false);
        }
      }

      fetchAiData();
    },
    [image]
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsFetching(true);
      const payload = {
        image: image,
        product_name: itemName,
        expiry_date: expiryDate,
      };

      const newEntry = createEntry(payload);
    } catch (err) {
      console.log(err);
    } finally {
      setIsFetching(false);
    }
  };

  const handleDateChange = (date) => {
    setExpiryDate(date);
  };

  return (
    <div className="w-96 relative py-15">
      {isFetching && (
        <>
          <div className="absolute inset-0 bg-slate-200"></div>
          <div className="absolute left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%] z-50">
            <LocalSpinner />
          </div>
        </>
      )}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 items-center justify-center relative"
      >
        {!showCamera && (
          <button
            disabled={isFetching}
            onClick={(e) => {
              e.preventDefault();
              setShowCamera(true);
            }}
            className="flex items-center justify-center w-16 h-16 text-4xl text-white bg-red-500 rounded-full"
          >
            <IoIosCamera />
          </button>
        )}
        {showCamera ? (
          <CameraCapture
            setFormImage={setImage}
            setShowCamera={setShowCamera}
          />
        ) : (
          image && (
            <img
              src={image}
              alt="captured"
              className="w-80 min-h-40 border rounded-lg"
            />
          )
        )}
        <div className="flex flex-col">
          <label htmlFor="product_name">Product Name</label>
          <input
            className="w-full px-4 py-1 border-2 broder-slate-700 rounded-md"
            id="product_name"
            value={itemName}
            onChange={(e) => setItemName(e.value)}
            disabled={isFetching}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="expiry_date">Expiry Date</label>
          <DatePicker
            id="expiry_date"
            selected={expiryDate}
            onChange={handleDateChange}
            dateFormat="dd/MM/yyyy"
            placeholderText="Click to select a date"
            className="w-full px-4 py-1 border-2 broder-slate-700 rounded-md"
          />
        </div>
        <button
          disabled={isFetching}
          className="border-2 border-red-500 px-4 py-1 rounded-md"
          submit
        >
          Add to fridge
        </button>
      </form>
    </div>
  );
}

export default NewItemForm;
