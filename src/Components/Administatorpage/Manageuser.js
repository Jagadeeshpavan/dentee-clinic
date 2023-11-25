import React from 'react'
import './Manageuser.css'
import { AiOutlineArrowLeft,AiOutlineClose } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import Popup from 'reactjs-popup';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';

const Manageuser = () => {
  return (
    <>  
    <Navbar/>
    <Sidebar/>
    <div className='manageuse'>
        
        <div className='manage-main'>
        <button className='manage-button'><Link to='/Administator'><AiOutlineArrowLeft className='manage-icon'/></Link></button>
            <div className='manage-text'>Administrator / Manage Users</div>
        </div>
        <div classname='sec-bar'>
        {/* <input type='text'  placeholder='Search users' className='manage-input-1'/>
        <button className='manage-button1'><FaSearch className='manage-icon1'/></button> */}
         <div className='managesearch-container'>
    <input className='managesearch-bar' type='text' placeholder='Search'/>
    <button className='managesearch-btn'><BiSearch/></button>
    </div>
       
        </div>
        <Link to='/Manageadduser'>
        <button type='text' className='manage-button2'>Add New Users</button></Link>
       <br></br>
        <div className='manage-box'>
            <Link style={{textDecoration:'none',color:'black'}} to='/Manageupdateuser'><div className='manage-text-1'>Kumar</div></Link>
            <Link style={{textDecoration:'none',color:'black'}} to='/Manageupdateuser'><div className='manage-text-2'>+91-23345452242</div></Link>
            <Link style={{textDecoration:'none',color:'black'}} to='/Manageupdateuser'><div className='manage-text-2'>administrator</div></Link>
            <Link style={{textDecoration:'none'}} to='/Manageupdateuser'><div className='manage-text-3'>Active</div></Link>
            <Popup trigger=
            {<div className='manage-text-4'><FiSettings /></div>}
                position='bottom center'>
                <div className='manage-popup-box'>
                    <Popup trigger=
                    {<div className='manage-delete'>Delete</div>}
                    modal nested>
                        <div className='manage-delete-confirm'>
                            <div className='confirm-1'><div className='confirm'>Confirm</div></div>
                            <div className='delete-user'>Are you sure you want to delete user</div>
                            <div className='yes-no'>
                                <button className='delete-yes'>YES</button>
                                <button className='delete-no'>NO</button>
                            </div>
                        </div>
                    </Popup>
                    <Popup trigger=
                    {<div className='manage-share'>Share Clinic Access Code</div>}
                    modal nested>
                        <div className='manage-delete-confirm'>
                            <div className='confirm-1'><div className='confirm'>Confirm</div></div>
                            <div className='delete-user'>Are you sure you want to share clinic access<br/>code by SMS?</div>
                            <div className='yes-no'>
                                <button className='delete-yes'>YES</button>
                                <button className='delete-no'>NO</button>
                            </div>
                        </div>
                    </Popup>
                    
                </div>
               
            
            </Popup>
            
            
    
        </div>
    </div>
    </>
  )
}

export default Manageuser