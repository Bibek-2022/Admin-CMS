import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ProductTable } from "../../components/product-table/ProductTable";
import AdminLayout from "../../layout/AdminLayout";

const Product = () => {
  return (
    <AdminLayout>
      <h1 className="mt-5">Products</h1>

      <div className="text-end">
        <Link to="/products/new">
          <Button varient="primary">
            <i className="fa-solid fa-plus"></i> Add New Products
          </Button>
        </Link>
      </div>
      <hr />

      <div className="product-list">
        <ProductTable />
      </div>
    </AdminLayout>
  );
};

export default Product;
