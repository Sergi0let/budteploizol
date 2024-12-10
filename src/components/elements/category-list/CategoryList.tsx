import Image from "next/image";
import Link from "next/link";
import { Subtitle } from "../subtitle";

const CategoryList = () => {
  return (
    <div className="screen-max-width my-10 md:my-14">
      <Subtitle subTitle={"Категорії товарів"} className="text-black" />

      <ul className="grid grid-cols-3 gap-4">
        <li className="group rounded-lg bg-blue-50 p-4 transition-colors duration-500 hover:bg-stroke">
          <Link href="/category/books" className="flex h-full flex-col">
            <div className="flex flex-grow items-center justify-center">
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
        <li className="group rounded-lg bg-blue-50 p-4 transition-colors duration-500 hover:bg-stroke">
          <Link href="/category/books" className="flex h-full flex-col">
            <div className="flex flex-grow items-center justify-center">
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
        <li className="group rounded-lg bg-blue-50 p-4 transition-colors duration-500 hover:bg-stroke">
          <Link href="/category/books" className="flex h-full flex-col">
            <div className="flex flex-grow items-center justify-center">
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
