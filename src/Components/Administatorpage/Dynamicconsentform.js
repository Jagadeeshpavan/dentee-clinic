import React from 'react';
import './Dynamicconsentform.css';
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';

function ConsentForm() {
  return (
    <>  
     <Navbar/>
    <Sidebar/>
    <div className='maincontconsentform'>
      <div className="consent-form-89">
        {/* <div className='main-head-ipog-89'>
          <div className='mainhead-icon-ipog-89'>
            <Link to="/Dynamicconsent">
              <AiOutlineArrowLeft />
            </Link>
          </div>
          <div className='main-heading-ipog-89'>Administrator/Dynamic Consent Form</div>
        </div> */}
        <h1 className='concent-12'>Consent Form</h1>
        <form className='concent-00'>
          <p className='concent-43'>
            I <span className='concent-89' contentEditable={true}>..........................</span> son/daughter of <span className='concent-89' contentEditable={true}>............................</span> aged <span className='concent-89' contentEditable={true}>..........................</span> resident of
            <span className='concent-89' contentEditable={true}>........................................</span> being under the treatment of <span className='concent-89' contentEditable={true}>.......................................</span>
            (state here name of doctor/hospital/nursing home) do hereby give consent to the performance of
            medical/surgical /anesthesia/ diagnostic procedure of <span className='concent-89' contentEditable={true}>................................................</span> (mention nature
            of procedure / treatment to be performed, etc.) upon myself/upon <span className='concent-89' contentEditable={true}>.........................</span> aged <span className='concent-89' contentEditable={true}>..........................</span> who is related to me as
            <span className='concent-89' contentEditable={true}>...............................</span> (mention here relationship, e.g., son, daughter, father, mother, wife, etc.).
          </p>

          <p className='concent-43'>
            I declare that I am more than 18 years of age. I have been informed that there are inherent risks involved in
            the treatment / procedure. I have signed this consent voluntarily out of my free will without any pressure and
            in my full senses.
          </p>

          <p className='concent-43'>
            Date : <span contentEditable={true}>_________</span>
            Place : <span contentEditable={true}>_________</span>
          </p>
          
          <p className='concent-43'>
            Signature ( To be signed by parent /guardian in case of minor): <span contentEditable={true}>_________</span>
            Time : <span contentEditable={true}>_________</span>
          </p>
          
        
          <p className='concent-43'>
            NOTES :- </p>
          <p className='concent-43'> 1. This Consent Form should be signed before the treatment is started. These formats may be modified as per individual requirements.</p>

          <p className='concent-43'> 2. These formats should be in the local language and in certain cases it would be prudent to have a proper witness to the consent signature.</p>

        </form>
      </div>
      </div>
    </>  
  );
}

export default ConsentForm;