import { SVGProps } from "react";
const BrFillBonus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="currentColor" d="M10.6 6.13h6.533V3H10.6z" />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M5 7.696V21h8.867C16.702 21 19 19.073 19 16.696s-2.298-4.305-5.133-4.305H8.733v-1.565h8.4v-3.13zM8.733 17.87v-2.348h5.134c.773 0 1.4.525 1.4 1.174s-.627 1.174-1.4 1.174z"
      clipRule="evenodd"
    />
  </svg>
);
export default BrFillBonus;
