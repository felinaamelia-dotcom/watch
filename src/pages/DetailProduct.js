import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useParams } from "react-router";
import { products } from "../data/products";

export default function DetailProduct() {
  const { id } = useParams();

  const getProduct = products.find((item) => item.id == id);

  return (
    <div className="container mx-auto my-10">
      <section>
        <div className="grid grid-cols-2 gap-10">
          <div className="shadow p-5 rounded">
            <img src={process.env.PUBLIC_URL + '/img/' + getProduct.image} alt="" />
          </div>

          <div className="flex flex-col justify-center">
              <div>
                <h2 className="text-2xl">{getProduct.title}</h2>
                <p className="text-3xl mt-2">Rp {getProduct.price}</p>
              </div>

              <div className="mt-8">
              <h5 className="text-primary font-bold mb-1">Detail</h5>
              <ul>
                <li>Brand: <span className="text-primary">{getProduct.brand}</span></li>
                <li>Warna: {getProduct.color}</li>
                <li>Berat: {getProduct.weight} gram</li>
              </ul>
              </div>

              <div className="mt-8">
                  <h5 className="text-primary font-bold mb-1">Description</h5>
                  <p className="font-light">{getProduct.description}</p>
              </div>

              <div className="mt-8 flex items-center justify-center text-center">
                  <a href="#" className="bg-green-400 hover:bg-green-500 transition-colors rounded py-2 px-5 w-full"><FontAwesomeIcon icon={faWhatsapp} className="mr-3" /> Pesan via WhatsApp</a>
              </div>
          </div>
        </div>
      </section>
    </div>
  );
}
