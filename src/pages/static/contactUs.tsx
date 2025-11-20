import { useState } from "react";
import Footer2 from "../../components/Footer2";
import CustomInput from "../../components/CustomInput";

export default function ContactUs() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");

  return (
    <main className="flex flex-col w-full h-screen font-roboto bg-bg-color">
      <section className="flex flex-col flex-1 w-full justify-center items-center relative">
        <img
          src="/assets/images/clinic.png"
          alt="clinic"
          className="absolute w-full h-full object-cover opacity-30"
        />

        <div className="flex flex-col items-center z-10">
          <h1 className="text-zinc-950 font-bold text-2xl">
            Contact <span className="text-primary">Us</span>
          </h1>
          <div className="h-2  w-2/3 bg-[#283DA7] mt-2 rounded-full" />
        </div>

        <h2 className="font-semibold w-1/2 text-center mt-3 text-sm">
          Not sure where to begin? Our team at SevenCare is here to assist you
          with care and compassion. We’re happy to listen, answer your
          questions, and guide you to the right medical services based on your
          needs.
        </h2>

        <div className="grid grid-cols-2 gap-10 mt-5 w-2/3 z-10">
          <form className=" bg-primaryLight/30 h-fit px-3 py-5 mt-4 flex flex-col justify-center gap-2.5 rounded-lg">
            <CustomInput
              type="text"
              name="fullName"
              state={fullName}
              stateSetter={setFullName}
              placeholder="Full Name"
            />

            <CustomInput
              type="email"
              name="email"
              state={email}
              stateSetter={setEmail}
              placeholder="Email"
            />

            <p className="font-bold text-sm">What can we help you with?</p>

            <textarea
              name="content"
              id="content"
              rows={5}
              placeholder="Type your message here..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="bg-zinc-100 border rounded-lg outline-none px-2 py-0.5 focus:border-primary transition-colors border-zinc-400 resize-none"
            />

            <button
              type="submit"
              className="px-3 py-0.5 bg-[#283DA7] w-fit font-bold rounded-lg text-zinc-100 cursor-pointer self-center"
            >
              Submit
            </button>
          </form>

          <aside>
            <img src="/assets/images/map.png" alt="" className="w-96" />

            <section className="mt-3 flex flex-col gap-2">
              <div className="flex items-center gap-4">
                <img src="/assets/icons/pin.png" alt="" />
                <p>333 A. Mabini St. Caloocan City, Philippines</p>
              </div>
              <div className="flex items-center gap-4">
                <img src="/assets/icons/chat.png" alt="" className="w-5" />
                <p>olympusmedical2015@gmail.com</p>
              </div>
              <div className="flex items-center gap-4">
                <img src="/assets/icons/call.png" alt="" />
                <p>Telephone Number: (02) 8 293 1876</p>
              </div>
              <div className="flex items-center gap-4">
                <img src="/assets/icons/phone.png" alt="" />
                <p>Cellphone Number: 0906 724 5420</p>
              </div>
            </section>
          </aside>
        </div>
      </section>
      <Footer2 />
    </main>
  );
}
