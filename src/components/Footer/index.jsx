import React from "react";

import { Img, Text } from "components";

const Footer = (props) => {
  return (
    <>
      <footer className={props.className}>
        <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-center mb-[100px] mt-[124px] mx-auto w-[45%]">
          <Text
            className="text-[17px] text-center text-white-A700_a2 tracking-[-0.23px] w-[82%] sm:w-full"
            size="txtDMSansRegular17"
          >
            FitLife adalah pusat kebugaran yang didedikasikan untuk membantu
            Anda mencapai kesehatan dan kebugaran terbaik.
          </Text>
          <ul className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full common-column-list">
            <li>
              <Text
                className="text-[15px] text-white-A700 tracking-[-0.20px]"
                size="txtDMSansRegular15"
              >
                HOME
              </Text>
            </li>
            <li>
              <Text
                className="text-[15px] text-white-A700 tracking-[-0.20px]"
                size="txtDMSansRegular15"
              >
                ARTIKEL
              </Text>
            </li>
            <li>
              <Text
                className="text-[15px] text-white-A700 tracking-[-0.20px]"
                size="txtDMSansRegular15"
              >
                VIDEO
              </Text>
            </li>
            <li>
              <Text
                className="flex text-[15px] text-white-A700 tracking-[-0.20px]"
                size="txtDMSansRegular15"
              >
                HITUNG LANGKAH KAKI
              </Text>
            </li>
            <li>
              <Text
                className="text-[15px] text-white-A700 tracking-[-0.20px]"
                size="txtDMSansRegular15"
              >
                DAFTAR
              </Text>
            </li>
            <li>
              <Text
                className="text-[15px] text-white-A700 tracking-[-0.20px]"
                size="txtDMSansRegular15"
              >
                LOGIN
              </Text>
            </li>
          </ul>
          <Img className="h-[22px]" src="images/img_social.svg" alt="social" />
        </div>
      </footer>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;
