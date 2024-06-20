import { SVGProps } from "react";
const GnShoppingBasket = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10 13.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75M14.75 14a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M9.65 3.375a.75.75 0 0 0-1.3-.75l-2 3.464a.8.8 0 0 0-.069.16H6a2.75 2.75 0 0 0-1.739 4.881l.667 4.585.447 2.093a3.05 3.05 0 0 0 2.561 2.384 29.5 29.5 0 0 0 8.128 0 3.05 3.05 0 0 0 2.561-2.384l.447-2.093.667-4.585A2.75 2.75 0 0 0 18 6.25h-.281a.8.8 0 0 0-.07-.161l-2-3.464a.75.75 0 1 0-1.298.75l1.66 2.875H7.99zm8.484 8.372L18 11.75H6q-.068 0-.133-.003l.538 3.703.437 2.045a1.55 1.55 0 0 0 1.301 1.211c2.559.356 5.155.356 7.714 0a1.55 1.55 0 0 0 1.301-1.21l.437-2.046zM4.75 9c0-.69.56-1.25 1.25-1.25h12a1.25 1.25 0 1 1 0 2.5H6c-.69 0-1.25-.56-1.25-1.25"
      clipRule="evenodd"
    />
  </svg>
);
export default GnShoppingBasket;
