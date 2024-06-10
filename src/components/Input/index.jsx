import React from "react";
import PropTypes from "prop-types";
import { ErrorMessage } from "../../components/ErrorMessage";

const variants = {
  fill: {
    white_A700: "bg-white-A700 text-gray-500_01",
    gray_100: "bg-gray-100",
  },
  underline: {
    gray_500_01: "border-b border-gray-500_01 text-black-900_01",
    gray_300: "border-b border-gray-300 text-gray-900_02",
  },
  outline: {
    gray_500_01: "outline outline-[1px] outline-gray-500_01 text-gray-500_01",
  },
};
const shapes = { round: "rounded-[5px]" };
const sizes = {
  xs: "pb-3 pt-2.5 px-2.5",
  sm: "pb-3.5 pr-[11px] pt-[11px]",
  md: "pb-3 pt-[13px] px-3",
};

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      onChange,
      shape = "",
      size = "",
      variant = "underline",
      color = "gray_300",
      ...restProps
    },
    ref,
  ) => {
    const handleChange = (e) => {
      if (onChange) onChange(e?.target?.value);
    };

    return (
      <>
        <div
          className={`${wrapClassName} 
              ${shapes[shape] || ""} 
              ${variants[variant]?.[color] || ""} 
              ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            onChange={handleChange}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  },
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "sm", "md"]),
  variant: PropTypes.oneOf(["fill", "underline", "outline"]),
  color: PropTypes.oneOf([
    "white_A700",
    "gray_100",
    "gray_500_01",
    "gray_300",
    "gray_500_01",
  ]),
};

export { Input };
