import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, CheckBox, Img, Text } from "components";
import Footer from "components/Footer";
import Header1 from "components/Header1";

const PaketmemberPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-start justify-start mx-auto w-full">
        <div className="flex flex-col items-center w-full">
          <Header1 className="flex flex-col items-center justify-center md:px-5 w-full" />
          <div className="font-volkhov h-[347px] md:px-5 relative w-full">
            <Img
              className="h-[347px] m-auto object-cover w-full"
              src="images/img_rectangle168.png"
              alt="rectangle168"
            />
            <Text
              className="absolute h-max inset-[0] justify-center m-auto sm:text-[38.42px] md:text-[44.42px] text-[52.42px] text-center text-white-A700 tracking-[-2.10px] w-max"
              size="txtVolkhovBold5242"
            >
              Daftar Paket Member Gym
            </Text>
          </div>
          <Text
            className="capitalize mt-[97px] sm:text-[38.5px] md:text-[44.5px] text-[52.5px] text-blue_gray-900 text-center"
            size="txtPoppinsBold525"
          >
            Daftar Paket Member GYM
          </Text>
          <Text
            className="capitalize mt-[3px] text-2xl md:text-[22px] text-center text-gray-800 sm:text-xl"
            size="txtPoppinsRegular24"
          >
            Akses ke promosi atau penawaran spesial
          </Text>
        </div>
        <div className="flex flex-col font-dmsans items-center justify-start md:ml-[0] ml-[110px] mt-[61px] md:px-5 w-[81%] md:w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="md:gap-5 gap-7 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
              <div className="bg-white-A700 flex flex-1 flex-col gap-11 items-center justify-start outline outline-[1px] outline-blue_gray-100_01 pb-11 rounded-[24px] w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <Img
                      className="h-[214px] md:h-auto object-cover w-full"
                      src="images/img_bg.png"
                      alt="bg"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-[81%] md:w-full">
                  <Text
                    className="ml-0.5 md:ml-[0] sm:text-[23px] md:text-[25px] text-[27px] text-gray-900_01"
                    size="txtDMSansBold27"
                  >
                    Paket Dasar
                  </Text>
                  <div className="flex flex-col font-inter items-center justify-start md:ml-[0] ml-[3px] mt-[9px]">
                    <Text
                      className="text-lg text-lime-800 text-right"
                      size="txtInterRegular18"
                    >
                      Rp 150.000/Bln
                    </Text>
                  </div>
                  <Text
                    className="leading-[30.00px] md:ml-[0] ml-[3px] mt-[23px] text-gray-800 text-lg w-full"
                    size="txtDMSansRegular18"
                  >
                    Dapatkan harga membership gym terbaik di FitLife
                  </Text>
                  <div className="flex flex-col font-dmsans gap-4 items-start justify-start md:ml-[0] ml-[3px] mt-[23px] w-[92%] md:w-full">
                    <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                      <CheckBox
                        className="font-bold text-left text-lg"
                        inputClassName="h-[26px] mr-[5px] w-[26px]"
                        name="text"
                        id="text"
                        label="Akses ke fasilitas gym dasar"
                        shape="round"
                        size="xs"
                      ></CheckBox>
                    </div>
                    <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                      <CheckBox
                        className="font-bold text-left text-lg"
                        inputClassName="h-[26px] mr-[5px] w-[26px]"
                        name="text_One"
                        id="text_One"
                        label="Jadwal latihan fleksibel."
                        shape="round"
                        size="xs"
                      ></CheckBox>
                    </div>
                    <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                      <CheckBox
                        className="font-bold leading-[18.00px] text-left text-lg"
                        inputClassName="h-[26px] mr-[5px] w-[26px]"
                        name="text_Two"
                        id="text_Two"
                        label="Pembimbingan awal oleh 
