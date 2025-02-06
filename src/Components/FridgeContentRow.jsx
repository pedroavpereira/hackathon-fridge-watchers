import { formatDate } from "../Utils/helpers";
import { differenceInDays } from "date-fns";

function FridgeContentRow({ item }) {
  const targetDate = new Date(item.expiry_date);
  const today = new Date();

  const difference = differenceInDays(targetDate, today);

  const almostExpired = difference <= 3;

  console.log(item);
  return (
    <div
      className={`flex items-center gap-3 px-6 py-2 ${
        almostExpired && "bg-red-400/15"
      }`}
    >
      <img src={item?.image} className="w-20 h-20 rounded-lg" />
      <div className="flex-1 flex justify-between">
        <p>{item.product_name}</p>
        <p>{formatDate(item.expiry_date)}</p>
      </div>
    </div>
  );
}

export default FridgeContentRow;
