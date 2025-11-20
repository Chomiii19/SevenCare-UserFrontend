import { useState } from "react";
import Footer2 from "../../components/Footer2";

export default function Services() {
  const [openConsultModal, setOpenConsultModal] = useState(false);
  const [openUltrasoundModal, setOpenUltrasoundModal] = useState(false);
  const [openDrugTestModal, setOpenDrugTestModal] = useState(false);
  const [openEnrollmentModal, setOpenEnrollmentModal] = useState(false);
  const [openHealthCheckModal, setOpenHealthCheckModal] = useState(false);
  const [openIndividualModal, setOpenIndividualModal] = useState(false);
  const [openPreEmploymentModal, setOpenPreEmploymentModal] = useState(false);

  const handleServiceClick = (i: number) => {
    if (i === 0) setOpenConsultModal(true);
    if (i === 1) setOpenUltrasoundModal(true);
    if (i === 2) setOpenDrugTestModal(true);
    if (i === 3) setOpenEnrollmentModal(true);
    if (i === 4) setOpenHealthCheckModal(true);
    if (i === 5) setOpenIndividualModal(true);
    if (i === 6) setOpenPreEmploymentModal(true);
  };

  return (
    <main className="flex flex-col w-full h-screen font-roboto bg-bg-color">
      {openConsultModal && (
        <ConsultationModal setOpenConsultModal={setOpenConsultModal} />
      )}

      {openUltrasoundModal && (
        <UltrasoundModal setOpenUltrasoundModal={setOpenUltrasoundModal} />
      )}

      {openDrugTestModal && (
        <DrugTestModal setOpenDrugTestModal={setOpenDrugTestModal} />
      )}

      {openEnrollmentModal && (
        <EnrollmentModal setOpenEnrollmentModal={setOpenEnrollmentModal} />
      )}

      {openHealthCheckModal && (
        <HealthCheckModal setOpenHealthCheckModal={setOpenHealthCheckModal} />
      )}

      {openIndividualModal && (
        <IndividualModal setOpenIndividualModal={setOpenIndividualModal} />
      )}

      {openPreEmploymentModal && (
        <PreEmploymentModal
          setOpenPreEmploymentModal={setOpenPreEmploymentModal}
        />
      )}

      <section className="flex flex-col flex-1 w-full justify-center items-center relative">
        <img
          src="/assets/images/clinic.png"
          alt="clinic"
          className="absolute w-full h-full object-cover opacity-30"
        />

        <div className="flex flex-col items-center z-10">
          <h1 className="text-zinc-950 font-bold text-2xl">
            Our <span className="text-primary">Services</span>
          </h1>
          <div className="h-1  w-1/2 bg-primary mt-2" />
        </div>

        <h2 className="font-semibold w-1/2 text-center text-sm z-10">
          We provide to you the best choices for you. Adjust it to your health
          needs and make sure your undergo treatment with our highly qualified
          doctors you can consult with us which type of service is suitable for
          your health
        </h2>

        <section className="grid grid-cols-4 gap-8 mt-10 z-10">
          {Array.from({ length: 4 }, (_, i) => (
            <div className="flex justify-center items-center">
              <img
                key={i}
                onClick={() => handleServiceClick(i)}
                src={`/assets/images/service${i + 1}.png`}
                className="w-52 cursor-pointer hover:scale-105 transition-all duration-150 ease-in-out"
              />
            </div>
          ))}
        </section>
        <section className="grid grid-cols-3 gap-8 mt-10 z-10">
          {Array.from({ length: 3 }, (_, i) => (
            <div className="flex justify-center items-center">
              <img
                key={i}
                onClick={() => handleServiceClick(i + 4)}
                src={`/assets/images/service${i + 5}.png`}
                className="w-52 cursor-pointer hover:scale-105 transition-all duration-150 ease-in-out"
              />
            </div>
          ))}
        </section>
      </section>
      <Footer2 />
    </main>
  );
}

