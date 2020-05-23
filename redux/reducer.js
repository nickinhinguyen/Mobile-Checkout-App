
const initialState = {
    cart: []
}

export default function(state=initialState, action) {
    switch(action.type){
        case 'ADD_TO_CART':
            // check for dublicate item
            const item = action.payload
            const existsInArray = state.cart.some(l => l.id === item.id)
            if(existsInArray) {
                return state;
              }
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