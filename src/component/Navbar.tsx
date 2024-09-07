import ToggleDarkMode from "./ToggleDarkMode";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";

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
    name: "projects",
  },
  {
    id: 3,
    name: "contact",
  },
];
const Navbar = () => {
  return (
    <nav className="fixed z-10 w-full py-2 shadow-sm bg-base-300">
      <div className="relative container flex">
        <div className="w-full max-w-7xl flex items-center justify-between">
          <h1 className="text-xl tracking-widest font-bold">Farouk</h1>
          <ul className="hidden xl:flex gap-8 items-center">
            {navData.map((item: navDataType) => {
              const { id, name } = item;
              return (
                <li key={id} className="btn btn-ghost">
                  <Link to={name} duration={500}>
                    <p className="text-lg">{name}</p>
                  </Link>
                </li>
              );
            })}
            <li>
              <ToggleDarkMode />
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-4">
          <div className="xl:hidden">
            <ToggleDarkMode />
          </div>
          <div className="xl:hidden gap-4 dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn m-1">
              <GiHamburgerMenu />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
            >
              {navData.map((item) => {
                const { id, name } = item;
                return (
                  <li key={id} className="h-14">
                    <Link to={name} duration={500}>
                      <p>{name}</p>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
