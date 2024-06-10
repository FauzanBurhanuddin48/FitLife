import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Text } from "components";
import Header from "components/Header";

const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="bg-cover bg-no-repeat flex flex-col font-poppins sm:gap-10 md:gap-10 gap-[78px] h-[921px] items-center justify-start mx-auto pb-[81px] w-full"
        style={{ backgroundImage: "url('images/img_login.png')" }}
      >
        <Header className="flex flex-col items-center justify-center md:px-5 w-full" />
        <div className="bg-white-A700_66 flex flex-col items-center justify-start p-[39px] md:px-5 rounded-[22px] w-[38%] md:w-full">
          <div className="flex flex-col gap-[22px] justify-start mb-[13px] mt-7 w-full">
            <div className="flex flex-col gap-3.5 items-start justify-start md:ml-[0] ml-[25px]">
              <Text
                className="sm:text-[33.31px] md:text-[35.31px] text-[37.31px] text-gray-800"
                size="txtPoppinsBold3731"
              >
                Masuk
              </Text>
              <Text
                className="text-[16.42px] text-gray-800"
                size="txtPoppinsMedium1642"
              >
                <>
                  Silahkan Masukkan Email dan Password <br />
                  yang benar
                </>
              </Text>
            </div>
            <div className="flex flex-col gap-[49px] items-center justify-start w-full">
              <div className="flex flex-col gap-7 items-start justify-start w-[89%] md:w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col gap-1.5 justify-start w-full">
                    <Text
                      className="md:ml-[0] ml-[35px] text-[13.29px] text-gray-800"
                      size="txtPoppinsRegular1329"
                    >
                      Email
                    </Text>
                    <div className="flex sm:flex-col flex-row gap-[19px] items-center justify-between w-full">
                      <Img
                        className="h-[15px] w-4"
                        src="images/img_briefcase.svg"
                        alt="briefcase"
                      />
                      <Input
                        name="rectangle1933"
                        placeholder=""
                        className="p-0 w-full"
                        wrapClassName="flex sm:flex-1 h-9 w-[1000px] sm:w-full"
                        shape="round"
                        color="gray_100"
                        variant="fill"
                      ></Input>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col justify-start w-full">
                    <Text
                      className="md:ml-[0] ml-[35px] text-[13.29px] text-gray-800"
                      size="txtPoppinsRegular1329"
                    >
                      Password
                    </Text>
                    <div className="flex sm:flex-col flex-row gap-[19px] items-center justify-between mt-[3px] w-full">
                      <Img
                        className="h-[15px] w-4"
                        src="images/img_lock.svg"
                        alt="lock"
                      />
                      <Input
                        name="rectangle1935"
                        placeholder=""
                        className="p-0 w-full"
                        wrapClassName="flex sm:flex-1 h-9 w-[1000px] sm:w-full"
                        shape="round"
                        color="gray_100"
                        variant="fill"
                      ></Input>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row gap-[22px] items-start justify-start w-[32%] md:w-full">
                  <div className="bg-white-A700 border border-blue_gray-100 border-solid h-[15px] rounded-[3px] w-[14%]"></div>
                  <Text
                    className="text-[13.29px] text-gray-800"
                    size="txtPoppinsRegular1329"
                  >
                    Remember Me
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-[49px] items-center justify-start sm:px-5 px-[22px] w-full">
                <Button
                  className="common-pointer cursor-pointer font-medium leading-[normal] min-w-[445px] sm:min-w-full rounded-[5px] text-[13.29px] text-center"
                  onClick={() => navigate("/home1")}
                  color="lime_800"
                  size="md"
                  variant="fill"
                >
                  Masuk
                </Button>
                <Text
                  className="common-pointer text-[13.29px] text-gray-800"
                  size="txtPoppinsMedium1329"
                  onClick={() => navigate("/daftar")}
                >
                  <span className="text-black-900 font-inter text-left text-[12.95px] font-normal">
                    Belum punya akun?{" "}
                  </span>
                  <span className="text-red-500 font-inter text-left text-[12.95px] font-normal">
                    Daftar
                  </span>
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
