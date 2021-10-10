//This component handle one single Item displaying card

import * as React from 'react';

import {Card,CardActions,CardContent,CardMedia,Button,Typography, Divider,Box } from '@material-ui/core';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import DeleteIcon from '@material-ui/icons/Delete'
import {useDispatch}  from 'react-redux';
import {deleteToDoItem ,setItemState} from '../../../../Actions/itemActions'



import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide'

import { UilEdit } from '@iconscout/react-unicons';

const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );
  




const ItemCard = ({element,setCurrentId})=>{
    
    const EventDispatch = useDispatch();

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };


    


    return(
      <div style={{margin:'0 2%'}} >
      
      <Card sx={{ minWidth: 275 }} style={{background: 'rgb(238,174,202)',
background:'radial-gradient(circle, rgba(238,174,202,1) 0% , rgba(148,187,233,1) 100%)'}} >
      <CardContent>

        <Button style={{float :'right' , width: '40px', height: '40px', background :'blue',color:'white' } }
         onClick={()=>EventDispatch(setItemState(element._id,{state:'Done'}),window.location.reload(false))}
         hidden ={element.state == 'Done' ? true :false}
         >
            Done
            </Button>

            <Typography sx={{ mb: 1.5 }} color="text.secondary">
        Activity  :{element.Item}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
         Priority :{element.Priority}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        Estimated   hours : {element.exHours}
        </Typography>
        <div>
            
            <Button style={{color:'brown', marginTop : "20px",background:'#dde2e0' }} size='large' onClick={()=>setCurrentId(element._id)} hidden ={element.state == 'Done' ? true :false}>
                <UilEdit fontSize = "default" />


            </Button>

        </div>
      </CardContent>

    


      
      <CardActions style = {{
             padding: '0 16px 8px 16px',
             display: 'flex',
             justifyContent: 'space-between',
      }}>

      <div size ="small" onClick={handleClickOpen} style={{
                    color:'white',
                    background:'red',
                  marginLeft :"550px",
                  marginTop:"-50px",
                    height: '35px',
                    width: "35px",
                    cursor: "pointer",
                    borderRadius:"4px",
                    boxShadow:"0px 0px 6px rgba(0,0,0,0.5)",
                    backgroundColor: '#FA334E'
                }} > 
                <DeleteIcon fontSize = "default" style={{marginLeft:"6px",marginTop:'2px'}} />
                    
                {handleClickOpen}

                    
                </div>


                <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Do you want to delete this item?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          <Typography variant="h6"> Activity  :  {element.Item}</Typography>
                <Typography variant="h6">Priority :  {element.Priority}</Typography>
                <Typography variant="h6"> Estimated hours : {element.exHours}</Typography>   
         
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} style={{color:'white',background:'red'}} autoFocus>
            No
          </Button>
          <Button onClick={()=>EventDispatch(deleteToDoItem(element._id),window.location.reload(false))} style={{color:'white',background:'blue'}} >
            Yes
          </Button>
        </DialogActions>
      </Dialog>
        
      </CardActions>
    </Card>

        </div>
    )
}

export default ItemCard;