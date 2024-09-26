import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex flex-col mt-10 w-screen sm:flex-col">
      <div className="flex flex-row justify-between py-10 px-5 dark:bg-slate-950 bg-slate-100">
        <p className="">&copy; All rights reserved</p>

        <div className="flex flex-row gap-4 lg:gap-11 px-3">
          <Link href="/">Terms of Service</Link>
          <Link href="/">Cookie handling</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
