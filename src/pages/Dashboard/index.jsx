import React from "react";

import { useNavigate } from "react-router-dom";

import { createColumnHelper } from "@tanstack/react-table";

import { Button, Img, ReactTable, Text } from "components";

const DashboardPage = () => {
  const tableData = React.useRef([
    {
      id: "1",
      namapaket: "Paket Dasar",
      language: "150.000/bulan",
      gambar: "images/img_bg_107x178.png",
      action: "Hapus",
    },
    {
      id: "2",
      namapaket: "Paket Premium",
      language: "300.000/bulan",
      gambar: "images/img_bg_105x191.png",
      action: "Hapus",
    },
    {
      id: "3",
      namapaket: "Personal Training",
      language: "250.000/bulan",
      gambar: "images/img_bg_118x194.png",
      action: "Hapus",
    },
  ]);
  const navigate = useNavigate();
  const tableColumns = React.useMemo(() => {
    const tableColumnHelper = createColumnHelper();
    return [
      tableColumnHelper.accessor("id", {
        cell: (info) => (
          <Text
            className="pb-[35px] sm:pl-5 pl-[21px] pt-[27px] sm:text-[17.5px] md:text-[19.5px] text-[21.5px] text-black-900"
            size="txtPoppinsRegular215"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[130px] sm:pl-5 pl-[21px] py-[31px] sm:text-[17.5px] md:text-[19.5px] text-[21.5px] text-black-900"
            size="txtPoppinsMedium215"
          >
            ID
          </Text>
        ),
      }),
      tableColumnHelper.accessor("namapaket", {
        cell: (info) => (
          <Text
            className="pb-[35px] pt-6 text-[18.9px] text-gray-900_03"
            size="txtPoppinsRegular189"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[204px] py-[31px] sm:text-[17.5px] md:text-[19.5px] text-[21.5px] text-black-900"
            size="txtPoppinsMedium215"
          >
            Nama Paket
          </Text>
        ),
      }),
      tableColumnHelper.accessor("language", {
        cell: (info) => (
          <Text
            className="pb-[35px] pt-[31px] sm:text-[17.5px] md:text-[19.5px] text-[21.5px] text-black-900"
            size="txtPoppinsRegular215"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[236px] pb-7 pt-[35px] sm:text-[17.5px] md:text-[19.5px] text-[21.5px] text-black-900"
            size="txtPoppinsMedium215"
          >
            Harga{" "}
          </Text>
        ),
      }),
      tableColumnHelper.accessor("gambar", {
        cell: (info) => (
          <div className="flex flex-row items-center justify-center pr-[3px] py-[3px]">
            <Img
              className="h-[107px] md:h-auto mb-[37px] object-cover rounded-[24px] w-[70%]"
              alt="bg"
              src={info?.getValue()}
            />
          </div>
        ),
        header: (info) => (
          <Text
            className="min-w-[258px] pl-3 py-[31px] sm:text-[17.5px] md:text-[19.5px] text-[21.5px] text-black-900 text-center"
            size="txtPoppinsMedium215"
          >
            Gambar
          </Text>
        ),
      }),
      tableColumnHelper.accessor("action", {
        cell: (info) => (
          <div className="flex flex-row gap-[23px] items-start justify-center pr-[17px] py-[17px]">
            <Button
              className="cursor-pointer mb-[68px] min-w-[82px] rounded-[14px] text-center text-xs"
              shape="round"
              color="gray_600_e5"
              size="lg"
              variant="fill"
            >
              Edit
            </Button>
            <Button
              className="cursor-pointer mb-[68px] min-w-[112px] mr-[60px] rounded-[14px] text-center text-xs"
              shape="round"
              color="red_900_e5"
              size="md"
              variant="fill"
            >
              {info?.getValue()}
            </Button>
          </div>
        ),
        header: (info) => (
          <Text
            className="min-w-[295px] pl-[3px] py-[31px] sm:text-[17.5px] md:text-[19.5px] text-[21.5px] text-black-900 text-center"
            size="txtPoppinsMedium215"
          >
            Action
          </Text>
        ),
      }),
    ];
  }, []);

  return (
    <>
      <div className="bg-gray-100_03 flex flex-col font-poppins items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <header className="flex flex-col items-center justify-center md:px-5 w-full">
            <Img
              className="flex-1 h-[53px] sm:h-auto object-cover w-full"
              src="images/img_rectangle93.png"
              alt="rectangleNinetyThree"
            />
            <div
              className="bg-cover bg-no-repeat flex flex-1 flex-col h-[81px] items-start justify-start p-1.5 w-full"
              style={{ backgroundImage: "url('images/img_group10.svg')" }}
            >
              <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start mb-[7px] ml-1.5 md:ml-[0] w-[94%] md:w-full">
                <Img
                  className="h-[61px] sm:h-auto rounded-[50%] w-[5%] md:w-full"
                  src="images/img_screenshot20231027.png"
                  alt="screenshot20231"
                />
                <div className="flex flex-row md:gap-10 items-center justify-between mb-3 md:ml-[0] ml-[11px] md:mt-0 mt-[18px] w-[91%] md:w-full">
                  <Text
                    className="text-black-900 text-xl tracking-[1.00px]"
                    size="txtPoppinsSemiBold20"
                  >
                    FitLife
                  </Text>
                  <Text
                    className="text-black-900 text-xl tracking-[1.00px]"
                    size="txtPoppinsSemiBold20"
                  >
                    Admin
                  </Text>
                </div>
                <Img
                  className="common-pointer h-[50px] sm:h-auto mb-0.5 md:ml-[0] ml-[7px] md:mt-0 mt-2 rounded-[50%] w-[4%] md:w-full"
                  src="images/img_ellipse4.png"
                  alt="ellipseFour"
                  onClick={() => navigate("/login")}
                />
              </div>
            </div>
          </header>
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1472px] mx-auto md:px-5 w-full">
            <div className="bg-lime-800_bf flex md:flex-1 flex-col gap-[15px] justify-center p-[25px] sm:px-5 w-[17%] md:w-full">
              <div className="flex flex-row gap-2.5 items-center justify-start md:ml-[0] ml-[15px] mr-[66px] mt-[60px] w-[58%] md:w-full">
                <Img
                  className="h-6 w-6"
                  src="images/img_description.svg"
                  alt="description"
                />
                <div className="flex flex-col items-center justify-start">
                  <Text
                    className="text-[16.07px] text-white-A700"
                    size="txtPoppinsMedium1607"
                  >
                    Data User
                  </Text>
                </div>
              </div>
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[42px] items-start justify-start mb-[655px] p-2 w-full"
                style={{ backgroundImage: "url('images/img_group27.svg')" }}
              >
                <div className="flex flex-row gap-[7px] items-center justify-start md:ml-[0] ml-[7px] w-[70%] md:w-full">
                  <Img
                    className="h-[26px] w-[27px]"
                    src="images/img_plus.svg"
                    alt="plus"
                  />
                  <Text
                    className="text-[16.07px] text-white-A700"
                    size="txtPoppinsMedium1607"
                  >
                    Data Paket
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex md:flex-1 flex-col items-start justify-start w-[79%] md:w-full">
              <Text
                className="sm:text-2xl md:text-[26px] text-[28px] text-black-900"
                size="txtPoppinsMedium28"
              >
                Data Paket Member
              </Text>
              <div className="flex flex-col items-start justify-start md:ml-[0] ml-[938px] mt-[7px] w-auto">
                <Button
                  className="cursor-pointer min-w-[212px] rounded-[14px] text-center text-xs"
                  shape="round"
                  color="blue_700"
                  size="lg"
                  variant="fill"
                >
                  + Tambah data
                </Button>
              </div>
              <div className="bg-white-A700 border border-blue-50 border-solid flex flex-col h-[607px] md:h-auto items-start justify-start max-w-[1161px] mt-[19px] pl-[35.83px] md:pr-10 pr-[526.75px] sm:px-5 py-[35.83px] rounded-[17px] w-full">
                <div className="overflow-auto w-full">
                  <ReactTable
                    columns={tableColumns}
                    data={tableData.current}
                    rowClass={"bg-white-A700 border border-blue-50"}
                    headerClass="bg-white-A700 border border-blue-50"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
