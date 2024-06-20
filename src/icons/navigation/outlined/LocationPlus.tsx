import { SVGProps } from "react";
const NvLocationPlus = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 6.25a.75.75 0 0 1 .75.75v2h2a.75.75 0 0 1 0 1.5h-2v2a.75.75 0 1 1-1.5 0v-2h-2a.75.75 0 0 1 0-1.5h2V7a.75.75 0 0 1 .75-.75"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M11.784 1.25a8.29 8.29 0 0 0-8.26 7.607 8.94 8.94 0 0 0 1.99 6.396l4.793 5.861a2.187 2.187 0 0 0 3.386 0l4.793-5.861a8.94 8.94 0 0 0 1.99-6.396 8.29 8.29 0 0 0-8.26-7.607zM5.02 8.98a6.79 6.79 0 0 1 6.765-6.23h.432a6.79 6.79 0 0 1 6.765 6.23 7.44 7.44 0 0 1-1.656 5.323l-4.793 5.862a.687.687 0 0 1-1.064 0l-4.793-5.862A7.44 7.44 0 0 1 5.02 8.98"
      clipRule="evenodd"
    />
  </svg>
);
export default NvLocationPlus;
