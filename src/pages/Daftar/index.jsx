import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Text } from "components";
import Header from "components/Header";

const DaftarPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="bg-cover bg-no-repeat flex flex-col font-poppins gap-[43px] h-[921px] items-center justify-start mx-auto pb-[51px] w-full"
        style={{ backgroundImage: "url('images/img_login.png')" }}
      >
        <Header className="flex flex-col items-center justify-center md:px-5 w-full" />
        <div className="bg-white-A700_66 flex flex-col items-center justify-end p-[33px] md:px-5 rounded-[19px] w-[38%] md:w-full">
          <div className="flex flex-col gap-[29px] justify-start mt-[19px] w-[95%] md:w-full">
            <div className="flex flex-col gap-2.5 items-start justify-start ml-2.5 md:ml-[0]">
              <Text
                className="sm:text-[28.79px] md:text-[30.79px] text-[32.79px] text-gray-800"
                size="txtPoppinsBold3279"
              >
                Daftar
              </Text>
              <Text
                className="text-[14.43px] text-gray-800"
                size="txtPoppinsMedium1443"
              >
                <>
                  Silahkan Daftar Akun Anda Untuk Masuk
                  <br />
                  Ke dalam Akun Anda
                </>
              </Text>
            </div>
            <div className="flex flex-col gap-[34px] justify-start w-full">
              <div className="flex flex-col gap-[27px] items-center justify-start ml-1.5 md:ml-[0] w-[92%] md:w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col gap-[5px] justify-start w-full">
                    <Text
                      className="md:ml-[0] ml-[35px] text-[11.69px] text-gray-800"
                      size="txtPoppinsRegular1169"
                    >
                      Nama Lengkap
                    </Text>
                    <div className="flex sm:flex-col flex-row gap-[19px] items-center justify-between w-full">
                      <Img
                        className="h-[15px] w-4"
                        src="images/img_phuserbold.svg"
                        alt="phuserbold"
                      />
                      <Input
                        name="rectangle1933"
                        placeholder=""
                        className="p-0 w-full"
                        wrapClassName="!rounded flex sm:flex-1 h-[37px] w-[1000px] sm:w-full"
                        shape="round"
                        color="gray_100"
                        variant="fill"
                      ></Input>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col gap-1.5 justify-start w-full">
                    <Text
                      className="md:ml-[0] ml-[35px] text-[11.69px] text-gray-800"
                      size="txtPoppinsRegular1169"
                    >
                      Email
                    </Text>
                    <div className="flex sm:flex-col flex-row gap-[19px] items-center justify-between w-full">
                      <Img
                        className="h-[15px] w-4"
                        src="images/img_briefcase_cyan_600.svg"
                        alt="briefcase"
                      />
                      <Input
                        name="rectangle1933_One"
                        placeholder=""
                        className="p-0 w-full"
                        wrapClassName="!rounded flex sm:flex-1 h-[37px] w-[1000px] sm:w-full"
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
                      className="md:ml-[0] ml-[34px] text-[11.69px] text-gray-800"
                      size="txtPoppinsRegular1169"
                    >
                      Nomor HP
                    </Text>
                    <div className="flex sm:flex-col flex-row gap-[19px] items-center justify-between mt-1 w-full">
                      <Img
                        className="h-3.5 w-[15px]"
                        src="images/img_phphonebold.svg"
                        alt="phphonebold"
                      />
                      <Input
                        name="rectangle1935"
                        placeholder=""
                        className="p-0 w-full"
                        wrapClassName="!rounded flex sm:flex-1 h-[37px] w-[1000px] sm:w-full"
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
                      className="md:ml-[0] ml-[35px] text-[11.69px] text-gray-800"
                      size="txtPoppinsRegular1169"
                    >
                      Kata Sandi
                    </Text>
                    <div className="flex sm:flex-col flex-row gap-[19px] items-center justify-between mt-1 w-full">
                      <Img
                        className="h-[15px] w-4"
                        src="images/img_lock_cyan_600.svg"
                        alt="lock"
                      />
                      <Input
                        name="rectangle1935_One"
                        placeholder=""
                        className="p-0 w-full"
                        wrapClassName="!rounded flex sm:flex-1 h-[37px] w-[1000px] sm:w-full"
                        shape="round"
                        color="gray_100"
                        variant="fill"
                      ></Input>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[51px] items-center justify-start pb-1.5 px-1.5 w-full">
                <Button
                  className="common-pointer cursor-pointer font-medium font-poppins leading-[normal] min-w-[415px] sm:min-w-full rounded text-[11.69px] text-center"
                  onClick={() => navigate("/login")}
                  color="lime_800"
                  size="md"
                  variant="fill"
                >
                  Daftar
                </Button>
                <Text
                  className="common-pointer text-[11.39px] text-black-900"
                  size="txtInterRegular1139"
                  onClick={() => navigate("/login")}
                >
                  <span className="text-black-900 font-inter text-left font-normal">
                    Sudah Punya Akun?{" "}
                  </span>
                  <span className="text-red-500 font-inter text-left font-normal">
                    Masuk
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

export default DaftarPage;
