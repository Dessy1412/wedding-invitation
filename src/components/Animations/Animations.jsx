export default function Animations() {
  const listSkills = [
    "Frontend Developer",
    "UI/UX Designer",
    "React.js",
    "CodeIgniter",
    "PHP",
    "JavaScript",
    "Tailwind",
    "Figma",
    "PhpMyAdmin",
    "CorelDraw",
    "Ms.Office",
    "Creative & Adaptive",
  ];

  return (
    <>
      <div className="w-full overflow-hidden bg-[#ECEDFE] py-4">
        <div className="flex whitespace-nowrap animate-marquee-pingpong">
          <ul className="flex justify-around min-w-full">
            {listSkills.map((skill, index) => (
              <li key={index} className="mx-6 font-medium text-black">
                {/* {skill} ✨ */}
                <span>{skill}</span>
                <span className="ml-6">✨</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