function ConsultationModal({
  setOpenConsultModal,
}: {
  setOpenConsultModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const descriptions1 = [
    "Check Up",
    "Prescription",
    "Holistic Care",
    "Specializes in ADULT DISEASES",
    "Laboratory Interpretation & Request",
    "Internal Medicine Clearance",
  ];

  const descriptions2 = [
    "Check Up",
    "Prescription",
    "Family Planning",
    "Peri & Post Menopause",
    "Laboratory Interpretation & Request",
    "Infertility Work-up & Treatment",
  ];

  const descriptions3 = [
    "Check Up",
    "Prescription",
    "Holistic Care",
    "Primary Care",
    "Laboratory Interpretation & Request",
    "Medical Certificate",
  ];

  return (
    <div
      onClick={() => setOpenConsultModal(false)}
      className="fixed inset-0 z-[100] flex justify-center items-center bg-black/40"
    >
      <article className="bg-white rounded-lg grid grid-cols-2 grid-rows-2 gap-5 p-4">
        <div className="flex flex-col gap-3 items-center">
          <header className="flex items-center gap-2">
            <img src="/assets/icons/consult1.png" alt="" className="w-20" />
            <div className="flex flex-col items-center">
              <h3 className="text-[#4206BA] font-bold text-3xl">
                Dr. Manolito Marciano
              </h3>
              <p className="text-lg italic font-semibold">Internal Medicine</p>
            </div>
          </header>

          <section className="flex items-center gap-5 text-sm">
            <div className="flex flex-col gap-2">
              {descriptions1.slice(0, 3).map((desc) => (
                <div className="flex items-center gap-2">
                  <img src="/assets/icons/fill-check.png" alt="" />
                  <p>{desc}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-2">
              {descriptions1.slice(3, 6).map((desc) => (
                <div className="flex items-center gap-2">
                  <img src="/assets/icons/fill-check.png" alt="" />
                  <p>{desc}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="flex flex-col gap-3 items-center">
          <header className="flex items-center gap-2">
            <img src="/assets/icons/consult2.png" alt="" className="w-20" />
            <div className="flex flex-col items-center">
              <h3 className="text-[#4206BA] font-bold text-3xl">
                Dr. Myra Tan Pascual
              </h3>
              <p className="text-lg italic font-semibold">Pediatrician</p>
            </div>
          </header>

          <section className="flex gap-5 text-sm self-start ml-18">
            <div className="flex items-center gap-2">
              <img src="/assets/icons/fill-check.png" alt="" />
              <p>By Appointment Only</p>
            </div>
          </section>
        </div>

        <div className="flex flex-col gap-3 items-center">
          <header className="flex items-center gap-2">
            <img src="/assets/icons/consult3.png" alt="" className="w-14" />
            <div className="flex flex-col items-center">
              <h3 className="text-[#4206BA] font-bold text-3xl">
                Dr. Criselda Arenas-Cajigalo
              </h3>
              <p className="text-lg italic font-semibold">
                Obstrecian Gynecologist
              </p>
            </div>
          </header>

          <section className="flex items-center gap-5 text-sm">
            <div className="flex flex-col gap-2">
              {descriptions2.slice(0, 3).map((desc) => (
                <div className="flex items-center gap-2">
                  <img src="/assets/icons/fill-check.png" alt="" />
                  <p>{desc}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-2">
              {descriptions2.slice(3, 6).map((desc) => (
                <div className="flex items-center gap-2">
                  <img src="/assets/icons/fill-check.png" alt="" />
                  <p>{desc}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="flex flex-col gap-3 items-center">
          <header className="flex items-center gap-2">
            <img src="/assets/icons/consult4.png" alt="" className="w-18" />
            <div className="flex flex-col items-center">
              <h3 className="text-[#4206BA] font-bold text-3xl">
                Dr. Hazel Herico-Milo
              </h3>
              <p className="text-lg italic font-semibold">Family Medicine</p>
            </div>
          </header>

          <section className="flex items-center gap-5 text-sm">
            <div className="flex flex-col gap-2">
              {descriptions3.slice(0, 3).map((desc) => (
                <div className="flex items-center gap-2">
                  <img src="/assets/icons/fill-check.png" alt="" />
                  <p>{desc}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-2">
              {descriptions3.slice(3, 6).map((desc) => (
                <div className="flex items-center gap-2">
                  <img src="/assets/icons/fill-check.png" alt="" />
                  <p>{desc}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </article>
    </div>
  );
}

function UltrasoundModal({
  setOpenUltrasoundModal,
}: {
  setOpenUltrasoundModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const services = [
    { name: "PELVIC ULTRASOUND", price: 620 },
    { name: "BPS (BIOPHYSICAL PROFILE SCORE ULTRASOUND)", price: 720 },
    { name: "TRANSVAGINAL ULTRASOUND", price: 750 },
    { name: "CAS (CONGENITAL ANOMALY SCAN ULTRASOUND)", price: 1900 },
    { name: "BREAST ULTRASOUND (BILATERAL)", price: 950 },
    { name: "NECK ULTRASOUND", price: 1020 },
    { name: "THYROID ULTRASOUND", price: 920 },
    { name: "INGUINO-SCROTAL ULTRASOUND", price: 1200 },
    { name: "SOFT TISSUE ULTRASOUND", price: 1200 },
    { name: "WHOLE ABDOMEN ULTRASOUND", price: 1420 },
    { name: "WHOLE ABDOMEN WITH PROSTRATE ULTRASOUND", price: 1870 },
    { name: "UPPER ABDOMEN ULTRASOUND", price: 1120 },
    {
      name: "(KUBP) KIDNEYS, URETERS, BLADDER, PROSTRATE ULTRASOUND",
      price: 1020,
    },
    { name: "(KUB) KIDNEYS, URETERS, BLADDER ULTRASOUND", price: 820 },
  ];

  return (
    <div
      onClick={() => setOpenUltrasoundModal(false)}
      className="fixed inset-0 z-[100] flex justify-center items-center bg-black/40"
    >
      <article className="bg-white rounded-lg grid grid-cols-2 gap-5 p-4">
        <div className="flex flex-col gap-2">
          {services.slice(0, 7).map((service) => (
            <div className="flex items-center gap-2">
              <img
                src="/assets/icons/fill-check.png"
                alt=""
                className="self-start"
              />
              <div className="flex flex-col">
                <h3 className="text-[#4206BA] font-bold text-lg">
                  {service.name}
                </h3>
                <p className="italic">For as low as: {service.price}.00</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          {services.slice(7, 14).map((service) => (
            <div className="flex items-center gap-2">
              <img
                src="/assets/icons/fill-check.png"
                alt=""
                className="self-start"
              />
              <div className="flex flex-col">
                <h3 className="text-[#4206BA] font-bold text-lg">
                  {service.name}
                </h3>
                <p className="italic">For as low as: {service.price}.00</p>
              </div>
            </div>
          ))}
        </div>
      </article>
    </div>
  );
}

function DrugTestModal({
  setOpenDrugTestModal,
}: {
  setOpenDrugTestModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div
      onClick={() => setOpenDrugTestModal(false)}
      className="fixed inset-0 z-[100] flex justify-center items-center bg-black/40"
    >
      <article className="bg-white rounded-lg p-18 flex flex-col gap-2 items-center">
        <div className="flex items-center gap-2">
          <img
            src="/assets/icons/fill-check.png"
            alt=""
            className="self-start"
          />
          <div className="flex flex-col items-center">
            <h3 className="text-[#4206BA] font-bold text-lg">
              SHABU AND MARIJUANA TEST
            </h3>
            <p className="italic">For as low as: 300.00</p>
          </div>
        </div>
        <p>RESULTS WILL BE RELEASED THE NEXT DAY 1:00 PM</p>
      </article>
    </div>
  );
}

function EnrollmentModal({
  setOpenEnrollmentModal,
}: {
  setOpenEnrollmentModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const packageA = ["Complete Blood Count", "Chest XRAY", "Urinalysis"];
  const packageB = [
    "Complete Blood Count",
    "Chest XRAY",
    "Hepa B Screening",
    "Urinalysis",
  ];

  return (
    <div
      onClick={() => setOpenEnrollmentModal(false)}
      className="fixed inset-0 z-[100] flex justify-center items-center bg-black/40"
    >
      <article className="bg-white rounded-lg grid grid-cols-2 gap-8 p-8">
        <div className="flex flex-col">
          <header className="flex flex-col items-center">
            <h3 className="text-[#4206BA] font-bold text-lg">
              PACKAGE A (FOR UCC STUDENTS)
            </h3>
            <p>For as low as : 500.00</p>
          </header>
          <div className="flex flex-col gap-2 mt-2">
            {packageA.map((service) => (
              <div className="flex items-center gap-2">
                <img src="/assets/icons/fill-check.png" alt="" />
                <p>{service}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col">
          <header className="flex flex-col items-center">
            <h3 className="text-[#4206BA] font-bold text-lg">
              PACKAGE B (FOR UCC STUDENTS)
            </h3>
            <p>For as low as : 500.00</p>
          </header>
          <div className="flex flex-col gap-2 mt-2">
            {packageB.map((service) => (
              <div className="flex items-center gap-2">
                <img src="/assets/icons/fill-check.png" alt="" />
                <p>{service}</p>
              </div>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}

function HealthCheckModal({
  setOpenHealthCheckModal,
}: {
  setOpenHealthCheckModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const services = [
    "Fasting Blood Sugar",
    "Blood Urea Nitrogren (BUN)",
    "Creatinine",
    "Blood Uric Acid (BUA)",
    "Total Cholersterol",
    "Triglycerides",
    "Good Cholesterol (HDL)",
    "Bad Cholesterol (LDL)",
    "SGOT/AST",
    "SGPT/ALT",
    "CBC",
    "Platelet",
    "Urinalysis",
  ];

  return (
    <div
      onClick={() => setOpenHealthCheckModal(false)}
      className="fixed inset-0 z-[100] flex justify-center items-center bg-black/40"
    >
      <article className="bg-white rounded-lg gap-4 p-8 flex flex-col">
        <header className="flex flex-col items-center">
          <h3 className="text-[#4206BA] font-bold text-lg">
            STANDARD HEALTH CHECK
          </h3>
          <p>For as low as : 1299.00</p>
        </header>
        <div className="grid grid-cols-2 gap-3">
          <div className="flex flex-col gap-3 mt-2">
            {services.slice(0, 7).map((service) => (
              <div className="flex items-center gap-2">
                <img src="/assets/icons/fill-check.png" alt="" />
                <p>{service}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-3 mt-2">
            {services.slice(7, 13).map((service) => (
              <div className="flex items-center gap-2">
                <img src="/assets/icons/fill-check.png" alt="" />
                <p>{service}</p>
              </div>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}

function IndividualModal({
  setOpenIndividualModal,
}: {
  setOpenIndividualModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const services = [
    "CHEST XRAY PA - 300.00",
    "URINALYSIS - 85.00",
    "FECALYSIS - 85.00",
    "HEPA B SCREENING - 195.00",
    "PHYSICAL EXAM (FIT TO WORK) - 550.00",
    "CBC FOR EMPLOYMENT - 150.00",
    "DRUG TEST - 300.00",
    "HEPA A SCREENING - 400.00",
  ];

  return (
    <div
      onClick={() => setOpenIndividualModal(false)}
      className="fixed inset-0 z-[100] flex justify-center items-center bg-black/40"
    >
      <article className="bg-white rounded-lg gap-4 p-8 flex flex-col items-center">
        <h3 className="text-[#4206BA] font-bold text-lg">INDIVIDUAL PRICE:</h3>
        <div className="grid grid-cols-2 gap-3">
          <div className="flex flex-col gap-3 mt-2">
            {services.slice(0, 4).map((service) => (
              <div className="flex items-center gap-2">
                <img src="/assets/icons/fill-check.png" alt="" />
                <p>{service}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-3 mt-2">
            {services.slice(4, 8).map((service) => (
              <div className="flex items-center gap-2">
                <img src="/assets/icons/fill-check.png" alt="" />
                <p>{service}</p>
              </div>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}

function PreEmploymentModal({
  setOpenPreEmploymentModal,
}: {
  setOpenPreEmploymentModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const packageA = [
    "Complete Blood Count",
    "Urinalysis",
    "Fecalysis",
    "Chest X-Ray Pa",
    "Physical Examination",
    "Medical Certificate",
  ];

  const packageB = [
    "Complete Blood Count",
    "Urinalysis",
    "Fecalysis",
    "Chest X-Ray Pa",
    "Physical Examination",
    "Medical Certificate",
    "Drug Test",
  ];

  const packageC = [
    "Complete Blood Count",
    "Urinalysis",
    "Fecalysis",
    "Chest X-Ray Pa",
    "Physical Examination",
    "Medical Certificate",
    "Drug Test",
    "Pregnancy Test",
  ];

  const packageD = [
    "Complete Blood Count",
    "Urinalysis",
    "Fecalysis",
    "Chest X-Ray Pa",
    "Physical Examination",
    "Medical Certificate",
    "Drug Test",
    "Hepa B Screening",
  ];

  return (
    <div
      onClick={() => setOpenPreEmploymentModal(false)}
      className="fixed inset-0 z-[100] flex justify-center items-center bg-black/40"
    >
      <article className="bg-white rounded-lg gap-10 p-8 grid grid-cols-2 grid-rows-2">
        <div className="flex flex-col gap-3">
          <header className="flex flex-col items-center">
            <h3 className="text-[#4206BA] font-bold text-lg">
              PRE-EMPLOYMENT PACKAGE A
            </h3>
            <p className="italic">850.00 ONLY</p>
          </header>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="flex flex-col gap-3 mt-2">
              {packageA.slice(0, 3).map((service) => (
                <div className="flex items-center gap-2">
                  <img src="/assets/icons/fill-check.png" alt="" />
                  <p>{service}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-3 mt-2">
              {packageA.slice(3, 6).map((service) => (
                <div className="flex items-center gap-2">
                  <img src="/assets/icons/fill-check.png" alt="" />
                  <p>{service}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <header className="flex flex-col items-center">
            <h3 className="text-[#4206BA] font-bold text-lg">
              PRE-EMPLOYMENT PACKAGE B
            </h3>
            <p className="italic">1,100.00 ONLY</p>
          </header>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="flex flex-col gap-3 mt-2">
              {packageB.slice(0, 4).map((service) => (
                <div className="flex items-center gap-2">
                  <img src="/assets/icons/fill-check.png" alt="" />
                  <p>{service}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-3 mt-2">
              {packageB.slice(4, 7).map((service) => (
                <div className="flex items-center gap-2">
                  <img src="/assets/icons/fill-check.png" alt="" />
                  <p>{service}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <header className="flex flex-col items-center">
            <h3 className="text-[#4206BA] font-bold text-lg">
              PRE-EMPLOYMENT PACKAGE C
            </h3>
            <p className="italic">1,280.00 ONLY</p>
          </header>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="flex flex-col gap-3 mt-2">
              {packageC.slice(0, 4).map((service) => (
                <div className="flex items-center gap-2">
                  <img src="/assets/icons/fill-check.png" alt="" />
                  <p>{service}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-3 mt-2">
              {packageC.slice(4, 8).map((service) => (
                <div className="flex items-center gap-2">
                  <img src="/assets/icons/fill-check.png" alt="" />
                  <p>{service}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <header className="flex flex-col items-center">
            <h3 className="text-[#4206BA] font-bold text-lg">
              PRE-EMPLOYMENT PACKAGE D
            </h3>
            <p className="italic">1,280.00 ONLY</p>
          </header>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="flex flex-col gap-3 mt-2">
              {packageD.slice(0, 4).map((service) => (
                <div className="flex items-center gap-2">
                  <img src="/assets/icons/fill-check.png" alt="" />
                  <p>{service}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-3 mt-2">
              {packageD.slice(4, 8).map((service) => (
                <div className="flex items-center gap-2">
                  <img src="/assets/icons/fill-check.png" alt="" />
                  <p>{service}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
