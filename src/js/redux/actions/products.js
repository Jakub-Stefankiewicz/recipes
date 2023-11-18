const ADD_PRODUCT="ADD_PRODUCT";

const addProduct = (product) => {
    return {
        type: ADD_PRODUCT,
        payload: product
    }
}

export {ADD_PRODUCT, addProduct}