import { useSelector } from "react-redux";
import { Product } from "../../widgets/Product/Product";
import { Category } from "./Category/Category";

export function CatalogPage({ text }) {
    const products = useSelector(state => state.products);
    const categories = useSelector(state => state.categories);

    const filteredProducts = products.filter(product => product.title.toLowerCase().includes(text));

    return (
        <section className="my-10">
            <h1 className="main-title">Каталог</h1>
            <div className="flex gap-2 mb-4">
                <Category name="Все" />
                {categories.map(category => <Category key={category.id} name={category.name} />)}
            </div>
            <div className="items">
                {
                    filteredProducts.length
                        ? filteredProducts.map(product => <Product key={product.id} {...product} />)
                        : <h2 className="text-2xl font-semibold tracking-tight">Ничего не найдено</h2>
                }
            </div>
        </section>
    );
}