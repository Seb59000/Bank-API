import { configureStore } from "@reduxjs/toolkit"

let initialState = {
    lastName: '',
    firstName: '',
    token: ''
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'MODIFIER_NOM':
            return { ...state, lastName: action.payload };
        case 'MODIFIER_PRENOM':
            return { ...state, firstName: action.payload };
        case 'MODIFIER_TOKEN':
            return { ...state, token: action.payload };
        default:
            return state;
    }
}

export const store = configureStore(
    {
        preloadedState: initialState,
        reducer
    }
)