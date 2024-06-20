import { SVGProps } from "react";
const BrSketch = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.998 2.25h.009q.04 0 .077.005l5.904.624a.75.75 0 0 1 .529.299l4.575 6.142a.75.75 0 0 1-.03.948L12.574 22.48a.75.75 0 0 1-1.154 0L.936 10.27a.75.75 0 0 1-.034-.947L5.477 3.18a.74.74 0 0 1 .532-.302l5.903-.624.077-.005h.009m9.004 6.775-2.548-3.421-.374 3.421zm-7.335-5.094L16.7 7.847l.388-3.555zm-6.759.361 3.42-.361-3.032 3.916zm5.09-.067 3.717 4.8H8.28zm-8.865 6.3h3.125L9.379 17.8zm2.41-4.921-2.55 3.421h2.923zm15.32 4.921L14.617 17.8l3.121-7.274zm-12.973 0h8.216l-4.108 9.573z"
      clipRule="evenodd"
    />
  </svg>
);
export default BrSketch;
