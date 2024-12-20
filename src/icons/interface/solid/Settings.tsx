import { SVGProps } from "react";
const InFillSettings = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      d="M12 8.75a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12.68 2.806a1.4 1.4 0 0 0-1.36 0l-7.2 4A1.4 1.4 0 0 0 3.4 8.03v7.94c0 .509.276.977.72 1.224l7.2 4a1.4 1.4 0 0 0 1.36 0l7.2-4a1.4 1.4 0 0 0 .72-1.223V8.03a1.4 1.4 0 0 0-.72-1.224zM7.25 12a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0"
      clipRule="evenodd"
    />
  </svg>
);
export default InFillSettings;
