import { FaRocket } from "react-icons/fa";

export default function Projects() {
  return (
    <>
      <div className="h-auto items-center flex flex-col py-18">
        <div className="flex flex-col gap-8 w-full p-10 bg-[#ECEDFE]">
          {/* Judul */}
          <div className="flex items-center gap-2 ">
            <p
              className="bg-[#F26522] text-white font-semibold px-8 py-3 
                       rounded-tl-[10px] rounded-tr-[50px] rounded-br-[10px] rounded-bl-[50px]
                       flex items-center gap-2"
            >
              <FaRocket />
              Projects
            </p>
          </div>
          <p>
            Seorang yang memiliki pengalaman sebagai Frontend ramah pengguna.
          </p>
          <div className="flex flex-col justify-center items-center gap-8 px-28">
            {/* Card  */}
          </div>
        </div>
      </div>
    </>
  );
}
