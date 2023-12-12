
import { ActiveLink } from "../ActiveLink";
import { INavigation } from "../AppHeader/types";

function DropdownMenu({children}: {children: INavigation[]}) {
  return (
    <div className="hidden absolute top-full peer-hover:flex hover:flex w-[200px] flex-col bg-white drop-shadow-lg">
      {children.map(({ path, label }) => (
        <ActiveLink
          key={path}
          href={path}
          activeClassName="group is-active font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#659FDF] to-[#B7B5F1]"
          className="uppercase pt-3 pb-2 font-medium"
        >
          <div className="relative group-[.is-active]:before:block before:absolute before:w-full before:border-primary before:top-[-14px] before:hidden">
            {label}
          </div>
        </ActiveLink>
      ))}
    </div>
  );
}

export default DropdownMenu;
