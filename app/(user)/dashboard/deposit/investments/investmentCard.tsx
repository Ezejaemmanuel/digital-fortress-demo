import { FaGem, FaStar, FaCheck, FaSpinner } from "react-icons/fa";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { formatCurrency } from "@/lib/formatCurrency";
import { formatDistanceToNow } from "date-fns";

interface InvestmentCardProps {
  id: string;
  name: string;
  createdAt: Date;
  status: string;
  price: number;
  dailyProfit: number;
  rating: number;
}

const InvestmentCard: React.FC<InvestmentCardProps> = ({
  id,
  name,
  createdAt,
  status,
  price,
  dailyProfit,
  rating,
}) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<FaStar key={i} className="text-yellow-500" />);
    }
    return stars;
  };
  const renderStatus = () => {
    if (status === "Pending") {
      return (
        <div className="flex items-center">
          <span>Pending</span>
          <FaSpinner className="ml-2 animate-spin" />
        </div>
      );
    }
    if (status === "Confirmed") {
      return (
        <div className="flex items-center">
          <span>Confirmed</span>
          <FaCheck className="ml-2 text-green-500" />
        </div>
      );
    }
    return <span>{status}</span>;
  };

  const borderColor =
    status === "Confirmed"
      ? "border-green-500"
      : status === "Pending"
      ? "border-red-500"
      : "border-orange-500";

  return (
    <Link href={`/dashboard/deposit/on?id=${id}`}>
      <Card
        className={`w-full md:max-w-2xl md:min-w-72 lg:max-w-3xl p-3 mx-auto border-2 ${borderColor} rounded-lg shadow-lg`}
      >
        <CardContent className="flex flex-col items-center">
          <h3 className="text-xl font-bold mb-4">{name}</h3>
          <FaGem className="w-16 h-16 mb-4 text-orange-500" />
          <div className="flex mb-4">{renderStars()}</div>
          <p className="text-xs mb-4">
            {formatDistanceToNow(new Date(createdAt), { addSuffix: true })}
          </p>
          <div className="w-full flex text-gray-200 justify-between mb-4">
            <p className="text-xs font-thin">Status:</p>
            <div className="text-xs font-thin">{renderStatus()}</div>
          </div>
          <div className="w-full flex justify-between mb-4">
            <p className="text-sm font-medium">Price:</p>
            <p className="text-sm">{formatCurrency(price)}</p>
          </div>
          <div className="w-full flex justify-between mb-4">
            <p className="text-xs font-medium">Expected Profit (30 days):</p>
            <p className="text-xs">{formatCurrency(dailyProfit * 30)}</p>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default InvestmentCard;
