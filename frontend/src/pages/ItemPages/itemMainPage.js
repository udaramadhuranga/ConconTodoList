//component is parent component for ItemMange form and Item Cards Manage Components.


import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid, TextField, Button,Row} from '@material-ui/core';

import ItemCrads from '../../MyComponents/ItemComponents/ItemCards/itemCardsManage';
import ItemForm from '../../MyComponents/ItemComponents/ItemForms/ItemManageForm';
import Styles from './styles';
import { useDispatch } from 'react-redux';
import { getItem,deleteToDoAllItems } from '../../Actions/itemActions'



import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide'


const ManageItems = () => {


    const [currentId, setCurrentId] = useState(null); //use for hold updateing Item id and which is getting from ItemCardManage Component
  

    const classes = Styles();
    const dispatch = useDispatch();
    useEffect(() => {

            dispatch(getItem());  //dispatch getItem action method to return the action or the state from store according to the reducer

    }, [currentId, dispatch]); //render whenever cureentId and disptach change 



    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };


    //Pass setcurrentId method as a prpos to ccardManage component and from there set the update Item Id as currentID and the the currentId passe as props to ItemMangeForm to load data  

    return (

        <div >

          
            <Container maxwidth='lg' >


                <AppBar className={classes.appBar} position="static" color='inherit'>
                    <Typography className={classes.heading} variant="h2" align="center"> Manage  My Todo List</Typography>


                </AppBar>

                <Grow in>

                    <Container   >
                     
                        <div> 
                            <Button style= {{backgroundColor : "#dde2e0",color: 'green'}} href = '/doneItems'> Done Items </Button>

                            <Button style= {{backgroundColor : "red",color: 'white',float:'right' }} onClick={handleClickOpen}> Clear List </Button>

                            <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Do you  really  want to clear the list?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          <Typography variant="h6"> By proceeding the process you will losse all the details in ToDo list alone with done items if you want to proceed click yes  </Typography>
                  
         
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} style={{color:'white',background:'red'}} autoFocus>
            No
          </Button>
          <Button onClick={()=>dispatch(deleteToDoAllItems(),window.location.reload(false))} style={{color:'white',background:'blue'}} >
            Yes
          </Button>
        </DialogActions>
      </Dialog>
        
  

                        </div>
                        
                       

                        <Grid container justify="space-between" alignItems="stretch" spacing={3} style={{ marginTop: '13px' }} >

                            <Grid item xs={12} sm={7}>


                                <ItemCrads setCurrentId={setCurrentId} />
                            </Grid >


                            <Grid item xs={12} sm={4} >


                                <ItemForm currentId={currentId} /> 
                            </Grid>

                        </Grid>
                    </Container>

                </Grow>


            </Container>
            
        </div>
    );
}

export default ManageItems;