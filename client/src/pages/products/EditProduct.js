import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { EditProductForm } from "../../components/product-form/EditProductForm";
import AdminLayout from "../../layout/AdminLayout";
import { fetchSingleProductAction } from "./productAction";

const EditProduct = () => {
  const dispatch = useDispatch();
  const { _id } = useParams();

  useEffect(() => {
    _id && dispatch(fetchSingleProductAction(_id));
  }, [_id, dispatch]);

  return (
    <AdminLayout>
      <h3 className="mt-3">Edit product</h3>
      <hr />
      <EditProductForm />
    </AdminLayout>
  );
};

export default EditProduct;
