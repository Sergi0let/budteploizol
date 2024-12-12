import Image from "next/image";
import Link from "next/link";
import { Subtitle } from "../subtitle";

const CategoryList = () => {
  return (
    <div className="screen-max-width my-10 md:my-14">
      <Subtitle subTitle={"Категорії товарів"} className="text-black" />

      <ul className="grid grid-cols-2 gap-4 md:grid-cols-3">
        <li className="group col-span-2 rounded-lg bg-blue-50 p-4 transition-colors duration-500 hover:bg-stroke sm:col-span-1">
          <Link
            href="/category/books"
            className="flex h-full flex-row items-center justify-between sm:flex-col"
          >
            <div className="flex items-center justify-center sm:flex-grow">
              <Image
                className="transition-transform duration-500 group-hover:scale-110"
                src="/category/karemat-na-otrez-removebg-preview.png"
                width={150}
                height={150}
                alt="Karemat na otrez"
              />
            </div>
            <p className="pt-4 text-center transition-colors duration-500 group-hover:text-blue-600">
              Матеріал для звукоізоляції будинків і авто, Verdani ТМ
            </p>
          </Link>
        </li>
        <li className="group col-span-2 rounded-lg bg-blue-50 p-4 transition-colors duration-500 hover:bg-stroke sm:col-span-1">
          <Link
            href="/category/books"
            className="flex h-full flex-row items-center justify-between sm:flex-col"
          >
            <div className="flex items-center justify-center sm:flex-grow">
              <Image
                className="transition-transform duration-500 group-hover:scale-110"
                src="/category/kilimok-karemat-verdani-removebg-preview.png"
                width={150}
                height={150}
                alt="Karemat na otrez"
              />
            </div>
            <p className="pt-4 text-center transition-colors duration-500 group-hover:text-blue-600">
              Коврики (каремати).
            </p>
          </Link>
        </li>
        <li className="group col-span-2 rounded-lg bg-blue-50 p-4 transition-colors duration-500 hover:bg-stroke md:col-span-1">
          <Link
            href="/category/books"
            className="flex h-full flex-row items-center justify-between md:flex-col"
          >
            <div className="flex items-center justify-center md:flex-grow">
              <Image
                className="transition-transform duration-500 group-hover:scale-110"
                src="/category/mat.png"
                width={150}
                height={150}
                alt="Karemat na otrez"
              />
            </div>
            <p className="pt-4 text-center transition-colors duration-500 group-hover:text-blue-600">
              Спортивні мати
            </p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export { CategoryList };
