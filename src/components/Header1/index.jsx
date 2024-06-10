import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, Text } from "components";

const Header1 = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <header className={props.className}>
        <div className="bg-lime-800 flex flex-row items-center justify-start p-4 w-full">
          <Img
            className="h-[19px] ml-1 w-5"
            src="images/img_materialsymbol.svg"
            alt="materialsymbol"
          />
          <Text
            className="ml-2 text-[16.59px] text-white-A700"
            size="txtPoppinsMedium1659"
          >
            0812-8344-3458
          </Text>
          <div className="flex flex-row gap-[5px] items-center justify-center ml-7 w-[11%]">
            <Img
              className="h-[19px] w-5"
              src="images/img_ictwotoneemail.svg"
              alt="ictwotoneemail"
            />
            <Text
              className="text-[16.59px] text-white-A700"
              size="txtRobotoRomanMedium1659"
            >
              fitlife@gmail.com
            </Text>
          </div>
        </div>
        <div
          className="bg-cover bg-no-repeat flex flex-col h-[81px] items-center justify-start p-[15px] w-full"
          style={{ backgroundImage: "url('images/img_group10.svg')" }}
        >
          <div className="flex flex-row md:gap-10 items-center justify-between w-[91%] md:w-full">
            <ul className="flex md:flex-col flex-row md:hidden items-end justify-start common-row-list">
              <li>
                <Text
                  className="hover:font-semibold text-black-900 text-xl tracking-[1.00px]"
                  size="txtPoppinsSemiBold20"
                >
                  FitLife
                </Text>
              </li>
              <li>
                <Text
                  className="common-pointer hover:font-semibold ml-[683px] my-1 text-black-900 text-sm tracking-[1.50px]"
                  size="txtPoppinsMedium14"
                  onClick={() => navigate("/home1")}
                >
                  HOME
                </Text>
              </li>
              <li>
                <Text
                  className="common-pointer hover:font-semibold ml-[49px] my-1 text-black-900 text-sm tracking-[1.50px]"
                  size="txtPoppinsMedium14"
                  onClick={() => navigate("/paketmember")}
                >
                  PAKET MEMBER
                </Text>
              </li>
              <li>
                <Text
                  className="common-pointer hover:font-semibold ml-[52px] my-1 text-black-900 text-sm tracking-[1.50px]"
                  size="txtPoppinsMedium14"
                  onClick={() => navigate("/artikel")}
                >
                  ARTIKEL
                </Text>
              </li>
              <li>
                <Text
                  className="common-pointer hover:font-semibold ml-12 my-1 text-black-900 text-sm tracking-[1.50px]"
                  size="txtPoppinsMedium14"
                  onClick={() => navigate("/video")}
                >
                  VIDEO
                </Text>
              </li>
            </ul>
            <Img
              className="common-pointer h-[50px] md:h-auto rounded-[50%]"
              src="images/img_ellipse4.png"
              alt="ellipseFour"
              onClick={() => navigate("/login")}
            />
          </div>
        </div>
      </header>
    </>
  );
};

Header1.defaultProps = {};

export default Header1;
