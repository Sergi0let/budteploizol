import { ShoppingCart } from "lucide-react";

const Cart = () => {
  return (
    <div className="flex items-center gap-2">
      <button className="group relative flex size-10 items-center justify-center rounded-full bg-blue-50 transition-all duration-300 ease-in-out hover:bg-stroke lg:ml-6">
        <ShoppingCart className="group-hover:text-blue-600" size="24" />
        <span className="absolute right-0 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-sm text-white">
          3
        </span>
      </button>
      <div className="">
        <p className="text-sm font-bold">На суму:</p>
        <div className="font-medium">3456.78₴</div>
      </div>
    </div>
  );
};

export { Cart };
