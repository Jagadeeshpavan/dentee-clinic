import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import React, { useState } from 'react';
import './Email.css';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';


function App() {
  const [sendType, setSendType] = useState('individual');

  const handleSendTypeChange = (event) => {
    setSendType(event.target.value);
  };

  return (
    <>  
    <Navbar/>
    <Sidebar/>
    <div className='maincont222'>

    
    <div className="container-222">
      <div className="heading-222">
      <div className='patientdocument-head-222'>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div className='patient-icon-222'>
        <Link to="/Administator">
<AiOutlineArrowLeft/></Link></div>
        &nbsp;&nbsp;&nbsp; <div className='patient-heading-222'>Message / Email</div>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button className="send-button-222">Send Email</button>
         <Link to='/Emailpage'> <button className="view-report-button-222">View Email</button></Link>
        </div>
        {/* <span className="heading-text-222"><h1>Message/Email</h1></span> */}
       
      </div>
      <hr className="divider-222" />
      <div className="radio-group-222">
        <input
          type="radio"
          id="individual"
          value="individual"
          checked={sendType === 'individual'}
          onChange={handleSendTypeChange}
        />
        <label htmlFor="individual">Individual Send</label>
        <input
          type="radio"
          id="group"
          value="group"
          checked={sendType === 'group'}
          onChange={handleSendTypeChange}
        />
        <label htmlFor="group">Group Send</label>
      </div>
n


      <div className="send-fields-222">
        <div>
          <label htmlFor="send-to">Send To:</label>
          <input type="text" id="send-to" />
        </div>
        <div>
          <label htmlFor="email-subject">Email Subject:</label>
          <input type="text" id="email-subject" />
        </div>
      </div>
      <div className='Remarks-page-tnx-222'>
       
        <textarea className='rectangle-box-222' type='text' />
      </div>
      <div className='attach-20-222'>
        <h3>Attachments</h3>
        <div className="choose-files">
        <input type="file" id="file-upload" className="file-upload-input-222" multiple />
          <label htmlFor="file-upload" className="file-upload-label-222">
            select Files
          </label>
         
        </div>
      </div>
    </div>
    </div>
    </>
  );
}

export default App;