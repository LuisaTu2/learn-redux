export const increment = (val) => {
    return {
        type: "INCREMENT",
        payload: val
    }
}

export const decrement = () => {
    return {
        type: "DECREMENT"
    }
}