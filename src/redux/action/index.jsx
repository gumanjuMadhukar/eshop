//to add product into cart

export const addCart = (product) =>{
    return{
        type: "ADDITEM",
        payload: product
    }
}
//to delete product into cart
export const delCart = (product) =>{
    return{
        type: "DELITEM",
        payload: product
    }
}