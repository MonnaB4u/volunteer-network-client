import { Card} from "react-bootstrap";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";


const Landing_page = (props) => {
  const { _id, id,name,img } =props.data
  //////

  const color=['#3F90FC','#FF7044', '#421FCF','#FFBD3E']
  const randomColor = Math.floor(Math.random() * (4 - 0) + 0);

    const [data,setData]=useState()
  const history=useHistory()

  const cardHandler= () => {
    console.log("click")

    // fetch(`http://localhost:5000/register/${_id}`)
    // .then(res=>res.json())
    // .then(data=>setData(data))
  history.push(`/register/${_id}`);
  }


  return (
    <div>
         
      <div style={{float:"left", padding:'20px', marginLeft:'70px'}}>
        <Card style={{ width: "10rem"}} onClick={cardHandler} >
        <Card.Img variant="top" src={img} />
          <Card.Body style={{backgroundColor:`${color[randomColor]}`,borderRadius: "0px 0px 5px 5px", height:"80px"}} >
          <Card.Text><small style={{color:'black', marginBottom:"10px"}}>{name}</small></Card.Text>
          </Card.Body>
        </Card>
      </div>

    </div>
  );
};

export default Landing_page;
