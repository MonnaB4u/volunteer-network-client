import { Card} from "react-bootstrap";
import React from 'react';

const Collection = () => {
    return (
        <div  style={{float:"left", padding:'20px', marginLeft:'70px'}}>
        <Card style={{ width: "10rem"}}>
        <Card.Img variant="top" src='' />
          <Card.Body style={{borderRadius: "0px 0px 5px 5px", height:"80px"}} >
          <Card.Text><small style={{color:'black', marginBottom:"10px"}}></small></Card.Text>
          </Card.Body>
        </Card>
        </div>
    );
};

export default Collection;