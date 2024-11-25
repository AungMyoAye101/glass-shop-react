import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonCard = () => (
  <div className="grid  grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 ">
    {Array(10)
      .fill(null)
      .map((_, i) => (
        <div
          key={i}
          className="min-w-30 group rounded-md shadow-md overflow-hidden p-3 bg-gray-50 relative"
        >
          <Skeleton height={140} width="100%" />
          <Skeleton height={25} width="100%" />
          <div className="grid grid-cols-2 gap-6 mb-2">
            <Skeleton height={20} width="100" />
            <Skeleton height={20} width="100" />
          </div>
          <Skeleton height={30} width="100" />
        </div>
      ))}
  </div>
);
export default SkeletonCard;
