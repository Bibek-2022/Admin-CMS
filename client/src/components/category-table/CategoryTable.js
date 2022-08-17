import { useEffect, useState } from "react";
import { Button, Col, Form, Row, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCategoryAction,
  getCategoriesAction,
} from "../../pages/Categories/catAction";
import { setCategories } from "../../pages/Categories/catSlice";
import { CustomModal } from "../custom-modal/CustomModal";
import { toggleShowModal } from "../../pages/system-state/SystemSlice";
import EditCatForm from "../add-cat-form/EditCatForm";
export const CategoryTable = () => {
  const dispatch = useDispatch();
  const [catToDelete, setCatToDelete] = useState([]);
  const { categories } = useSelector((state) => state.categories);
  const [selectCat, setSelectCat] = useState({});
  useEffect(() => {
    dispatch(getCategoriesAction());
  }, []);

  const handleOnSelect = (e) => {
    const { checked, value } = e.target;
    // alle categories that are checked
    if (value === "all") {
      // add or remove all categories

      checked
        ? setCatToDelete(categories.map((item) => item._id))
        : setCatToDelete([]);
      return;
    }
    // individual category
    if (checked) {
      // add value to the list
      const hasChildCat = categories.filter(
        (item) => item.parentCatId === value
      );
      if (hasChildCat.length) {
        return alert(
          "This category have a child categories so if you wanna delete then please add child categories or assign to other"
        );
      }

      setCatToDelete([...catToDelete, value]);
    } else {
      // remove value from the list

      setCatToDelete(catToDelete.filter((id) => id !== value));
    }
  };
  const handleOnDelete = () => {
    if (window.confirm("Do you want to delete category")) {
      dispatch(deleteCategoryAction({ ids: catToDelete }));
      setCatToDelete([]);
    }
  };
  const handleOnEdit = (catObj) => {
    dispatch(toggleShowModal(true));
    setSelectCat(catObj);
  };

  const parentCatIds = categories.filter((item) => item.parentCatId === null);
  const childCats = categories.filter((item) => item.parentCatId !== null);
  return (
    <Row className="mt-5">
      <Col>
        <CustomModal title={"Update Category"}>
          {" "}
          <EditCatForm selectCat={selectCat} />
        </CustomModal>
        <p>Product Found</p>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>
                <Form.Check value="all" onChange={handleOnSelect} />
              </th>
              <th>Status</th>
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {parentCatIds.map((item) => (
              <>
                <tr key={item._id} className="bg-warning">
                  <td>
                    <Form.Check
                      value={item._id}
                      onChange={handleOnSelect}
                      checked={catToDelete.includes(item._id)}
                    />
                  </td>
                  <td>{item.status}</td>
                  <td>{item.name}</td>
                  <td>
                    <Button
                      variant="warning"
                      onClick={() => handleOnEdit(item)}
                    >
                      Edit
                    </Button>
                  </td>
                </tr>
                {childCats.map(
                  (cat) =>
                    cat.parentCatId === item._id && (
                      <tr key={cat._id}>
                        <td>
                          <Form.Check
                            value={cat._id}
                            onChange={handleOnSelect}
                            checked={catToDelete.includes(cat._id)}
                          />
                        </td>
                        <td>{cat.status}</td>
                        <td>{cat.name}</td>
                        <td>
                          <Button
                            variant="warning"
                            onClick={() => handleOnEdit(cat)}
                          >
                            Edit
                          </Button>
                        </td>
                      </tr>
                    )
                )}
              </>
            ))}
          </tbody>
        </Table>

        {catToDelete.length > 0 && (
          <Button variant="danger" onClick={handleOnDelete}>
            {" "}
            Delete Selected {catToDelete.length} categories
          </Button>
        )}
      </Col>
    </Row>
  );
};
