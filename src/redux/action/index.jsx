//to add product into cart

export const addCart = (data) =>{
    return{
        type: "ADDITEM",
        payload: data
    }
}

//to add product into cart

export const decreaseCart = (data) =>{
    return{
        type: "DECREASEITEM",
        payload: data
    }
}

//to delete data into cart
export const delCart = (data) =>{
    return{
        type: "DELITEM",
        payload: data
    }
}