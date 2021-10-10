//this js file contain all the acions creators which  should  return actions  for api calls regarding Items 

import * as api from '../APIS/itemApis';

//action creator which is used to get all Item details which havee state as 'Todo 
export const getItem =() =>async(dispatch)=>{
try{
    const {data} = await api.featchItems();           //use redux thunk and async(dispatch) because of using asynchronized operation to featch all data and that needed to spend some time to do the process
    dispatch({type : 'FEATCH_ALL',payload:data});  //dispatch the action instead returning  because of using redux thunk
}catch(error){
    console.log(error)                              //type is used in switch in reducers and payload is data stored in Item
}
}

//action creator fo post request reagarding Items
export const postItem = (item) => async(dispatch)=>{

    try{
        const {data} = await api.addItems(item);
       dispatch({type :'CREATE',payload:data}); 
    }catch(error){
        console.log(error);
    }

}
//action creator fo patch request reagarding Items
export const patchItem = (id,item)=> async(dispatch) =>{
    try{
        const {data} = await api.updateItem(id,item);
        dispatch({type:'UPDATE',payload:data})
    }catch(error){
        console.log(error);
    }
}

//action creator fo delete request reagarding Items
export const deleteToDoItem = (id) => async(dispatch)=>{
    try{
        const {data} = await api.deleteItems(id);
        dispatch({type:'DELETE',payload:data})
    }catch(error){
        console.log(error);
    }
}

// action creator for delete all Items in the list
export const deleteToDoAllItems = () => async(dispatch)=>{
    try{
        const {data} = await api.deleteAll();
        dispatch({type:'DELETE_ALL',payload:data})
    }catch(error){
        console.log(error);
    }
}

//action creator which is used to get all Item details which havee state as 'Done' 

export const getDoneItems =() =>async(dispatch)=>{
    try{
        const {data} = await api.getDone();
        dispatch({type : 'FEATCH_DONE_ALL',payload:data});
    }catch(error){
        console.log(error)
    }
    }


//action creator for put reaquest regarding update state of the Item    
export const setItemState = (id,item)=> async(dispatch) =>{
    try{
        const {data} = await api.updateItemState(id,item);
        dispatch({type:'UPDATE_STATE',payload:data})
    }catch(error){
        console.log(error);
    }
}