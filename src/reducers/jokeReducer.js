const initialState = {
    newJoke: '',
    activeCategory: '',
    loading: false
};

export const jokeReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CLICK_UPDATE_JOKE':
        return {
            ...state,
            newJoke: action.newJoke
        };
        default:
        return state;
    }
};

export const categoryReducer = (state = initialState, action ) => {
    switch (action.type) {
        case 'ACTIVE_CATEGORY' :
        return {
            ...state,
            activeCategory: action.activeCategory
        };
        default:
        return state;
    }
}
