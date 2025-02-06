import ActionsMenu from "../Components/ActionsMenu";
import FridgeContent from "../Components/FridgeContent";

function Home() {
  return (
    <div className="bg-slate-200 h-screen">
      <div className="max-w-xl mx-auto bg-white py-6 h-screen px-4 space-y-4">
        <ActionsMenu />
        <FridgeContent />
      </div>
    </div>
  );
}

export default Home;
