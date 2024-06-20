import { SVGProps } from "react";
const DvFillPrinter = (props: SVGProps<SVGSVGElement>) => (
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
      d="m4.2 8.364 2.05-.228V3.913c0-.643.49-1.18 1.13-1.24a50.3 50.3 0 0 1 9.24 0c.64.06 1.13.597 1.13 1.24v4.223l2.05.228a1.59 1.59 0 0 1 1.369 1.198 14.15 14.15 0 0 1 0 6.82l-.153.615a.66.66 0 0 1-.643.503H17.75v2.583a1.21 1.21 0 0 1-1.09 1.205c-3.099.31-6.22.31-9.32 0a1.21 1.21 0 0 1-1.09-1.205V17.5H3.627a.66.66 0 0 1-.643-.503l-.152-.615a14.15 14.15 0 0 1 0-6.82A1.59 1.59 0 0 1 4.2 8.364m3.55-.374a52 52 0 0 1 8.5 0V4.146a49 49 0 0 0-8.5 0zm0 8.19v3.64c2.827.267 5.673.267 8.5 0v-3.64a45.3 45.3 0 0 0-8.5 0m10-5.18a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5"
      clipRule="evenodd"
    />
  </svg>
);
export default DvFillPrinter;
