
import React,{Component} from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import PopupRoute from '../../components/PopupRoute';

import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';

import Select from '@material-ui/core/Select';

const Container = styled.div` 


size:100vh;
display:block;

.wrapper {
  max-width:100%;
  justify-content: center; /* y-axis */
  align-items: center;
  display:flex;
  border-radius:15px;
  margin:30px;
}



.form_Order {
width:95%;
margin:auto;

}


`
class OrderPage extends Component {
  render() {
    return(

<PopupRoute title="Order Page">


<Container>

<div className="wrapper">
<div className="form_Order">
<TextField
        id="standard-full-width"
        label="Nama Lengkap"

        style={{ margin: 8 }}

     
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true
        }}
      />

      <TextField
        id="standard-full-width"
        label="Alamat"
        style={{ margin: 8 }}
      
     
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
      />
     <TextField
        id="standard-full-width"
        label="Alamat"
        style={{ margin: 8 }}
        className="alamat"
    
     
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
      />
       <TextField
        id="standard-full-width"
        label="Jasa Pengiriman"
        style={{ margin: 8 }}
       
       
     
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
      />
       <TextField
        id="standard-full-width"
        label="Paket"
        style={{ margin: 8 }}
      
     
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
      />
    <Button fullWidth variant="contained" color="secondary" className="mySubmit" style={{marginTop:15,margin:8}} >
     Order
    </Button>
</div>

</div>


</Container>
</PopupRoute>
    );
  }
}
export default OrderPage;