import { useEffect, useState } from "react";
import { TbMoodEmpty } from "react-icons/tb";
import FridgeContentList from "./FridgeContentList";
import { getEntries } from "../Services/entriesAPI";

function FridgeContent() {
  const [fridgeContent, setFridgeContent] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    async function fetchData() {
      try {
        setIsLoading(true);
        const data = await getEntries();

        if (data) {
          setFridgeContent(data);
        }
      } catch (err) {
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <h2 className="text-2xl font-semibold">Your fridge content</h2>
      {!fridgeContent ||
        (fridgeContent?.length === 0 && (
          <div className="w-full h-full flex flex-col items-center justify-center">
            <TbMoodEmpty className="text-8xl" />
            <p>Your fridge is currently empty, try adding some items</p>
          </div>
        ))}
      {fridgeContent && fridgeContent?.length !== 0 && (
        <FridgeContentList content={fridgeContent} />
      )}
    </>
  );
}

export default FridgeContent;
