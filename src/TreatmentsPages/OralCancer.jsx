import React from "react";
import { Link } from "react-router-dom";
import oral_cancer from "../img/oral_cancer1.jpg";

const OralCancer = () => {
  return (
    <div>
      {" "}
      <section class="breadcrumbs" style={{ marginTop: "0px" }}>
        <div class="container">
          <ol>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>Treatments</li>
          </ol>
          <h2>Oral Cancer Surgery </h2>
        </div>
      </section>
      <div className="container">
        <div
          className="d-flex cardd  my-3"
          style={{ flexDirection: "column", justifyContent: "center" }}
        >
          <div className="text-center">
            <img src={oral_cancer} alt="" className="img-fluid" />
          </div>

          <br />
          <div className="text-justify">
            <b> Oral cancer or mouth cancer</b>, a type of head and neck cancer,
            is any cancerous tissue growth located in the oral cavity.
            <br />
            <br />
            There are several types of oral cancers, but around 90% are squamous
            cell carcinomas, originating in the tissues that line the mouth and
            lips.
            <br />
            <br />
            Oral or mouth cancer most commonly involves the tongue. It may also
            occur on the floor of the mouth, cheek lining, gingiva (gums), lips,
            or palate (roof of the mouth).
            <br />
            <br />
            <br />
            <h3>
              <b>Signs and symptoms</b>
            </h3>
            Skin lesion, lump, or ulcer that do not resolve in 14 days located:
            <ul>
              <li> On the tongue, lip, or other mouth areas</li>
              <li> Usually small</li>{" "}
              <li> Most often pale colored, may be dark or discolored</li>
              <li>
                Early sign may be a white patch (leukoplakia) or a red patch
                (erythroplakia) on the soft tissues of the mouth
              </li>
              <li> Usually painless initially</li>
              <li>
                May develop a burning sensation or pain when the tumor is
                advanced
              </li>
              <br />
              <b>
                Additional symptoms that may be associated with this disease:
              </b>
              <br />
              <li> Tongue problems (moving it)</li>
              <li> Swallowing difficulty</li>
              <li> Pain and paraesthesia are late symptoms.</li>
            </ul>
            <h3>
              <b>Premalignant lesions</b>
            </h3>
            <p>
              A premalignant (or precancerous) lesion is defined as "a benign,
              morphologically altered tissue that has a greater than normal risk
              of malignant transformation." There are several different types of
              premalignant lesion that occur in the mouth. Some oral cancers
              begin as white patches (leukoplakia), red patches (erythroplakia)
              or mixed red and white patches (erythroleukoplakia or "speckled
              leukoplakia"). Other common premalignant lesions include oral
              lichen planus (particularly the erosive type), oral submucous
              fibrosis and actinic cheilitis. In the Indian subcontinent oral
              submucous fibrosis is very common. This condition is characterized
              by limited opening of mouth and burning sensation on eating of
              spicy food. This is a progressive lesion in which the opening of
              the mouth becomes progressively limited, and later on even normal
              eating becomes difficult. It occurs almost exclusively in India
              and Indian communities living abroad.
            </p>
            <h3>
              <b>Causes</b>
            </h3>
            <p className="text-danger">
              <b>Tobacco</b>
            </p>
            Smoking and other tobacco use are associated with about 75 percent
            of oral cancer cases, caused by irritation of the mucous membranes
            of the mouth from smoke and heat of cigarettes, cigars, and pipes.
            Tobacco contains over 60 known carcinogens, and the combustion of
            it, and by-products from this process, is the primary mode of
            involvement. Use of chewing tobacco or snuff causes irritation from
            direct contact with the mucous membranes.
            <br />
            <br />
            <p className="text-danger">
              <b>Alcohol</b>
            </p>
            <h4>
              <>Human papillomavirus</>
            </h4>
            <br />
            <h3>Diagnosis</h3>
            An examination of the mouth by the health care provider or dentist
            shows a visible and/or palpable (can be felt) lesion of the lip,
            tongue, or other mouth area. The lateral/ventral sides of the tongue
            are the most common sites for intraoral SCC. <br />
            <br />
            A tissue biopsy, whether of the tongue or other oral tissues and
            microscopic examination of the lesion confirm the diagnosis of oral
            cancer or precancer.
            <br />
            <br />
            The doctor can order some special investigations which may include a
            chest x-ray, CT or MRI scans.
            <br />
            <br />
            <h3>Management</h3>
            Surgical excision (removal) of the tumor is usually recommended if
            the tumor is small enough, and if surgery is likely to result in a
            functionally satisfactory result. Radiation therapywith or without
            chemotherapy is often used in conjunction with surgery, or as the
            definitive radical treatment, especially if the tumour is
            inoperable. Surgeries for oral cancers include <br />
            <br />
            <li>
              Maxillectomy (can be done with or without orbital exenteration)
            </li>
            <li>
              Mandibulectomy (removal of the mandible or lower jaw or part of
              it)
            </li>
            <li>Glossectomy (tongue removal, can be total, hemi or partial)</li>
            <li> Radical neck dissection including various types</li>
            <li>
              Combinational e.g. glossectomy and laryngectomy done together.
            </li>
            <li> Feeding tube to sustain nutrition.</li>
            <br />
            <br />
            <p>
              Owing to the vital nature of the structures in the head and neck
              area, surgery for larger cancers is technically demanding.
              Reconstructive surgery may be required to give an acceptable
              cosmetic and functional result. Pedicle or free surgical flaps
              such as the radial forearm flap, Anterolateral thigh flap, free
              fibular flap are used to help rebuild the structures removed
              during excision of the cancer. An oral prosthesis may also be
              required. Most oral cancer patients depend on a feeding tube for
              their hydration and nutrition. Some will also get a port for the
              chemo to be delivered.
              <br />
              <br />
              Many oral cancer patients are disfigured and suffer from many long
              term after effects. The after effects often include fatigue,
              speech problems, trouble maintaining weight, thyroid issues,
              swallowing difficulties, inability to swallow, memory loss,
              weakness, dizziness, high frequency hearing loss and sinus damage.
              <br />
              <br />
              Survival rates for oral cancer depend on the precise site, and the
              stage of the cancer at diagnosis.
              <br />
              <br />
              Survival rates for stage 1 cancers are approximately 90%, hence
              the emphasis on early detection to increase survival outcome for
              patients.
            </p>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OralCancer;
