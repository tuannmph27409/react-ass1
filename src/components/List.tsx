import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { addProduct, deleteProduct, fetchProducts, updateProduct } from "../action/product";

const List = () => {
    const dispatch: Dispatch<any> = useDispatch();
    const { products } = useSelector((state: any) => state.products);
    useEffect(() => {
        dispatch(fetchProducts());
    }, []);

    return (
        <div className="border border-black">
            {products?.map((item: any) => {
                return (
                    <div>
                        {item.name}
                        -
                        {item.price}
                    </div>
                );
            })}
            <button
                className="border bg-blue-500 p-2"
                onClick={() => dispatch(addProduct({ name: "test", price: 400 }))}
            >
                Add Product
            </button>
            <button
                className="border bg-red-500 p-2"
                onClick={() => dispatch(updateProduct({ name: "test updated", price: 401, id: 4 }))}
            >
                Update Product
            </button>
            <button className="border bg-green-500 p-2" onClick={() => dispatch(deleteProduct(4))}>
                Delete Product
            </button>
        </div>
    );
};

export default List;