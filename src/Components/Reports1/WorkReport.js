import React, { useState } from 'react';
import './WorkReport.css';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import { AiOutlineArrowLeft, AiOutlineFileExcel, AiOutlineClose, AiOutlineStepBackward, AiOutlineStepForward } from "react-icons/ai";
import { BsSearch, BsPencil } from "react-icons/bs";
import { BiDownArrowAlt } from "react-icons/bi";
import { SlOptions } from 'react-icons/sl';
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';
import {SiMicrosoftexcel} from 'react-icons/si'
import * as XLSX from 'xlsx';

const WorkReport = () => {
  const BatData = [
    {
      treatment: 'Dental Checkup',
      treatmentDate: '2023-09-12',
      doctor: 'Dr. Smith',
      numTreatments: 5,
      numTeeth: 20,
      treatmentDiscount: 25.00,
    },
    {
      treatment: 'Cavity Filling',
      treatmentDate: '2023-09-14',
      doctor: 'Dr. Johnson',
      numTreatments: 8,
      numTeeth: 30,
      treatmentDiscount: 40.00,
    },
    {
      treatment: 'Teeth Whitening',
      treatmentDate: '2023-09-15',
      doctor: 'Dr. Davis',
      numTreatments: 3,
      numTeeth: 15,
      treatmentDiscount: 10.00,
    },
    {
      treatment: 'Dental Implant',
      treatmentDate: '2023-09-16',
      doctor: 'Dr. Wilson',
      numTreatments: 2,
      numTeeth: 10,
      treatmentDiscount: 15.00,
    },
    {
      treatment: 'Root Canal',
      treatmentDate: '2023-09-17',
      doctor: 'Dr. Miller',
      numTreatments: 4,
      numTeeth: 18,
      treatmentDiscount: 20.00,
    },
    {
      treatment: 'Orthodontic Braces',
      treatmentDate: '2023-09-18',
      doctor: 'Dr. Brown',
      numTreatments: 6,
      numTeeth: 25,
      treatmentDiscount: 30.00,
    },
  ];
  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currenttrain = BatData.slice(indexOfFirstItem, indexOfLastItem);

  const isFirstPage = currentPage === 1;
  const isLastPage = indexOfLastItem >= BatData.length;

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= Math.ceil(BatData.length / itemsPerPage)) {
      setCurrentPage(pageNumber);
    }
  };
  const data = [
    ['Patient Name', 'Category Name', 'Order No', 'LabWork Date', 'Supplier Name', 'Cost'],
    ['John', 'None', '013', '12/09/2023', 'sai', '₹2000'],
    ['John', 'jerry', '013', '12/09/2023', 'sai', '₹2000'],
  ];const exportToExcel = () => {
    const ws = XLSX.utils.aoa_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Labwork Data');
    XLSX.writeFile(wb, 'labwork_data.xlsx');
  };

  return (
    <>
      <Navbar />
      <Sidebar />
      <div className='maincontwork'>
        <div className='workreportbody'>
          <div className='work-head'>
            <Link to='/Areport'>
              <div className='work-icon'>
                <AiOutlineArrowLeft />
              </div>
            </Link>
            <div className='work-acc-1'>Report / Work Report</div>
          </div>
          <div className='work-totalrow'>
            <select className='work-select'>
              <option className='oppt-totalrow'>All Doctors</option>
              <option className='oppt-totalrow'>Pavan Kumar</option>
            </select>
            <select className='work-selectdate'>
              <option className='oppt-totalrow'>Today</option>
              <option className='oppt-totalrow'>Last 7 days</option>
              <option className='oppt-totalrow'>This Week</option>
              <option className='oppt-totalrow'>This Month</option>
              <option className='oppt-totalrow'>This Year</option>
              <option className='oppt-totalrow'>Last Week</option>
              <option className='oppt-totalrow'>Last Month</option>
              <option className='oppt-totalrow'>Between</option>
            </select>
            <input type="date" className='work-date1' />
            <p className='work-to'> to</p>
            <input type="date" className='work-date2' />
            <Popup trigger={<button className='work-selectbutton'>Select Treatment</button>}
            position='bottom'>
              <div className='work-totalsearchbar'>
                <div className='work-totalselect'><BsPencil className='pencil' />Select Treatment<AiOutlineClose className='work-close' /></div>
                <hr className='work-hr' />
                <div className='work-totalsearch'>
                  <div><input type="text" placeholder='Search Treatment' className='work-search' /></div>
                  <div><button className='work-search1'><BsSearch className='work-searchicon' /></button></div>
                </div>
                <div className='work-container'>
                  <div className='work-searchoptions'>
                    <input type='checkbox' />Select All<br />
                    <input type='checkbox' />Advance Surgical procedure<br />
                    <input type='checkbox' />Braces<br />
                    <input type='checkbox' />Consultation<br />
                    <input type='checkbox' />RE-root Canal Treatment<br />
                    <input type='checkbox' />Root Canal Treatment<br />
                    <input type='checkbox' />Routine Extraction<br />
                    <input type='checkbox' />Surgical Extraction<br />
                    <input type='checkbox' />Teeth Whitening<br />
                    <input type='checkbox' />Veener<br />
                  </div>
                  <hr />
                  <button className='work-okbutton'>OK</button><br />
                </div>
              </div>
            </Popup>
            <button className='work-viewbutton'>View Report</button>
          </div>
          <div class="table-container">
            <table className='work-table'>
              <thead className='work-thead'>
                <tr className='work-headrow1'>
                  <th colSpan={6} className='good'><button className="Varun" onClick={exportToExcel}>
                <SiMicrosoftexcel style={{ color: 'green' }}/>
              </button>EXPORT TO EXCEL</th>
                </tr>

                <tr className='work-headrow'>
                  <th className='th-ih'>Treatment</th>
                  <th className='th-ih'>Treatment Date</th>
                  <th className='th-ih'>Doctor</th>
                  <th className='th-ih'>No.of Treatments</th>
                  <th className='th-ih'>No.of Teeth</th>
                  <th className='th-ih'>Treatment Discount</th>
                </tr>
              </thead>
              <tbody className='work-tablebody'>
                {currenttrain.map((item, index) => (
                  <tr key={index} className='work-tablerow'>
                    <td className='td-oc'>{item.treatment}</td>
                    <td className='td-oc'>{item.treatmentDate}</td>
                    <td className='td-oc'>{item.doctor}</td>
                    <td className='td-oc'>{item.numTreatments}</td>
                    <td className='td-oc'>{item.numTeeth}</td>
                    <td className='td-oc'>{item.treatmentDiscount}</td>
                  </tr>
                ))}
                <tr className='work-tablerow'>
                  <td className='td-oc'>Total count: {BatData.length}</td>
                  <td className='td-oc'></td>
                  <td className='td-oc'></td>
                  <td className='td-oc'>0</td>
                  <td className='td-oc'>0</td>
                  <td className='td-oc'>0.00</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='ammu-1'>
            <button className='Ashok'
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={isFirstPage}
            >
              <AiOutlineStepBackward />
            </button>
            <p className='rani'>{currentPage}</p>
            <button className='Ashok'
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={isLastPage}
            >
              <AiOutlineStepForward />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default WorkReport;
