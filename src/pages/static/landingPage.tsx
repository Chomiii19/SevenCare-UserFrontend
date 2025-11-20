import { Link } from "react-router-dom";
import Footer2 from "../../components/Footer2";
import Header from "../../components/Header";
import { ChevronRight } from "lucide-react";
import { useState } from "react";

export default function LandingPage() {
  return (
    <main className="flex flex-col w-full h-screen font-roboto bg-bg-color">
      <PrivacyTermConditionsModal />

      <Header active="home" />
      <section className="flex-1 flex w-full flex-row justify-center items-center gap-5 relative">
        <img
          src="/assets/images/clinic.png"
          alt="clinic"
          className="absolute w-full z-10 h-[500px] object-cover -top-28 opacity-50"
        />

        <div className="flex flex-col gap-2 z-50">
          <div className="flex gap-3 justify-center items-center  ">
            <img src="/assets/icons/logo.png" />

            <span className="flex flex-col items-center gap-4">
              <h1 className="text-6xl font-extrabold leading-12 text-[#210658] z-50">
                <span className="text-[#4206BA]">OLYMPUS MEDICAL</span>
                <br />
                <span className="text-[#522B9E] text-4xl">
                  AND DIAGNOSTIC LABORATORY
                </span>
              </h1>

              <p className="font-extrabold text-xl">
                "Your health is our priority"
              </p>
            </span>
          </div>

          <Link
            to="/login"
            className="w-fit py-2 px-4 pl-7 bg-[#283DA7] rounded-full text-zinc-50 flex  justify-center items-center font-bold mt-3"
          >
            Make an Appointment
            <ChevronRight />
          </Link>
        </div>
      </section>
      <Footer2 />
    </main>
  );
}

function PrivacyTermConditionsModal() {
  const [currentModal, setCurrentModal] = useState("privacy");
  const [isOpen, setIsOpen] = useState(() => {
    return !localStorage.getItem("agreedPrivacyTerms");
  });

  const handleConfirm = () => {
    localStorage.setItem("agreedPrivacyTerms", "true");
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex justify-center items-center bg-black/40">
      <section className="w-1/3 h-3/4 bg-white rounded-lg overflow-hidden flex flex-col items-center px-8 py-4">
        {currentModal === "privacy" && (
          <PrivacyModal setCurrentModal={setCurrentModal} />
        )}
        {currentModal === "terms" && (
          <TermsModal
            setCurrentModal={setCurrentModal}
            onConfirm={() => handleConfirm()}
          />
        )}
      </section>
    </div>
  );
}

function PrivacyModal({
  setCurrentModal,
}: {
  setCurrentModal: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <>
      <header className="flex gap-2 items-center mb-7">
        <img src="/assets/icons/privacy.png" alt="privacy" />
        <h2 className="text-2xl font-extrabold">Privacy Policy</h2>
      </header>

      <div className="overflow-auto">
        <p>
          All Olympus Medical and Diagnostic Laboratory physicians, healthcare
          staff, and administrative personnel are committed to preserving the
          integrity, confidentiality, and security of Protected Health
          Information (PHI) pertaining to our patients. <br /> <br /> The
          purpose of this policy is to ensure that all Olympus Medical and
          Diagnostic Laboratory staff have the necessary information to provide
          the highest quality medical care possible while safeguarding patient
          data in accordance with professional ethics, accreditation standards,
          and legal requirements.
        </p>

        <h3 className="font-bold text-lg mt-5">Our Commitment to Privacy</h3>

        <p>
          Olympus Medical and Diagnostic Laboratory physicians and staff will:
        </p>

        <ol className="ml-4">
          <li>
            ● Adhere to the standards outlined in the Notice of Privacy
            Practices.
          </li>
          <li>
            ● Collect, use, and disclose PHI only in accordance with state and
            federal laws, and with patient consent where required.
          </li>
          <li>
            ● Never use or disclose PHI for purposes outside treatment, payment,
            and healthcare operations (TPO) without patient authorization (e.g.,
            marketing, insurance applications, or employment).
          </li>
          <li>
            ● Use PHI only for purposes such as reminders for scheduled
            appointments, unless instructed otherwise by the patient.
          </li>
          <li>
            ● Ensure all PHI collected is accurate, timely, complete, and
            securely maintained.
          </li>
          <li>
            ● Respect the patient’s right to privacy and treat each individual
            with dignity and professionalism.
          </li>
          <li>
            ● Act as responsible custodians of information, treating all PHI as
            sensitive and confidential.
          </li>
        </ol>
      </div>

      <button
        onClick={() => setCurrentModal("terms")}
        className="py-1 px-10 bg-[#283DA7] rounded-lg text-white font-bold mt-2 cursor-pointer"
      >
        Next
      </button>
    </>
  );
}

