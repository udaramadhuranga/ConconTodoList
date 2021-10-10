import {makeStyles} from '@material-ui/core/styles';

export default  makeStyles(()=>(
    {

        appBar: {
            borderRadius: 8,
            margin: '30px 0',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            background: "rgb(240,239,240)",
           background: "linear-gradient(90deg, rgba(240,239,240,1) 47%, rgba(190,192,191,1) 100%)",
            
           

            padding:"1%",
          },
          heading: {
            color: 'rgba(0,183,255, 1)',
              fontSize:"40px"
          },
          image: {
            marginLeft: '15px',
          },


    }));