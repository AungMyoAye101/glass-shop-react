import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonCard = () => (
  <div className="min-w-20 group rounded-md shadow-md overflow-hidden p-3 bg-gray-50 relative">
    <Skeleton height={200} width="100%" />
    <Skeleton height={20} width="100%" />
    <div className="grid grid-cols-2 gap-6">
      <Skeleton height={20} width="100" />
      <Skeleton height={20} width="100" />
    </div>
  </div>
);
export default SkeletonCard;
