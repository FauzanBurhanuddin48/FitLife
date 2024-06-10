import React from "react";

import { Img, Text } from "components";
import Footer from "components/Footer";
import Header1 from "components/Header1";

const VideoPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-start justify-start w-full">
          <Header1 className="flex flex-col items-center justify-center md:px-5 w-full" />
          <div className="font-volkhov h-[347px] md:px-5 relative w-full">
            <Img
              className="h-[347px] m-auto object-cover w-full"
              src="images/img_rectangle168.png"
              alt="rectangle168"
            />
            <Text
              className="absolute h-max inset-y-[0] my-auto right-[43%] sm:text-[38.42px] md:text-[44.42px] text-[52.42px] text-center text-white-A700 tracking-[-2.10px]"
              size="txtVolkhovBold5242"
            >
              Video
            </Text>
          </div>
          <Text
            className="capitalize md:ml-[0] ml-[900px] mt-24 sm:text-[38.5px] md:text-[44.5px] text-[52.5px] text-blue_gray-900 text-center"
            size="txtPoppinsBold525"
          >
            Video
          </Text>
          <Text
            className="capitalize md:ml-[0] ml-[700px] mt-1 text-2xl md:text-[22px] text-center text-gray-800 sm:text-xl"
            size="txtPoppinsRegular24"
          >
            Memberikan pengantar visual melalui fasilitas gym
          </Text>
          <div className="font-poppins md:gap-5 gap-[49px] grid md:grid-cols-1 grid-cols-2 justify-center max-w-[1264px] min-h-[auto] mt-[60px] mx-auto md:px-5 w-full">
            <div className="flex flex-1 flex-col items-center justify-start w-full">
              <div className="bg-lime-800 flex flex-col gap-[29px] justify-start pb-[42px] rounded-[10px] w-full">
                <div className="h-[357px] relative w-full">
                  <Img
                    className="h-[357px] m-auto object-cover rounded-[10px] w-full"
                    src="images/img_group369.png"
                    alt="group369"
                  />
                  <div
                    className="absolute bg-cover bg-no-repeat flex flex-col h-11 items-end justify-start p-1 right-[4%] rounded-[10px] top-[6%]"
                    style={{ backgroundImage: "url('images/img_group17.svg')" }}
                  >
                    <Text
                      className="mr-[7px] sm:text-[18.36px] md:text-[20.36px] text-[22.36px] text-white-A700 tracking-[1.12px]"
                      size="txtPoppinsMedium2236"
                    >
                      18 min
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col font-dmsans items-start justify-start md:ml-[0] ml-[52px] w-[78%] md:w-full">
                  <Text
                    className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                    size="txtDMSansBold28"
                  >
                    Panduan Latihan
                  </Text>
                  <Text
                    className="leading-[30.00px] mt-7 text-lg text-white-A700 w-full"
                    size="txtDMSansRegular18WhiteA700"
                  >
                    Serangkaian video yang memberikan panduan latihan untuk
                    pemula mulai dari jenis olahraga dan program kebugaran.
                  </Text>
                  <div className="flex flex-col font-poppins items-center justify-start md:ml-[0] ml-[3px] mt-[42px] rounded-[10px] w-3/5 md:w-full">
                    <div className="flex flex-col items-center justify-start rounded-[10px] w-full">
                      <Text
                        className="text-white-A700 text-xl tracking-[1.12px]"
                        size="txtPoppinsRegular20WhiteA700"
                      >
                        53K views • 2 weeks ago
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col items-center justify-start w-full">
              <div className="bg-lime-800 flex flex-col gap-8 justify-start pb-[42px] rounded-[10px] w-full">
                <div className="h-[357px] relative w-full">
                  <Img
                    className="h-[357px] m-auto object-cover rounded-[10px] w-full"
                    src="images/img_group369.png"
                    alt="group369"
                  />
                  <div
                    className="absolute bg-cover bg-no-repeat flex flex-col h-11 items-center justify-start p-1 right-[4%] rounded-[10px] top-[6%]"
                    style={{ backgroundImage: "url('images/img_group17.svg')" }}
                  >
                    <Text
                      className="sm:text-[18.36px] md:text-[20.36px] text-[22.36px] text-white-A700 tracking-[1.12px]"
                      size="txtPoppinsMedium2236"
                    >
                      7 min
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col font-dmsans items-start justify-start md:ml-[0] ml-[52px] w-[78%] md:w-full">
                  <Text
                    className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                    size="txtDMSansBold28"
                  >
                    Tips Nutrisi
                  </Text>
                  <Text
                    className="leading-[30.00px] mt-[25px] text-lg text-white-A700 w-full"
                    size="txtDMSansRegular18WhiteA700"
                  >
                    Memberikan tips nutrisi dan panduan diet yang sehat untuk
                    membantu mencapai tujuan kebugaran dan Pemahaman tentang
                    suplemen nutrisi.
                  </Text>
                  <div className="flex flex-col font-poppins items-center justify-start md:ml-[0] ml-[35px] mt-[42px] rounded-[10px] w-3/5 md:w-full">
                    <div className="flex flex-col items-center justify-start rounded-[10px] w-full">
                      <Text
                        className="text-white-A700 text-xl tracking-[1.12px]"
                        size="txtPoppinsRegular20WhiteA700"
                      >
                        53K views • 2 weeks ago
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col items-center justify-start w-full">
              <div className="bg-lime-800 flex flex-col gap-8 justify-start pb-[42px] rounded-[10px] w-full">
                <div className="h-[357px] relative w-full">
                  <Img
                    className="h-[357px] m-auto object-cover rounded-[10px] w-full"
                    src="images/img_group369.png"
                    alt="group369"
                  />
                  <div
                    className="absolute bg-cover bg-no-repeat flex flex-col h-11 items-end justify-start p-1 right-[4%] rounded-[10px] top-[6%]"
                    style={{ backgroundImage: "url('images/img_group17.svg')" }}
                  >
                    <Text
                      className="mr-[7px] sm:text-[18.36px] md:text-[20.36px] text-[22.36px] text-white-A700 tracking-[1.12px]"
                      size="txtPoppinsMedium2236"
                    >
                      15 min
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col font-dmsans items-start justify-start md:ml-[0] ml-[52px] w-[78%] md:w-full">
                  <Text
                    className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                    size="txtDMSansBold28"
                  >
                    Angkat Beban
                  </Text>
                  <Text
                    className="leading-[30.00px] mt-[25px] text-lg text-white-A700 w-full"
                    size="txtDMSansRegular18WhiteA700"
                  >
                    Membahas teknik-teknik dasar angkat beban untuk membantu
                    pemula memahami gerakan yang benar dan mengurangi risiko
                    cedera.
                  </Text>
                  <div className="flex flex-col font-poppins items-center justify-start md:ml-[0] ml-[3px] mt-[42px] rounded-[10px] w-3/5 md:w-full">
                    <div className="flex flex-col items-center justify-start rounded-[10px] w-full">
                      <Text
                        className="text-white-A700 text-xl tracking-[1.12px]"
                        size="txtPoppinsRegular20WhiteA700"
                      >
                        53K views • 2 weeks ago
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col items-center justify-start w-full">
              <div className="bg-lime-800 flex flex-col gap-8 justify-start pb-[42px] rounded-[10px] w-full">
                <div className="h-[357px] relative w-full">
                  <Img
                    className="h-[357px] m-auto object-cover rounded-[10px] w-full"
                    src="images/img_group369.png"
                    alt="group369"
                  />
                  <div
                    className="absolute bg-cover bg-no-repeat flex flex-col h-11 items-end justify-start p-1 right-[4%] rounded-[10px] top-[6%]"
                    style={{ backgroundImage: "url('images/img_group17.svg')" }}
                  >
                    <Text
                      className="mr-[7px] sm:text-[18.36px] md:text-[20.36px] text-[22.36px] text-white-A700 tracking-[1.12px]"
                      size="txtPoppinsMedium2236"
                    >
                      10 min
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col font-dmsans items-start justify-start md:ml-[0] ml-[52px] w-[78%] md:w-full">
                  <Text
                    className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                    size="txtDMSansBold28"
                  >
                    Squat Jump
                  </Text>
                  <Text
                    className="leading-[30.00px] mt-[25px] text-lg text-white-A700 w-full"
                    size="txtDMSansRegular18WhiteA700"
                  >
                    konsep dasar squat jump dan memberikan panduan untuk pemula
                    yang ingin mengintegrasikan latihan ini ke dalam rutinitas
                  </Text>
                  <div className="flex flex-col font-poppins items-center justify-start md:ml-[0] ml-[35px] mt-[42px] rounded-[10px] w-3/5 md:w-full">
                    <div className="flex flex-col items-center justify-start rounded-[10px] w-full">
                      <Text
                        className="text-white-A700 text-xl tracking-[1.12px]"
                        size="txtPoppinsRegular20WhiteA700"
                      >
                        53K views • 2 weeks ago
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer className="bg-gray-900 flex font-dmsans items-center justify-center mt-[252px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default VideoPage;
