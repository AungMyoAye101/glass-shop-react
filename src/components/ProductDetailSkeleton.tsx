import Skeleton from "react-loading-skeleton";

const ProductDetailSkeleton = () => {
  return (
    <section className="flex flex-col sm:flex-row gap-8 justify-start  items-start  mt-4 py-10  px-4 md:px-12  bg-gray-100 rounded-md shadow-md">
      <Skeleton width={300} height={300} />
      <div className="flex flex-col gap-4">
        <Skeleton width={400} height={20} />
        <Skeleton width={100} height={20} />

        <div className="flex gap-4 ">
          <Skeleton width={100} height={20} />
          <Skeleton width={100} height={20} />
        </div>
        <Skeleton width={100} height={20} />
        <Skeleton width={400} count={5} height={20} />
        <Skeleton width={200} height={20} />
      </div>
    </section>
  );
};

export default ProductDetailSkeleton;
