import { NavLink } from "react-router-dom";
import { Product } from "../../../widgets/Product/Product";
import { useSelector } from "react-redux";

export function Catalog() {
    const products = useSelector(state => state.products);

    return (
        <section className="my-10">
            <div className="flex justify-between items-center gap-3">
                <h1 className="main-title">Мини-каталог</h1>
                <NavLink className="btn-fill" to="/catalog">Больше</NavLink>
            </div>
            <div className="items">
                {products.slice(0, 4).map(product => <Product key={product.id} {...product} />)}
            </div>
        </section>
    );
}