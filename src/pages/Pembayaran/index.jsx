import React from "react";

import { useNavigate } from "react-router-dom";

import {
  Button,
  CheckBox,
  Img,
  Input,
  Line,
  Radio,
  RadioGroup,
  Text,
} from "components";
import Footer from "components/Footer";
import Header1 from "components/Header1";

const PembayaranPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-100_01 flex flex-col font-poppins items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-start justify-start w-full">
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
              Form Pembayaran
            </Text>
          </div>
          <div className="font-poppins h-[111px] md:h-[184px] md:ml-[0] ml-[411px] mt-[105px] md:px-5 relative w-[51%] md:w-full">
            <Text
              className="absolute capitalize inset-x-[0] mx-auto sm:text-[38.5px] md:text-[44.5px] text-[52.5px] text-blue_gray-900 text-center top-[0] w-max"
              size="txtPoppinsBold525"
            >
              Pembayaran
            </Text>
            <Text
              className="absolute bottom-[0] capitalize inset-x-[0] mx-auto text-2xl md:text-[22px] text-center text-gray-800 sm:text-xl w-max"
              size="txtPoppinsRegular24"
            >
              Lakukan pembayaran sekarang sebelum tanggal habis tempo
            </Text>
          </div>
          <div className="flex md:flex-col flex-row font-inter gap-[18px] items-start justify-end md:ml-[0] ml-[136px] mt-11 md:px-5 w-[91%] md:w-full">
            <div className="flex flex-col gap-9 items-start justify-start md:mt-0 mt-[75px] p-12 md:px-10 sm:px-5 w-[601px] md:w-full">
              <Input
                name="frame119"
                placeholder="Pembayaran"
                className="font-semibold md:text-[22px] p-0 placeholder:text-black-900_01 sm:text-xl text-2xl text-left tracking-[-0.48px] w-full"
                wrapClassName="w-[95%]"
                color="gray_500_01"
                size="sm"
              ></Input>
              <div className="flex flex-col gap-4 items-start justify-start w-auto">
                <Text
                  className="text-black-900_01 text-lg w-[126px]"
                  size="txtInterSemiBold18"
                >
                  Bayar Dengan:
                </Text>
                <RadioGroup
                  className="flex gap-[19px] items-start justify-start w-auto"
                  name="radiogroupcard"
                >
                  <Radio
                    value="KartuKredit"
                    className="font-medium text-base text-black-900_01 text-left"
                    inputClassName="mr-[5px]"
                    checked={false}
                    name="radiogroupcard"
                    label="Kartu Kredit"
                    id="KartuKredit"
                  ></Radio>
                  <Radio
                    value="Bank"
                    className="font-medium text-base text-gray-500_01 text-left"
                    inputClassName="h-[15px] mr-[5px] outline outline-[2px] outline-gray-500_01 w-[15px]"
                    checked={false}
                    name="radiogroupcard"
                    label="Bank"
                    id="Bank"
                  ></Radio>
                  <Radio
                    value="Transfer"
                    className="font-medium text-base text-gray-500_01 text-left"
                    inputClassName="h-[15px] mr-[5px] outline outline-[2px] outline-gray-500_01 w-[15px]"
                    checked={false}
                    name="radiogroupcard"
                    label="Transfer"
                    id="Transfer"
                  ></Radio>
                </RadioGroup>
              </div>
              <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                <div className="flex flex-col gap-6 items-start justify-start w-auto sm:w-full">
                  <div className="flex flex-col gap-4 items-start justify-start w-auto sm:w-full">
                    <Text
                      className="text-black-900_01 text-lg w-[107px]"
                      size="txtInterMedium18"
                    >
                      Nomor kartu
                    </Text>
                    <Input
                      name="language"
                      placeholder="1234  5678  9101  1121"
                      className="p-0 placeholder:text-gray-500_01 text-base text-left w-full"
                      wrapClassName="rounded w-full"
                      shape="round"
                      color="gray_500_01"
                      size="md"
                      variant="outline"
                    ></Input>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-[18px] items-start justify-start w-auto sm:w-full">
                    <div className="flex flex-col gap-4 items-start justify-start w-auto">
                      <Text
                        className="text-black-900_01 text-lg w-auto"
                        size="txtInterMedium18"
                      >
                        Tanggal habis tempo
                      </Text>
                      <Input
                        name="frameEight"
                        placeholder="dd/yy"
                        className="p-0 placeholder:text-gray-500_01 text-base text-left w-full"
                        wrapClassName="rounded w-full"
                        shape="round"
                        color="gray_500_01"
                        size="md"
                        variant="outline"
                      ></Input>
                    </div>
                    <div className="flex flex-col gap-4 items-start justify-start w-auto">
                      <Text
                        className="text-black-900_01 text-lg w-auto"
                        size="txtInterMedium18"
                      >
                        CVV
                      </Text>
                      <Input
                        name="frameTen"
                        placeholder="123"
                        className="p-0 placeholder:text-gray-500_01 text-base text-left w-full"
                        wrapClassName="rounded w-full"
                        shape="round"
                        color="gray_500_01"
                        size="md"
                        variant="outline"
                      ></Input>
                    </div>
                  </div>
                  <CheckBox
                    className="text-base text-left"
                    inputClassName="h-4 mr-[5px] rounded-sm w-4"
                    name="savecarddetails"
                    id="savecarddetails"
                    label="Simpan detail kartu"
                    color="gray_500_01"
                    size="xs"
                    variant="outline"
                  ></CheckBox>
                </div>
              </div>
              <div className="flex flex-col gap-[23px] items-start justify-start w-auto sm:w-full">
                <Button
                  className="common-pointer !text-gray-100_02 cursor-pointer font-bold rounded text-base text-center w-[476px]"
                  onClick={() => navigate("/paketmember")}
                  color="gray_900_01"
                  size="lg"
                  variant="fill"
                >
                  Rp 170.000
                </Button>
                <Text
                  className="leading-[22.00px] max-w-[475px] md:max-w-full text-gray-500_01 text-sm"
                  size="txtInterRegular14"
                >
                  Data pribadi Anda akan digunakan untuk memproses pesanan Anda,
                  mendukung pengalaman Anda di seluruh situs web ini, dan untuk
                  tujuan lain yang dijelaskan dalam kebijakan privasi kami.
                </Text>
              </div>
            </div>
            <div className="h-[1024px] sm:pr-5 pr-9 relative w-[55%] md:w-full">
              <div className="bg-white-A700 border border-blue_gray-100_02 border-solid h-[1024px] my-auto w-[96%]"></div>
              <div className="absolute flex flex-col gap-9 items-start justify-start left-[2%] p-12 md:px-10 sm:px-5 top-[7%] w-auto">
                <Input
                  name="frame121"
                  placeholder="Paket Member"
                  className="font-semibold md:text-[22px] p-0 placeholder:text-black-900_01 sm:text-xl text-2xl text-left tracking-[-0.48px] w-full"
                  wrapClassName="w-[94%]"
                  color="gray_500_01"
                  size="sm"
                ></Input>
                <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                  <div className="flex sm:flex-col flex-row gap-4 items-start justify-start w-auto sm:w-full">
                    <Img
                      className="h-[70px] md:h-auto object-cover rounded w-[70px]"
                      src="images/img_frame11.png"
                      alt="frameEleven"
                    />
                    <div className="flex flex-col gap-1 items-start justify-start w-auto sm:w-full">
                      <div className="flex flex-row gap-[78px] items-start justify-start w-[398px] sm:w-full">
                        <Text
                          className="text-black-900_01 text-lg w-[104px]"
                          size="txtInterMedium18"
                        >
                          Paket Dasar
                        </Text>
                        <Text
                          className="text-black-900_01 text-lg text-right w-[97px]"
                          size="txtInterMedium18"
                        >
                          Rp 150.000
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[148px] items-start justify-start pr-2 w-auto sm:w-full">
                        <Text
                          className="text-base text-gray-500_01 w-[87px]"
                          size="txtInterMedium16"
                        >
                          Rp 150.000
                        </Text>
                        <Text
                          className="text-base text-gray-500_01 text-right w-[54px]"
                          size="txtInterMedium16"
                        >
                          1 Bulan
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-9 items-start justify-start w-auto sm:w-full">
                  <Line className="bg-gray-500_01 h-px w-full" />
                  <div className="flex sm:flex-col flex-row gap-4 items-start justify-start w-auto sm:w-full">
                    <Input
                      name="frameSixtyEight"
                      placeholder="Voucher Diskon"
                      className="p-0 placeholder:text-gray-500_01 text-base text-left w-full"
                      wrapClassName="outline outline-[1px] outline-gray-500_01 rounded w-[76%] sm:w-full"
                      shape="round"
                      color="white_A700"
                      size="md"
                      variant="fill"
                    ></Input>
                    <Button
                      className="!text-gray-100_02 cursor-pointer font-medium min-w-[92px] rounded text-base text-center"
                      color="gray_900_01"
                      size="md"
                      variant="fill"
                    >
                      Apply
                    </Button>
                  </div>
                </div>
                <div className="flex flex-col gap-6 items-start justify-start w-auto sm:w-full">
                  <Line className="bg-gray-500_01 h-px w-full" />
                  <div className="flex flex-col gap-4 items-start justify-start w-auto sm:w-full">
                    <div className="flex flex-row gap-[296px] items-start justify-start w-[476px] sm:w-full">
                      <Text
                        className="text-base text-black-900_01 w-16"
                        size="txtInterMedium16Black90001"
                      >
                        Subtotal
                      </Text>
                      <Text
                        className="text-base text-black-900_01 text-right w-[86px]"
                        size="txtInterMedium16Black90001"
                      >
                        Rp 150.000
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[316px] items-start justify-start w-[476px] sm:w-full">
                      <Text
                        className="text-base text-black-900_01 w-[51px]"
                        size="txtInterMedium16Black90001"
                      >
                        Diskon
                      </Text>
                      <Text
                        className="text-base text-black-900_01 text-right w-2.5"
                        size="txtInterMedium16Black90001"
                      >
                        0
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[23px] items-start justify-start w-full">
                  <Line className="bg-gray-500_01 h-px w-[94%]" />
                  <div className="flex flex-row items-end justify-between pb-[7px] pr-[7px] w-full">
                    <div className="flex flex-col gap-1 items-start justify-start w-[232px]">
                      <Text
                        className="text-base text-black-900_01 w-[38px]"
                        size="txtInterMedium16Black90001"
                      >
                        Total
                      </Text>
                      <Text
                        className="text-gray-500_01 text-sm w-[230px]"
                        size="txtInterRegular14"
                      >
                        Termasuk pajak sebesar Rp 10.000
                      </Text>
                    </div>
                    <Text
                      className="mb-[3px] mr-[19px] mt-3.5 text-2xl md:text-[22px] text-black-900_01 sm:text-xl"
                      size="txtInterMedium24"
                    >
                      Rp 170.000
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer className="bg-gray-900 flex font-dmsans items-center justify-center mt-[82px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default PembayaranPage;
