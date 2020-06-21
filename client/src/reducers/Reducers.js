

export const DivsReducer = (state, action) => {
    if (action.type === "ADD_DIV") {
        let newDiv = action.payload.new_div;
        let newState = [...state, newDiv];
        return newState;
    } else if (action.type === "GET_DIVS") {
        let divs = action.payload.all_div;
        let newState = [...divs];
        return newState;
    } else {
        return state;
    }
}

export const SubDivsReducer = (state, action) => {
    if (action.type === "GET_SUB_DIVS") {
        let sub_divs = action.payload.all_sub_div;
        let newState = [...sub_divs];
        return newState;
    } else if (action.type === "ADD_SUB_DIV") {
        let newSubDiv = action.payload.new_sub_div;
        let newState = [...state, newSubDiv];
        return newState;
    } else {
        return state;
    }
}

