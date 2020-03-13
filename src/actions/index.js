/* ACTION TYPES */
export const CLICK_UPDATE_JOKE = 'CLICK_UPDATE_JOKE';
// export const SET_ACTIVE_CATEGORY = 'SET_ACTIVE_CATEGORY';

/* ACTIONS */
export const clickButton = value => ({
    type: CLICK_UPDATE_JOKE,
    newJoke: value
});

// export const setActiveCategory = category => {
//     return {
//         type: SET_ACTIVE_CATEGORY,
//         category
//     };
// }