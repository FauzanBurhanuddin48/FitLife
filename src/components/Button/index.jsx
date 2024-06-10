import React from "react";
import PropTypes from "prop-types";

const shapes = { square: "rounded-none", round: "rounded-[13px]" };
const variants = {
  fill: {
    lime_900: "bg-lime-900 text-white-A700",
    blue_700: "bg-blue-700 shadow-bs text-white-A700",
    green_900: "bg-green-900 text-white-A700",
    gray_600_e5: "bg-gray-600_e5 shadow-bs text-white-A700",
    red_900_e5: "bg-red-900_e5 shadow-bs text-white-A700",
    gray_900: "bg-gray-900 text-white-A700",
    lime_800: "bg-lime-800 text-white-A700",
    gray_900_01: "bg-gray-900_01 text-white-A700",
  },
  outline: {
    blue_gray_50: "border border-blue_gray-50 border-solid text-blue_gray-50",
    gray_900: "border border-gray-900 border-solid shadow-bs1 text-gray-900",
  },
};
const sizes = {
  xs: "p-[5px]",
  sm: "p-2",
  md: "p-[11px]",
  lg: "p-4",
  xl: "p-[21px] sm:px-5",
  "2xl": "p-[25px] sm:px-5",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["square", "round"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl", "2xl"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf([
    "lime_900",
    "blue_700",
    "green_900",
    "gray_600_e5",
    "red_900_e5",
    "gray_900",
    "lime_800",
    "gray_900_01",
    "blue_gray_50",
  ]),
};

export { Button };
