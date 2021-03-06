
export const initialState = {
    basket: [],
    user: null
  };
  
  // Selector
  export const getBasketTotal = (basket) => 
    basket?.reduce((amount, item) => item.price + amount, 0);
  
  const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
            case"ADD TO CART":   // add to basket
            return{
                ...state,
                basket:[...state.basket,action.item],
            };
            case 'EMPTY BASKET':
              return {
                ...state,
                basket: []
              }

            case 'REMOVE FROM BASKET': //remove from basket checkoutProduct 
              const index = state.basket.findIndex((basketItem)=>basketItem.id===action.id);
              let newBasket = [...state.basket];
              if(index>=0){
                newBasket.splice(index ,1 );
              } else{
                console.warn(
                  `can remove product (id: ${action.id})as its not in basket!`
                )
              }
              return {
                ...state,
                basket:newBasket
              }
              case 'SET USER':
                return {
                  ...state,
                  user:action.user
                }
            
      default:
        return state;
    }
  };
  
  export default reducer;