import React from "react";

import { Button, Img, Line, List, Text } from "components";
import Footer from "components/Footer";
import Header1 from "components/Header1";

const ArtikelPage = () => {
  return (
    <>
      <div className="bg-gray-100_01 flex flex-col font-poppins items-start justify-start mx-auto w-full">
        <div className="flex flex-col items-center w-full">
          <Header1 className="flex flex-col items-center justify-center md:px-5 w-full" />
          <div className="font-volkhov h-[347px] md:px-5 relative w-full">
            <Img
              className="h-[347px] m-auto object-cover w-full"
              src="images/img_rectangle168.png"
              alt="rectangle168"
            />
            <Text
              className="absolute h-max inset-y-[0] my-auto right-[42%] sm:text-[38.42px] md:text-[44.42px] text-[52.42px] text-center text-white-A700 tracking-[-2.10px]"
              size="txtVolkhovBold5242"
            >
              Artikel
            </Text>
          </div>
        </div>
        <div className="flex flex-col items-end mt-24 md:px-10 sm:px-5 px-[336px] w-full">
          <Text
            className="capitalize grid inset-y-[222px] items-start justify-start left-[2222px] md:m-0 m-[33px] max-w-[522px] min-w-[570px] md:ml-[0] right-[22222px] static sm:text-[38.5px] md:text-[44.5px] text-[52.5px] text-blue_gray-900 text-center w-[60px]"
            size="txtPoppinsBold525"
          >
            Artikel
          </Text>
          <Text
            className="capitalize hidden mt-1 text-2xl md:text-[22px] text-center text-gray-800 sm:text-xl"
            size="txtPoppinsRegular24"
          >
            Lakukan pembayaran sekarang sebelum tanggal habis tempo
          </Text>
        </div>
        <div className="flex flex-col items-center mt-10 w-full">
          <div className="h-[553px] md:px-5 relative w-full">
            <Img
              className="h-[553px] m-auto object-cover w-full"
              src="images/img_image.png"
              alt="image_One"
            />
            <div className="absolute flex flex-col md:gap-10 gap-[238px] justify-start left-[2%] top-[5%] w-[85%]">
              <Button
                className="cursor-pointer leading-[normal] min-w-[121px] mr-[1154px] text-[17.23px] text-center w-[22px]"
                shape="square"
                color="green_900"
                size="sm"
                variant="fill"
              >
                FitLife
              </Button>
              <div className="flex flex-col items-start justify-start ml-1.5 md:ml-[0] w-full">
                <Text
                  className="sm:text-[25.54px] md:text-[27.54px] text-[29.54px] text-white-A700"
                  size="txtOswaldBold2954"
                >
                  Pertumbuhan Tren Gym Lagi Pesat, Start Up Ini Kebut Perluasan
                  Bisnis
                </Text>
                <Line className="bg-red-400 h-px mt-8 w-[9%]" />
                <Text
                  className="leading-[125.60%] mt-2 sm:text-[18.15px] md:text-[20.15px] text-[22.15px] text-white-A700 w-full"
                  size="txtOpenSansRomanRegular2215"
                >
                  Seiring meningkatnya kesadaran pada health dan wellness, saat
                  ini masyarakat semakin menyadari bahwa penting untuk
                  menjalankan gaya hidup sehat dan berolahraga secara teratur.
                  Riset McKinsey Health Institute pada tahun 2022 pun menyatakan
                  bahwa....
                </Text>
              </div>
            </div>
          </div>
          <div className="bg-blue_gray-50 flex flex-col font-opensans items-center justify-start mt-[39px] md:pl-10 sm:pl-5 pl-[46px] rounded-[7px] w-full">
            <div className="flex flex-col items-center justify-start max-w-[1464px] mx-auto w-full">
              <div className="flex md:flex-col flex-row gap-[21px] items-center justify-between w-full">
                <div className="flex md:flex-1 flex-col gap-3.5 items-start justify-start w-[49%] md:w-full">
                  <Text
                    className="sm:text-[30.46px] md:text-[32.46px] text-[34.46px] text-gray-900_04"
                    size="txtOpenSansRomanSemiBold3446"
                  >
                    Berita Populer
                  </Text>
                  <List
                    className="flex flex-col gap-6 items-center w-full"
                    orientation="vertical"
                  >
                    <div className="flex md:flex-1 flex-col items-center justify-start w-[98%] md:w-full">
                      <div className="flex md:flex-col flex-row gap-[26px] items-center justify-between w-full">
                        <Img
                          className="h-[184px] md:h-auto object-cover rounded-[7px]"
                          src="images/img_racehose1.png"
                          alt="racehoseOne"
                        />
                        <div className="flex flex-col items-start justify-start">
                          <Text
                            className="text-[12.31px] text-gray-900_99"
                            size="txtDMSansMedium1231"
                          >
                            28 November 2023 - Jakarta
                          </Text>
                          <Text
                            className="leading-[136.90%] mt-0.5 text-[19.69px] text-gray-900_04 w-full"
                            size="txtInterSemiBold1969"
                          >
                            6 Pelajaran Hidup Berharga dari Kebiasaan Gym, Bisa
                            Membangun..
                          </Text>
                          <Text
                            className="leading-[123.90%] mt-[22px] text-[14.77px] text-gray-700_01 w-[96%] sm:w-full"
                            size="txtDMSansRegular1477"
                          >
                            Kebiasaan pergi ke gym ternyata bukan hanya tentang
                            membangun otot atau mencapai tubuh yang ideal.
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex md:flex-1 flex-col items-center justify-start w-[99%] md:w-full">
                      <div className="flex md:flex-col flex-row gap-[26px] items-center justify-between w-full">
                        <Img
                          className="h-[184px] md:h-auto object-cover rounded-[7px]"
                          src="images/img_cyclistleadsa.png"
                          alt="cyclistleadsa"
                        />
                        <div className="flex flex-col items-start justify-start">
                          <Text
                            className="text-[12.31px] text-gray-900_99"
                            size="txtDMSansMedium1231"
                          >
                            26 November 2023 - Jakarta
                          </Text>
                          <Text
                            className="capitalize leading-[136.90%] mt-[3px] text-[19.69px] text-gray-900_04 w-full"
                            size="txtInterSemiBold1969"
                          >
                            4 Tips Agar Konsisten Nge-Gym ataupun Fitness
                          </Text>
                          <Text
                            className="leading-[123.90%] mt-[21px] text-[14.77px] text-gray-700_01 w-[91%] sm:w-full"
                            size="txtDMSansRegular1477"
                          >
                            Konsisten ngegym ataupun fitness adalah hal yang
                            sangat sulit dilakukan. Bisa disebabkan kurangnya
                            disiplin pribadi, kurangnya
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col items-center justify-start w-full">
                      <div className="flex md:flex-col flex-row gap-[26px] items-center justify-between w-full">
                        <Img
                          className="h-[184px] md:h-auto object-cover rounded-[7px]"
                          src="images/img_emptyboxingar.png"
                          alt="emptyboxingar"
                        />
                        <div className="flex flex-col items-start justify-start">
                          <Text
                            className="text-[12.31px] text-gray-900_99"
                            size="txtDMSansMedium1231"
                          >
                            21 November 2023 - Jakarta
                          </Text>
                          <Text
                            className="leading-[136.90%] mt-0.5 text-[19.69px] text-gray-900_04 w-full"
                            size="txtInterSemiBold1969"
                          >
                            Justyn Vicky, Atlet Binaragawan yang Meninggal di
                            Gym Diduga Memakai..
                          </Text>
                          <Text
                            className="leading-[123.90%] mt-[22px] text-[14.77px] text-gray-700_01 w-[96%] sm:w-full"
                            size="txtDMSansRegular1477"
                          >
                            Atlet binaragawan sekaligus personal trainer di
                            pusat kebugaran di Bali yang meninggal dunia akibat
                            tertimpa barbel, diduga kelebihan{" "}
                          </Text>
                        </div>
                      </div>
                    </div>
                  </List>
                </div>
                <div className="font-poppins h-[749px] relative w-[51%] md:w-full">
                  <Img
                    className="absolute h-[749px] inset-[0] justify-center m-auto object-cover rounded-[7px] w-full"
                    src="images/img_sportsmandrink.png"
                    alt="sportsmandrink"
                  />
                  <div className="absolute bg-black-900_90 flex flex-col md:gap-10 gap-[432px] h-full inset-[0] justify-center m-auto p-[29px] sm:px-5 rounded-[7px] w-full">
                    <Button
                      className="capitalize cursor-pointer font-medium h-[63px] leading-[normal] md:ml-[0] ml-[3px] rounded-[3px] sm:text-[20.62px] md:text-[22.62px] text-[24.62px] text-center w-[249px]"
                      color="blue_gray_50"
                      size="md"
                      variant="outline"
                    >
                      FitLife
                    </Button>
                    <div className="flex flex-col gap-2 items-start justify-start mb-[19px] md:ml-[0] ml-[17px] mr-0.5">
                      <Text
                        className="sm:text-[18.15px] md:text-[20.15px] text-[22.15px] text-white-A700"
                        size="txtDMSansRegular2215"
                      >
                        28 November 2023 - Jakarta
                      </Text>
                      <Text
                        className="capitalize sm:text-[35.38px] md:text-[37.38px] text-[39.38px] text-white-A700 w-full"
                        size="txtRobotoRomanBold3938"
                      >
                        Berapa Kali Sebaiknya Rutin Gym & Pentingkah Adanya Rest
                        Day?
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer className="bg-gray-900 flex font-dmsans items-center justify-center mt-32 md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default ArtikelPage;
