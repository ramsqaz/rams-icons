import { SVGProps } from "react";
const InCursor = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.255 3.724c-.1-1.192 1.235-1.85 2.152-1.238l.296.198a91 91 0 0 1 12.638 10.18c.97.936.115 2.412-1.094 2.282l-5.266-.564a1.21 1.21 0 0 0-1.234.68l-2.129 4.697c-.514 1.135-2.207 1.03-2.544-.195a86 86 0 0 1-2.79-15.693zm1.517.142.007.08a84.5 84.5 0 0 0 2.636 15.035l1.966-4.338c.48-1.06 1.604-1.676 2.76-1.552l4.806.515A89.4 89.4 0 0 0 6.87 3.93z"
      clipRule="evenodd"
    />
  </svg>
);
export default InCursor;
