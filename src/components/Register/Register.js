import React, { useContext, useState } from 'react';
import image from '../../basic material/logos/Group 1329.png'
import './Register.css'

//////ui//

import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from 'react-bootstrap';
import { UserContext } from '../../App';
import { Link, useHistory } from 'react-router-dom';


////

const Register = () => {
  const [loggedInUser] = useContext(UserContext)

 let history =useHistory()

  const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

  //////////////////
//   const [registerDate, setRegisterDate] = useState(new Date().toLocaleDateString(undefined, options))

//   const handleDateChange = (date) => {
//     setRegisterDate(date.toLocaleDateString(undefined, options));
// };
  //////
  
  const handleAddcollection = () => {
    history.push('/collection')
    // const event = {};
    // fetch('http://localhost:5000//addOrder', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(event)
    // })
    // .then(res => res.json())
    // .then(data =>{
    //   history.push('/collection')
    // })
    // history.push('/collection')
  }

  /////
  const classes = useStyles();

  return (
    <div>
      <img className="registerimg" src={image} alt="" />

      <div className="register-forms">

        <form>
          <TextField required id="standard-required" type="name" label="Full name" placeholder="Enter your full name" defaultValue={loggedInUser.name} ></TextField>
          <TextField required id="standard-required"  type="email" label="Email" placeholder="Enter your email" defaultValue={loggedInUser.email}></TextField>
          <TextField required id="standard-required" label="Description" placeholder="Write your description" /> <br />
          <TextField required id="standard-required" label="Organize books" />
          <TextField required id="standard-required" name="date" type="date" size="md" /><br />

          <Button onClick={handleAddcollection} className="registerBtn" type="submit" variant="primary" size="md" block> Register </Button>
        </form>
      </div>





    </div>


  );
};

export default Register;