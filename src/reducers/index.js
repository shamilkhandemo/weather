
// let initialState = [
//     {
//         id: 0,
//         city: "London",
//         temprature: ""
//     }
// ]

let initialState = [];

if(localStorage.getItem('city'))
    initialState = JSON.parse(localStorage.getItem('city'));

export default (state = initialState, action) => {

    if (action.type === "ADD_CITY") {
        return [
            ...state, 
            {
                id: action.id,
                city: action.city,
                temprature: action.temprature,
                shouldDelete: false
            }
        ]
    }

    if(action.type === "SET_WEATHER") {
        return state.map(i =>
            (i.id == action.id) ?
            {...i, temprature: action.value}:
            i);
    }

    if (action.type === "TOGGLE_DELETE") {
        return state.map(i =>
            (i.id == action.id) ?
            {...i, shouldDelete: !i.shouldDelete}:
            i);
    }

    if (action.type === "REMOVE_CITY") {
        return state.filter(function(item) {
            return (item.shouldDelete === false)
        });
    }

    return state;
}