import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, List, Text } from "components";
import Footer from "components/Footer";

const Home1Page = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-start mx-auto w-full">
        <div className="h-[804px] md:px-5 relative w-full">
          <div className="absolute h-[804px] inset-[0] justify-center m-auto w-full">
            <Img
              className="h-[804px] m-auto object-cover w-full"
              src="images/img_rectangle1938.png"
              alt="rectangle1938"
            />
            <div className="absolute flex flex-col h-max inset-y-[0] items-center justify-start left-[4%] my-auto w-[84%]">
              <div className="flex flex-col gap-[17px] justify-start w-full">
                <div className="bg-white-A700_63 flex md:flex-col flex-row gap-[15px] items-end justify-start md:ml-[0] ml-[54px] mr-[871px] p-[5px] rounded-[18px] w-[27%] md:w-full">
                  <Button
                    className="cursor-pointer font-semibold min-w-[46px] text-[10px] text-center tracking-[1.50px]"
                    shape="round"
                    color="gray_900"
                    size="xs"
                    variant="fill"
                  >
                    NEW
                  </Button>
                  <Text
                    className="mb-0.5 md:mt-0 mt-[5px] text-white-A700_a2 text-xs tracking-[0.50px]"
                    size="txtPoppinsRegular12"
                  >
                    High Intensity workout to burn calories
                  </Text>
                </div>
                <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                  <Text
                    className="block h-[150px] leading-[29.00px] md:m-0 m-11 p-[22px] text-base text-white-A700 tracking-[0.50px] w-[350px]"
                    size="txtPoppinsRegular16"
                  >
                    Kami bangga menyambut Anda di FitLife Gym, tempat di mana
                    perjalanan menuju hidup yang lebih sehat dan bugar dimulai.
                  </Text>
                  <div className="flex flex-col gap-5 items-center justify-start mb-[68px] md:mt-0 mt-[93px]">
                    <div className="bg-white-A700_63 flex flex-col items-center justify-start p-[9px] rounded-[20px] w-full">
                      <Text
                        className="sm:text-4xl md:text-[38px] text-[40px] text-yellow-500 tracking-[1.00px]"
                        size="txtPoppinsSemiBold40"
                      >
                        38:14
                      </Text>
                      <Text
                        className="mb-[7px] text-[13px] text-white-A700 tracking-[1.00px]"
                        size="txtPoppinsRegular13"
                      >
                        TIME
                      </Text>
                    </div>
                    <div className="bg-white-A700_63 flex flex-col items-start justify-start p-[9px] rounded-[20px] w-full">
                      <Text
                        className="ml-5 md:ml-[0] sm:text-4xl md:text-[38px] text-[40px] text-red-A400 tracking-[1.00px]"
                        size="txtPoppinsSemiBold40RedA400"
                      >
                        165
                      </Text>
                      <Text
                        className="mb-2.5 ml-5 md:ml-[0] text-[13px] text-white-A700 tracking-[1.00px]"
                        size="txtPoppinsRegular13"
                      >
                        EST CALORIES
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0] w-full">
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
              <div className="flex flex-row font-roboto gap-[5px] items-center justify-center ml-7 w-[11%]">
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
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-[91%] md:w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start">
                  <Text
                    className="text-black-900 text-xl tracking-[1.00px]"
                    size="txtPoppinsSemiBold20"
                  >
                    FitLife
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[683px] md:mt-0 my-1 text-black-900 text-sm tracking-[1.50px]"
                    size="txtPoppinsMedium14"
                  >
                    HOME
                  </Text>
                  <Text
                    className="common-pointer md:ml-[0] ml-[49px] md:mt-0 my-1 text-black-900 text-sm tracking-[1.50px]"
                    size="txtPoppinsMedium14"
                    onClick={() => navigate("/paketmember")}
                  >
                    PAKET MEMBER
                  </Text>
                  <Text
                    className="common-pointer md:ml-[0] ml-[52px] md:mt-0 my-1 text-black-900 text-sm tracking-[1.50px]"
                    size="txtPoppinsMedium14"
                    onClick={() => navigate("/artikel")}
                  >
                    ARTIKEL
                  </Text>
                  <Text
                    className="common-pointer ml-12 md:ml-[0] md:mt-0 my-1 text-black-900 text-sm tracking-[1.50px]"
                    size="txtPoppinsMedium14"
                    onClick={() => navigate("/video")}
                  >
                    VIDEO
                  </Text>
                </div>
                <Img
                  className="common-pointer h-[50px] md:h-auto rounded-[50%]"
                  src="images/img_ellipse4.png"
                  alt="ellipseFour"
                  onClick={() => navigate("/login")}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start max-w-[1273px] mt-[135px] mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-[42px] items-center justify-start w-full">
            <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between w-full">
              <Text
                className="sm:text-[31px] md:text-[33px] text-[35px] text-black-900 tracking-[0.30px]"
                size="txtPoppinsSemiBold35"
              >
                Latihan Populer
              </Text>
              <Text
                className="common-pointer sm:mt-0 mt-[26px] text-black-900_97 text-xs tracking-[1.50px]"
                size="txtPoppinsRegular12Black90097"
                onClick={() => navigate("/video")}
              >
                LIHAT LATIHAN LAINNYA
              </Text>
            </div>
            <div className="md:gap-5 gap-[42px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
              <div className="flex flex-1 flex-col justify-start w-full">
                <div className="md:h-[250px] h-[280px] relative w-full">
                  <Img
                    className="absolute h-[250px] inset-x-[0] mx-auto object-cover top-[0] w-full"
                    src="images/img_group6.png"
                    alt="groupSix"
                  />
                  <Text
                    className="absolute bottom-[0] left-[5%] sm:text-[40px] md:text-[46px] text-[50px] text-black-900 tracking-[0.30px]"
                    size="txtPoppinsSemiBold50"
                  >
                    Treadmill
                  </Text>
                  <div className="absolute bottom-[9%] md:h-[30px] h-[34px] right-[0] w-1/5">
                    <Img
                      className="absolute h-[29px] inset-x-[0] mx-auto top-[0]"
                      src="images/img_television.svg"
                      alt="television"
                    />
                    <Text
                      className="absolute bottom-[0] right-[5%] text-black-900 text-xl tracking-[1.37px]"
                      size="txtPoppinsSemiBold20"
                    >
                      58:24
                    </Text>
                  </div>
                </div>
                <Text
                  className="md:ml-[0] ml-[21px] text-[13px] text-black-900_97 tracking-[0.50px]"
                  size="txtPoppinsRegular13Black90097"
                >
                  250 perkiraan kalori
                </Text>
              </div>
              <div className="flex flex-1 flex-col justify-start w-full">
                <div className="md:h-[250px] h-[283px] relative w-full">
                  <Img
                    className="absolute h-[250px] inset-x-[0] mx-auto object-cover top-[0] w-full"
                    src="images/img_group6.png"
                    alt="groupSix"
                  />
                  <Text
                    className="absolute bottom-[0] left-[5%] sm:text-[40px] md:text-[46px] text-[50px] text-black-900 tracking-[0.30px]"
                    size="txtPoppinsSemiBold50"
                  >
                    Stretching
                  </Text>
                  <div className="absolute bottom-[10%] md:h-[30px] h-[34px] right-[0] w-1/5">
                    <Img
                      className="absolute h-[29px] inset-x-[0] mx-auto top-[0]"
                      src="images/img_television.svg"
                      alt="television"
                    />
                    <Text
                      className="absolute bottom-[0] right-[5%] text-black-900 text-xl tracking-[1.37px]"
                      size="txtPoppinsSemiBold20"
                    >
                      58:24
                    </Text>
                  </div>
                </div>
                <Text
                  className="md:ml-[0] ml-[21px] text-[13px] text-black-900_97 tracking-[0.50px]"
                  size="txtPoppinsRegular13Black90097"
                >
                  250 perkiraan kalori
                </Text>
              </div>
              <div className="flex flex-1 flex-col justify-start w-full">
                <div className="md:h-[250px] h-[284px] relative w-full">
                  <Img
                    className="absolute h-[250px] inset-x-[0] mx-auto object-cover top-[0] w-full"
                    src="images/img_group6.png"
                    alt="groupSix"
                  />
                  <Text
                    className="absolute bottom-[0] left-[5%] sm:text-[40px] md:text-[46px] text-[50px] text-black-900 tracking-[0.30px]"
                    size="txtPoppinsSemiBold50"
                  >
                    Yoga
                  </Text>
                  <div className="absolute bottom-[10%] md:h-[30px] h-[34px] right-[0] w-1/5">
                    <Img
                      className="absolute h-[29px] inset-x-[0] mx-auto top-[0]"
                      src="images/img_television.svg"
                      alt="television"
                    />
                    <Text
                      className="absolute bottom-[0] right-[5%] text-black-900 text-xl tracking-[1.37px]"
                      size="txtPoppinsSemiBold20"
                    >
                      58:24
                    </Text>
                  </div>
                </div>
                <Text
                  className="md:ml-[0] ml-[21px] text-[13px] text-black-900_97 tracking-[0.50px]"
                  size="txtPoppinsRegular13Black90097"
                >
                  250 perkiraan kalori
                </Text>
              </div>
              <div className="flex flex-1 flex-col justify-start w-full">
                <div className="md:h-[250px] h-[283px] relative w-full">
                  <Img
                    className="absolute h-[250px] inset-x-[0] mx-auto object-cover top-[0] w-full"
                    src="images/img_group6_250x403.png"
                    alt="groupSix"
                  />
                  <Text
                    className="absolute bottom-[0] left-[5%] sm:text-[40px] md:text-[46px] text-[50px] text-black-900 tracking-[0.30px]"
                    size="txtPoppinsSemiBold50"
                  >
                    Running
                  </Text>
                  <div className="absolute bottom-[10%] md:h-[30px] h-[34px] right-[0] w-1/5">
                    <Img
                      className="absolute h-[29px] inset-x-[0] mx-auto top-[0]"
                      src="images/img_television.svg"
                      alt="television"
                    />
                    <Text
                      className="absolute bottom-[0] right-[5%] text-black-900 text-xl tracking-[1.37px]"
                      size="txtPoppinsSemiBold20"
                    >
                      58:24
                    </Text>
                  </div>
                </div>
                <Text
                  className="md:ml-[0] ml-[21px] text-[13px] text-black-900_97 tracking-[0.50px]"
                  size="txtPoppinsRegular13Black90097"
                >
                  250 perkiraan kalori
                </Text>
              </div>
              <div className="flex flex-1 flex-col justify-start w-full">
                <div className="md:h-[250px] h-[283px] relative w-full">
                  <Img
                    className="absolute h-[250px] inset-x-[0] mx-auto object-cover top-[0] w-full"
                    src="images/img_group6.png"
                    alt="groupSix"
                  />
                  <Text
                    className="absolute bottom-[0] left-[5%] sm:text-[40px] md:text-[46px] text-[50px] text-black-900 tracking-[0.30px]"
                    size="txtPoppinsSemiBold50"
                  >
                    Lifting
                  </Text>
                  <div className="absolute bottom-[10%] md:h-[30px] h-[34px] right-[0] w-1/5">
                    <Img
                      className="absolute h-[29px] inset-x-[0] mx-auto top-[0]"
                      src="images/img_television.svg"
                      alt="television"
                    />
                    <Text
                      className="absolute bottom-[0] right-[5%] text-black-900 text-xl tracking-[1.37px]"
                      size="txtPoppinsSemiBold20"
                    >
                      58:24
                    </Text>
                  </div>
                </div>
                <Text
                  className="md:ml-[0] ml-[21px] text-[13px] text-black-900_97 tracking-[0.50px]"
                  size="txtPoppinsRegular13Black90097"
                >
                  250 perkiraan kalori
                </Text>
              </div>
              <div className="flex flex-1 flex-col justify-start w-full">
                <div className="md:h-[250px] h-[284px] relative w-full">
                  <Img
                    className="absolute h-[250px] inset-x-[0] mx-auto object-cover top-[0] w-full"
                    src="images/img_group6.png"
                    alt="groupSix"
                  />
                  <Text
                    className="absolute bottom-[0] left-[5%] sm:text-[40px] md:text-[46px] text-[50px] text-black-900 tracking-[0.30px]"
                    size="txtPoppinsSemiBold50"
                  >
                    PushUp
                  </Text>
                  <div className="absolute bottom-[10%] md:h-[30px] h-[34px] right-[0] w-1/5">
                    <Img
                      className="absolute h-[29px] inset-x-[0] mx-auto top-[0]"
                      src="images/img_television.svg"
                      alt="television"
                    />
                    <Text
                      className="absolute bottom-[0] right-[5%] text-black-900 text-xl tracking-[1.37px]"
                      size="txtPoppinsSemiBold20"
                    >
                      58:24
                    </Text>
                  </div>
                </div>
                <Text
                  className="md:ml-[0] ml-[21px] text-[13px] text-black-900_97 tracking-[0.50px]"
                  size="txtPoppinsRegular13Black90097"
                >
                  250 perkiraan kalori
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start max-w-[1350px] mt-[147px] mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-[19px] justify-start w-full">
            <div className="flex flex-col justify-start w-full">
              <div className="flex flex-col relative w-full">
                <div className="h-[733px] mx-auto w-full">
                  <div className="absolute bg-black-900_63 flex flex-col gap-[25px] h-full inset-y-[0] items-start justify-center my-auto p-[120px] md:px-10 sm:px-5 right-[0]">
                    <Text
                      className="leading-[37.00px] md:ml-[0] ml-[201px] mt-2.5 text-black-900_99 text-lg tracking-[0.50px] w-[74%] sm:w-full"
                      size="txtPoppinsRegular18"
                    >
                      <>
                        Dengan fasilitas modern dan pendekatan holistik terhadap
                        kesehatan, Top Trainer memastikan Anda mendapatkan
                        pengalaman pelatihan terbaik untuk mencapai potensi
                        terbaik Anda. Bergabunglah dengan kami untuk memulai
                        perjalanan menuju tubuh yang lebih kuat, sehat, dan
                        bugar.&quot;
                      </>
                    </Text>
                    <Text
                      className="bg-gray-900 h-[70px] justify-center mb-[163px] md:ml-[0] ml-[201px] pl-[35px] pr-8 sm:px-5 py-[21px] rounded-[10px] text-lg text-white-A700 tracking-[1.00px] w-[200px]"
                      size="txtPoppinsSemiBold18"
                    >
                      Daftar
                    </Text>
                  </div>
                  <Img
                    className="absolute bottom-[7%] h-[206px] left-[0]"
                    src="images/img_group141.svg"
                    alt="group141"
                  />
                </div>
                <Text
                  className="leading-[98.00px] ml-[30px] mt-[-NaNpx] md:text-5xl text-[80px] text-black-900 tracking-[-2.00px] w-[44%] sm:w-full z-[1]"
                  size="txtPoppinsSemiBold80"
                >
                  Dapatkan Hasil Maksimal dengan Layanan Top Trainer Kami
                </Text>
                <Img
                  className="h-[514px] ml-auto mr-[120px] mt-[-193px] object-cover w-[42%] z-[1]"
                  src="images/img_group146.png"
                  alt="group146"
                />
                <Img
                  className="h-[321px] ml-[30px] mt-[-NaNpx] object-cover w-[321px] z-[1]"
                  src="images/img_group142.png"
                  alt="group142"
                />
              </div>
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start md:ml-[0] ml-[30px] w-[61%] md:w-full">
                <div className="flex flex-col items-start justify-start md:mt-0 mt-4">
                  <Text
                    className="text-black-900 text-xl tracking-[0.50px]"
                    size="txtPoppinsMedium20"
                  >
                    Susanti Melati
                  </Text>
                  <Text
                    className="text-black-900_87 text-sm tracking-[0.50px]"
                    size="txtPoppinsRegular14"
                  >
                    Trainer
                  </Text>
                </div>
                <Img
                  className="h-[321px] md:h-auto md:ml-[0] ml-[172px] object-cover w-[321px]"
                  src="images/img_group147.png"
                  alt="group147"
                />
                <div className="flex flex-col items-start justify-start ml-5 md:ml-[0] md:mt-0 mt-4">
                  <Text
                    className="text-black-900 text-xl tracking-[0.50px]"
                    size="txtPoppinsMedium20"
                  >
                    Valida Rahmat
                  </Text>
                  <Text
                    className="text-black-900_87 text-sm tracking-[0.50px]"
                    size="txtPoppinsRegular14"
                  >
                    Trainer
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start md:ml-[0] ml-[351px]">
              <Text
                className="text-black-900 text-xl tracking-[0.50px]"
                size="txtPoppinsMedium20"
              >
                Puput Sari
              </Text>
              <Text
                className="text-black-900_87 text-sm tracking-[0.50px]"
                size="txtPoppinsRegular14"
              >
                Trainer
              </Text>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start max-w-[1331px] mt-[147px] mx-auto md:px-5 w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col justify-start w-full">
              <Text
                className="md:ml-[0] ml-[626px] sm:text-[35.04px] md:text-[41.04px] text-[45.04px] text-black-900"
                size="txtPoppinsMedium4504"
              >
                Artikel
              </Text>
              <Text
                className="md:ml-[0] ml-[269px] mt-3 sm:text-[16.27px] md:text-[18.27px] text-[20.27px] text-gray-700"
                size="txtPoppinsRegular2027"
              >
                Rahasia Sukses dari Para Atlet Terkenal: Perjalanan Menuju
                Kebugaran Ekstrem
              </Text>
              <List
                className="sm:flex-col flex-row font-dmsans gap-[34px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center mt-[50px] w-full"
                orientation="horizontal"
              >
                <div className="flex flex-1 flex-col gap-[22px] items-start justify-start w-full">
                  <Img
                    className="h-[236px] sm:h-auto object-cover rounded-bl-[22px] rounded-br-[22px] w-full"
                    src="images/img_rectangle14.png"
                    alt="rectangleFourteen"
                  />
                  <Text
                    className="leading-[150.00%] sm:text-[18.52px] md:text-[20.52px] text-[22.52px] text-indigo-900 w-full"
                    size="txtDMSansBold2252"
                  >
                    6 Pelajaran Hidup Berharga dari Kebiasaan Gym, Bisa
                    Membangun Mental!
                  </Text>
                  <Text
                    className="leading-[150.00%] text-[18.02px] text-black-900 w-full"
                    size="txtDMSansRegular1802"
                  >
                    Kebiasaan pergi ke gym ternyata bukan hanya tentang
                    membangun otot atau mencapai tubuh yang ideal.
                  </Text>
                  <Text
                    className="text-[15.76px] text-gray-500"
                    size="txtDMSansRegular1576"
                  >
                    12 Okt - Jhon Doe
                  </Text>
                </div>
                <div className="flex flex-1 flex-col items-start justify-start w-full">
                  <Img
                    className="h-[236px] sm:h-auto object-cover rounded-bl-[22px] rounded-br-[22px] w-full"
                    src="images/img_rectangle14_236x412.png"
                    alt="rectangleFourteen"
                  />
                  <Text
                    className="leading-[150.00%] mt-[22px] sm:text-[18.52px] md:text-[20.52px] text-[22.52px] text-indigo-900 w-full"
                    size="txtDMSansBold2252"
                  >
                    4 Tips Agar Konsisten Nge-Gym ataupun Fitness
                  </Text>
                  <Text
                    className="leading-[150.00%] mt-[55px] text-[18.02px] text-black-900 w-full"
                    size="txtDMSansRegular1802"
                  >
                    Konsisten ngegym ataupun fitness adalah hal yang sangat
                    sulit dilakukan. Bisa disebabkan kurangnya disiplin pribadi,
                    kurangnya
                  </Text>
                  <Text
                    className="mt-[23px] text-[15.76px] text-gray-500"
                    size="txtDMSansRegular1576"
                  >
                    12 Okt - Jhon Doe
                  </Text>
                </div>
                <div className="flex flex-1 flex-col gap-[22px] items-start justify-start w-full">
                  <Img
                    className="h-[236px] sm:h-auto object-cover rounded-bl-[22px] rounded-br-[22px] w-full"
                    src="images/img_rectangle14_1.png"
                    alt="rectangleFourteen"
                  />
                  <Text
                    className="leading-[150.00%] sm:text-[18.52px] md:text-[20.52px] text-[22.52px] text-indigo-900 w-full"
                    size="txtDMSansBold2252"
                  >
                    Justyn Vicky, Atlet Binaragawan yang Meninggal di Gym Diduga
                    Memakai Beban Terlalu Berat
                  </Text>
                  <Text
                    className="leading-[150.00%] text-[18.02px] text-black-900 w-full"
                    size="txtDMSansRegular1802"
                  >
                    Atlet binaragawan sekaligus personal trainer di pusat
                    kebugaran di Bali yang meninggal dunia akibat tertimpa
                    barbel, diduga kelebihan{" "}
                  </Text>
                  <Text
                    className="text-[15.76px] text-gray-500"
                    size="txtDMSansRegular1576"
                  >
                    12 Okt - Jhon Doe
                  </Text>
                </div>
              </List>
              <Button
                className="common-pointer cursor-pointer font-bold font-dmsans leading-[normal] min-w-[253px] md:ml-[0] ml-[52px] mt-[52px] rounded-[39px] sm:text-[16.27px] md:text-[18.27px] text-[20.27px] text-center"
                onClick={() => navigate("/artikel")}
                color="gray_900"
                size="2xl"
                variant="outline"
              >
                Muat lebih banyak
              </Button>
            </div>
          </div>
        </div>
        <Footer className="bg-gray-900 flex font-dmsans items-center justify-center mt-[188px] md:px-5 w-full" />
      </div>
    </>
  );
};

export default Home1Page;
