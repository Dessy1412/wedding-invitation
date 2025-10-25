import { FaRocket } from "react-icons/fa";
import educatLogo from "../../assets/images/educat.png";

export default function Education() {
  return (
    <>
      <div className="h-[30rem] flex flex-col justify-center bg-[#D0036F] mt-16 px-15 py-10">
        <div className="flex items-center gap-2 ">
          <p
            className="bg-[#F26522] text-white font-semibold px-8 py-3 
                       rounded-tl-[10px] rounded-tr-[50px] rounded-br-[10px] rounded-bl-[50px]
                       flex items-center gap-2"
          >
            <FaRocket />
            Education
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-8 text-white ">
          <div className="md:w-1/2 text-lg leading-relaxed py-10 px-10">
            <p className="text-xl">
              Sekolah Tinggi Teknologi Terpadu Nurul Fikri (2020-2024)
            </p>
            <p className="text-base">Sistem Informasi</p>
            <p className="text-lg">IPK : 3.85</p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="grid grid-cols-2 gap-1 w-full max-w-xl">
              <img src={educatLogo} alt="" className=" h-[250px] rounded-xl " />
              <div className="grid grid-cols-2 gap-3">
                <img
                  src={educatLogo}
                  alt=""
                  className=" h-[120px] rounded-xl"
                />
                <img
                  src={educatLogo}
                  alt=""
                  className=" h-[120px] rounded-xl"
                />
                <img
                  src={educatLogo}
                  alt=""
                  className=" h-[120px] rounded-xl"
                />
                <img
                  src={educatLogo}
                  alt=""
                  className=" h-[120px] rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
