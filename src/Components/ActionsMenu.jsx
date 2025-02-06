import Modal from "./Modal";
import NewItemForm from "./NewItemForm";

function ActionsMenu() {
  return (
    <div className="flex gap-3">
      <Modal>
        <Modal.Open opens="1">
          <button className="px-2 py-1 rounded-md border-2">
            Add to Fridge
          </button>
        </Modal.Open>

        <Modal.Window name="1">
          <NewItemForm />
        </Modal.Window>
      </Modal>
      <Modal>
        <Modal.Open opens="2">
          <button className="px-2 py-1 rounded-md border-2">
            Give me inspiration
          </button>
        </Modal.Open>

        <Modal.Window name="2">
          <NewItemForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default ActionsMenu;
