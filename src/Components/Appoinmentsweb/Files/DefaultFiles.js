

// import React from 'react'
import { useRef, useState } from 'react';
import './DefaultFiles.css'
import {FaQuestionCircle,FaCloudUploadAlt} from 'react-icons/fa'
import {AiFillFolder,AiFillExclamationCircle} from 'react-icons/ai'
import Popup from 'reactjs-popup';
import { Link } from 'react-router-dom';
import Appointment_header from '../Appointment-header';


// class Files extends React.Component {
    const Files = () => {

        const inputRef = useRef(null);

        const handleImageClick = () =>{
          inputRef.current.click();
        }
        const input1Ref = useRef(null);
        const handleImage1Click = () =>{
            inputRef.current.click();
          }
// --------------------------------------------
          const [activeSection, setActiveSection] = useState('');

          const handleButtonClick = (section) => {
            setActiveSection(section);
          };
      
  return (
    <div className='file-head'>
        <div className='file-main'>
            {/* <button className='document'>Document</button>
            <button className='consentform' >Consent Form</button>
            <FaQuestionCircle className='file-icon'/> */}
        </div>
        <div className='file-box'>
            <div className='file-main'>
            <div className='file-col'>
                <div className='file-show'>SHOW:</div>
{/* -----------------------------------------popup-------------------------------------------// */}
                <Popup trigger=
                    {<button className='file-upload'>Upload Files</button>}
                    position='bottom left'>
                    <div className='file-popup-box'>
                    <div className='file-main'>
                        <div className='file-popup-box1'>
                            <div className='file-main'>
                                <AiFillExclamationCircle className='file-icon3' />
                                <div className='file-portlet'>Portlet Drag and Drop Uploader</div>
                            </div>
                            <div className='file-box2'>
                                <div className='file-box3'>
                                <div className='file-left-upload' onClick={handleImageClick} >
                               <div><button className='file-button'><FaCloudUploadAlt className='file-icon4' /></button></div>
                              <input type='file' ref={inputRef} className='file-btn-upload' placeholder='upload'></input> 
                            </div>
                                    <div className='file-main'>
                                        <div className='file-drop'>Drop Files</div>
                                        <div className='file-to'>to upload</div>
                                    </div> 
                                    <div className='file-click'>(or click)</div>   
                                </div>
                                
                            </div>
                        </div>
                        <div className='file-col'>
                        <select className='file-select1'>
                            <option>Patient Reports</option>
                            <option>Testimonials</option>
                            <option>Scanned Images</option>
                        </select>
                        <input type='text' placeholder='Description' className='file-input'></input>
                        <div className='file-main'>
                        <button className='file-save'>Save</button>
                        <Link to='/Appoint'><button className='file-cancel'>Cancel</button></Link>
                        </div>
                        </div>
                    </div>
                    </div>
                </Popup>
                {/* --------------------------------------------------------------------// */}
                <div className='file-folder'>FOLDERS</div>
                <div className='file-main'><AiFillFolder className='file-icon1' /><div className='file-patient'>Patient Reports</div></div>
                <div className='file-line'></div>
                <div className='file-main'><AiFillFolder className='file-icon2' /><div className='file-scan'>Scanned Images</div></div>
                <div className='file-line'></div>
                <div className='file-main'><AiFillFolder className='file-icon2' /><div className='file-scan'>Testimonials</div></div>
                <div className='file-line'></div>
            </div>
            <div className='file-col'>
            <div className='file-there'>There are no files</div>
            <div className='' onClick={handleImage1Click}>
              <div><button className='file-upload1'>Upload Files</button></div>
              <input type='file' ref={input1Ref} className='file-img-upload-10' placeholder='upload'></input> 
              </div>
            </div>
            </div>
        </div>
    </div>
  )
}


export default Files