function productReducer(state, action) {
    switch (action.type) {
      case "addProduct":
        return action.payload;
      case "search":
        return action.payload.products.filter(product => 
          product.title.toLowerCase().startsWith(action.payload.searchText)
        );
      case "filter":
        return action.payload.products.filter(product => 
          product.category === action.payload.filterValue
        );
      default:
        return state;
    }
  }
  
  export default productReducer;
  