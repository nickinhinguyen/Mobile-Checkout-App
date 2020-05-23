
const initialState = {
    cart: [],
    itemCount: 0
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
                cart: [item, ...state.cart],
                itemCount: state.itemCount +1
            }
        
        case 'REMOVE_FROM_CART':
            const id = action.payload
            return {
                ...state,
                cart: state.cart.filter((card) => card.id !== id),
                itemCount: state.itemCount - 1
            }
        default:
            
            return state
    }
}