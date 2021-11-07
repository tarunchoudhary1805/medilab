import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router";

const BreastOncoplastic = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <div>
      <section class="breadcrumbs" style={{ marginTop: "0px" }}>
        <div class="container">
          <ol>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>Treatments</li>
          </ol>
          <h2>Breast Oncoplastic Surgery </h2>
        </div>
      </section>

      <div className="container">
        <div
          className="d-flex cardd  my-3"
          style={{ flexDirection: "column", justifyContent: "center" }}
        >
          <div>
            <h4>
              <b>What is Breast Cancer?</b>
            </h4>
            <>
              <p>
                It is characterized by uncontolled growth in breast tissues
                which may arise from lobules which secrte milk or ducts (most
                common) in which milk flaws.
              </p>
              <p>
                When “controls” in breast cells are not working properly and
                allows continuous growth then cancer forms. There it forms hard
                lump or swelling and over the time it increases in size called
                as localized disease-stage I or II.
              </p>
              <p>
                Over time, cancer cells can invade nearby healthy breast tissue
                and make their way into the underarm lymph nodes called
                locoregional disease-stage III.
              </p>
              <p>
                And finally goes to another parts of body via blood like
                bones,liver,lungs,brain etc, called distant disease-stage IV.
              </p>
              <article />
            </>
            <h4>
              <b>Breast Cancer Risk Factors</b>
            </h4>
            <>
              <p>
                A “risk factor” is anything that increases your risk of
                developing breast cancer.
                <br />
                <br />
                Be sure to talk with your doctor about all of your possible risk
                factors for breast cancer. There may be steps you can take to
                lower your risk of breast cancer, and your doctor can help you
                come up with a plan. Your doctor also needs to be aware of any
                other risk factors beyond your control, so that he or she has an
                accurate understanding of your level of breast cancer risk. This
                can influence recommendations about breast cancer screening —
                what tests to have and when to start having them.
              </p>
            </>
          </div>
          <section id="faq" class="faq section-bg">
            <div class="container">
              <div class="faq-list">
                <ul>
                  <li data-aos="fade-up">
                    <i class="bx bx-help-circle icon-help"></i>{" "}
                    <a
                      data-bs-toggle="collapse"
                      class="collapse"
                      data-bs-target="#faq-list-1"
                    >
                      Risk factors you can control
                      <i class="bx bx-chevron-down icon-show"></i>
                      <i class="bx bx-chevron-up icon-close"></i>
                    </a>{" "}
                    <div
                      id="faq-list-1"
                      class="collapse show"
                      data-bs-parent=".faq-list"
                    >
                      <>
                        <>
                          {" "}
                          <br />
                          <strong>Weight.</strong>
                          <span>
                            &nbsp;Being overweight is associated with increased
                            risk of breast cancer, especially for women after
                            menopause. Fat tissue is the body’s main source of
                            estrogen after menopause, when the ovaries stop
                            producing the hormone. Having more fat tissue means
                            having higher estrogen levels, which can increase
                            breast cancer risk.
                          </span>
                          <br />
                          <br />
                          <strong>Diet.</strong>
                          <span>
                            &nbsp;Diet is a suspected risk factor for many types
                            of cancer, including breast cancer, but studies have
                            yet to show for sure which types of foods increase
                            risk.
                          </span>
                          <br />
                          <br />
                          <span>
                            Some researchers believe that eating too much
                            cholesterol and other fats are risk factors for
                            cancer, and studies show that eating a lot of red
                            and/or processed meats is associated with a higher
                            risk of breast cancer. A low-fat diet rich in fruits
                            and vegetables is generally recommended.
                          </span>
                          <br />
                          <br />
                          <strong>Exercise.</strong>
                          <span>
                            &nbsp;Evidence is growing that exercise can reduce
                            breast cancer risk. It is recommended that engaging
                            in 45-60 minutes of physical exercise 5 or more days
                            a week can reduce cancer risk.
                          </span>
                          <br />
                          <br />
                          <strong>Alcohol consumption.</strong>
                          <span>
                            &nbsp;Studies have shown that breast cancer risk
                            increases with the amount of alcohol a woman drinks.
                            Alcohol can limit your liver’s ability to control
                            blood levels of the hormone estrogen, which in turn
                            can increase risk.
                          </span>
                          <br />
                          <br />
                          <strong>Smoking.</strong>
                          <span>
                            &nbsp;Smoking is associated with a small increase in
                            breast cancer risk.
                          </span>
                          <br />
                          <br />
                          <strong>Stress and anxiety.</strong>
                          <span>
                            &nbsp;There is no clear proof that stress and
                            anxiety can increase breast cancer risk. However,
                            anything you can do to reduce your stress and to
                            enhance your comfort, joy, and satisfaction can have
                            a major effect on your quality of life. So-called
                            “mindful measures” (such as meditation, yoga,
                            visualization exercises, and prayer) may be valuable
                            additions to your daily or weekly routine. It is
                            believed that these practices can strengthen the
                            immune system.
                          </span>
                          <br />
                        </>
                      </>
                    </div>
                  </li>
                  <li data-aos="fade-up">
                    <i class="bx bx-help-circle icon-help"></i>{" "}
                    <a
                      data-bs-toggle="collapse"
                      class="collapse"
                      data-bs-target="#faq-list-2"
                    >
                      Risk factors you can’t control
                      <i class="bx bx-chevron-down icon-show"></i>
                      <i class="bx bx-chevron-up icon-close"></i>
                    </a>
                    <div
                      id="faq-list-2"
                      class="collapse show"
                      data-bs-parent=".faq-list"
                    >
                      <>
                        <>
                          <br />
                          <strong>Gender.</strong>
                          <span>
                            &nbsp;Being a woman is the most significant risk
                            factor for developing breast cancer. Although men
                            can get breast cancer, too, women’s breast cells are
                            constantly changing and growing, mainly due to the
                            activity of the female hormones estrogen and
                            progesterone.
                          </span>
                          <br />
                          <br />
                          <strong>Age.</strong>
                          <span>
                            &nbsp;Simply growing older is the second biggest
                            risk factor for breast cancer. From age 30 to 39,
                            the risk is 1 in 227, or .44%. That jumps to 1 in
                            28, or just under 4%, by the time you are in your
                            60s.
                          </span>
                          <br />
                          <br />
                          <strong>Family history of breast cancer.</strong>
                          <span>
                            &nbsp;If you have a first-degree relative (mother,
                            daughter, sister) who has had breast cancer, or you
                            have multiple relatives affected by breast or
                            ovarian cancer (especially before they turned age
                            50), you could be at higher risk of getting breast
                            cancer.
                          </span>
                          <br />
                          <br />
                          <strong>Personal history of breast cancer.</strong>
                          <span>
                            &nbsp;If you have already been diagnosed with breast
                            cancer, your risk of developing it again, either in
                            the same breast or the other breast, is higher than
                            if you never had the disease.
                          </span>
                          <br />
                          <br />
                          <strong>Race.</strong>
                          <span>
                            &nbsp;White women are slightly more likely to
                            develop breast cancer than are African American
                            women. Asian, Hispanic, and Native American women
                            have a lower risk of developing and dying from
                            breast cancer.
                          </span>
                          <br />
                          <br />
                          <strong>Radiation therapy to the chest.</strong>
                          <span>
                            &nbsp;Having radiation therapy to the chest area as
                            a child or young adult as treatment for another
                            cancer significantly increases breast cancer risk.
                            The increase in risk seems to be highest if the
                            radiation was given while the breasts were still
                            developing (during the teen years).
                          </span>
                          <br />
                          <br />
                          <strong>Breast cellular changes.</strong>
                          <span>
                            &nbsp;Unusual changes in breast cells found during a
                            breast biopsy (removal of suspicious tissue for
                            examination under a microscope) can be a risk factor
                            for developing breast cancer. These changes include
                            overgrowth of cells (called hyperplasia) or abnormal
                            (atypical) appearance.
                          </span>
                          <br />
                          <br />
                          <strong>Factors related to menstruation.</strong>
                          <span>
                            &nbsp;Because the female hormone estrogen stimulates
                            breast cell growth, exposure to estrogen over long
                            periods of time, without any breaks, can increase
                            the risk of breast cancer. Some of these risk
                            factors are not under your control, such as:
                          </span>
                          <br />
                          <span>
                            • starting menstruation (monthly periods) at a young
                            age (before age 12)
                          </span>
                          <br />
                          <span>
                            • going through menopause (end of monthly cycles) at
                            a late age (after 55)
                          </span>
                          <br />
                          <br />
                          <strong>Pregnancy and breastfeeding.</strong>
                          <span>
                            &nbsp;Pregnancy and breastfeeding reduce the overall
                            number of menstrual cycles in a woman’s lifetime,
                            and this appears to reduce future breast cancer
                            risk. Women who have never had a full-term
                            pregnancy, or had their first full-term pregnancy
                            after age 30, have an increased risk of breast
                            cancer. For women who do have children,
                            breastfeeding may slightly lower their breast cancer
                            risk, especially if they continue breastfeeding for
                            1 1/2 to 2 years. For many women, however,
                            breastfeeding for this long is neither possible nor
                            practical.
                          </span>
                          <br />
                        </>
                      </>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <h4>
            <b>Screening &amp; Symptoms of Breast Cancer</b>
          </h4>
          <p>
            Initially, breast cancer may not cause any symptoms. A lump may be
            too small for you to feel or to cause any unusual changes you can
            notice on your own. Often, an abnormal area turns up on a screening
            mammogram (X-ray of the breast), which leads to further testing.
            <br />
            <br />
            So Breast Self Examination(BSE) should be the part of screening
            programme for every women more than 30 years evry 3 monthly along
            with physical examination by clinician yearly.
            <br />
            <br />
            In addition Digital Mammogram should be part of examination for
            every women more than 40 years on yearly basis.
            <br />
            <br />
            Any of the following unusual changes in the breast can be a symptom
            of breast cancer:
            <br />• swelling of all or part of the breast
            <br />• skin irritation or dimpling
            <br />• breast pain
            <br />• nipple pain or the nipple turning inward
            <br />• redness, scaliness, or thickening of the nipple or breast
            skin
            <br />• a nipple discharge other than breast milk
            <br />• a lump in the underarm area
            <br />
            <br />
            These changes also can be signs of less serious conditions in around
            90% of cases such as an infection or a cyst.However, it’s important
            to get any breast changes checked out promptly by a doctor.
          </p>
          <h4>
            <b>Evaluation & Treatment</b>
          </h4>
          <br />
          Once Cancer has been confirmed, staging work up will be done in form
          of chest, abdominal and bone imaging to to decide further paln of
          treatment.
          <br />
          <br />
          Usually Locoregional disease that is not gone to other areas of body
          will be treated by cocktails of different modalities like Surgery,
          Chemotherapy,Radiotherapy and targeted therapy and hormonal therapy
          depending on stage and naure of your disease.
          <br />• Know your stage of the disease.
          <br />• Know your nature of disease.
          <br />• Finalize your treatment plan.
          <br />• Take second opinion.
          <br />
          <p />
          <br />
          <br />
          <h4>
            <b>Surgery</b>
          </h4>
          <p>
            Surgery is usually the first line of attack against breast cancer in
            localized disease and will be done after initial chemotherapy in
            loclly advanced disease. This section explains the different types
            of breast cancer surgery.
            <br />
            <br />
            Decisions about surgery depend on many factors. You and your doctor
            will determine the kind of surgery that’s most appropriate for you
            based on the stage of the cancer, the "personality" of the cancer,
            and what is acceptable to you in terms of your long-term peace of
            mind.
            <br />
            Explore your surgery options:
            <br />
            <br />
            <span>
              What to Expect With Any Surgery :Mastectomy vs. Lumpectomy
            </span>
            <br />
            <strong>Lumpectomy,</strong>
            &nbsp;also known as breast-conserving surgery, is the removal of
            only the tumor and a small amount of surrounding tissue.
            <br />
            <strong>Mastectomy</strong>
            &nbsp;is the removal of all of the breast tissue. Mastectomy is more
            refined and less intrusive than it used to be because in most cases,
            the muscles under the breast are no longer removed.
            <br />
            <strong>Lymph node removal,</strong>&nbsp;or axillary lymph node
            dissection, can take place during lumpectomy and mastectomy if the
            biopsy shows that breast cancer has spread outside the milk duct.
            Some people qualify for the less-invasive&nbsp;
            <strong>sentinel lymph node dissection.</strong>
            <br />
            <strong>Breast reconstruction</strong>&nbsp;is the rebuilding of the
            breast after mastectomy and sometimes lumpectomy. Reconstruction can
            take place at the same time as cancer-removing surgery, or months to
            years later. Some women decide not to have reconstruction or opt for
            a prosthesis instead.
            <br />
            <strong>Prophylactic mastectomy</strong>&nbsp;is preventive removal
            of the breast to lower the risk of breast cancer in high-risk
            people.
            <br />
            <strong>Prophylactic ovary removal</strong>&nbsp;is a preventive
            surgery that lowers the amount of estrogen in the body, making it
            harder for estrogen to stimulate the development of breast cancer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BreastOncoplastic;
