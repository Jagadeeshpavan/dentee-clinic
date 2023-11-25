import React from 'react';
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import './Addbankdeposit.css';

function BankDetailsHeader() {
  return (
    <>  
    <Navbar/>
    <Sidebar/>
<div className='maincontbkdep'>
    <div className='bankdepositheader'>
     {/* <h1>Accounts/Add Bank Deposit</h1> */}
     <div className='main-headaddd'>
        <div className='mainhead-iconaddd'><Link to='/Homepage'><AiOutlineArrowLeft/></Link></div>
        <div className='main-headingaddd'>Accounts / Add Bank Deposit</div>
       </div>
        <br></br>
     {/* <hr></hr> */}
    </div>
    <div className='bankdepositpp'>
      <h1>Bank Details</h1>
      <div className='Bankdepositp'>
        <input className='inputpp'type="date" id="date" placeholder='Date'/>
        <input className='inputpp' type="text" id="selectbankname"  placeholder='Select Bank Name'/>
        <input className='inputpp' type="text" id="" placeholder=''/>
        <input className='inputpp' type="text" id="" placeholder=''/>
        <input className='inputpp' type="text" id="" placeholder=''/>
        <input className='inputpp' type="number" id="0" placeholder='0'/>
        <input className='inputpp' type="text" id="transationid" placeholder='Transation Id'/>
        <input className='inputpp' type="text" id="comments" placeholder='Comments'/>
      </div>
        <div className='bds-ff1'>
            <div className='apay-ff2'><button className='bds-save'>Save</button></div>
            <div className='apay-ff3'><Link to='/Bankdetails'><button className='bds-cancel'> Cancel</button></Link></div>
         </div>
    </div>
    </div>
    </>
  );
}

export default BankDetailsHeader;
