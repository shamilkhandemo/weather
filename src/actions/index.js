

export const addCity = (id, city) => (
    {
        type: "ADD_CITY",
        id,
        city,
        temprature: ""
    }
)

export const removeCity = () => (
    {
        type: "REMOVE_CITY"
    }
)


export const toggleShouldDelete = (id) => (
    {
        type: "TOGGLE_DELETE",
        id
    }
)



export const setWeather = (id, value) => (
    {
        type: "SET_WEATHER",
        id,
        value: Math.round(value * 10) / 10 + " °C"
    }
)