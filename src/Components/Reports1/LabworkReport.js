import React, { useState } from 'react';
import './LabworkReport.css';
import { BiSearch } from "react-icons/bi";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { SiMicrosoftexcel } from "react-icons/si";
import { AiOutlineStepBackward } from "react-icons/ai";
import { AiOutlineStepForward } from "react-icons/ai";
import * as XLSX from 'xlsx';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';

const LabworkReport = () => {
    const dummyData = [
        ["John", "None", "013", "12/09/2023", "sharan", "₹2000"],
        ["Alice", "Lab Tests", "014", "12/09/2023", "medsupply", "₹1500"],
        ["Bob", "Blood Tests", "015", "13/09/2023", "healthmart", "₹1800"],
        ["Eve", "X-Rays", "016", "13/09/2023", "healthmart", "₹1200"],
        ["Charlie", "None", "017", "14/09/2023", "sharan", "₹2500"],
        ["Grace", "Blood Tests", "018", "15/09/2023", "medsupply", "₹2200"],
        ["Daniel", "Lab Tests", "019", "15/09/2023", "medsupply", "₹1900"],
        ["Frank", "X-Rays", "020", "16/09/2023", "healthmart", "₹1300"],
        ["Helen", "None", "021", "17/09/2023", "sharan", "₹2800"],
        ["Ivy", "Blood Tests", "022", "18/09/2023", "medsupply", "₹2400"],
        // Add more data here
    ];

    const itemsPerPage = 3; // Number of items to display per page
    const [currentPage, setCurrentPage] = useState(1);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentData = dummyData.slice(startIndex, endIndex);

    const totalPages = Math.ceil(dummyData.length / itemsPerPage);

    const exportToExcel = () => {
        const ws = XLSX.utils.aoa_to_sheet(dummyData);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Labwork Data");
        XLSX.writeFile(wb, "labwork_data.xlsx");
    };

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
            <div className='maincontlab'>
                <div className='labworkTotalBody'>
                    <div className='labmain-head'>
                        <div className='labmainhead-icon'>
                            <Link to="/Areport">
                                <AiOutlineArrowLeft />
                            </Link>
                        </div>
                        <div className='labmain-heading'>Report / Labwork Product Wise Report</div>
                    </div>

                    <div className='labwork-bill-contents'>
                        <select className='labwork-bill-select'>
                            <option className='option-conten'>Today</option>
                            <option className='option-conten'>Last 7 Days</option>
                            <option className='option-conten'>This Week</option>
                            <option className='option-conten'>This Month</option>
                            <option className='option-conten'>This Year</option>
                            <option className='option-conten'>Last Week</option>
                            <option className='option-conten'>Last Month</option>
                            <option className='option-conten'>Between</option>
                        </select>
                        <select className='labwork-view-report'>
                            <option className='option-conten'>
                                View Report
                            </option>
                        </select>
                        <SiMicrosoftexcel className='labwork-excel-icon' onClick={exportToExcel} />
                    </div>

                    <div className='search-containerlabpw'>
                        <input className='search-barlabpw' type='text' placeholder='Search' />
                        <button className='search-btnlabpw'><BiSearch /></button>
                    </div>

                    <table className='labwork-table-sunil'>
                        <thead className='labheaddot-6665'>
                            <tr className='labdot-4445'>
                                <th className='labwork-table-head'>Patient Name</th>
                                <th className='labwork-table-head'>Category Name</th>
                                <th className='labwork-table-head'>Order No</th>
                                <th className='labwork-table-head'>LabWork Date</th>
                                <th className='labwork-table-head'>Supplier Name</th>
                                <th className='labwork-table-head'>Cost</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentData.map((item, index) => (
                                <tr className="labworksome" key={index}>
                                    {item.map((value, i) => (
                                        <td className='tddt' key={i}>{value}</td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div className='pat-footer339pat'>
                        <button className='butpagenation9'
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={isFirstPage}
                        >
                            <AiOutlineStepBackward />
                        </button>
                        <p className='pat-bottom-num339pat'>{currentPage}</p>
                        <button className='butpagenation9'
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

export default LabworkReport;