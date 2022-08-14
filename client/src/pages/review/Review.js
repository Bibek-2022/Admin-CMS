import React from "react";
import { ReviewTable } from "../../components/review-table/ReviewTable";
import AdminLayout from "../../layout/AdminLayout";

export const Review = () => {
  return (
    <div>
      <AdminLayout>
        <h1 className="mt-5">Review</h1>

        <div className="product-list">
          <ReviewTable />
        </div>
      </AdminLayout>
    </div>
  );
};
