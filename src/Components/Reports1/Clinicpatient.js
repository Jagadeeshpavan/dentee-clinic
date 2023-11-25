import React from 'react'
import './Clinicpatient.css'
import { AiOutlineArrowLeft } from "react-icons/ai";
import { MdGroups } from "react-icons/md";
import {LiaCalendarAlt } from "react-icons/lia";
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import {FaUserDoctor } from "react-icons/fa6";
import { FaRegMoneyBillAlt}  from "react-icons/fa";
import {Link} from "react-router-dom";



const Clinic = () => {
  return (
    <>  
    <Navbar/>
    <Sidebar/>
    <div className='patient-body'>

<div className='patient-ka'>
            <button className='patient-kb'><Link to="/Areport"><AiOutlineArrowLeft className='patient-kc'/></Link></button>
            <div className='patient-kd'>Report / Clinic Insight</div>
        </div>
        <select className='patient-ke'>
            <option>Today</option>
            <option>Last 7 Days</option>
            <option>This Week</option>
            <option>This Month</option>
            <option>This Year</option>
            <option>Last Week</option>
            <option>Last Month</option>
            <option>Between</option>
        </select>
        <input type='date' className='patient-input-a'></input>     to
        <input type='date' className='patient-input-a'></input>
        <button className='patient-kf'>View Report</button>
        <div className='patient-k2'>
        <div className='patient-kg'>
            <div className='patient-kh'>
                    <MdGroups className='patient-ki'/>
                <div className='patient-kj'>Patient</div>
            </div>
            <Link style={{textDecoration:'none'}} to="/Clinicappointment"><div className='patient-kh'>
            <LiaCalendarAlt className='patient-ki'/>
                <div className='patient-kk'>Appointment</div>
            </div></Link>
            <Link style={{textDecoration:'none'}} to="/Clinictreatment"><div className='patient-kh'>
                <FaUserDoctor className='patient-ki'/>
                <div className='patient-kl'>Treatment</div>
            </div></Link>
            <Link style={{textDecoration:'none'}} to="/Cliniccollection"><div className='patient-kh'>
                <FaRegMoneyBillAlt className='patient-ki'/>
                <div className='patient-kl'>Collection</div>
            </div></Link>
            </div>
            <div className='patient-head'>
            <table className='patient-main'>
                <thead className='patient-gd'>
            
                    <tr className='patient-hg'>
                    <th className='patient-heading'>Patient</th>
                    </tr>
                </thead>
                <tbody>
                    <tc className='patient-data'>
                        <td className='patient-one'>Total Number of Patients Visited<div className='kn'>0</div></td><br/>
                        <td className='patient-two'>No of patients checkedin<div className='ko'>0</div></td><br/>
                        <td className='patient-one'>No of patients direct checkedin<div className='kp'>0</div></td><br/>
                        <td className='patient-two'>No of new patients<div className='kq'>0</div></td><br/>
                        <td className='patient-one'>Patients referred by existing patients<div className='kr'>0</div></td><br/>
                        <td className='patient-two'>Patients referred by Doctor<div className='ks'>0</div></td><br/>
                        <td className='patient-one'>Patients currently in waiting area<div className='kt'>0</div></td><br/>
                    </tc>
                </tbody>

                </table>
                </div>

        </div>

    </div>
    </>
  )
}

export default Clinic