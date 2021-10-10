import React, { useEffect, useState } from  'react';
import Styles from './styles';
import {TextField,Button,Typography,Paper, FormHelperText} from '@material-ui/core';

import {useDispatch,useSelector} from 'react-redux';
import {postItem,patchItem} from '../../../Actions/itemActions'
import axios from "axios";
 
const ItemForm = ({currentId})=>{
    const classes = Styles();
    const dispatch = useDispatch();


    const [helperText, setHelperText] = useState('');
    const [ItemData,setItemdata] = useState({        //use state to hold the ItemData which is adding from from or which getting from currentId

        Item:"",
        Priority:"",
        exHours:""
    })

 const ToDoItem = useSelector((state)=>currentId ? state.itemReducer.find((p)=>p._id == currentId ):null) /*check whether current Id is there or not. if there find the Item from the 
 globle store according to the action dispatch from the parent component follows case in reducers and   set that  Item in to ToDoItem */


useEffect(()=>{
    if(ToDoItem) setItemdata(ToDoItem); // if there is TodoItem set ito  Itemdata useState  and then on evey time ToDoItem change render and reset the value
},[ToDoItem])




const handleSubmit = (e) =>{    //fuction perform when onsumbit of the form
 
    e.preventDefault();

    if(ItemData.Item == '' && ItemData.Priority == '' && ItemData.exHours == ''){
        setHelperText('Fill all the text Fields')
    }

   else if(ItemData.Item  == ""){
    setHelperText('Enter Todo Item')                                                      //form validations

   }

   else if(ItemData.Priority == ''){
    setHelperText('Priority should select before submitting')

   }

   else if(ItemData.exHours == ""){
    setHelperText('Enter expecting hours to finished before submitting')

   }



    else if(currentId){
        dispatch(patchItem(currentId,ItemData),window.location.reload(false)) //if currentId is available then dispatch update acton else dispatch post action
        clear();
    }
    else {
        dispatch(postItem(ItemData),window.location.reload(false));
        clear();
    }
    
}

const clear=()=>{  //function to clear form data trigger in onclick in clear button
    currentId= null;
    setItemdata({
        Item:"",
        Priority:"",
        exHours:""

    })


}

return(
      
    <Paper className={classes.paper} style={{backgroundColor :'whitesmoke'}}>
        
    <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>

        <div>
    <Typography variant="h6" align ='center'>{currentId ? 'Edit' :'Add'} a Todo Item </Typography>
        <TextField name ='Item' 
        variant="outlined"
        label="Item"
        fullWidth
        value={ItemData.Item}
        onChange={(e) =>setItemdata({...ItemData, Item : e.target.value })}
        />


        <TextField name ='exHours' 
        variant="outlined"
        label="Estimate hours"
        type='number'
        fullWidth
        value={ItemData.exHours}
        onChange={(e) =>{
            setHelperText(' ');
            setItemdata({...ItemData, exHours : e.target.value })
    
    }}
        />

<select 

name ='Priority'

variant="outlined"
label="Priority"
fullWidth
value={ItemData.Priority}
onChange={(e) =>{
    setHelperText(' ');
    setItemdata({...ItemData, Priority : e.target.value })

}}

  style ={{marginLeft:"10px"}}>
 <option selected>Select from Priority</option>
<option value="Low">Low</option>
<option value="Medium">Medium</option>
<option value="High">High</option>
</select>

</div>






<div className={classes.fileInput} style = {{marginTop:"5px"}}>

        
            
         

<div>
<FormHelperText style={{color: "red"}}>{helperText}</FormHelperText>
</div>

            <Button className={classes.buttonSubmit} variant="contained" type="submit" color="primary" size ="large" fullWidth>
              SUBMIT  </Button>

              <Button variant="contained" color="secondary" size ="small"  onClick ={clear} fullWidth>
              Clear  </Button>
        
        </div>
        
    </form>
   
</Paper>


)

   
}

export default ItemForm;