import Footer2 from "../../components/Footer2";

export default function About() {
  return (
    <main className="flex flex-col w-full h-screen font-roboto bg-bg-color">
      <section className="flex-1 flex flex-col w-full justify-center items-center gap-14 relative">
        <img
          src="/assets/images/clinic.png"
          alt="clinic"
          className="absolute w-full h-full object-cover opacity-30"
        />

        <div className="flex flex-col items-center z-10">
          <h1 className="text-zinc-950 font-bold text-2xl">
            About <span className="text-primary">Us</span>
          </h1>
          <div className="h-2  w-2/3 bg-[#283DA7] mt-2 rounded-full" />
        </div>

        <div className="grid grid-cols-2 grid-rows-2 justify-center z-10 w-2/3 gap-8">
          <article className="flex flex-col items-center gap-2">
            <img src="/assets/icons/eye.png" alt="eye" className="w-[100px]" />
            <h2 className="font-bold text-lg">VISION</h2>
            <p className="text-center w-2/3">
              Our Vision is to be world class excellence in providing health and
              laboratory service to contribute to the well-being of the
              community.
            </p>
          </article>

          <article className="flex flex-col items-center gap-2">
            <img
              src="/assets/icons/target.png"
              alt="target"
              className="w-[60px]"
            />
            <h2 className="font-bold text-lg">MISSION</h2>
            <p className="text-center w-2/3">
              To serve the community by providing quality laboratory services
              utilized the preventing diagnostic and management of disease.
            </p>
          </article>

          <article className="flex flex-col items-center gap-2">
            <img src="/assets/icons/goal.png" alt="goal" className="w-[60px]" />
            <h2 className="font-bold text-lg">GOAL</h2>
            <p className="text-center w-2/3">
              To provide quality and affordable health services for everyone.
            </p>
          </article>

          <article className="flex flex-col items-center gap-2">
            <img
              src="/assets/icons/visual.png"
              alt="visual"
              className="w-[60px]"
            />
            <h2 className="font-bold text-lg">VISUAL</h2>
            <p className="text-center w-2/3">
              CARE and RESPECT we serve our clients with utmost care and respect
              as we cater to their diagnostic needs.
            </p>
          </article>
        </div>
      </section>
      <Footer2 />
    </main>
  );
}
