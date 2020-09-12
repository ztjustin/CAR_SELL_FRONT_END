import axios from 'axios';

export const type = 'getAllBrands';

const getAllBrands = () => {

    return dispatch => {
        return axios.get('http://localhost:3000/brand/all')
        .then(response => {
            dispatch({ 
                type,
                brands: response.data
             })
        })
    }

}

export default getAllBrands;
