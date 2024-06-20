import { SVGProps } from "react";
const InTrash = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10 2.25a.75.75 0 0 0-.75.75v.75H5a.75.75 0 0 0 0 1.5h14a.75.75 0 0 0 0-1.5h-4.25V3a.75.75 0 0 0-.75-.75zM10 10.65a.75.75 0 0 1 .75.75v7a.75.75 0 0 1-1.5 0v-7a.75.75 0 0 1 .75-.75M14.75 11.4a.75.75 0 0 0-1.5 0v7a.75.75 0 0 0 1.5 0z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M5.991 7.917a.75.75 0 0 1 .746-.667h10.526a.75.75 0 0 1 .746.667l.2 1.802c.363 3.265.363 6.56 0 9.826l-.02.177a2.85 2.85 0 0 1-2.44 2.51 27 27 0 0 1-7.498 0 2.85 2.85 0 0 1-2.44-2.51l-.02-.177a44.5 44.5 0 0 1 0-9.826zm1.417.833-.126 1.134a43 43 0 0 0 0 9.495l.02.177a1.35 1.35 0 0 0 1.157 1.191c2.35.329 4.733.329 7.082 0a1.35 1.35 0 0 0 1.157-1.19l.02-.178c.35-3.155.35-6.34 0-9.495l-.126-1.134z"
      clipRule="evenodd"
    />
  </svg>
);
export default InTrash;
