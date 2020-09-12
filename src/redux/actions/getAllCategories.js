import axios from 'axios';

export const type = 'getAllCategories';


const getAllCategories = () => {

    return dispatch => {
        return axios.get('http://localhost:3000/category/all')
        .then(response => {
            dispatch({ 
                type,
                categories: response.data
             })
        })
    }

}

export default getAllCategories;



