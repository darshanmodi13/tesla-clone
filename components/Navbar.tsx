import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-center w-full items-center">
        <h1 className="tracking-[1rem] font-bold">TESLA</h1>
        <ul className="flex text-[14px] justify-between space-x-9 m-auto pt-2 font-medium tracking-wider relative h-8 max-lg:hidden">
          <li className="nav-link z-10">
            <Link href="/">Model S</Link>
          </li>
          <li className="nav-link z-10">
            <Link href="/">Model 3</Link>
          </li>
          <li className="nav-link z-10">
            <Link href="/">Model X</Link>
          </li>
          <li className="nav-link z-10">
            <Link href="/">Model Y</Link>
          </li>
          <li className="nav-link z-10">
            <Link href="/">Solar Roof</Link>
          </li>
          <li className="nav-link z-10">
            <Link href="/">Solar Panels</Link>
          </li>
          <li className="hover-box transition-all ease-in duration-300 left-[-55px] absolute bg-grey h-full w-0 top-0 rounded-xl z-0"></li>
        </ul>
        <ul className="flex text-[14px] justify-between space-x-9 pt-2 font-medium tracking-wider relative h-8 max-lg:ml-auto">
          <li className="link z-10 max-lg:hidden">
            <Link href="/">Shop</Link>
          </li>
          <li className="link z-10 max-lg:hidden">
            <Link href="/">Account</Link>
          </li>
          <li className="link z-10">
            <Link href="/">Menu</Link>
          </li>
          <li className="hover-box2 transition-all ease-in duration-300 left-[-55px] absolute bg-grey w-0 h-full top-0 rounded-xl z-0"></li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
