import { SVGProps } from "react";

const RamsITLogo = ({
  color = "#024638",
  ...props
}: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="134"
      height="50"
      viewBox="0 0 134 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color={color}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 49.6011H55.6147V44.0916H0V49.6011ZM22.2454 27.5528H55.6147V22.0433H22.2454V27.5528ZM11.1239 38.577H55.6147V33.0674H11.1239V38.577ZM33.3667 16.5312H55.6121V11.0216H33.3667V16.5312ZM44.4907 5.50954H55.6147V0H44.4907V5.50954Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M77 0H84V50H77V0ZM109 0H92V7H109V50H116V7H133V0H116H109Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default RamsITLogo;
