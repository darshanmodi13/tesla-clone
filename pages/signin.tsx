import Link from "next/link";

const login = () => {
  return (
    <>
      <header className="mt-3 ml-4 mr-4 flex">
        <h1 className="tracking-[1rem] font-bold">TESLA</h1>
        <h1 className="tracking-wide font-bold ml-auto float-right">en-US</h1>
      </header>
      <div className=" m-auto mt-24 w-[40%] pl-[10%]" id="login">
        <h1 className="font-semibold text-4xl text-left">Sign In</h1>
        <p className="text-nav-light text-[14px] text-left mt-8 ml-4 font-semibold tracking-wider">
          Email Address
        </p>
        <input
          type="text"
          className="bg-offwhite outline-none p-2 pl-5 mt-3 rounded-[20px] w-80 focus:border-1 focus:outline-offwhite"
        />
        <button
          type="submit"
          className="bg-blue outline-none p-2 pl-5 mt-4 rounded-[20px] w-80 text-white tracking-wide text-[13px]"
        >
          NEXT
        </button>
        <div className="text-[13px] text-nav-light pl-4 pt-5 flex justify-evenly w-80">
          <Link href="/">
            <a className="border-b"> Forgot Email?</a>
          </Link>
          <p className="border"></p>
          <Link href="/">
            <a className="border-b"> Forgot Password?</a>
          </Link>
        </div>
        <div className="pt-10 flex justify-center w-80 text-nav-light items-center">
          <hr className="w-32" />
          <p className="pl-3 pr-3">OR</p>
          <hr className="w-32" />
        </div>
        <button
          type="submit"
          className="bg-white border-2 border-black text-black p-2 pl-5 mt-10 transition-all duration-500 rounded-[20px] w-80 tracking-wide text-[13px] hover:text-white hover:bg-black"
        >
          Create Account
        </button>
      </div>
    </>
  );
};

export default login;