instruktur."
                        shape="round"
                      ></CheckBox>
                    </div>
                  </div>
                  <Button
                    className="common-pointer cursor-pointer font-bold min-w-[144px] mt-6 rounded-[10px] text-base text-center"
                    onClick={() => navigate("/form")}
                    color="gray_900_01"
                    size="lg"
                    variant="fill"
                  >
                    Daftar Paket
                  </Button>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-1 flex-col gap-11 items-center justify-start outline outline-[1px] outline-blue_gray-100_01 pb-11 rounded-[24px] w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <Img
                      className="h-[214px] md:h-auto object-cover w-full"
                      src="images/img_bg_214x388.png"
                      alt="bg"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-[81%] md:w-full">
                  <Text
                    className="ml-0.5 md:ml-[0] sm:text-[23px] md:text-[25px] text-[27px] text-gray-900_01"
                    size="txtDMSansBold27"
                  >
                    Paket Premium
                  </Text>
                  <div className="flex flex-col font-inter items-center justify-start md:ml-[0] ml-[3px] mt-[9px]">
                    <Text
                      className="text-lg text-lime-800"
                      size="txtInterRegular18"
                    >
                      Rp 300.000/Bln
                    </Text>
                  </div>
                  <Text
                    className="leading-[30.00px] md:ml-[0] ml-[3px] mt-[23px] text-gray-800 text-lg w-full"
                    size="txtDMSansRegular18"
                  >
                    Dapatkan harga membership gym terbaik di FitLife
                  </Text>
                  <div className="flex flex-col font-dmsans gap-4 items-center justify-start md:ml-[0] ml-[3px] mt-[23px] w-[97%] md:w-full">
                    <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                      <CheckBox
                        className="font-bold text-left text-lg"
                        inputClassName="h-[26px] mr-[5px] w-[26px]"
                        name="text"
                        id="text4"
                        label="Akses ke semua fasilitas gym"
                        shape="round"
                        size="xs"
                      ></CheckBox>
                    </div>
                    <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                      <CheckBox
                        className="font-bold text-left text-lg"
                        inputClassName="h-[26px] mr-[5px] w-[26px]"
                        name="text_One"
                        id="text_One2"
                        label="Jadwal latihan  lebih fleksibel"
                        shape="round"
                        size="xs"
                      ></CheckBox>
                    </div>
                    <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                      <CheckBox
                        className="font-bold text-left text-lg"
                        inputClassName="h-[26px] mr-[5px] w-[26px]"
                        name="text_Two"
                        id="text_Two2"
                        label="Sesi pelatihan pribadi berkala"
                        shape="round"
                        size="xs"
                      ></CheckBox>
                    </div>
                  </div>
                  <Button
                    className="common-pointer cursor-pointer font-bold min-w-[144px] mt-[33px] rounded-[10px] text-base text-center"
                    onClick={() => navigate("/form")}
                    color="gray_900_01"
                    size="lg"
                    variant="fill"
                  >
                    Daftar Paket
                  </Button>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-1 flex-col gap-[47px] items-center justify-start outline outline-[1px] outline-blue_gray-100_01 pb-11 rounded-[24px] w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <Img
                      className="h-[214px] md:h-auto object-cover w-full"
                      src="images/img_bg_1.png"
                      alt="bg"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-[81%] md:w-full">
                  <Text
                    className="ml-0.5 md:ml-[0] sm:text-[23px] md:text-[25px] text-[27px] text-gray-900_01"
                    size="txtDMSansBold27"
                  >
                    Paket Keluarga
                  </Text>
                  <div className="flex flex-col font-inter items-center justify-start md:ml-[0] ml-[3px] mt-1.5">
                    <Text
                      className="text-lg text-lime-800"
                      size="txtInterRegular18"
                    >
                      Rp 500.000/Bln
                    </Text>
                  </div>
                  <Text
                    className="leading-[30.00px] md:ml-[0] ml-[3px] mt-[23px] text-gray-800 text-lg w-full"
                    size="txtDMSansRegular18"
                  >
                    Dapatkan harga membership gym terbaik di FitLife
                  </Text>
                  <div className="flex flex-col font-dmsans gap-4 items-start justify-start md:ml-[0] ml-[3px] mt-[23px] w-[95%] md:w-full">
                    <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                      <CheckBox
                        className="font-bold text-left text-lg"
                        inputClassName="h-[26px] mr-[5px] w-[26px]"
                        name="text"
                        id="text7"
                        label="Akses ke semua fasilitas gym"
                        shape="round"
                        size="xs"
                      ></CheckBox>
                    </div>
                    <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                      <CheckBox
                        className="font-bold text-left text-lg"
                        inputClassName="h-[26px] mr-[5px] w-[26px]"
                        name="text_One"
                        id="text_One3"
                        label="Akses ke fasilitas khusus"
                        shape="round"
                        size="xs"
                      ></CheckBox>
                    </div>
                    <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                      <CheckBox
                        className="font-bold leading-[18.00px] text-left text-lg"
                        inputClassName="h-[26px] mr-[5px] w-[26px]"
                        name="text_Two"
                        id="text_Two3"
                        label="Keanggotaan untuk seluruh 
