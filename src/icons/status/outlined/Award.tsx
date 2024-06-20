import { SVGProps } from "react";
const StAward = (props: SVGProps<SVGSVGElement>) => (
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
      fillRule="evenodd"
      d="M12 6.25a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5M10.25 9.5a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 2.25a7.25 7.25 0 0 0-6.063 11.226l-2.587 4.48a.75.75 0 0 0 .795 1.11l2.614-.514.861 2.52a.75.75 0 0 0 1.36.133l2.58-4.468a7 7 0 0 0 .88 0l2.58 4.468a.75.75 0 0 0 1.36-.134l.858-2.526 2.616.52a.75.75 0 0 0 .796-1.11l-2.586-4.479A7.25 7.25 0 0 0 12 2.25M6.25 9.5a5.75 5.75 0 1 1 11.5 0 5.75 5.75 0 0 1-11.5 0m3.734 6.966a7.24 7.24 0 0 1-3.027-1.757l-1.482 2.567 1.637-.322a.75.75 0 0 1 .854.493l.54 1.579zm5.508 2.556-1.476-2.556a7.24 7.24 0 0 0 3.027-1.757l1.48 2.563-1.638-.326a.75.75 0 0 0-.856.495z"
      clipRule="evenodd"
    />
  </svg>
);
export default StAward;
