import { SVGProps } from "react";
const StDiamond = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.535 3.25a1.75 1.75 0 0 0-1.456.78L1.49 9.412c-.219.33-.245.752-.068 1.106a33 33 0 0 0 8.028 10.282l1.75 1.501a1.23 1.23 0 0 0 1.601 0l1.75-1.5a33 33 0 0 0 8.029-10.283c.177-.354.15-.776-.069-1.106L18.92 4.03a1.75 1.75 0 0 0-1.455-.779zm-.208 1.611a.25.25 0 0 1 .208-.111h2.34L6.96 9.346a1.8 1.8 0 0 0-.1.326 69 69 0 0 1-2.11-.19l-1.405-.147zM3.28 10.836a31.5 31.5 0 0 0 6.994 8.695l-3.125-8.334a71 71 0 0 1-2.554-.222zm5.506.454L12 19.864l3.215-8.574a71 71 0 0 1-6.43 0m8.067-.093-3.125 8.334a31.5 31.5 0 0 0 6.994-8.695l-1.315.139q-1.275.133-2.554.222m3.803-1.862-1.406.148a69 69 0 0 1-2.11.19 1.8 1.8 0 0 0-.099-.327L15.125 4.75h2.34a.25.25 0 0 1 .208.111zm-5.063.435q-3.591.186-7.184 0L10.5 4.75h3z"
      clipRule="evenodd"
    />
  </svg>
);
export default StDiamond;
