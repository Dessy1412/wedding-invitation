import { FaRocket } from "react-icons/fa";

export default function About() {
  return (
    <>
      <div className="h-[32rem] flex flex-col items-center py-20">
        <div className="flex flex-col gap-8 w-full max-w-[1317px] rounded-xl  bg-[#351313]/10 p-10 ">
          {/* Judul */}
          <div className="flex items-center gap-2 ">
            <p
              className="bg-[#F26522] text-white font-semibold px-8 py-3 
             rounded-tl-[10px] rounded-tr-[50px] rounded-br-[10px] rounded-bl-[50px]
             flex items-center gap-2"
            >
              <FaRocket />
              About Me
            </p>
          </div>
          {/* Deskripsi */}
          <div className="text-white text-lg leading-relaxed ml-10">
            <p>
              Seorang yang memiliki pengalaman sebagai Frontend Developer Intern
              dan Web Developer freelance Saya memiliki kemampuan beradaptasi
              yang baik, keterampilan berpikir kritis, dan mampu bekerja dengan
              baik dalam tim. Ketertarikan utama saya ada di bidang Frontend
              Development dan UI/UX Design dimana saya fokus pada pembuatan
              antarmuka yang responsif dan ramah pengguna.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
