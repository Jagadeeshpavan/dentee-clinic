// import React, { useState, useEffect } from 'react';
// import { AiOutlineArrowLeft, AiOutlineStepBackward, AiOutlineStepForward } from 'react-icons/ai';
// import { BsSearch, BsFileEarmarkExcelFill } from 'react-icons/bs';
// import './GeneralReport.css';
// import Navbar from '../Navbar';
// import Sidebar from '../Sidebar';
// import * as XLSX from 'xlsx';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

// const itemsPerPage = 3;

// function Generalreport() {
//   const [data, setData] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get('http://localhost:5001/general-report');
//       setData(response.data || []);
//       console.log('Fetched Data:', response.data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentData = data.slice(indexOfFirstItem, indexOfLastItem) || [];

//   const isFirstPage = currentPage === 1;
//   const isLastPage = indexOfLastItem >= data.length;

//   const handlePageChange = (pageNumber) => {
//     if (pageNumber >= 1 && pageNumber <= Math.ceil(data.length / itemsPerPage)) {
//       setCurrentPage(pageNumber);
//     }
//   };

//   const exportExcel = () => {
//     const ws = XLSX.utils.aoa_to_sheet(data);
//     const wb = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(wb, ws, 'GeneralReport');
//     XLSX.writeFile(wb, 'GeneralReport.xlsx');
//   };

//   return (
//     <>
//       <Navbar />
//       <Sidebar />
//       <div className='maincontgeneral'>
//         <div className='GeneralReportBody'>
//           <div className='General'>
//             <div className='Row'>
//               <div className='Report'>
//                 <Link to='/Areport'>
//                   <AiOutlineArrowLeft className='icon-8' />
//                 </Link>
//               </div>
//               <div className='GeneralReport'>Report / General Report</div>
//             </div><br></br>
//           </div>
//           <div className='Row1'>
//             <div className='Selecttype'>
//               <select className='Dropdown' id='Dropdown' name='Selecttype'>
//                 <option className='option-doe'>Select Type</option>
//                 <option className='option-doe' value='BirthDay Report'>BirthDay Report</option>
//               </select>
//             </div>
//             <div className='Date'>
//               <select className='Today' id='Today' name='Today'>
//                 {/* ... (other options) */}
//               </select>
//             </div>
//             <form className='formgene'>
//               <input className='Search' type='text' placeholder='Search' />
//             </form>
//             <div className='Searchicon'>
//               <button className='Searchicon1'><BsSearch className='icon' /></button>
//             </div>
//             <div className='Exel'>
//               <button className='excel' type='submit' onClick={exportExcel}><BsFileEarmarkExcelFill className='Icon2' /></button>
//             </div>
//           </div><br></br>
//           <div className='Talke'>
//             {data.length > 0 ? (
//               <table className='daily-table'>
//                 <thead className='daily-thead'>
//                   <tr className='daily-headrow'>
//                     {data[0].map((header, index) => (
//                       <th key={index} className='Th'>{header}</th>
//                     ))}
//                   </tr>
//                 </thead>
//                 <tbody className='daily-tablebody'>
//                   {currentData.map((item, index) => (
//                     <tr key={index} className='daily-tablerow'>
//                       <td className='td-midd'>{item.patientName}</td>
//                       <td className='td-midd'>{item.mobileNumber}</td>
//                       <td className='td-midd'>{item.registrationDate}</td>
//                       <td className='td-midd'>{item.address}</td>
//                       <td className='td-midd'>{item.gender}</td>
//                       <td className='td-midd'>{item.emailAddress}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             ) : (
//               <p>No data available</p>
//             )}
//           </div>
//           <div className='kasu'>
//             <button className='rama' onClick={() => handlePageChange(currentPage - 1)} disabled={isFirstPage}>
//               <AiOutlineStepBackward />
//             </button>
//             <p className='dora'>{currentPage}</p>
//             <button className='rama' onClick={() => handlePageChange(currentPage + 1)} disabled={isLastPage}>
//               <AiOutlineStepForward />
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Generalreport;










import React, { useState, useEffect } from 'react';
import { AiOutlineArrowLeft, AiOutlineStepBackward, AiOutlineStepForward } from 'react-icons/ai';
import { BsSearch, BsFileEarmarkExcelFill } from 'react-icons/bs';
import './GeneralReport.css';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import * as XLSX from 'xlsx';
import { Link } from 'react-router-dom';
import axios from 'axios';

const itemsPerPage = 3;

function Generalreport() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5001/general-report');
      setData(response.data || []);
      console.log('Fetched Data:', response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = data.slice(indexOfFirstItem, indexOfLastItem) || [];

  const isFirstPage = currentPage === 1;
  const isLastPage = indexOfLastItem >= data.length;

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= Math.ceil(data.length / itemsPerPage)) {
      setCurrentPage(pageNumber);
    }
  };

  const exportExcel = () => {
    const ws = XLSX.utils.aoa_to_sheet([data[0], ...data.slice(indexOfFirstItem, indexOfLastItem)]);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'GeneralReport');
    XLSX.writeFile(wb, 'GeneralReport.xlsx');
  };

  return (
    <>
      <Navbar />
      <Sidebar />
      <div className='maincontgeneral'>
        <div className='GeneralReportBody'>
          <div className='General'>
            <div className='Row'>
              <div className='Report'>
                <Link to='/Areport'>
                  <AiOutlineArrowLeft className='icon-8' />
                </Link>
              </div>
              <div className='GeneralReport'>Report / General Report</div>
            </div><br></br>
          </div>
          <div className='Row1'>
            <div className='Selecttype'>
              <select className='Dropdown' id='Dropdown' name='Selecttype'>
                <option className='option-doe'>Select Type</option>
                <option className='option-doe' value='BirthDay Report'>BirthDay Report</option>
              </select>
            </div>
            <div className='Date'>
              <select className='Today' id='Today' name='Today'>
                {/* ... (other options) */}
              </select>
            </div>
            <form className='formgene'>
              <input className='Search' type='text' placeholder='Search' />
            </form>
            <div className='Searchicon'>
              <button className='Searchicon1'><BsSearch className='icon' /></button>
            </div>
            <div className='Exel'>
              <button className='excel' type='submit' onClick={exportExcel}><BsFileEarmarkExcelFill className='Icon2' /></button>
            </div>
          </div><br></br>
          <div className='Talke'>
            {data.length > 0 ? (
              <table className='daily-table'>
                <thead className='daily-thead'>
                  <tr className='daily-headrow'>
                    {data[0].map((header, index) => (
                      <th key={index} className='Th'>{header}</th>
                    ))}
                  </tr>
                </thead>
            
                <tbody className='daily-tablebody'>
                   {currentData.map((item, index) => (
                   <tr key={index} className='daily-tablerow'>
                       <td className='td-midd'>{item.patientName}</td>
                       <td className='td-midd'>{item.mobileNumber}</td>
                       <td className='td-midd'>{item.registrationDate}</td>
                       <td className='td-midd'>{item.address}</td>
                       <td className='td-midd'>{item.gender}</td>
                       <td className='td-midd'>{item.emailAddress}</td>
                     </tr>
                   ))}
                 </tbody>
              </table>
            ) : (
              <p>No data available</p>
            )}
          </div>
          <div className='kasu'>
            <button className='rama' onClick={() => handlePageChange(currentPage - 1)} disabled={isFirstPage}>
              <AiOutlineStepBackward />
            </button>
            <p className='dora'>{currentPage}</p>
            <button className='rama' onClick={() => handlePageChange(currentPage + 1)} disabled={isLastPage}>
              <AiOutlineStepForward />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Generalreport;
