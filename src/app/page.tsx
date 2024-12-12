import { CategoryList, ContactList, Hero } from "@/components";
import ProductList from "@/components/elements/product-list/ProductList";

export default function Home() {
  return (
    <>
      <ContactList />
      <Hero />
      <CategoryList />
      <ProductList
        title="Звукоізоляції"
        category="#"
        products={Array.from({ length: 6 }, (_, i) => i)}
      />
      <ProductList
        title="Коврики, калемати"
        category="#"
        products={Array.from({ length: 6 }, (_, i) => i)}
      />
      <ProductList
        title="Спортивні мати"
        category="#"
        products={Array.from({ length: 6 }, (_, i) => i)}
      />
    </>
  );
}
