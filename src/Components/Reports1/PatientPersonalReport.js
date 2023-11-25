import React, { useState } from 'react'; // Import useState from 'react'
import './PatientPersonalReport.css';
import { BiSearch } from 'react-icons/bi';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import { AiOutlineArrowLeft, AiOutlineStepBackward, AiOutlineStepForward } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const PatientPersonalReport = () => {
  // Sample patient personal report data
  const patientPersonalReportData = [
    {
      id: 1,
      patientName: 'Raju',
      mobile: '987654321',
      attribute: 'School Name',
      value: 'ABC School',
    },
    {
      id: 2,
      patientName: 'John',
      mobile: '123456789',
      attribute: 'Date of Anniversary',
      value: '01/15/1990',
    },
    {
      id: 3,
      patientName: 'Alice',
      mobile: '987612345',
      attribute: 'Tags',
      value: 'Tag1, Tag2, Tag3',
    },
    {
      id: 4,
      patientName: 'Bob',
      mobile: '789012345',
      attribute: 'Company Name',
      value: 'XYZ Company',
    },
    {
      id: 5,
      patientName: 'Jane',
      mobile: '345678901',
      attribute: 'Spouse Name',
      value: 'Spouse1',
    },
    {
      id: 6,
      patientName: 'Samantha',
      mobile: '456789012',
      attribute: 'School Name',
      value: 'XYZ School',
    },
  ];
  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const current = patientPersonalReportData.slice(indexOfFirstItem, indexOfLastItem);

  const isFirstPage = currentPage === 1;
  const isLastPage = indexOfLastItem >= patientPersonalReportData.length;

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= Math.ceil(patientPersonalReportData.length / itemsPerPage)) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="maincontpatient">
        <div className="personal-head">
          <Link to="/Areport">
            <div className="personalreport-icon">
              <AiOutlineArrowLeft />
            </div>
          </Link>
          <div className="personalreport-acc-1">
            Report / Patient Personal Attribute Report
          </div>
        </div>
        <div className="personalreport-total">
          <div className="personalreport-buttons">
            <input className="personalreport-search" placeholder="search" />
            <button className="search-btnpersonal">
              <BiSearch />
            </button>
            <select className="personalview-select">
              <option className="optio">All Attributes</option>
              <option className="optio">School Name</option>
              <option className="optio">Date of Anniversary</option>
              <option className="optio">Tags</option>
              <option className="optio">Company Name</option>
              <option className="optio">Spouse Name</option>
            </select>
            <button className="personalreport-view">view</button>
          </div>
          <div>
            <table className="personalpetty-table-tnx">
              <thead className="theaduv">
                <tr className="trmobi">
                  <th className="th-nx">Patient Name</th>
                  <th className="th-nx">Mobile</th>
                  <th className="th-nx">Attribute</th>
                  <th className="th-nx">Value</th>
                </tr>
              </thead>
              <tbody className="tbodyuv">
                {current.map((patient) => (
                  <tr className="trmobi" key={patient.id}>
                    <td className="dt-yz77">{patient.patientName}</td>
                    <td className="dt-yz77">{patient.mobile}</td>
                    <td className="dt-yz77">{patient.attribute}</td>
                    <td className="dt-yz77">{patient.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className='Pichi-1'>
            <button className='Amg-sch'
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={isFirstPage}
            >
              <AiOutlineStepBackward />
            </button>
            <p className='pat-bag-21'>{currentPage}</p>
            <button className='Amg-sch'
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
};

export default PatientPersonalReport;
