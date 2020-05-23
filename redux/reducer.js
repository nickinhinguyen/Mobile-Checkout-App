
const initialState = {
    cart: []
}

export default function(state=initialState, action) {
    switch(action.type){
        case 'ADD_TO_CART':
            const item = action.payload
            return {
                ...state,
                cart: [item, ...state.cart]
            }
        
        case 'REMOVE_FROM_CART':
            const id = action.payload
            return {
                ...state,
                cart: state.cart.filter((card) => card.id !== id)
            }
        default:
            
            return state
    }
}