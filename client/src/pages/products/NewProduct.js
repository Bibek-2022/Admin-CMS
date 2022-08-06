import React from "react";
import { ProductForm } from "../../components/product-form/ProductForm";
import AdminLayout from "../../layout/AdminLayout";

export const NewProduct = () => {
  return (
    <AdminLayout>
      <h3 className="mt-3">Add Product</h3>
      <hr />
      <ProductForm />
    </AdminLayout>
  );
};
