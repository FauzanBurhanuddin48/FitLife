import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";

const Header = (props) => {
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
          className="bg-cover bg-no-repeat flex flex-col h-[81px] items-center justify-start p-[21px] sm:px-5 w-full"
          style={{ backgroundImage: "url('images/img_group10.svg')" }}
        >
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[93%] md:w-full">
            <Text
              className="text-black-900 text-xl tracking-[1.00px]"
              size="txtPoppinsSemiBold20"
            >
              FitLife
            </Text>
            <Text
              className="md:ml-[0] ml-[572px] text-black-900 text-sm tracking-[1.50px]"
              size="txtPoppinsMedium14"
            >
              HOME
            </Text>
            <Text
              className="md:ml-[0] ml-[49px] text-black-900 text-sm tracking-[1.50px]"
              size="txtPoppinsMedium14"
            >
              PAKET MEMBER
            </Text>
            <Text
              className="md:ml-[0] ml-[52px] text-black-900 text-sm tracking-[1.50px]"
              size="txtPoppinsMedium14"
            >
              ARTIKEL
            </Text>
            <Text
              className="ml-12 md:ml-[0] text-black-900 text-sm tracking-[1.50px]"
              size="txtPoppinsMedium14"
            >
              VIDEO
            </Text>
            <Text
              className="md:ml-[0] ml-[102px] text-black-900 text-sm tracking-[1.50px]"
              size="txtPoppinsMedium14"
            >
              DAFTAR
            </Text>
            <Button
              className="common-pointer cursor-pointer font-poppins min-w-[94px] md:ml-[0] ml-[37px] rounded-[3px] text-center text-sm tracking-[1.50px]"
              onClick={() => navigate("/login")}
              color="lime_800"
              size="sm"
              variant="fill"
            >
              LOGIN
            </Button>
          </div>
        </div>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
