import { FaRocket } from "react-icons/fa";

export default function Experience() {
  return (
    <>
      <div className="h-[16rem] items-center flex flex-col py-18">
        <div className="flex flex-col gap-8 w-full max-w-[1317px] rounded-xl p-10 bg-[#F26522]">
          {/* Judul */}
          <div className="flex items-center gap-2 ">
            <p
              className="bg-[#0057B8] text-white font-semibold px-8 py-3 
                       rounded-tl-[10px] rounded-tr-[50px] rounded-br-[10px] rounded-bl-[50px]
                       flex items-center gap-2"
            >
              <FaRocket />
              Experience
            </p>
          </div>
          <p>
            Seorang yang memiliki pengalaman sebagai Frontend ramah pengguna.
          </p>
          {/* <div className="flex flex-col justify-center items-center gap-8 px-28">
          </div> */}
        </div>
      </div>
    </>
  );
}
