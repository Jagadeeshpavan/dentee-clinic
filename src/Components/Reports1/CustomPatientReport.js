import React, { useState } from 'react';
import './CustomPatientReport.css';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import { AiOutlineArrowLeft, AiOutlineCaretRight, AiFillStepForward, AiFillStepBackward } from 'react-icons/ai';
import { BsSearch } from 'react-icons/bs';
import { RiFileExcel2Fill } from 'react-icons/ri';
import { IoCaretBackOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';

const Customized_patient_report = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;

    const data = [
        {
            patientName: 'karthik',
            mobileNumber: '9550028078',
            registrationDate: '28-07-2023',
            gender: 'Male',
            emailAddress: 'example@gmail.com',
        },
        {
            patientName: 'John Doe',
            mobileNumber: '123-456-7890',
            registrationDate: '2023-01-15',
            gender: 'Male',
            emailAddress: 'johndoe@example.com',
        },
        {
            patientName: 'Jane Smith',
            mobileNumber: '987-654-3210',
            registrationDate: '2023-02-20',
            gender: 'Female',
            emailAddress: 'janesmith@example.com',
        },
        {
            patientName: 'Bob Johnson',
            mobileNumber: '555-123-4567',
            registrationDate: '2023-03-10',
            gender: 'Male',
            emailAddress: 'bob@example.com',
        },
        {
            patientName: 'Alice Brown',
            mobileNumber: '111-222-3333',
            registrationDate: '2023-04-05',
            gender: 'Female',
            emailAddress: 'alice@example.com',
        },
        {
            patientName: 'Charlie Green',
            mobileNumber: '999-888-7777',
            registrationDate: '2023-05-20',
            gender: 'Male',
            emailAddress: 'charlie@example.com',
        },
        {
            patientName: 'Eva White',
            mobileNumber: '777-555-4444',
            registrationDate: '2023-06-10',
            gender: 'Female',
            emailAddress: 'eva@example.com',
        },
        {
          patientName: 'karthik',
          mobileNumber: '9550028078',
          registrationDate: '28-07-2023',
          gender: 'Male',
          emailAddress: 'example@gmail.com',
      },        {
        patientName: 'karthik',
        mobileNumber: '9550028078',
        registrationDate: '28-07-2023',
        gender: 'Male',
        emailAddress: 'example@gmail.com',
    },        
        // Add more data here
    ];

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(data.length / itemsPerPage);

    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    };

    const isFirstPage = currentPage === 1;
    const isLastPage = currentPage === totalPages;

    return (
        <>
            <Navbar />
            <Sidebar />
            <div className="maincontcustom">
                <div className="custom-body-ty">
                    <div className="custom-head-4455">
                        <Link to="/Areport">
                            <div className="custom-icon">
                                <AiOutlineArrowLeft className="custom-icon-1" />
                            </div>
                        </Link>
                        <div className="custom-h1">Report / Custom Patient report</div>
                    </div>
                    <div className="custom-options">
                        <div className="custom-options-1">
                            <select className="selection-1">
                                <option className="sel-option-1">Patient</option>
                                <option className="sel-option-1">Treatment</option>
                                <option className="sel-option-1">Prescription</option>
                            </select>
                        </div>
                        <div className="custom-options-2">
                            <select className="selection-2">
                                <option className="sel-option-1">No Custom View</option>
                                <option className="sel-option-1">No Custom View Found</option>
                                <option className="sel-option-1">Add Custom View</option>
                            </select>
                        </div>
                        <Popup
                            trigger={
                                <div>
                                    <button className="custom-se">
                                        <BsSearch className="custom-se-1" />
                                    </button>
                                </div>
                            }
                            position="right center"
                        >
                            <div className="custom-search-container">
                                <input className="custom-search-bar" type="text" placeholder="Search" />
                                <button className="custom-search-btn">
                                    <BsSearch />
                                </button>
                            </div>
                        </Popup>

                        <button className="custom-excel">
                            <RiFileExcel2Fill className="custom-excel-1" />
                        </button>
                    </div>

                    <div>
                        <table className="custom-table">
                            <thead className="the-ta">
                                <tr className="trzoo">
                                    <th className="custom-table-head">Patient Name</th>
                                    <th className="custom-table-head">Mobile Number</th>
                                    <th className="custom-table-head">Registration Date</th>
                                    <th className="custom-table-head">Gender</th>
                                    <th className="custom-table-head">Email Address</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentItems.map((item, index) => (
                                    <tr className="custom-data" key={index}>
                                        <td className="td-data">{item.patientName}</td>
                                        <td className="td-data">{item.mobileNumber}</td>
                                        <td className="td-data">{item.registrationDate}</td>
                                        <td className="td-data">{item.gender}</td>
                                        <td className="td-data">{item.emailAddress}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="pat-footern2n">
                        <button
                            className="butpagenationn2n"
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={isFirstPage}
                        >
                            <AiFillStepBackward />
                        </button>
                        <p className="pat-bottom-numn2n">{currentPage}</p>
                        <button
                            className="butpagenationn2n"
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={isLastPage}
                        >
                            <AiFillStepForward />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Customized_patient_report;