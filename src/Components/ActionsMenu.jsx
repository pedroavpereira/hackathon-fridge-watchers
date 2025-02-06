import Modal from "./Modal";
import NewItemForm from "./NewItemForm";

function ActionsMenu({ setFridgeContent }) {
  return (
    <div className="flex gap-3">
      <Modal>
        <Modal.Open opens="1">
          <button className="border-2 border-blue-800 text-blue-800 hover:text-white hover:bg-blue-800 px-4 py-2 rounded-lg">
            Add to Fridge
          </button>
        </Modal.Open>

        <Modal.Window name="1">
          <NewItemForm setFridgeContent={setFridgeContent} />
        </Modal.Window>
      </Modal>
      <Modal>
        <Modal.Open opens="2">
          <button className="border-2 border-blue-800 text-blue-800 hover:text-white hover:bg-blue-800 px-4 py-2 rounded-lg">
            Give me inspiration
          </button>
        </Modal.Open>

        <Modal.Window name="2">
          <div className="h-48 w-96 flex items-center justify-center">
            <p className="text-3xl">Coming soon!!</p>
          </div>
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default ActionsMenu;
