import React from 'react'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'

export default function Products() {
    return (
        <div className="container mx-auto my-10">
            <h2 className="font-medium text-2xl mb-5">Semua Produk</h2>

            <section>
                <div className="grid grid-cols-4 gap-5">
                    { products.map(product => (
                        <ProductCard product={product} />
                    )) }
                </div>
            </section>
        </div>
    )
}
