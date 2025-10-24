import { BiBriefcase, BiFile } from "react-icons/bi";
export default function Home() {
  return (
    <>
      <div className="h-[32rem] flex items-center justify-center">
        <div className="gap-4 w-full max-w-[800px] rounded-xl py-10 px-6 text-center bg-[#351313]/10">
          {/* Text */}
          <div className="flex flex-col items-center gap-4 max-w-[600px] mx-auto">
            <p className="text-white text-lg">Hi, saya Dessy 👋</p>
            <h2 className="text-white text-2xl md:text-3xl font-bold">
              Frontend Developer & UI/UX Enthusiast
            </h2>
            <p className="text-white leading-relaxed">
              Berpengalaman dalam proyek internship dan freelance, saya fokus
              pada pembuatan antarmuka yang responsif, mudah digunakan, dan
              memiliki pengalaman pengguna yang menyenangkan.
            </p>
          </div>
          {/* Button */}
          <div className="flex justify-center gap-4 mt-6">
            <a
              href=""
              className="flex items-center gap-2 btn-primary text-white"
            >
              <BiBriefcase />
              Project
            </a>
            <a
              href=""
              className="flex items-center gap-2  btn-secondary text-white"
            >
              <BiFile />
              Portfolio
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
