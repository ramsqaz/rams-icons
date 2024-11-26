import { SVGProps } from "react";

const RamsUser = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="155"
      height="155"
      fill="none"
      viewBox="0 0 155 155"
      {...props}
    >
      <g clipPath="url(#clip0_5895_38285)">
        <rect width="155" height="155" fill="#CFD2D1" rx="77.5"></rect>
        <circle cx="77" cy="200" r="101" fill="#035040"></circle>
        <circle cx="77" cy="60" r="28" fill="#035040"></circle>
      </g>
      <defs>
        <clipPath id="clip0_5895_38285">
          <rect width="155" height="155" fill="#fff" rx="77.5"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

export default RamsUser;
