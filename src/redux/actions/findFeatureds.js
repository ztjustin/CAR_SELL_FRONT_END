import axios from 'axios';

export const type = 'findFeatureds';

const findFeatureds = text => {
    return (dispatch, getState) => {

            // const { products } = getState(); { params: {  filter: text, limit: 50, fields: 'model' } }

            return axios.get("http://localhost:3000/product")
            .then(response => {
                dispatch({
                    type,
                    featureds: response.data
                })
            })
    };
}

export default findFeatureds;