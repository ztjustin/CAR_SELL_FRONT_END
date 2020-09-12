
const defaultState = [];


const reducer = (state = defaultState, { type, categories }) => {

    switch (type) {

        case 'getAllCategories':
            return categories    
        default:
            return state;
    }
}

export default reducer;

