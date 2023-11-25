import React from 'react'
import './Addvoucher.css';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BsFillPlusCircleFill } from "react-icons/bs";
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';

const Voucher = () => {
  return (
    <>  
    <Navbar/>
    <Sidebar/>
    <div>
        <div className='voucher-head'>
            <div className='voucher-icon'><Link to='/HomePage'><AiOutlineArrowLeft/></Link></div>
            <div className='voucher-acc-1'>Accounts / Add Voucher</div>
        </div>
        <div className='voucher-box'>
          <div className='voucher-inbox'>
            <div className='voucher-receipt'>
              <b>Receipt</b>
            </div>
            <div className='voucher-balance'>
              <b>Balance Amount: 0.00</b>
            </div>
            <div className='voucher-input'>
              <input type="text" id="fname" name="fname" value="Receipt Type" className='voucher-receipttype'/>
              <input type="text" id="fname" name="fname" value="Amount" className='voucher-amount'/>
              <input type="text" id="fname" name="fname" value="Paid by" className='voucher-paidby'/> <  BsFillPlusCircleFill className='vid-icon'/>
            </div>
            <div className='voucher-inputrow'>
            <input type='date' className='voucher-date'></input>
            <input type="text" id="fname" name="fname" value="Total Amount Paid" className='voucher-paidamount'/>
            </div>
            <div className='voucher-narrationrow'>
            <input type="text" id="fname" name="fname" value="Narration" className='voucher-narration'/>
            </div>
            <div className='voucher-buttons'>
              <button className='vouchersave'>Save</button>
              <button className='vouchercancel'>Cancel</button>
            </div>
            


          </div>
        </div>
    </div>
    </>
  )
}

export default Voucher