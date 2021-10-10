//this js file is the Item manage reducer
//reducer is basically a function which accept state  and a action 
//based on the action type  it return  a action or return a state  



export default(itemReducer = [],action)=>{

switch(action.type){

    case 'FEATCH_ALL' :
        return action.payload;
    case 'CREATE' :
        return[...postMessage,action.payload];
    case 'UPDATE' :
        return itemReducer.map((item)=> item._id === action._id ? action.payload:item );
        
    case 'DELETE' :
         return itemReducer.filter((item)=> item._id !== action.payload._id);
    case 'DELETE_ALL' :
          return action.payload;
    case 'FEATCH_DONE_ALL' :
          return action.payload;

     case 'UPDATE_STATE' :
        return itemReducer.map((item)=> item._id === action._id ? action.payload:item );
            

     default :
     return  itemReducer;     
}





}