import React from 'react';
import { Link } from 'react-router-dom';
import image from "../../basic material/logos/Group 1329.png";
const Admin = () => {
    return (

            <div>
            <div className='d-flex mt-4 mb-5'>
                <div style={{ minHeight: '100vh', minWidth: '250px' }} className='pr-5 bg-light'>
                    <Link to="/home">
                        <img style={{ height: '50px', marginLeft: '35px' }} src={image} alt="" />
                    </Link>
                    <div className='container mt-4 ml-3'>
                        <Link style={{textDecoration: 'none'}}>
                           <span style={{fontSize: '15px'}}><img style={{height: '17px', marginRight: '3px'}} src="{userIcon}" alt=""/>Volunteer register list</span> 
                        </Link>
                    </div>
                    <div className='container mt-2 ml-3'>
                        <Link style={{textDecoration: 'none'}}>
                           <span style={{fontSize: '15px'}}><img style={{height: '17px', marginRight: '3px'}} src="{plusIcon}" alt=""/>Add event</span> 
                        </Link>
                    </div>
                </div>
                
                <div style={{ width: '100%' }}>
                    <h4 className='bg-light d-block pb-4 font-weight-bold pl-2'>Volunteer register list</h4>
                    {/* conditional div render */}
                    <div style={{ minWidth: '1030px' }} className='bg-light mx-4 mt-4 border rounded mb-3 p-5'>
            <div>
                <form className='row d-flex justify-content-center'>
                    <div className='col-md-6'>
                        <label for='name'>Event Title</label>
                        <input className='form-control mb-2' type="text" placeholder="Event title" name="name" />
                    </div>
                    <div className='col-md-6'>
                        <label for='registerDate'>Event Date</label>
                        <input className='form-control mb-2' type="date" placeholder="Event Date" name="registerDate"  />
                    </div>
                    <div className='col-md-6 mb-3'>
                        <div className="form-group">
                            <label for="exampleFormControlTextarea1">Description</label>
                            <textarea name="Description" placeholder="Enter Description" className="form-control" id="exampleFormControlTextarea1" rows="3" ></textarea>
                        </div>
                    </div>
                    <div className='col-md-6' style={{marginTop: '30px'}}>
                        <div className="custom-file">
                            <input type="file" className="custom-file-input" name="src" />
                            <label className="custom-file-label" for="src">Choose file</label>
                        </div>
                    </div>
                    <div className='d-flex'>
                        <input style={{marginLeft:"200px"}} className='btn btn-primary' type="submit" />
                    </div>
                </form>
            </div>
        </div>
               {/* ////    */}
                </div>
            </div>
            <div>
            </div>
         </div>
      
    );
};

export default Admin;