//this component parent for itemCardManage component
//component Manage  Crads getting from itemCardManage component according to the map

import React from 'react';
import ItemCard from './ItemCard/itemCardManage'
import{useSelector} from 'react-redux'
import {Grid,CircularProgress} from '@material-ui/core'

import Styles from './styles'


const ItemCrads = ({setCurrentId})=>{  
    const itemposts = useSelector((state)=>state.itemReducer) //getting data or payload which is returning to getItem action call used in parent class from globle store
    const classes = Styles();
    console.log(itemposts);

    // if itemposts data array legth is 0 then a Circular Progress running on the Screen.Else Item cards will display
    return(
        
        !itemposts.length ? <CircularProgress /> : (

            

            <div className={classes.container} container alignItems ="stretch" spacing={3} style={{ height :"700px",width :'100%',marginTop:"20px",marginLeft:'-10px',overflow:'auto'}}>
                {
                    itemposts.map((element)=>(
                        <div key={element._id} item xs={12} sm={4}  style={{width :'100%',marginTop:"20px",height:"fit-content"}}>

                            <ItemCard  element={element} setCurrentId={setCurrentId} />
                        
                        </div>

                    ))}

            </div>
        )

        
    )
    
}

export default ItemCrads;