import { SVGProps } from "react";
const GnCalendar = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7 3.25a.75.75 0 0 1 .75.75v1.668a48 48 0 0 1 8.5 0V4a.75.75 0 1 1 1.5 0v1.816a3.375 3.375 0 0 1 2.872 2.899l.087.653c.364 2.746.332 5.53-.093 8.268a3.01 3.01 0 0 1-2.679 2.532l-1.193.118a48.4 48.4 0 0 1-9.488 0l-1.193-.118a3.01 3.01 0 0 1-2.678-2.532 29 29 0 0 1-.094-8.268l.087-.653A3.375 3.375 0 0 1 6.25 5.816V4A.75.75 0 0 1 7 3.25m.445 3.953c3.03-.299 6.08-.299 9.11 0l.905.09c.867.085 1.56.756 1.675 1.619l.087.653q.045.342.082.685H4.696q.037-.343.082-.685l.087-.653a1.875 1.875 0 0 1 1.675-1.62zM4.577 11.75a27.5 27.5 0 0 0 .29 5.655 1.51 1.51 0 0 0 1.343 1.27l1.193.118c3.057.302 6.137.302 9.194 0l1.193-.118a1.51 1.51 0 0 0 1.343-1.27c.292-1.872.388-3.767.29-5.655z"
      clipRule="evenodd"
    />
  </svg>
);
export default GnCalendar;
