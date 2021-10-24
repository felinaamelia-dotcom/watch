import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-200">
      <div className="container mx-auto py-5 flex justify-between">
        <div>
          <Link className="text-2xl font-bold" to="/watch">Watch.</Link>
        </div>

        <ul className="flex gap-5">
          <li className="hover:text-primary transition-colors">
            <Link to="/watch">Home</Link>
          </li>
          <li className="hover:text-primary transition-colors">
            <Link to="/watch/products">Product</Link>
          </li>
          <li className="hover:text-primary transition-colors">
            <Link to="/watch/about">About</Link>
          </li>
          <li className="hover:text-primary transition-colors">
            <Link to="/watch/privacy-policy">Privacy Policy</Link>
          </li>
          <li className="hover:text-primary transition-colors">
            <Link to="/watch/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
