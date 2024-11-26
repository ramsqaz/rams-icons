import { SVGProps } from "react";

const GeneralLogo = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="25"
      height="23"
      viewBox="0 0 25 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 22.9882H24.0697V20.5236H0V22.9882ZM9.62768 13.1253H24.0697V10.6607H9.62768V13.1253ZM4.81438 18.0568H24.0697V15.5922H4.81438V18.0568ZM14.441 8.19497H24.0686V5.73038H14.441V8.19497ZM19.2554 3.26464H24.0697V0.800049H19.2554V3.26464Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default GeneralLogo;
