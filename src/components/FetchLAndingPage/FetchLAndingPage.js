import React, { useEffect, useState } from "react";
import { Button, Form, FormControl } from "react-bootstrap";
import Landing_page from "../Landing_page/Landing_page";

const FetchLAndingPage = () => {
    const [Datas,setData] = useState([]);

    useEffect(()=>{

        fetch('https://aqueous-basin-14532.herokuapp.com/events')
        .then(res=>res.json())
        .then(data=>setData(data))

    },[])

    return (
        <div>

        <div style={{marginBottom:"50px"}}>

            <h2 className="justify-content-center" style={{textStyle:"bold"}}>
          {" "}
          I GROW BY HELPING PEOPLE IN NEED.
        </h2><br/>
        <Form inline className="justify-content-center" style={{marginBottom: "2 0px"}}>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>

            </div>

            <div>
            {
             Datas.map((data) => (<Landing_page data={data} key={data.id}></Landing_page>))
            }
            </div>
            
        </div>
    );
};

export default FetchLAndingPage;
