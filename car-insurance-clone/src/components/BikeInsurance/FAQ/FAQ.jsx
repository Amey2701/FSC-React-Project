import React, { useState } from "react";
import "./FAQ.css";

const faqData = [
  {
    question:
      "In case I change my job and location, what happens to my two-wheeler insurance policy?",
    answer: (
      <p>
        A bike insurance policy is valid anywhere in the country. Hence, if you
        change your job and shift to a new location, you can continue with the
        same policy. You simply have to inform us of the change.
      </p>
    ),
  },

  {
    question:
      "Once the break-in inspection request is raised online, how long does it take to get the policy?",
    answer: (
      <p>
        Once you raise a request, the inspection will happen within 48 hours.
        Once the inspection is complete, you will receive your policy
        immediately.
      </p>
    ),
  },

  {
    question: "What are the documents required to buy a bike insurance online?",
    answer: (
      <p>
        You don’t need to provide any documents while getting the insurance for
        the first time. You only need to share your details along with the
        details of your vehicle. Typically, renewals also do not require you to
        submit any documents. All you need to do is provide us with the right
        details about your bike and the existing policy. Be sure to provide the
        correct and relevant details while buying the policy online.
      </p>
    ),
  },

  {
    question:
      "Can I take insurance policies from 2 different companies for the same vehicle at the same time?",
    answer: <p>No, you cannot do so.</p>,
  },

  {
    question: "How is motor insurance premium calculated?",
    answer: (
      <p>
        Motor insurance premium for a vehicle is calculated on the basis of
        multiple factors, including the Insured Declared Value (IDV) of the
        vehicle, make and model of the vehicle, seating capacity, cubic capacity
        etc. The premium amount also depends on a few other factors such as the
        type of policy chosen, deductibles, and add-on covers. Third-party
        premiums are decided by the IRDAI.
      </p>
    ),
  },
  {
  question:
    "How is the Insured Declared Value (IDV) of my vehicle decided and how does it impact my coverage?",
  answer: (
    <>
      <p>
        The Insured’s Declared Value (IDV) of the vehicle will be deemed to be the
        ‘Sum Insured’ and it will be fixed at the commencement of each policy
        period for each insured vehicle.
      </p>

      <p>
        The IDV of the vehicle (and accessories, if any fitted to the vehicle) is
        fixed on the basis of the manufacturer’s listed selling price of the brand
        and model of the insured vehicle at the start of insurance or renewal.
        The IDV changes according to the depreciation schedule mentioned below
        for each one-year block within the policy period.
      </p>

      <p>
        All ages of vehicles, provided they have a valid fitness certificate as
        required by law, will be covered by the product.
      </p>

      <p><strong>Schedule of depreciation for fixing IDV of the vehicle</strong></p>

      <table>
        <thead>
          <tr>
            <th>Age of Vehicle</th>
            <th>% of Depreciation for Fixing IDV</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Not exceeding 6 months</td>
            <td>5%</td>
          </tr>
          <tr>
            <td>Exceeding 6 months but not exceeding 1 year</td>
            <td>15%</td>
          </tr>
          <tr>
            <td>Exceeding 1 year but not exceeding 2 years</td>
            <td>20%</td>
          </tr>
          <tr>
            <td>Exceeding 2 years but not exceeding 3 years</td>
            <td>30%</td>
          </tr>
          <tr>
            <td>Exceeding 3 years but not exceeding 4 years</td>
            <td>40%</td>
          </tr>
          <tr>
            <td>Exceeding 4 years but not exceeding 5 years</td>
            <td>50%</td>
          </tr>
        </tbody>
      </table>

      <p>
        The IDV arrived as per the above method may also be adjusted based on
        various factors such as location, usage, road type or terrain, with the
        agreement of the insured and as captured in the policy schedule.
      </p>

      <p>
        The age-wise depreciation schedule shown above is applicable only for
        Total Loss (TL), Constructive Total Loss (CTL), or Cash Loss claims.
      </p>

      <p>
        IDV of vehicles beyond 5 years of age and for obsolete models (i.e. models
        that manufacturers have discontinued) is determined on the basis of an
        agreement between the insurer and the insured.
      </p>

      <p>
        IDV shall be treated as the Market Value throughout the policy period
        without any further depreciation for the purpose of Total Loss (TL),
        Constructive Total Loss (CTL), or Cash Loss claims.
      </p>

      <p>
        The insured vehicle shall be treated as a Constructive Total Loss if the
        aggregate cost of retrieval and/or repair of the vehicle, subject to the
        policy terms and conditions, exceeds 75% of the IDV of the vehicle.
      </p>

      <p>
        The liability of the Company shall not exceed the Insured Declared Value
        (IDV) of the vehicle in the event of total loss, constructive total loss,
        or cash loss for the year in which the loss has occurred. To ascertain
        the applicable IDV on the date of loss, a tenure-wise IDV chart is provided
        in the policy schedule.
      </p>

      <p>
        <strong>Insured Declared Value of Car</strong> = Manufacturer’s listed
        selling price − Depreciation value
      </p>

      <p>
        For example, if your car is less than 6 months old and its current market
        value is ₹10,00,000, then at a 5% depreciation rate, the IDV would be
        approximately ₹9.5 lakh. If the car is between 1–2 years old, then at a
        20% depreciation rate, the IDV would be ₹8.0 lakh.
      </p>

      <p>
        <em>
          * The above provisions of Insured Declared Value are in line with the
          erstwhile India Motor Tariff.
        </em>
      </p>
    </>
  ),
},
{
  question: "What are the turnaround times (TAT) for my insurance services?",
  answer: (
    <>
      <table>
        <thead>
          <tr>
            <th>Sr No</th>
            <th>Description of Service</th>
            <th>Servicing Turn Around Time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>TAT acceptance of proposal</td>
            <td>07 days from the date of receipt of the proposal form</td>
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
    </>
  ),
},
{
  question:
    "What are the base products available, and how can I access their relevant policy documents?",
  answer: (
    <>
      <table>
        <thead>
          <tr>
            <th>Sr No</th>
            <th>Product Name</th>
            <th>UIN</th>
            <th>Product Type</th>
            <th>LOB</th>
            <th>Motor OD Tenure (Years)</th>
            <th>Motor TP Tenure (Years)</th>
            <th>Other Tenure</th>
            <th>Policy Documents</th>
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
              <a
                href="https://www.icicilombard.com/docs/default-source/default-document-library/private-car-package-policy-wording.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Policy wordings
              </a>
              <br />
              <a
                href="https://www.icicilombard.com/downloads"
                target="_blank"
                rel="noopener noreferrer"
              >
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
              <a
                href="https://www.icicilombard.com/docs/default-source/default-document-library/two-wheeler-vehicle-package-policy8c0007ff45fd68ff8a0df0055fa6f6b4.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Policy wordings
              </a>
              <br />
              <a
                href="https://www.icicilombard.com/downloads"
                target="_blank"
                rel="noopener noreferrer"
              >
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
              <a
                href="https://www.icicilombard.com/docs/default-source/default-document-library/goods-carrying-vehicle-package-policy-wording8c0007ff45fd68ff8a0df0055fb7cab0.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Policy wordings
              </a>
              <br />
              <a
                href="https://www.icicilombard.com/downloads"
                target="_blank"
                rel="noopener noreferrer"
              >
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
              <a
                href="https://www.icicilombard.com/docs/default-source/default-document-library/passenger-carrying-vehicle-package-policy-wording8c0007ff45fd68ff8a0df0055fb7cb26.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Policy wordings
              </a>
              <br />
              <a
                href="https://www.icicilombard.com/downloads"
                target="_blank"
                rel="noopener noreferrer"
              >
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
              <a
                href="https://www.icicilombard.com/docs/default-source/default-document-library/miscellaneous-vehicle-package-policy-wording8c0007ff45fd68ff8a0df0055fb7caf1.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Policy wordings
              </a>
              <br />
              <a
                href="https://www.icicilombard.com/downloads"
                target="_blank"
                rel="noopener noreferrer"
              >
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
              <a
                href="https://www.icicilombard.com/docs/default-source/default-document-library/motor-trade-road-risk-package-policy8c0007ff45fd68ff8a0df0055fa6f36a.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Policy wordings
              </a>
              <br />
              <a
                href="https://www.icicilombard.com/downloads"
                target="_blank"
                rel="noopener noreferrer"
              >
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
              <a
                href="https://www.icicilombard.com/docs/default-source/default-document-library/motor-trade-road-transit-risk-package-policy8c0007ff45fd68ff8a0df0055fa6f45c.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Policy wordings
              </a>
              <br />
              <a
                href="https://www.icicilombard.com/downloads"
                target="_blank"
                rel="noopener noreferrer"
              >
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
              <a
                href="https://www.icicilombard.com/docs/default-source/default-document-library/trailer-package-policy8c0007ff45fd68ff8a0df0055fa72257.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Policy wordings
              </a>
              <br />
              <a
                href="https://www.icicilombard.com/downloads"
                target="_blank"
                rel="noopener noreferrer"
              >
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
              <a
                href="https://www.icicilombard.com/docs/default-source/default-document-library/motor-trade-internal-risk-package-policy8c0007ff45fd68ff8a0df0055fa6f331.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Policy wordings
              </a>
              <br />
              <a
                href="https://www.icicilombard.com/downloads"
                target="_blank"
                rel="noopener noreferrer"
              >
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
              <a
                href="https://www.icicilombard.com/docs/default-source/default-document-library/compulsory-personal-accident-owner-driver-policy-wording8c0007ff45fd68ff8a0df0055fa6f22b.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Policy wordings
              </a>
              <br />
              <a
                href="https://www.icicilombard.com/downloads"
                target="_blank"
                rel="noopener noreferrer"
              >
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
            <td>Annual / Multiple Years</td>
            <td>
              <a
                href="https://www.icicilombard.com/docs/default-source/default-document-library/motor-extended-warranty-insurance8c0007ff45fd68ff8a0df0055fa6f845.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Policy wordings
              </a>
              <br />
              <a
                href="https://www.icicilombard.com/downloads"
                target="_blank"
                rel="noopener noreferrer"
              >
                Other products
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  ),
},
{
  question:
    "What criteria is considered to classify my insured vehicle as a Total Loss, Constructive Total Loss, or Cash Loss?",
  answer: (
    <>
      <p>
        The insured vehicle will be treated as a <strong>Total Loss</strong>,{" "}
        <strong>Constructive Total Loss</strong>, or <strong>Cash Loss</strong> if
        the aggregate cost of retrieval and/or repair of the vehicle, subject to
        the policy’s terms and conditions, exceeds <strong>75% of the Insured
        Declared Value (IDV)</strong> of the vehicle.
      </p>

      <p>
        As guided by the Master Circular on General Insurance business, if a
        damaged motor vehicle is assessed as unrepairable and declared a total
        loss or write-off, the insurer shall offer the policyholder an option to
        retain the wreck and accept a <strong>cash loss settlement</strong>. This
        settlement is calculated as the IDV minus the assessed salvage value,
        based on competitive quotes procured by the insurer, including any
        submitted by or through the policyholder.
      </p>

      <p>
        The liability of the Company shall not exceed the Insured’s Declared Value
        (IDV) of the vehicle (including accessories) as specified in the policy
        schedule, less the value of the wreck, in the event of total loss,
        constructive total loss, or cash loss during the policy period. To
        determine the applicable IDV on the date of loss, a tenure-wise IDV chart
        is provided in the policy schedule.
      </p>

      <p>
        In case of <strong>Total Theft</strong> of the vehicle, the Company’s
        liability shall not exceed the IDV of the vehicle (including accessories).
        However, the Company shall not be liable for loss of or damage to
        accessories due to burglary, housebreaking, or theft unless the vehicle
        itself is stolen simultaneously.
      </p>

      <p className="faq-note">
        * The above provisions for determining Total Loss, Constructive Total
        Loss, and Cash Loss are in line with the erstwhile India Motor Tariff and
        are guided by the Master Circular on General Insurance products.
      </p>
    </>
  ),
}
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        <h2 className="faq-title">Frequently Asked Questions</h2>

        {faqData.map((item, index) => (
          <div className="faq-item" key={index}>
            <button
              className={`faq-question ${
                activeIndex === index ? "active" : ""
              }`}
              onClick={() => toggleFAQ(index)}
            >
              <span>{item.question}</span>
              <span className="arrow">
                {activeIndex === index ? "−" : "+"}
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

export default FAQ;