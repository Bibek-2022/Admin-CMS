import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { CustomInput } from "../../custom-input/CustomInput";
import { getCategoriesAction } from "../../pages/Categories/catAction";
import {
  postProductsAction,
  updateProductAction,
} from "../../pages/products/productAction";
import { toast } from "react-toastify";
import { deleteProduct } from "../helpers/axiosHelper";
const initialState = {
  status: "inactive",
  catID: null,
  name: "",
  sku: "",
  description: "",
  price: 0,
  qty: 0,
  salesPrice: 0,
  salesStartDate: null,
  salesEndDate: null,
};

export const EditProductForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { selectedProduct } = useSelector((state) => state.products);

  const [form, setForm] = useState(initialState);
  const [newImages, setNewImages] = useState([]);
  // const [imgToDelete, setImgToDelete] = useState([])

  const { categories } = useSelector((state) => state.categories);

  useEffect(() => {
    //fetch cat list if not in the state
    !categories.length && dispatch(getCategoriesAction());
    setForm(selectedProduct);
  }, [selectedProduct]);

  const handleOnChange = (e) => {
    let { checked, name, value, files } = e.target;

    if (name === "newImages") {
      return setNewImages(files);
    }

    if (name === "status") {
      value = checked ? "active" : "inactive";
    }

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const { createdAt, updatedAt, __v, slug, ratings, ...rest } = form;

    const formData = new FormData();

    for (const key in rest) {
      formData.append(key, form[key]);
    }

    newImages.length &&
      [...newImages].map((img) => formData.append("newImages", img));
    dispatch(updateProductAction(formData, form._id));
  };

  const handleOnDelete = async () => {
    if (window.confirm("Are yo sure you want to delete this product?")) {
      const { _id } = selectedProduct;
      const responsePromise = deleteProduct(_id);

      toast.promise(responsePromise, { pending: "Deleting please wait..." });
      const { status, message } = await responsePromise;
      toast[status](message);

      status === "success" && navigate("/products");
    }
  };

  const handleOnImageToDelete = (e) => {
    const { checked, value } = e.target;
    const { images } = form;

    if (checked) {
      //remove path

      const filteredArg = images.filter((item) => item !== value);

      setForm({
        ...form,
        images: filteredArg,
      });
    } else {
      setForm({
        ...form,
        images: [...form.images, value],
      });
    }
  };

  const fields = [
    {
      label: "Name",
      name: "name",
      value: form.name,
      type: "text",
      placeholder: "Enter product name",
      required: true,
    },
    {
      label: "SKU",
      name: "sku",
      value: form.sku,
      type: "text",
      placeholder: "Unique product key",
      required: true,
      disabled: true,
    },
    {
      label: "QTY",
      name: "qty",
      value: form.qty,
      type: "number",
      placeholder: "50",
      required: true,
    },
    {
      label: "Price",
      name: "price",
      value: form.price,
      type: "number",
      placeholder: "100",
      required: true,
    },
    {
      label: "Sales Price",
      name: "salesPrice",
      value: form.salesPrice,
      type: "number",
      placeholder: "80",
    },
    {
      label: "Sales start date",
      name: "salesStartDate",
      value: form.salesStartDate,
      type: "date",
    },
    {
      label: "Sales end date",
      name: "salesEndDate",
      value: form.salesEndDate,
      type: "date",
    },
    {
      label: "Description",
      name: "description",
      value: form.description,
      as: "textarea",
      placeholder: "Write product details",
      required: true,
      rows: 5,
    },
    {
      label: "Upoad Images",
      name: "newImages",
      type: "file",

      rows: 5,
      multiple: true,
      accept: "image/*",
    },
  ];

  const imgList = selectedProduct.images || [];

  console.log(form);
  return (
    <div className="py-3">
      <div className="py-3">
        <Link to="/products">
          {" "}
          <Button variant="secondary">&lt; Back </Button>{" "}
        </Link>
      </div>

      <Form onSubmit={handleOnSubmit}>
        <Form.Group className="mb-3">
          <Form.Check
            type="switch"
            label="status"
            name="status"
            checked={form.status === "active"}
            onChange={handleOnChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Select
            defaultValue=""
            name="catId"
            required
            onChange={handleOnChange}
          >
            <option value=""> -- select Category -- </option>
            {categories.map(
              (item) =>
                item.parentCatId && (
                  <option
                    key={item._id}
                    value={item._id}
                    selected={item._id === selectedProduct.catId}
                  >
                    {item.name}
                  </option>
                )
            )}
          </Form.Select>
        </Form.Group>

        {fields.map((field, i) => (
          <CustomInput {...field} onChange={handleOnChange} />
        ))}

        {/* images section */}

        <div className="d-flex my-5">
          {imgList.map((imgLink, i) => (
            <div key={i} className=" p-1">
              <Form.Check
                type="radio"
                label="Use as thumbnail"
                name="thumbnail"
                value={imgLink}
                onChange={handleOnChange}
                checked={form.thumbnail === imgLink}
              />
              <img
                src={process.env.REACT_APP_SERVER_ROOT_URL + imgLink}
                crossOrigin="anonymous"
                width="150px"
                alt=""
                className="img-thumbnail rounded"
              />

              <Form.Check
                label="Delete"
                value={imgLink}
                onChange={handleOnImageToDelete}
              />
            </div>
          ))}
        </div>

        <Button variant="primary" type="submit">
          Update Product
        </Button>
      </Form>
      <div className="text-end mt-5">
        <Button variant="danger" onClick={handleOnDelete}>
          Delete This Product
        </Button>
      </div>
    </div>
  );
};
