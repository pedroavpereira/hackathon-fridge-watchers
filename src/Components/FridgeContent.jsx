import { useEffect, useState } from "react";
import { TbMoodEmpty } from "react-icons/tb";
import FridgeContentList from "./FridgeContentList";
import { getEntries } from "../Services/entriesAPI";

function FridgeContent({ content }) {
  return (
    <>
      <h2 className="text-2xl font-semibold">Your fridge content</h2>
      {!content ||
        (content?.length === 0 && (
          <div className="w-full h-full flex flex-col items-center justify-center">
            <TbMoodEmpty className="text-8xl" />
            <p>Your fridge is currently empty, try adding some items</p>
          </div>
        ))}
      {content && content?.length !== 0 && (
        <FridgeContentList content={content} />
      )}
    </>
  );
}

export default FridgeContent;
