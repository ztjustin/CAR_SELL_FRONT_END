
const defaultState = [];


const reducer = (state = defaultState, { type, equipments }) => {

    switch (type) {

        case 'getAllEquipments':
            return equipments    
        default:
            return state;
    }
}

export default reducer;