function TermsModal({
  setCurrentModal,
  onConfirm,
}: {
  setCurrentModal: React.Dispatch<React.SetStateAction<string>>;
  onConfirm: () => void;
}) {
  const [agreedTerms, setAgreedTerms] = useState(false);
  const [agreedPrivacy, setAgreedPrivacy] = useState(false);

  return (
    <>
      <header className="flex gap-2 items-center mb-7">
        <img src="/assets/icons/terms.png" alt="terms and conditions" />
        <h2 className="text-2xl font-extrabold">Terms and Conditions</h2>
      </header>

      <div className="overflow-auto">
        <p>
          By using <b>Olympus Medical and Diagnostic Laboratory</b> services,
          patients and users agree to the following terms and conditions:
        </p>

        <ol className="mt-5">
          <li className="text-red-500">1. Use of Services</li>
          <ol className="pl-6">
            <li>
              ● Olympus Medical and Diagnostic Laboratory provides medical
              consultation, appointment scheduling, and patient care services.
            </li>
            <li>
              ● Patients must provide accurate personal and health information
              to ensure quality care.
            </li>
          </ol>

          <li className="text-red-500">2. Confidentiality of Records</li>
          <ol className="pl-6">
            <li>
              ● All patient information is handled in compliance with applicable
              privacy laws.
            </li>
            <li>
              ● Olympus Medical and Diagnostic Laboratory reserves the right to
              use anonymized data for research, reporting, and service
              improvement.
            </li>
          </ol>

          <li className="text-red-500">3. Appointments and Cancellations</li>
          <ol className="pl-6">
            <li>
              ● Patients are responsible for attending scheduled appointments or
              notifying the clinic at least 24 hours in advance for
              cancellations.
            </li>
            <li>
              ● Repeated missed appointments may result in rescheduling
              limitations.
            </li>
          </ol>

          <li className="text-red-500">4. Patient Responsibilities</li>
          <ol className="pl-6">
            <li>
              ● Patients must provide truthful and complete medical histories.
            </li>
            <li>
              ● Patients agree to follow medical advice and treatment plans for
              best outcomes.
            </li>
          </ol>

          <li className="text-red-500">5. Limitations of Liability</li>
          <ol className="pl-6">
            <li>
              ● Olympus Medical and Diagnostic Laboratory strives to provide the
              best medical services but does not guarantee specific outcomes.
            </li>
            <li>
              ● Olympus Medical and Diagnostic Laboratory shall not be held
              liable for circumstances beyond reasonable control, such as
              third-party service interruptions.
            </li>
          </ol>

          <li className="text-red-500">6. Amendments</li>
          <ol className="pl-6">
            <li>
              ● Olympus Medical and Diagnostic Laboratory reserves the right to
              update or revise this Privacy Policy and Terms & Conditions at any
              time, with notice provided through official channels.
            </li>
          </ol>
        </ol>
      </div>

      <section className="w-full flex flex-col font-bold mt-2">
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            name="terms"
            id="terms"
            checked={agreedTerms}
            onChange={(e) => setAgreedTerms(e.target.checked)}
            className="cursor-pointer"
          />
          <label htmlFor="terms">
            I read and agree to{" "}
            <span className="text-[#458DFC]">terms and conditions</span>
          </label>
        </div>

        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            name="privacy"
            id="privacy"
            checked={agreedPrivacy}
            onChange={(e) => setAgreedPrivacy(e.target.checked)}
            className="cursor-pointer"
          />
          <label htmlFor="privacy">
            I read and agree to{" "}
            <span className="text-[#458DFC]">privacy policy</span>
          </label>
        </div>
      </section>

      <section className="flex justify-center items-center gap-10">
        <button
          onClick={() => setCurrentModal("privacy")}
          className="py-1 px-10 bg-[#283DA7] rounded-lg text-white font-bold mt-2 cursor-pointer"
        >
          Back
        </button>
        <button
          onClick={onConfirm}
          disabled={!agreedPrivacy || !agreedTerms}
          className={`py-1 px-10  rounded-lg text-white font-bold mt-2 ${
            !agreedPrivacy || !agreedTerms
              ? "cursor-not-allowed bg-[#283DA7]/50"
              : "cursor-pointer bg-[#283DA7]"
          }`}
        >
          Confirm
        </button>
      </section>
    </>
  );
}
