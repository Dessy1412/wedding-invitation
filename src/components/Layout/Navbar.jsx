import logo from "../../assets/images/img.png";
import { FaFileDownload } from "react-icons/fa";

export default function Navbar() {
  const menuItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "education", label: "Education" },
    { id: "projects", label: "Projects" },
    { id: "certiforganiza", label: "Certifications & Organizations" },
    { id: "contact", label: "Contact" },
  ];
  return (
    <>
      <nav className=" px-20 py-5 ">
        <div className="flex justify-around items-center py-3 bg-[#F26522] rounded-2xl">
          <div>
            <img src={logo} alt="Logo" className="w-20 h-15 object-contain" />
          </div>
          <div className="flex justify-center">
            <ul className="flex item-center gap-10 text-white font-sans">
              {menuItems.map((menu) => (
                <li key={menu.id}>
                  <a href="">{menu.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center btn-primary">
            <a
              href="public/docs/cv-dessy.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white"
            >
              <FaFileDownload />
              Resume
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
