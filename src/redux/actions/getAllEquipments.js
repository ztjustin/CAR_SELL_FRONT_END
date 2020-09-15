import axios from 'axios';

export const type = 'getAllEquipments';

const getAllEquipments = () => {
    return async dispatch => {
        const equipments = await axios.get("http://localhost:3000/equipment/all");
        return dispatch({ type , equipments: equipments.data });
    }
}

export default getAllEquipments;