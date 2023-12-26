import React from "react";
//
import { icons } from "@libs/Icons";
import { cx } from "@config/constants";
//
import { RecordButton } from "../config/types";

const StunningButton: React.FC<RecordButton> = ({
  icon = "People",
  children,
  active,
  onClick,
}) => {
  return (
    <li className="">
      <button
        onClick={onClick}
        className={cx(
          "flex items-center gap-2 text-black text-[16px] md:text-[20px] font-[500] cursor-pointer py-2 px-4",
          active && " !text-black bg-[#E8E8E8] py-2 px-4 rounded-full"
        )}
      >
        <span> {icons[icon]} </span>
        <span> {children || "People"} </span>
      </button>
    </li>
  );
};

export default StunningButton;
