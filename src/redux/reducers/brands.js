
const defaultState = [];


const reducer = (state = defaultState, { type, brands }) => {

    switch (type) {

        case 'getAllBrands':
            return brands;    
        default:
            return state;
    }
}

export default reducer;