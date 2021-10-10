//Same like ItemManage Page 
//Used to display only Items  which have state as 'Done'
//see the ItemMnagePage to understand more about the component

import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid, TextField, Button, colors } from '@material-ui/core';

import ItemCrads from '../../MyComponents/ItemComponents/ItemCards/itemCardsManage';

import Styles from './styles';
import { useDispatch } from 'react-redux';
import { getItem,getDoneItems } from '../../Actions/itemActions'



const ManageItems = () => {


    const [currentId, setCurrentId] = useState(null);
  

    const classes = Styles();
    const dispatch = useDispatch();
    useEffect(() => {

            dispatch(getDoneItems());

    }, [currentId, dispatch]);



    return (

        <div >

          
            <Container maxwidth='lg' >


                <AppBar className={classes.appBar} position="static" color='inherit'>
                    <Typography className={classes.heading} variant="h2" align="center"> Manage  My Todo List</Typography>


                </AppBar>

                <Grow in>

                    

                    <Container style={{marginLeft:"300px"}}>

                      
                       <div style={{}}>

                        <Grid container justify="space-between" alignItems="stretch" spacing={3} style={{ marginTop: '13px' }}  >

                            <Grid item xs={12} sm={7}>


                                <ItemCrads setCurrentId={setCurrentId} />
                            </Grid >

                        </Grid>
                        </div>
                    </Container>

                </Grow>


            </Container>
            
        </div>
    );
}

export default ManageItems;