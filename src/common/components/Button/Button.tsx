'use client';
import React, { FC } from 'react';
import Link from 'next/link';
//
import twFocusClass from '@utils/twFocusClass';
import { cx } from '@config/constants';
import { ButtonProps } from '@config/types';
import { icons } from '@libs/Icons';

const Button: FC<ButtonProps> = ({
  className = '',
  translate = '',
  sizeClass = 'px-[12px] py-[8px]',
  fontSize = 'text-[12px] md:text-[14px] lg:text-[16px]',
  disabled = false,
  href,
  children,
  type,
  loading,
  secondary,
  icon,
  onClick = () => {},
}) => {
  // ---- CLASSES -----
  const CLASSES =
    ` text-white h-auto bg-primary inline-flex items-center justify-center rounded-full lg:px-8 md:px-6 lg:py-3 md:py-2 py-2 transition-all font-medium duration-300	${
      disabled && '!bg-disable hover:!bg-disable cursor-not-allowed'
    } ${
      loading && 'cursor-not-allowed !bg-disable hover:!bg-disable'
    } ${fontSize} ${sizeClass} ${translate} ${className} ` + twFocusClass(true);

  const SECONDARY_CLASS = `bg-transparent outline outline-[1.7px] !text-primary outline-primary hover:!text-white hover:!bg-secondary`;

  const ICON_CLASS = `w-[20px] h-[20px] mr-[8px] bg-white/30 flex items-center justify-center rounded-full p-[4px]`;
  // ---- CLASSES -----

  const _renderLoading = () => {
    return (
      <svg
        className="animate-spin -ml-1 mr-3 h-5 w-5"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="3"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    );
  };

  if (!!href) {
    return (
      <Link href={`${href}`} rel="noopener noreferrer">
        <p
          className={cx(CLASSES, secondary && SECONDARY_CLASS)}
          onClick={onClick}
        >
          {children || `This is Link`}
        </p>
      </Link>
    );
  }

  return (
    <button
      disabled={disabled || loading}
      className={cx(CLASSES, secondary && SECONDARY_CLASS)}
      onClick={onClick}
      type={type}
    >
      {icon && <div className={ICON_CLASS}> {icons[icon]} </div>}
      {loading && _renderLoading()}
      {children || `This is Button`}
    </button>
  );
};

export default Button;
