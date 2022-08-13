import Link from "next/link";
import { useState } from "react";
import { Close } from "@material-ui/icons";

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);
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
            <Link href="/signin">Account</Link>
          </li>
          <li
            className="link z-10"
            onClick={() => {
              setOpen(true);
            }}
          >
            <Link href="/">Menu</Link>
          </li>
          <li className="hover-box2 transition-all ease-in duration-300 left-[-55px] absolute bg-grey w-0 h-full top-0 rounded-xl z-0"></li>
        </ul>
      </div>
      <div
        id="sidebar"
        className={`absolute w-full left-0 min-h-[100vh] z-50 -top-11 backdrop-blur-[2px] ${
          open ? "block" : "hidden"
        } `}
      >
        <div
          className={`float-right h-[100vh] bg-white transition-all ease-out duration-500 ${
            open ? "w-[25%] max-lg:w-[50%] max-sm:w-[60%]" : "w-0"
          }`}
        >
          <div
            className="mt-4 font-semibold tracking-wider ml-[80%] text-xl"
            onClick={() => {
              setOpen(false);
            }}
          >
            <Close />
          </div>
          <ul className="min-h-full pl-10 text-[14px] tracking-wide font-[450]">
            <li className="mt-4">
              <Link href="/">Existing Inventory</Link>
            </li>
            <li className="mt-4">
              <Link href="/">Used Inventory</Link>
            </li>
            <li className="mt-4">
              <Link href="/">Trade-In</Link>
            </li>
            <li className="mt-4">
              <Link href="/">Test Drive</Link>
            </li>
            <li className="mt-4">
              <Link href="/">Insurance</Link>
            </li>
            <li className="mt-4">
              <Link href="/">Cyber Truck</Link>
            </li>
            <li className="mt-4">
              <Link href="/">Roadster</Link>
            </li>
            <li className="mt-4">
              <Link href="/">Semi</Link>
            </li>
            <li className="mt-4">
              <Link href="/">Charging</Link>
            </li>
            <li className="mt-4">
              <Link href="/">Powershell</Link>
            </li>
            <li className="mt-4">
              <Link href="/">Commercial Energy</Link>
            </li>
            <li className="mt-4">
              <Link href="/">Utility</Link>
            </li>
            <li className="mt-4">
              <Link href="/">Find Us</Link>
            </li>
            <li className="mt-4">
              <Link href="/">Support</Link>
            </li>
            <li className="mt-4">
              <Link href="/">Investors Relations</Link>
            </li>
            <li className="mt-4">
              <Link href="/signin">Sign in</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
