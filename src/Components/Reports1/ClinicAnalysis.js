import React, { useState } from 'react';
import './ClinicAnalysis.css';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import { AiOutlineArrowLeft, AiOutlineStepBackward, AiOutlineStepForward } from 'react-icons/ai';
import { SiMicrosoftexcel } from 'react-icons/si';
import * as XLSX from 'xlsx';
import { Link } from 'react-router-dom';

const ClinicDataAnalysis = () => {
    const data = [
        ["Header", "2022-9", "2022-10", "2022-11", "2022-12", "2023-1", "2023-2", "2023-3", "2023-4", "2023-5", "2023-6", "2023-7", "2023-8"],
        ["Data1", "10", "20", "15", "25", "30", "40", "35", "45", "50", "55", "60", "65"],
        ["Data2", "12", "22", "17", "27", "32", "42", "37", "47", "52", "57", "62", "67"],
        ["Data3", "14", "24", "19", "29", "34", "44", "39", "49", "54", "59", "64", "69"],
        ["Data4", "16", "26", "21", "31", "36", "46", "41", "51", "56", "61", "66", "71"],
        ["Data5", "18", "28", "23", "33", "38", "48", "43", "53", "58", "63", "68", "73"],
        ["Data6", "20", "30", "25", "35", "40", "50", "45", "55", "60", "65", "70", "75"],
    ];

    const exportExcel = () => {
        const ws = XLSX.utils.aoa_to_sheet(data);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "ClinicAnalysis Data");
        XLSX.writeFile(wb, "ClinicAnalysis_data.xlsx");
    };

    const itemsPerPage = 3;
    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentData = data.slice(indexOfFirstItem, indexOfLastItem);

    const isFirstPage = currentPage === 1;
    const isLastPage = indexOfLastItem >= data.length;

    const handlePageChange = (pageNumber) => {
        if (pageNumber >= 1 && pageNumber <= Math.ceil(data.length / itemsPerPage)) {
            setCurrentPage(pageNumber);
        }
    };

    return (
        <>
            <Navbar />
            <Sidebar />
            <div className="maincontclinic">
                <div className="clinic-head">
                    <Link to="/Areport">
                        <div className="clinic-icon">
                            <AiOutlineArrowLeft />
                        </div>
                    </Link>
                    <div className="clinic-acc-1">Report / Clinic Data Analysis</div>
                </div>
                <div className="clinic-total">
                    <select className="clinic-select">
                        <option className="option-total">Today</option>
                        <option className="option-total">Last 7 days</option>
                        <option className="option-total">This Week</option>
                        <option className="option-total">This Month</option>
                        <option className="option-total">This year</option>
                        <option className="option-total">Last Week</option>
                        <option className="option-total">Last Month</option>
                        <option className="option-total">Between</option>
                    </select>
                    <input type="date" className="clinicdate-1" />
                    <div className="clinic-to">to</div>
                    <input type="date" className="clinicdate-2" />
                    <select className="clinic-report">
                        <option className="option-total">View Report</option>
                        <option className="option-total">Tabular</option>
                        <option className="option-total">Graph</option>
                    </select>
                    <button onClick={exportExcel} className="clinic-button">
                        <SiMicrosoftexcel className="clinic-icon2" />
                    </button>
                </div>
                <div>
                    <table className="clinic-table">
                        <thead className="clinic-table-thead">
                            <tr className="clinic-table-tr">
                                {data[0].map((header, index) => (
                                    <th key={index} className="clinic-table-head">
                                        {header}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        {/* You can add a table body here if you have more rows of data */}
                    </table>
                </div>
                <div className='lovaraju'>
                    <button className='vanitha'
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={isFirstPage}
                    >
                        <AiOutlineStepBackward />
                    </button>
                    <p className='Rohani'>{currentPage}</p>
                    <button className='vanitha'
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={isLastPage}
                    >
                        <AiOutlineStepForward />
                    </button>
                </div>
            </div>
        </>
    );
};

export default ClinicDataAnalysis;
