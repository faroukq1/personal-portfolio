import { useState } from "react";

type navDataType = {
  id: number;
  name: string;
};
const navData: navDataType[] = [
  {
    id: 1,
    name: "about",
  },
  {
    id: 2,
    name: "projets",
  },
  {
    id: 3,
    name: "contact",
  },
];
const Navbar = () => {
  const [selectedSection, setSelectedSection] = useState<string>(
    navData[0].name
  );
  const changeSection = (newSection: string) => {
    setSelectedSection(newSection);
  };
  return (
    <nav className="container flex items-center justify-center py-4">
      <div className="w-full max-w-7xl flex items-center justify-between">
        <h1 className="text-xl tracking-widest font-bold btn btn-neutral">
          Farouk
        </h1>
        <ul className="flex gap-8">
          {navData.map((item: navDataType) => {
            const { id, name } = item;
            return (
              <li
                key={id}
                className={`${
                  selectedSection === name && "border-b border-neutral"
                }`}
              >
                <button
                  onClick={() => changeSection(name)}
                  className="btn btn-ghost"
                >
                  <p className="text-xl">{name}</p>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
