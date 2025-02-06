import FridgeContentRow from "./FridgeContentRow";

function FridgeContentList({ content }) {
  return (
    <div className="flex flex-col w-full">
      {content?.map((item, i) => (
        <FridgeContentRow key={i} item={item} />
      ))}
    </div>
  );
}

export default FridgeContentList;