keluarga"
                        shape="round"
                      ></CheckBox>
                    </div>
                  </div>
                  <Button
                    className="common-pointer cursor-pointer font-bold min-w-[144px] mt-6 rounded-[10px] text-base text-center"
                    onClick={() => navigate("/form")}
                    color="gray_900_01"
                    size="lg"
                    variant="fill"
                  >
                    Daftar Paket
                  </Button>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-1 flex-col gap-[47px] items-center justify-start outline outline-[1px] outline-blue_gray-100_01 pb-[51px] rounded-[24px] w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <Img
                      className="h-[214px] md:h-auto object-cover w-full"
                      src="images/img_bg_2.png"
                      alt="bg"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-[81%] md:w-full">
                  <Text
                    className="ml-0.5 md:ml-[0] sm:text-[23px] md:text-[25px] text-[27px] text-gray-900_01"
                    size="txtDMSansBold27"
                  >
                    Personal Training
                  </Text>
                  <div className="flex flex-col font-inter items-center justify-start mt-1.5">
                    <Text
                      className="text-lg text-lime-800"
                      size="txtInterRegular18"
                    >
                      Rp 250.000/Bln
                    </Text>
                  </div>
                  <Text
                    className="leading-[30.00px] md:ml-[0] ml-[3px] mt-[23px] text-gray-800 text-lg w-[99%] sm:w-full"
                    size="txtDMSansRegular18"
                  >
                    Dapatkan harga membership gym terbaik di FitLife
                  </Text>
                  <div className="flex flex-col font-dmsans gap-4 items-start justify-start md:ml-[0] ml-[3px] mt-[23px] w-full">
                    <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                      <CheckBox
                        className="font-bold text-left text-lg"
                        inputClassName="h-[26px] mr-[5px] w-[26px]"
                        name="text"
                        id="text10"
                        label="Motivasi untuk mencapai goals"
                        shape="round"
                        size="xs"
                      ></CheckBox>
                    </div>
                    <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                      <CheckBox
                        className="font-bold text-left text-lg"
                        inputClassName="h-[26px] mr-[5px] w-[26px]"
                        name="text_One"
                        id="text_One4"
                        label="Track perkembangan program"
                        shape="round"
                        size="xs"
                      ></CheckBox>
                    </div>
                    <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                      <CheckBox
                        className="font-bold leading-[18.00px] text-left text-lg"
                        inputClassName="h-[26px] mr-[5px] w-[26px]"
                        name="text_Two"
                        id="text_Two4"
                        label="Konsultasi langsung dengan 
Trainer"
                        shape="round"
                      ></CheckBox>
                    </div>
                  </div>
                  <div className="flex flex-col font-dmsans items-start justify-start md:ml-[0] ml-[3px] mt-[15px] w-auto sm:w-full">
                    <CheckBox
                      className="font-bold text-left text-lg"
                      inputClassName="h-[26px] mr-[5px] w-[26px]"
                      name="text_Three"
                      id="text_Three"
                      label="Body assasement weekly"
                      shape="round"
                      size="xs"
                    ></CheckBox>
                  </div>
                  <Button
                    className="common-pointer cursor-pointer font-bold min-w-[144px] mt-8 rounded-[10px] text-base text-center"
                    onClick={() => navigate("/form")}
                    color="gray_900_01"
                    size="lg"
                    variant="fill"
                  >
                    Daftar Paket
                  </Button>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-1 flex-col gap-[47px] items-center justify-start outline outline-[1px] outline-blue_gray-100_01 pb-11 rounded-[24px] w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <Img
                    className="h-[214px] md:h-auto object-cover w-full"
                    src="images/img_bg_3.png"
                    alt="bg"
                  />
                </div>
                <div className="flex flex-col items-start justify-start w-[81%] md:w-full">
                  <Text
                    className="ml-0.5 md:ml-[0] sm:text-[23px] md:text-[25px] text-[27px] text-gray-900_01"
                    size="txtDMSansBold27"
                  >
                    Paket Lengkap
                  </Text>
                  <div className="flex flex-col font-inter items-center justify-start md:ml-[0] ml-[3px] mt-1.5">
                    <Text
                      className="text-lg text-lime-800"
                      size="txtInterRegular18"
                    >
                      Rp 400.000/Bln
                    </Text>
                  </div>
                  <Text
                    className="leading-[30.00px] md:ml-[0] ml-[3px] mt-[23px] text-gray-800 text-lg w-full"
                    size="txtDMSansRegular18"
                  >
                    Dapatkan harga membership gym terbaik di FitLife
                  </Text>
                  <div className="flex flex-col font-dmsans gap-4 items-start justify-start md:ml-[0] ml-[3px] mt-[23px] w-[97%] md:w-full">
                    <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                      <CheckBox
                        className="font-bold text-left text-lg"
                        inputClassName="h-[26px] mr-[5px] w-[26px]"
                        name="text"
                        id="text14"
                        label="Akses ke fasilitas khusus"
                        shape="round"
                        size="xs"
                      ></CheckBox>
                    </div>
                    <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                      <CheckBox
                        className="font-bold text-left text-lg"
                        inputClassName="h-[26px] mr-[5px] w-[26px]"
                        name="text_One"
                        id="text_One5"
                        label="Personal Training"
                        shape="round"
                        size="xs"
                      ></CheckBox>
                    </div>
                    <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                      <CheckBox
                        className="font-bold text-left text-lg"
                        inputClassName="h-[26px] mr-[5px] w-[26px]"
                        name="text_Two"
                        id="text_Two5"
                        label="Sesi pelatihan pribadi berkala"
                        shape="round"
                        size="xs"
                      ></CheckBox>
                    </div>
                  </div>
                  <Button
                    className="common-pointer cursor-pointer font-bold min-w-[144px] mt-[33px] rounded-[10px] text-base text-center"
                    onClick={() => navigate("/form")}
                    color="gray_900_01"
                    size="lg"
                    variant="fill"
                  >
                    Daftar Paket
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-dmsans items-center mt-[161px] w-full">
          <Footer className="bg-gray-900 flex items-center justify-center md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default PaketmemberPage;
