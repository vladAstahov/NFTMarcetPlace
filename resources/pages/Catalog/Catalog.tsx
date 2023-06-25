import {useGate, useStore} from "effector-react";
import React from "react";
import {$products, GateProducts} from "../../entities/products/model/state";

export default function Catalog() {
    useGate(GateProducts)

    const products = useStore($products)

    return <div className="index">
        {products.map(elem => {
            return <div key={elem.id}>
                <h1>{elem.title}</h1>
                <p>{elem.category}</p>
            </div>
        })}
    </div>
}