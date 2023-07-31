import  React from 'react';

import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const Appbar = ()=>{
    const navigate = useNavigate();
    return   <div style={{display:'flex',justifyContent:'center',backgroundColor:'#16253b'}} >
      <Button label="Item One" onClick={()=>{navigate('/')}} >Home</Button>
      <Button label="Item Two" onClick={()=>{navigate('/Experience')}}>Experience</Button>
      <Button label="Item Three" onClick={()=>{navigate('/Education')}}>Educaion</Button>
    </div>
 
}
export default Appbar