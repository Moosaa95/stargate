import { AiOutlineLoading3Quarters } from 'react-icons/ai';

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return <LoadingSkeleton />;
}

const LoadingSkeleton = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <AiOutlineLoading3Quarters className="text-blue-500 animate-spin text-4xl" />
    </div>
  );
};