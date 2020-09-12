import axios from "axios";

export const type = "ADD_PRODUCT";

const ProductAdd = (product) => {
  return (dispatch) => {

    const form = new FormData();

    form.append("like",67);
    form.append("taxes", true);
    form.append("receivedCar", true);
    form.append("featured", true);
    form.append("equipment", "5f4c6218b7ab347d7152f07e");
    form.append("equipment", "5f4c676b048e0cc2c21c0fbc");
    form.append("model", "elantrasport");
    form.append("brand", "5f308f3002780c813f846ffd");
    form.append("engine", 1600);
    form.append("year", 2018);
    form.append("category", "5f308fa1e765af486d4178a2");
    form.append("images", product.files);
    form.append("state", "Excelente");
    form.append("price", 2015);

    if(product.files){
      product.files.map(async(file,index) => {
        form.append("images", file)
      })
    }
    
    form.append("tradable", true);
    form.append("exteriorColor", "Excelente");
    form.append("interiorColor", "Excelente");
    form.append("fuel", "Gasolina");
    form.append("transmision", "Manual");
    form.append("km", 2015);
    form.append("licensePlate", "bmt-629d");
    form.append("doors", 2);
    form.append("province", "Heredia");
    form.append("comment", "esting fr");
    form.append("user", "5ddb02701c9d440000f48266");

    return axios
      .post(
        "http://localhost:3000/product",
        form,
        { withCredentials: true },
      )
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export default ProductAdd;
