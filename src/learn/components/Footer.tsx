// import FooterLogo from "../assets/FooterLogo.png";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <div className="bg-[#1B53B7]">
        <div className=" flex flex-col sm:flex-row  gap-10 md:gap-20  lg:gap-32 pl-10 lg:pl-20 pt-20  overflow-hidden">
          <div className="flex gap-10 md:gap-20 lg:gap-32">
            <div className="flex flex-col text-[#FFFFFF] gap-2">
              <h3 className="text-[24px] font-semibold dark:text-black">
                Important Links
              </h3>
              <a
                href="/learn"
                className="hover:text-gray-300 dark:text-black dark:hover:text-gray-800"
              >
                Learn
              </a>
              <a
                href="/news"
                className="hover:text-gray-300 dark:text-black dark:hover:text-gray-800"
              >
                News
              </a>
              <a
                href="/tools"
                className="hover:text-gray-300 dark:text-black dark:hover:text-gray-800"
              >
                Tools
              </a>
              <a
                href="/commmunity"
                className="hover:text-gray-300 dark:text-black dark:hover:text-gray-800"
              >
                Community
              </a>
              <a
                href="/about-us"
                className="hover:text-gray-300 dark:text-black dark:hover:text-gray-800"
              >
                About Us
              </a>
            </div>
            <div className="flex flex-col text-[#FFFFFF] gap-3">
              <h3 className="text-[24px] font-semibold dark:text-black">
                Terms and Conditions
              </h3>
              <a
                href="/terms-of-service"
                className="hover:text-gray-300 dark:text-black dark:hover:text-gray-800"
              >
                Terms of Service
              </a>
              <a
                href="/privacy-policy"
                className="hover:text-gray-300 dark:text-black dark:hover:text-gray-800"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="hover:text-gray-300 dark:text-black dark:hover:text-gray-800"
              >
                Cookie Policy
              </a>
              <a
                href="#"
                className="hover:text-gray-300 dark:text-black dark:hover:text-gray-800"
              >
                Code of Conduct
              </a>
              <a
                href="#"
                className="hover:text-gray-300 dark:text-black dark:hover:text-gray-800"
              >
                Community Guidelines
              </a>
            </div>
          </div>

          <div className="flex flex-col text-[#FFFFFF] gap-2">
            <h3 className="text-[24px] font-semibold dark:text-black">
              Contact Us
            </h3>
            <p className="dark:text-black dark:hover:text-gray-800">
              contact@technokrax
            </p>
          </div>
        </div>
        <div className=" flex pl-20 pt-12 gap-4 pb-20 ">
          {/* <Image src={FooterLogo} alt="logo" width="41" height="48" /> */}

          <p className="text-[32px] text-[#FFFFFF] font-medium">Technokrax</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
