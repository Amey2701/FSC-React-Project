import React from "react";
import "./DocumentsRequired.css";

const DocumentsRequired = () => {
  return (
    <section className="docs-section">

      <h2 className="docs-title">
        Documents required for filing a car insurance claim online
      </h2>

      <div className="docs-container">

        {/* LEFT SIDE DOCUMENT LIST */}
        <div className="docs-left">

          <div className="docs-block">
            <h3>Documents required for filing a car insurance claim online:</h3>
            <ul>
              <li>Completed claim form</li>
              <li>
                Copy of registration certificate (RC) (in case of a new vehicle 
                which is less than 3 months old and RC is not available, tax 
                receipts and vehicle purchase invoice is collected)
              </li>
              <li>Aadhaar/PAN card</li>
            </ul>
          </div>

          <div className="docs-block">
            <h3>In case of a reimbursement claim:</h3>
            <ul>
              <li>
                Original claim form with NEFT mandate form (NEFT form is required 
                only for non-cashless cases)
              </li>
              <li>
                Copy of registration certificate (RC)
              </li>
              <li>
                Copy of the driving license of the person driving the vehicle 
                at the time of the accident
              </li>
              <li>Copy of policy</li>
              <li>Certified copy of one valid document & PAN card/Form 60</li>
              <li>
                FIR or police report (depending on loss type)
              </li>
              <li>Garage estimate</li>
              <li>Repair invoice</li>
              <li>Cancelled cheque for reimbursement</li>
            </ul>
          </div>

        </div>

        {/* RIGHT SIDE DOCUMENT LIST */}
        <div className="docs-right">

          <div className="docs-block">
            <h3>In case of total loss and net salvage claims:</h3>
            <ul>
              <li>All basic documents</li>
              <li>Original RC</li>
              <li>Original policy schedule</li>
              <li>Form 28, 29 & 30 (three copies)</li>
              <li>Indemnity bond</li>
              <li>Copy of PAN card</li>
              <li>FIR (wherever required)</li>
              <li>NEFT form + cancelled cheque</li>
              <li>No Objection Certificate (NOC)</li>
            </ul>
          </div>

          <div className="docs-block">
            <h3>In case of extended warranty claims</h3>
            <ul>
              <li>Regular service history records</li>
              <li>Reading of Speedometer/Odometer</li>
            </ul>
          </div>

          <img
            src="https://www.icicilombard.com/docs/default-source/assets/car-landing-new/images/docs_required.png"
            alt="Documents Required"
            className="docs-image"
          />

        </div>

      </div>
    </section>
  );
};

export default DocumentsRequired;
