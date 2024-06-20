import { SVGProps } from "react";
const DvServer = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6 7.5a1 1 0 1 1 2 0 1 1 0 0 1-2 0M9 7.5a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7 13.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2M10 13.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M5.947 3.25A2.75 2.75 0 0 0 3.197 6v3c0 .788.332 1.499.863 2a2.74 2.74 0 0 0-.863 2v3a2.75 2.75 0 0 0 2.75 2.75h5.303v1.5H5a.75.75 0 0 0 0 1.5h14a.75.75 0 0 0 0-1.5h-6.25v-1.5h5.197a2.75 2.75 0 0 0 2.75-2.75v-3c0-.788-.331-1.499-.862-2a2.74 2.74 0 0 0 .862-2V6a2.75 2.75 0 0 0-2.75-2.75zm0 7h12c.69 0 1.25-.56 1.25-1.25V6c0-.69-.56-1.25-1.25-1.25h-12c-.69 0-1.25.56-1.25 1.25v3c0 .69.56 1.25 1.25 1.25m0 1.5c-.69 0-1.25.56-1.25 1.25v3c0 .69.56 1.25 1.25 1.25h12c.69 0 1.25-.56 1.25-1.25v-3c0-.69-.56-1.25-1.25-1.25z"
      clipRule="evenodd"
    />
  </svg>
);
export default DvServer;