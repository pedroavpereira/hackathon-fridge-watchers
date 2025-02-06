import { useEffect, useState } from "react";
import ActionsMenu from "../Components/ActionsMenu";
import FridgeContent from "../Components/FridgeContent";
import { getEntries } from "../Services/entriesAPI";

function Home() {
  const [fridgeContent, setFridgeContent] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  console.log(fridgeContent);

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
    <div className="bg-slate-200 h-screen">
      <div className="max-w-xl mx-auto bg-white py-6 h-screen px-4 space-y-4">
        <ActionsMenu setFridgeContent={setFridgeContent} />
        <FridgeContent content={fridgeContent} />
      </div>
    </div>
  );
}

export default Home;
