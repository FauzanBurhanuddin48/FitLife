import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, Text } from "components";
import Footer from "components/Footer";
import Header1 from "components/Header1";

const FormPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-100_01 flex flex-col font-poppins items-center justify-start mx-auto w-full">
        <div className="flex flex-col justify-start w-full">
          <Header1 className="flex flex-col items-center justify-center md:px-5 w-full" />
          <div className="font-volkhov h-[347px] md:px-5 relative w-full">
            <Img
              className="h-[347px] m-auto object-cover w-full"
              src="images/img_rectangle168.png"
              alt="rectangle168"
            />
            <Text
              className="absolute h-max inset-y-[0] my-auto right-[33%] sm:text-[38.42px] md:text-[44.42px] text-[52.42px] text-center text-white-A700 tracking-[-2.10px]"
              size="txtVolkhovBold5242"
            >
              Form Pendaftaran
            </Text>
          </div>
          <Text
            className="capitalize md:ml-[0] ml-[54px] mt-[97px] sm:text-[38.5px] md:text-[44.5px] text-[52.5px] text-blue_gray-900 text-center"
            size="txtPoppinsBold525"
          >
            form Pendaftaran
          </Text>
          <Text
            className="capitalize md:ml-[0] ml-[61px] mt-[3px] text-2xl md:text-[22px] text-center text-gray-800 sm:text-xl"
            size="txtPoppinsRegular24"
          >
            Daftarkan diri Anda Sekarang
          </Text>
          <Text
            className="md:ml-[0] ml-[79px] mt-[53px] text-black-900 text-lg tracking-[0.50px]"
            size="txtPoppinsMedium18"
          >
            Detail personal Anda
          </Text>
          <div className="h-[306px] sm:h-[316px] md:h-[651px] md:ml-[0] ml-[114px] mt-3 md:px-5 relative w-[90%] md:w-full">
            <div className="absolute bg-white-A700 flex flex-col font-poppins h-full inset-[0] items-start justify-center m-auto p-[27px] sm:px-5 w-full">
              <div className="flex flex-col justify-start mb-[61px] mt-[11px] w-[95%] md:w-full">
                <div className="flex flex-col gap-2 items-start justify-start md:ml-[0] ml-[607px] w-[610px] md:w-full">
                  <Text
                    className="text-gray-900_02 text-sm w-full"
                    size="txtPoppinsRegular14Gray90002"
                  >
                    Nama Belakang
                  </Text>
                  <Input
                    name="input"
                    placeholder="Smith"
                    className="font-roboto p-0 placeholder:text-gray-900_02 text-left text-lg w-full"
                    wrapClassName="w-full"
                    size="xs"
                  ></Input>
                </div>
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mr-[257px] mt-6 w-[79%] md:w-full">
                  <Text
                    className="md:mt-0 mt-0.5 text-gray-900_02 text-sm"
                    size="txtPoppinsRegular14Gray90002"
                  >
                    Nomor KTP
                  </Text>
                  <Img
                    className="h-6 md:ml-[0] ml-[21px] w-6"
                    src="images/img_richeckboxblankcircleline.svg"
                    alt="richeckboxblank"
                  />
                  <Text
                    className="ml-2.5 md:ml-[0] md:mt-0 mt-1 text-gray-900_02 text-sm"
                    size="txtPoppinsRegular14Gray90002"
                  >
                    Paspor
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[237px] md:mt-0 mt-1 text-gray-900_02 text-sm"
                    size="txtPoppinsRegular14Gray90002"
                  >
                    Tanggal Lahir
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[349px] md:mt-0 mt-0.5 text-gray-900_02 text-sm"
                    size="txtPoppinsRegular14Gray90002"
                  >
                    Jenis Kelamin
                  </Text>
                </div>
                <div className="flex md:flex-col flex-row md:gap-5 items-end justify-end md:ml-[0] ml-[418px] mt-[11px] w-[59%] md:w-full">
                  <Input
                    name="date"
                    placeholder="12/12/1999"
                    className="font-roboto p-0 placeholder:text-gray-900_02 text-left text-lg w-full"
                    wrapClassName="w-[58%] md:w-full"
                    size="xs"
                  ></Input>
                  <Img
                    className="h-6 md:ml-[0] ml-[52px] md:mt-0 mt-5"
                    src="images/img_richeckboxcirclefill.svg"
                    alt="richeckboxcircl"
                  />
                  <Text
                    className="mb-0.5 ml-2.5 md:ml-[0] md:mt-0 mt-[22px] text-gray-900_02 text-sm"
                    size="txtPoppinsRegular14Gray90002"
                  >
                    Laki - Laki
                  </Text>
                  <Img
                    className="h-6 md:ml-[0] ml-[27px] md:mt-0 mt-5"
                    src="images/img_richeckboxblankcircleline.svg"
                    alt="richeckboxblank_One"
                  />
                  <Text
                    className="ml-2.5 md:ml-[0] md:mt-0 mt-6 text-gray-900_02 text-sm"
                    size="txtPoppinsRegular14Gray90002"
                  >
                    Perempuan
                  </Text>
                </div>
              </div>
            </div>
            <div className="absolute flex flex-col gap-2 items-start justify-start left-[0] top-[12%] w-[604px] md:w-full">
              <Text
                className="text-gray-900_02 text-sm w-full"
                size="txtPoppinsRegular14Gray90002"
              >
                Nama Depan
              </Text>
              <Input
                name="input_One"
                placeholder="Smith"
                className="font-roboto p-0 placeholder:text-gray-900_02 text-left text-lg w-full"
                wrapClassName="w-full"
                size="xs"
              ></Input>
            </div>
            <Input
              name="input_Two"
              placeholder="Smith"
              className="font-roboto p-0 placeholder:text-gray-900_02 text-left text-lg w-full"
              wrapClassName="absolute bottom-[29%] left-[0] w-[29%]"
              size="xs"
            ></Input>
            <Img
              className="absolute h-6 inset-y-[0] left-[0] my-auto w-6"
              src="images/img_richeckboxcirclefill.svg"
              alt="richeckboxcircl_One"
            />
          </div>
          <Text
            className="md:ml-[0] ml-[79px] mt-[29px] text-black-900 text-lg tracking-[0.50px]"
            size="txtPoppinsMedium18"
          >
            Detail Kontak Anda
          </Text>
          <div className="h-[401px] md:h-[414px] sm:h-[493px] md:ml-[0] ml-[114px] mt-3.5 md:px-5 relative w-[90%] md:w-full">
            <div className="absolute bg-white-A700 flex flex-col font-poppins h-full inset-[0] items-end justify-center m-auto p-[46px] md:px-10 sm:px-5 w-full">
              <div className="flex flex-col gap-[27px] justify-start mb-[37px] mt-[91px] w-[69%] md:w-full">
                <div className="flex flex-col gap-[11px] items-start justify-start w-full">
                  <div className="flex flex-row items-start justify-between w-[58%] md:w-full">
                    <Text
                      className="mb-0.5 text-gray-900_02 text-sm"
                      size="txtPoppinsRegular14Gray90002"
                    >
                      Kota/Provinsi
                    </Text>
                    <Text
                      className="mt-0.5 text-gray-900_02 text-sm"
                      size="txtPoppinsRegular14Gray90002"
                    >
                      Negara
                    </Text>
                  </div>
                  <div className="flex sm:flex-col flex-row font-roboto gap-[34px] items-center justify-between w-full">
                    <Input
                      name="input_Three"
                      placeholder="Bandung"
                      className="p-0 placeholder:text-gray-900_02 text-left text-lg w-full"
                      wrapClassName="sm:flex-1 sm:w-full"
                      size="xs"
                    ></Input>
                    <Input
                      name="country"
                      placeholder="Indonesia"
                      className="block flex-col items-end justify-center p-0 placeholder:text-gray-900_02 text-left text-lg w-full"
                      wrapClassName="block sm:flex-1 flex-col items-end justify-center relative right-[260px] sm:w-full"
                      size="xs"
                    ></Input>
                  </div>
                </div>
                <div className="flex flex-col gap-2 items-start justify-start md:ml-[0] ml-[189px] w-[610px] md:w-full">
                  <Text
                    className="text-gray-900_02 text-sm w-full"
                    size="txtPoppinsRegular14Gray90002"
                  >
                    Email
                  </Text>
                  <Input
                    name="email_One"
                    placeholder="rudi@gmail.com"
                    className="font-roboto p-0 placeholder:text-gray-900_02 text-left text-lg w-full"
                    wrapClassName="w-full"
                    type="email"
                    size="xs"
                  ></Input>
                </div>
              </div>
            </div>
            <div className="absolute bottom-[21%] flex flex-col gap-2 items-start justify-start left-[0] w-[604px] md:w-full">
              <Text
                className="text-gray-900_02 text-sm w-full"
                size="txtPoppinsRegular14Gray90002"
              >
                Nomor Handphone
              </Text>
              <Input
                name="mobileNo"
                placeholder="0812993334"
                className="font-roboto p-0 placeholder:text-gray-900_02 text-left text-lg w-full"
                wrapClassName="w-full"
                type="number"
                size="xs"
              ></Input>
            </div>
            <div className="absolute flex flex-col font-poppins gap-2 items-start justify-start left-[0] max-w-[1267px] top-[9%] w-full">
              <Text
                className="text-gray-900_02 text-sm w-full"
                size="txtPoppinsRegular14Gray90002"
              >
                Alamat 1
              </Text>
              <div className="flex flex-col font-roboto items-start justify-start w-full">
                <div className="flex flex-col items-start justify-start px-4 py-2 w-full">
                  <Text
                    className="text-gray-900_02 text-lg w-auto"
                    size="txtRobotoRegular18"
                  >
                    Jl. Baru, Bandung
                  </Text>
                </div>
                <Line className="bg-gray-300 h-px w-full" />
              </div>
            </div>
            <Input
              name="zipcode"
              placeholder="30223"
              className="font-roboto p-0 placeholder:text-gray-900_02 text-left text-lg w-full"
              wrapClassName="absolute h-[22px] inset-y-[0] left-[0] my-auto w-[78px]"
              size="xs"
            ></Input>
            <Text
              className="absolute left-[0] text-gray-900_02 text-sm top-[34%]"
              size="txtPoppinsRegular14Gray90002"
            >
              Kode Pos
            </Text>
          </div>
          <div className="flex md:flex-col flex-row font-poppins gap-[19px] items-start justify-start md:ml-[0] ml-[109px] mt-[49px] md:px-5 w-[52%] md:w-full">
            <Img
              className="h-5 w-5"
              src="images/img_mdicheckboxmarked.svg"
              alt="mdicheckboxmark"
            />
            <Text
              className="text-gray-900_02 text-sm"
              size="txtPoppinsRegular14Gray90002"
            >
              Saya menyetujui syarat dan ketentuan keanggotaan, kebijakan
              privasi, peraturan klub & syarat pengguna
            </Text>
          </div>
          <Line className="bg-red-A400 h-0.5 mt-[31px] w-full" />
          <div className="flex sm:flex-col flex-row font-poppins md:gap-10 items-start justify-between max-w-[1348px] mt-[21px] mx-auto md:px-5 w-full">
            <Text
              className="text-gray-900_02 text-xl"
              size="txtPoppinsRegular20"
            >
              <span className="text-gray-900_02 font-poppins text-left font-normal">
                Total Pembayaran{" "}
              </span>
              <span className="text-red-A400 font-poppins text-left font-normal">
                Rp 170.000
              </span>
              <span className="text-gray-900_02 font-poppins text-left font-normal">
                {" "}
                (sudah termasuk pajak)
              </span>
            </Text>
            <Button
              className="common-pointer cursor-pointer font-semibold min-w-[214px] sm:mt-0 mt-[15px] rounded-[10px] text-center text-lg tracking-[1.00px]"
              onClick={() => navigate("/pembayaran")}
              color="gray_900"
              size="xl"
              variant="fill"
            >
              Pembayaran
            </Button>
          </div>
          <Footer className="bg-gray-900 flex font-dmsans items-center justify-center mt-[69px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default FormPage;
