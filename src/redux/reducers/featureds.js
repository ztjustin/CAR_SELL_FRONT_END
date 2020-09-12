const defaultState = [];


function reducer(state = defaultState, { type, featureds }){
    switch(type){

        case 'findFeatureds':
            return featureds.docs;
        default:
            return state;
    }
}

export default reducer;