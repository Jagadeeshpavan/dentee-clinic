import React, { useState, useEffect } from 'react';
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineStepForward } from "react-icons/ai";
import { AiOutlineStepBackward } from "react-icons/ai";
import { Link } from 'react-router-dom';
import './Webappointment.css';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import axios from 'axios';

function Web() {
  const [billingData, setBillingData] = useState([]);
  const [filteredData, setFilteredData] = useState([]); // Store filtered data

  const [loading, setLoading] = useState(true);
  
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3; // Number of items to display per page
  const [selectedStatus, setSelectedStatus] = useState("All"); // Default selection is "All"

  const fetchBillingData = async () => {
    try {
      const response = await axios.get('http://localhost:5001/Webappointment');
      if (response.status === 200) {
        setBillingData(response.data);
        setFilteredData(response.data);
        setLoading(false);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBillingData();
  }, []); 

  const filterData = (status) => {
    if (status === "All") {
      setFilteredData(billingData); // Show all data
    } else {
      const filtered = billingData.filter(item => item.appointmentStatus === status);
      setFilteredData(filtered); // Filtered data based on status
    }
    setSelectedStatus(status); // Update selected status
    setCurrentPage(1); // Reset to the first page when changing the filter
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="maincontka">
        <div className="main-headwebappoint">
          <div className="mainhead-iconwebappoint">
            <AiOutlineArrowLeft />
          </div>
          <div className="main-headingwebappoint">Report / Patient Documents</div>
        </div>

        <div className="ri">
          <h5>
            These Appointments are the list of Appointments Requested by patients online through the discover platform.
            Please take appropriate action to confirm or cancel the Appointment requests.
          </h5>
        </div>
        <div className="esd">
          <input type="date" placeholder="" className="dr"></input> to
          <input type="date" placeholder="" className="es"></input>
          <select className="but12390" value={selectedStatus} onChange={(e) => filterData(e.target.value)}>

            <option value="All">All</option>
            <option value="Requested">Requested</option>
            <option value="Confirmed">Confirmed</option>
            <option value="Cancelled">Cancelled</option>
          </select>
          <button className="sel">View Report</button>
        </div>

        <div className="table-responsive">
          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                <th className='abserve-th'>Patient Name</th>
                <th className='abserve-th'>Mobile Number</th>
                <th className='abserve-th'>Doctor Name</th>
                <th className='abserve-th'>Email Address</th>
                <th className='abserve-th'>Start Date Time</th>
                <th className='abserve-th'>End Date Time</th>
                <th className='abserve-th'>Appointment Status</th>
              </tr>
            </thead>
            <tbody>
            {filteredData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((billingItem, index) => (
                <tr key={index}>
                  <td className='intiate-td'>{billingItem.patientName}</td>
                  <td className='intiate-td'>{billingItem.mobileNumber}</td>
                  <td className='intiate-td'>{billingItem.doctorName}</td>
                  <td className='intiate-td'>{billingItem.emailAddress}</td>
                  <td className='intiate-td'>{billingItem.startDateTime}</td>
                  <td className='intiate-td'>{billingItem.endDateTime}</td>
                  <td className='intiate-td'>{billingItem.appointmentStatus}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className='pat-footer33pat-nk333'>
            <button className='butpagenation-nk233'
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <AiOutlineStepBackward />
            </button>
            <p className='pat-bottom-num33pat-nk133'>{currentPage}</p>
            <button className='butpagenation-nk233'
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={(currentPage * itemsPerPage) >= filteredData.length}
            >
              <AiOutlineStepForward />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Web;