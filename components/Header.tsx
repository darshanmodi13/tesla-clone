import Link from "next/link";

const Header = () => {
  return (
    <header className={"text-center w-full text-sm"}>
      <Link href="/">
        <a className="border-b border-b-nav-light font-sans text-13px text-nav-light transition-all ease-in-out duration-100  tracking-wider hover:border-b-2 hover:border-b-nav-dark">
          Read Tesla&apos; 2021 Impact Report
        </a>
      </Link>
    </header>
  );
};

export default Header;
