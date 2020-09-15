import axios from "axios";

export const type = "ADD_PRODUCT";

const ProductAdd = (product) => {
  return (dispatch) => {
    const form = new FormData();

    form.append("like", 0);
    form.append("taxes", product.taxes);
    form.append("receivedCar", product.receivedCar);
    form.append("featured", false);

    if (product.equipment) {
      product.equipment.map(async (item, index) => {
        form.append("equipment", item._id);
      });
    }

    form.append("model", product.model);
    form.append("brand", product.brand);
    form.append("engine", product.engine);
    form.append("year", product.year);
    form.append("category", product.category);
    // form.append("images", product.files);
    form.append("state", product.state);
    form.append("price", product.price);

    if (product.files) {
      product.files.map(async (file, index) => {
        form.append("images", file);
      });
    }

    form.append("tradable", true);
    form.append("exteriorColor", product.exteriorColor);
    form.append("interiorColor", product.interiorColor);
    form.append("fuel", product.fuel);
    form.append("transmision", product.transmission);
    form.append("km", product.km);
    form.append("licensePlate", product.licensePlate);
    form.append("doors", product.doors);
    form.append("province", product.province);
    form.append("comment", product.comment);
    form.append("user", "5ddb02701c9d440000f48266");

    return axios
      .post("http://localhost:3000/product", form, { withCredentials: true })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export default ProductAdd;
