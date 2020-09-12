import axios from 'axios';

export const type = 'getAllProducts';

const getAllProducts = () => {
    return dispatch => {
        return axios.get("http://localhost:3000/product/all")
        .then(response => {
            dispatch({
                type,
                products: response.data
            })
        })
    }
}

export default getAllProducts;