import React from "react";
import { AddCatForm } from "../../components/add-cat-form/AddCatForm";
import { CategoryTable } from "../../components/category-table/CategoryTable";
import AdminLayout from "../../layout/AdminLayout";

const Categories = () => {
  return (
    <AdminLayout>
      <h2 className="p-3">Categories Management</h2>
      {/* form Here */}
      <AddCatForm />
      <hr />
      {/* category list table */}
      <CategoryTable />
    </AdminLayout>
  );
};

export default Categories;
