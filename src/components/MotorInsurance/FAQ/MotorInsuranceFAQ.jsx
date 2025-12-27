import React, { useState } from "react";
import "./MotorInsuranceFAQ.css";

const faqData = [
  {
    question: "What does motor insurance cover?",
    answer: (
      <p>
        A comprehensive motor package insurance policy provides coverage for own damage and third-party liabilities. 
        Under a motor insurance policy, losses or damages to the insured vehicle, caused due to natural and 
        manmade disasters are covered. Personal Accident Cover 
        is included in case of injury or death of registered owner-driver in any vehicle-related mishap.
      </p>
    ),
  },
  {
    question: "What is the period for which a motor policy is issued?",
    answer: (
      <p>
        Commonly, a motor insurance policy in India is issued for a period of 12 months, i.e. 1 year. 
        However, for two wheeler owners, it is now possible to opt for long-term motor insurance. 
        IRDAI has introduced long-term two-wheeler insurance for a policy term of up to 3 years..
      </p>
    ),
  },
  {
    question: "How can I cancel my claim?",
    answer: (
      <>
        <p>
          After filing a motor insurance claim, in case you wish to cancel the claimin 
          case you do not want to pay the deductible or for any other reasons you wish to cancel the claim, 
          you can reach us through any of the following modes:
        </p>
        <ul className="arrow-list">
          <li>Contact your insurance representative</li>
          <li>
            Call toll-free <strong>1800 2666</strong>
          </li>
          <li>
            Email us at{" "}
            <a href="mailto:customersupport@icicilombard.com">
              customersupport@icicilombard.com
            </a>
          </li>
        </ul>
      </>
    ),
  },
  {
    question: "What if I do not have a motor insurance policy?",
    answer: (
      <>
        <p>
          You must get a motor insurance policy for your own benefit. It’s not just the repair costs that you’ll 
          have to bear in case of any damages, you may also have to pay a fine of Rs. 2000 
          if you are caught driving without a valid motor vehicle insurance by the police.
          It is easy to buy motor insurance online if you have your vehicle registration number. 
          You can buy ICICI Lombard motor insurance either from our website or IL Insure app through the 
          following steps:
        </p>
        <ul className="arrow-list">
          <li>Enter the vehicle registration number and your contact details</li>
          <li>Review instant quote received for your motor insurance policy based on your vehicle type</li>
          <li>Pay the premium if you’re happy with quote</li>
          <li>View and download policy instantly online</li>
          <p>When you buy vehicle insurance online, remember to look for add-on features that suit your need.</p>
        </ul>
      </>
    ),
  },
  {
    question: "How is motor insurance premium calculated?",
    answer: (
      <p>
        Motor insurance premium for a vehicle is calculated on the basis of multiple factors, 
        including the Insured Declared Value (IDV) of the vehicle, make and model of the vehicle, 
        seating capacity, cubic capacity etc. The premium amount also depends on a few other factors 
        such as the type of policy chosen, deductibles, 
        and add-on covers. Third-party premiums are decided by the IRDAI.
      </p>
    ),
  },
  {
    question:
      "How is the Insured Declared Value (IDV) of my vehicle decided and how does it impact my coverage?",
    answer: (
      <>
        <p>The Insured’s Declared Value (IDV) of the vehicle will be deemed to be the ‘Sum Insured’ and 
            it will be fixed at the commencement of each policy period for each insured vehicle.<br/></p>
        <p>
            The IDV of the vehicle (and accessories if any fitted to the vehicle) is to be fixed on the basis of the 
            manufacturer’s listed selling price of the brand and model of the insured vehicle at the start of the 
            insurance or renewal. The IDV would subsequently change according to the depreciation grid below for 
            each one year block within the policy period for the insured vehicle. All ages of vehicles, provided 
            they have a valid fitness certificate as required by law, will be covered by the aforementioned product.
        </p>

        <table>
          <thead>
            <tr>
              <th>Age of Vehicle</th>
              <th>Depreciation (%)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Not exceeding 6 months</td><td>5%</td></tr>
            <tr><td>Exceeding 6 months but not exceeding 1 year</td><td>15%</td></tr>
            <tr><td>Exceeding 1 year but not exceeding 2 years</td><td>20%</td></tr>
            <tr><td>Exceeding 2 years but not exceeding 3 years</td><td>30%</td></tr>
            <tr><td>Exceeding 3 years but not exceeding 4 years</td><td>40%</td></tr>
            <tr><td>Exceeding 4 years but not exceeding 5 years</td><td>50%</td></tr>
          </tbody>
        </table>
        <br/>
            <div className="idv-note">
  <p>
    The IDV arrived as per the above method may also be adjusted basis various
    factors such as location, usage, road type/terrain etc., with agreement of
    the insured and as captured in the policy schedule.
  </p>

  <p>
    The age-wise depreciation schedule shown above is applicable only for Total
    Loss/Constructive Total Loss (TL/CTL)/Cash Loss claims.
  </p>

  <p>
    IDV of vehicles beyond 5 years of age and for obsolete models (i.e. models
    that manufacturers have discontinued) is to be determined on the basis of an
    agreement between the insurer and the insured.
  </p>

  <p>
    IDV shall be treated as the Market Value throughout the policy period without
    any further depreciation for the purpose of Total Loss (TL)/Constructive
    Total Loss (CTL)/Cash loss claims.
  </p>

  <p>
    The insured vehicle shall be treated as a CTL if the aggregate cost of
    retrieval and/or repair of the vehicle, subject to terms and conditions of
    the policy, exceeds 75% of the IDV of the vehicle.
  </p>

  <p>
    The liability of the Company shall not exceed the Insured's Declared Value
    (IDV) of the vehicle in the event of total loss/constructive total
    loss/cash loss for the year in which loss has occurred. In order to
    ascertain the Total IDV as on date of loss, a tenure-wise chart is
    accompanied in the policy schedule.
  </p>

  <p className="idv-formula">
    <strong>Insured Declared Value of Car</strong> = Manufacturer's listed selling
    price − Depreciation Value
  </p>

  <p>
    For instance, if your car is less than 6 months of age and its current market
    value is Rs. 10,00,000 then at a 5% rate of depreciation, the IDV would be
    around Rs. 9.5 lakh. However, if the car is above 1–2 years, then at a 20%
    rate, the IDV would be Rs. 8.0 lakh.
  </p>

  <p className="idv-disclaimer">
    * The above provisions of Insured Declared Value are in line with the
    erstwhile India Motor Tariff.
  </p>
</div>

      </>
    ),
  },
  {
    question: "What are the turnaround times (TAT) for my insurance services?",
    answer: (
      <table>
        <thead>
          <tr>
            <th>S.No.</th>
            <th>DESCRIPTION OF SERVICE</th>
            <th>Servicing TURN AROUND TIME</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td><td>TAT acceptance of proposal</td><td>07 days from the date of receipt of the proposal form</td>
        </tr>

            <tr>
            <td>2</td>
            <td>TAT for issuing of policies</td>
            <td>15 days of the acceptance of a proposal</td>
            </tr>

            <tr>
            <td>3</td>
            <td>TAT for passing an endorsement</td>
            <td>07 days from the date of receipt of request</td>
            </tr>

            <tr>
            <td>4</td>
            <td>TAT for policy servicing</td>
            <td>07 days from the date of receipt of request</td>
            </tr>

            <tr>
            <td>5</td>
            <td>TAT for appointment of surveyor</td>
            <td>24 hours of claim intimation</td>
            </tr>

            <tr>
            <td>6</td>
            <td>TAT for receipt of survey report</td>
            <td>15 days from appointment</td>
            </tr>

            <tr>
            <td>7</td>
            <td>TAT for claim approvals</td>
            <td>07 days from survey report / Assessment Sheet</td>
            </tr>

            <tr>
            <td>8</td>
            <td>TAT for settlement of claims</td>
            <td>07 days from survey report</td>
            </tr>

        </tbody>
      </table>
    ),
  },
  {
    question: "What are the base products available, and how can I access their relevant policy documents?",
    answer: (
      <table>
  <thead>
    <tr>
      <th>Sr No</th>
      <th>Product Name List</th>
      <th>UIN</th>
      <th>Product Type</th>
      <th>LOB</th>
      <th>Motor OD Tenure (Years)</th>
      <th>Motor TP Tenure (Years)</th>
      <th>Other Tenure</th>
      <th>Link to Policy Wordings / CIS</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>1</td>
      <td>Private Car Package Policy</td>
      <td>IRDAN115RP0017V01200102</td>
      <td>Package</td>
      <td>Motor</td>
      <td>1</td>
      <td>1</td>
      <td>-</td>
      <td>
        <a href="https://www.icicilombard.com/docs/default-source/default-document-library/private-car-package-policy-wording.pdf" target="_blank">
          Policy wordings
        </a><br />
        <a href="https://www.icicilombard.com/downloads" target="_blank">
          Other products
        </a>
      </td>
    </tr>

    <tr>
      <td>2</td>
      <td>Two Wheeler Vehicle Package Policy</td>
      <td>IRDAN115RP0015V05201415</td>
      <td>Package</td>
      <td>Motor</td>
      <td>1 / 2 / 3</td>
      <td>1</td>
      <td>-</td>
      <td>
        <a href="https://www.icicilombard.com/docs/default-source/default-document-library/two-wheeler-vehicle-package-policy8c0007ff45fd68ff8a0df0055fa6f6b4.pdf" target="_blank">
          Policy wordings
        </a><br />
        <a href="https://www.icicilombard.com/downloads" target="_blank">
          Other products
        </a>
      </td>
    </tr>

    <tr>
      <td>3</td>
      <td>Goods Carrying Vehicle Package Policy</td>
      <td>IRDAN115RP0013V01200203</td>
      <td>Package</td>
      <td>Motor</td>
      <td>1</td>
      <td>1</td>
      <td>-</td>
      <td>
        <a href="https://www.icicilombard.com/docs/default-source/default-document-library/goods-carrying-vehicle-package-policy-wording8c0007ff45fd68ff8a0df0055fb7cab0.pdf" target="_blank">
          Policy wordings
        </a><br />
        <a href="https://www.icicilombard.com/downloads" target="_blank">
          Other products
        </a>
      </td>
    </tr>

    <tr>
      <td>4</td>
      <td>Passenger Carrying Vehicle Package Policy</td>
      <td>IRDAN115RP0014V01200203</td>
      <td>Package</td>
      <td>Motor</td>
      <td>1</td>
      <td>1</td>
      <td>-</td>
      <td>
        <a href="https://www.icicilombard.com/docs/default-source/default-document-library/passenger-carrying-vehicle-package-policy-wording8c0007ff45fd68ff8a0df0055fb7cb26.pdf" target="_blank">
          Policy wordings
        </a><br />
        <a href="https://www.icicilombard.com/downloads" target="_blank">
          Other products
        </a>
      </td>
    </tr>

    <tr>
      <td>5</td>
      <td>Miscellaneous Vehicle Package Policy</td>
      <td>IRDAN115RP0015V01200203</td>
      <td>Package</td>
      <td>Motor</td>
      <td>1</td>
      <td>1</td>
      <td>-</td>
      <td>
        <a href="https://www.icicilombard.com/docs/default-source/default-document-library/miscellaneous-vehicle-package-policy-wording8c0007ff45fd68ff8a0df0055fb7caf1.pdf" target="_blank">
          Policy wordings
        </a><br />
        <a href="https://www.icicilombard.com/downloads" target="_blank">
          Other products
        </a>
      </td>
    </tr>

    <tr>
      <td>6</td>
      <td>Motor Trade Road Risk Package Policy</td>
      <td>IRDAN115RP0002V01200203</td>
      <td>Package</td>
      <td>Motor</td>
      <td>1</td>
      <td>1</td>
      <td>-</td>
      <td>
        <a href="https://www.icicilombard.com/docs/default-source/default-document-library/motor-trade-road-risk-package-policy8c0007ff45fd68ff8a0df0055fa6f36a.pdf" target="_blank">
          Policy wordings
        </a><br />
        <a href="https://www.icicilombard.com/downloads" target="_blank">
          Other products
        </a>
      </td>
    </tr>

    <tr>
      <td>7</td>
      <td>Motor Trade Road Transit Risk Package Policy</td>
      <td>IRDAN115RP0008V01202223</td>
      <td>Package</td>
      <td>Motor</td>
      <td>1</td>
      <td>1</td>
      <td>-</td>
      <td>
        <a href="https://www.icicilombard.com/docs/default-source/default-document-library/motor-trade-road-transit-risk-package-policy8c0007ff45fd68ff8a0df0055fa6f45c.pdf" target="_blank">
          Policy wordings
        </a><br />
        <a href="https://www.icicilombard.com/downloads" target="_blank">
          Other products
        </a>
      </td>
    </tr>

    <tr>
      <td>8</td>
      <td>Trailer Package Policy</td>
      <td>IRDAN115RP0006V01202223</td>
      <td>Package</td>
      <td>Motor</td>
      <td>1</td>
      <td>1</td>
      <td>-</td>
      <td>
        <a href="https://www.icicilombard.com/docs/default-source/default-document-library/trailer-package-policy8c0007ff45fd68ff8a0df0055fa72257.pdf" target="_blank">
          Policy wordings
        </a><br />
        <a href="https://www.icicilombard.com/downloads" target="_blank">
          Other products
        </a>
      </td>
    </tr>

    <tr>
      <td>9</td>
      <td>Motor Trade Internal Risk Package Policy</td>
      <td>IRDAN115RP0001V01200203</td>
      <td>Package</td>
      <td>Motor</td>
      <td>1</td>
      <td>1</td>
      <td>-</td>
      <td>
        <a href="https://www.icicilombard.com/docs/default-source/default-document-library/motor-trade-internal-risk-package-policy8c0007ff45fd68ff8a0df0055fa6f331.pdf" target="_blank">
          Policy wordings
        </a><br />
        <a href="https://www.icicilombard.com/downloads" target="_blank">
          Other products
        </a>
      </td>
    </tr>

    <tr>
      <td>10</td>
      <td>Compulsory Personal Accident (Owner-Driver)</td>
      <td>IRDAN115RP0034V01201819</td>
      <td>SPCA</td>
      <td>Motor</td>
      <td>NA</td>
      <td>NA</td>
      <td>Motor CPA – 1 Year</td>
      <td>
        <a href="https://www.icicilombard.com/docs/default-source/default-document-library/compulsory-personal-accident-owner-driver-policy-wording8c0007ff45fd68ff8a0df0055fa6f22b.pdf" target="_blank">
          Policy wordings
        </a><br />
        <a href="https://www.icicilombard.com/downloads" target="_blank">
          Other products
        </a>
      </td>
    </tr>

    <tr>
      <td>11</td>
      <td>Motor Extended Warranty Insurance</td>
      <td>UIN-IRDAN115RPMT0011V01202425</td>
      <td>EW</td>
      <td>Motor</td>
      <td>NA</td>
      <td>NA</td>
      <td>Motor EW – Annual / Multiple Years</td>
      <td>
        <a href="https://www.icicilombard.com/docs/default-source/default-document-library/motor-extended-warranty-insurance8c0007ff45fd68ff8a0df0055fa6f845.pdf" target="_blank">
          Policy wordings
        </a><br />
        <a href="https://www.icicilombard.com/downloads" target="_blank">
          Other products
        </a>
      </td>
    </tr>
  </tbody>
</table>
    ),
  },
  {
  question: "What criteria is considered to classify my insured vehicle as a Total Loss, Constructive Total Loss, or Cash Loss?",
  answer: (
    <>
      <p>
        An insured vehicle is classified as a Total Loss, Constructive Total Loss, or Cash Loss
        when the aggregate cost of retrieval and/or repair of the vehicle, subject to the terms
        and conditions of the policy, exceeds 75% of the Insured Declared Value (IDV) of the vehicle.
      </p>

      <p>
        As per the Master Circular on General Insurance business, if a damaged motor vehicle is
        assessed as unrepairable and declared a total loss or write-off, the insurer shall offer
        the policyholder an option to retain the wreck and accept a cash loss settlement. This
        settlement is calculated as the IDV minus the assessed salvage value, based on competitive
        quotes procured by the insurer, including any submitted by or through the policyholder.
      </p>

      <p>
        The liability of the insurer shall not exceed the Insured Declared Value (IDV) of the
        vehicle (including accessories) as specified in the policy schedule, less the value of
        the wreck, in the event of total loss, constructive total loss, or cash loss during the
        policy period. To determine the applicable IDV on the date of loss, a tenure-wise IDV
        chart is provided in the policy schedule.
      </p>

      <p>
        In case of total theft of the vehicle, the insurer’s liability shall not exceed the IDV
        of the vehicle (including accessories). However, the insurer shall not be liable for loss
        of or damage to accessories due to burglary, housebreaking, or theft unless the vehicle
        itself is stolen simultaneously.
      </p>

      <p>
        These provisions for determining Total Loss, Constructive Total Loss, and Cash Loss are
        in accordance with the erstwhile India Motor Tariff and the Master Circular on General
        Insurance products.
      </p>
    </>
  ),
}

];

const MotorInsuranceFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        <h2>Frequently asked questions about Motor insurance</h2>

        {faqData.map((item, index) => (
          <div className="faq-item" key={index}>
            <button
              className={`faq-question ${
                activeIndex === index ? "active" : ""
              }`}
              onClick={() => toggleFAQ(index)}
            >
              {item.question}
              <span className="arrow">
                {activeIndex === index ? "▲" : "▼"}
              </span>
            </button>

            {activeIndex === index && (
              <div className="faq-answer">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default MotorInsuranceFAQ;
