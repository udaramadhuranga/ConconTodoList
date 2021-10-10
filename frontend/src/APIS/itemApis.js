//js file includes with all the API calls 
//These API calls integrate front end applicsstion with backend
//js file use to prevent repeting axios calls in different frontend component


import axios from 'axios';

const urlGetItems = 'http://localhost:8010/item/readAll'; 
const urlAddItem = 'http://localhost:8010/item/add'; 
const urlUpdateItem = 'http://localhost:8010/item/update'; 
const urlDeleteItem = 'http://localhost:8010/item/delete';
const urlDeleteAllItem = 'http://localhost:8010/item/deleteAll';
const urlreadDone = 'http://localhost:8010/item/readDone';
const urlsetState = 'http://localhost:8010/item/updateState'; 

//create functions for API calls  and export them for purpose  on reuse an eassy maintain 
export const featchItems = () => axios.get(urlGetItems);

export const addItems = (newItem)=>axios.post(urlAddItem,newItem);

export const updateItem = (id,updateItem)=>axios.patch(`${urlUpdateItem}/${id}`,updateItem);

export const deleteItems =(id)=>axios.delete(`${urlDeleteItem}/${id}`);

export const deleteAll =() => axios.delete(urlDeleteAllItem);

export const getDone = () => axios.get(urlreadDone);

export const updateItemState = (id,updateItem)=>axios.put(`${urlsetState}/${id}`,updateItem);
