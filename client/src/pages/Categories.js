import React, { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import axios from "axios";
import { Link } from "react-router-dom";
import "../styles/Categories.css";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  const getAllCategories = async () => {
    try {
      const { data } = await axios.get("/api/v1/category/get-category");
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCategories();
  }, []);

  return (
    <Layout title={"All Categories - Antique Vault"}>
      <div className="categories-page">
        <div className="categories-hero">
          <h1>Explore Our Collections</h1>
          <p>
            Discover timeless antiques, vintage furniture, decor pieces, and
            collectible treasures.
          </p>
        </div>

        <div className="categories-container">
          {categories?.map((c) => (
            <Link
              key={c._id}
              to={`/category/${c.slug}`}
              className="category-card"
            >
              <div className="category-icon">🏺</div>
              <h3>{c.name}</h3>
              <p>View premium {c.name.toLowerCase()} collection</p>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Categories;