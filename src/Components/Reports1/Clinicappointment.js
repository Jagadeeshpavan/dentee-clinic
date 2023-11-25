import React from 'react'
import './Clinicappointment.css'
import { AiOutlineArrowLeft } from "react-icons/ai";
import { MdGroups } from "react-icons/md";
import {LiaCalendarAlt } from "react-icons/lia";
import {FaUserDoctor } from "react-icons/fa6";
import { FaRegMoneyBillAlt}  from "react-icons/fa";
import {Link} from "react-router-dom";
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';


const Appointment = () => {
  return (

    <>  
    <Navbar/>
    <Sidebar/>
    <div className='appointment-body'>

<div className='appointment-ka'>
            <button className='appointment-kb'><Link to="/Areport"><AiOutlineArrowLeft className='appointment-kc'/></Link></button>
            <div className='appointment-kd'>Report / Clinic Insight</div>
        </div>
        <select className='appointment-ke'>
            <option>Today</option>
            <option>Last 7 Days</option>
            <option>This Week</option>
            <option>This Month</option>
            <option>This Year</option>
            <option>Last Week</option>
            <option>Last Month</option>
            <option>Between</option>
        </select>
        <input type='date' className='appointment-input-a'></input>     to
        <input type='date' className='appointment-input-a'></input>
        <button className='appointment-kf'>View Report</button>
        <div className='appointment-k2'>
        <div className='appointment-kg'>
            <Link style={{textDecoration:'none'}} to="/Clinicpatient"> <div className='appointment-kh'>
                    <MdGroups className='appointment-ki'/>
                <div className='appointment-kj'>Patient</div>
            </div></Link>
            <div className='appointment-kh'>
                <LiaCalendarAlt className='appointment-ki'/>
                <div className='appointment-kk'>Appointment</div>
            </div>
            <Link style={{textDecoration:'none'}} to="/Clinictreatment"><div className='appointment-kh'>
                <FaUserDoctor className='appointment-ki'/>
                <div className='appointment-kl'>Treatment</div>
            </div></Link>
            <Link style={{textDecoration:'none'}} to="/Cliniccollection"><div className='appointment-kh'>
                <FaRegMoneyBillAlt className='appointment-ki'/>
                <div className='appointment-kl'>Collection</div>
            </div></Link>
            </div>
            <div className='appointment-head'>
            <table className='appointment-main'>
                <thead className='appoinment-df' >
            
                    <tr className='appoinment-fd'>
                    <th className='appointment-heading'>Apponiment</th>
                    </tr>
                </thead>
                <tbody>
                    <tc className='appointment-data'>
                        <td className='appointment-one'>No of appointments scheduled<div className='appointment-kn'>0</div></td><br/>
                        <td className='appointment-two'>Total waiting period<div className='kia6'>-</div></td><br/>
                        <td className='appointment-one'>Average waiting time<div className='appointment-kn'>0</div></td><br/>
                    </tc>
                </tbody>
                </table>
                </div>



        
        </div>

    </div>
    </>
  )
}

export default Appointment