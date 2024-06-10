import React from "react";

const sizeClasses = {
  txtPoppinsMedium2236: "font-medium font-poppins",
  txtPoppinsSemiBold50: "font-poppins font-semibold",
  txtInterMedium24: "font-inter font-medium",
  txtVolkhovBold5242: "font-bold font-volkhov",
  txtDMSansRegular1576: "font-dmsans font-normal",
  txtOpenSansRomanSemiBold3446: "font-opensans font-semibold",
  txtPoppinsRegular20WhiteA700: "font-normal font-poppins",
  txtPoppinsBold3279: "font-bold font-poppins",
  txtPoppinsSemiBold18: "font-poppins font-semibold",
  txtInterMedium18: "font-inter font-medium",
  txtDMSansMedium1231: "font-dmsans font-medium",
  txtPoppinsRegular18: "font-normal font-poppins",
  txtRobotoRomanBold3938: "font-bold font-roboto",
  txtPoppinsRegular14: "font-normal font-poppins",
  txtInterMedium16: "font-inter font-medium",
  txtPoppinsMedium1659: "font-medium font-poppins",
  txtPoppinsRegular16: "font-normal font-poppins",
  txtPoppinsMedium215: "font-medium font-poppins",
  txtPoppinsMedium1607: "font-medium font-poppins",
  txtInterMedium16Black90001: "font-inter font-medium",
  txtPoppinsRegular24: "font-normal font-poppins",
  txtPoppinsSemiBold20: "font-poppins font-semibold",
  txtPoppinsMedium20: "font-medium font-poppins",
  txtRobotoRomanMedium1659: "font-medium font-roboto",
  txtPoppinsRegular20: "font-normal font-poppins",
  txtInterRegular14: "font-inter font-normal",
  txtPoppinsRegular12Black90097: "font-normal font-poppins",
  txtPoppinsMedium28: "font-medium font-poppins",
  txtPoppinsRegular14Gray90002: "font-normal font-poppins",
  txtInterRegular18: "font-inter font-normal",
  txtDMSansBold28: "font-bold font-dmsans",
  txtDMSansBold27: "font-bold font-dmsans",
  txtPoppinsMedium1443: "font-medium font-poppins",
  txtDMSansBold2252: "font-bold font-dmsans",
  txtPoppinsMedium1642: "font-medium font-poppins",
  txtOswaldBold2954: "font-bold font-oswald",
  txtPoppinsSemiBold40RedA400: "font-poppins font-semibold",
  txtPoppinsMedium1329: "font-medium font-poppins",
  txtPoppinsSemiBold35: "font-poppins font-semibold",
  txtPoppinsMedium14: "font-medium font-poppins",
  txtPoppinsRegular2027: "font-normal font-poppins",
  txtPoppinsRegular12: "font-normal font-poppins",
  txtPoppinsRegular13: "font-normal font-poppins",
  txtPoppinsRegular189: "font-normal font-poppins",
  txtOpenSansRomanRegular2215: "font-normal font-opensans",
  txtDMSansRegular1477: "font-dmsans font-normal",
  txtPoppinsRegular13Black90097: "font-normal font-poppins",
  txtInterRegular1139: "font-inter font-normal",
  txtPoppinsMedium18: "font-medium font-poppins",
  txtPoppinsBold3731: "font-bold font-poppins",
  txtPoppinsMedium4504: "font-medium font-poppins",
  txtPoppinsBold525: "font-bold font-poppins",
  txtDMSansRegular18WhiteA700: "font-dmsans font-normal",
  txtPoppinsSemiBold40: "font-poppins font-semibold",
  txtInterSemiBold18: "font-inter font-semibold",
  txtPoppinsSemiBold80: "font-poppins font-semibold",
  txtPoppinsRegular1169: "font-normal font-poppins",
  txtDMSansRegular2215: "font-dmsans font-normal",
  txtInterSemiBold1969: "font-inter font-semibold",
  txtPoppinsRegular1329: "font-normal font-poppins",
  txtRobotoRegular18: "font-normal font-roboto",
  txtDMSansRegular1802: "font-dmsans font-normal",
  txtDMSansRegular15: "font-dmsans font-normal",
  txtDMSansRegular18: "font-dmsans font-normal",
  txtPoppinsRegular215: "font-normal font-poppins",
  txtDMSansRegular17: "font-dmsans font-normal",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
