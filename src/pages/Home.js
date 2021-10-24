import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { brands } from "../data/brands";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";

export default function Home() {

    const getHomeProduct = (products) => {
        let prods = [];

        for (let i = 0; i < 8; i++) {
            prods.push(products[i])
        }

        return prods;
    }

  const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="container mx-auto">
      <section>
        <Slider {...settings}>
          <div>
            <img src={process.env.PUBLIC_URL + '/img/banner-1.jpg'} alt="Banner 1" width={`100%`} />
          </div>
          <div>
            <img src={process.env.PUBLIC_URL + '/img/banner-2.jpg'} alt="Banner 2" width={`100%`} />
          </div>
          <div>
            <img src={process.env.PUBLIC_URL + '/img/banner-3.jpg'} alt="Banner 3" width={`100%`} />
          </div>
        </Slider>
      </section>

      <section className="mt-10">
        <h2 className="font-medium text-2xl mb-5">Pilih Brand Favorit Kamu</h2>
        <div className="grid grid-cols-5 gap-5">
          {brands.map((brand) => (
            <div key={brand.id} className="p-5 border rounded hover:shadow">
              <img src={process.env.PUBLIC_URL + '/img/' + brand.image} alt={brand.name} />
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="font-medium text-2xl mb-5">Produk Terpopuler</h2>
        <div className="grid grid-cols-4 gap-5">
          {products
            .filter((product) => product.popular == true)
            .map((product) => (
              <ProductCard product={product} />
            ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="font-medium text-2xl mb-5">Produk Lainnya</h2>
        <div className="grid grid-cols-4 gap-5">
          {getHomeProduct(products).map((product) => (
              <ProductCard product={product} />
            ))}
        </div>
      </section>

      <section className="my-10">
          <div className="flex justify-center">
          <Link to="/watch/products" className="bg-gray-200 text-primary py-3 w-6/12 text-center hover:opacity-75 rounded">
          Lihat Semua Produk
          </Link>
          </div>
      </section>
    </div>
  );
}
