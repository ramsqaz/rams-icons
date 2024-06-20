import { SVGProps } from "react";
const StFillCheckedBox = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.317 3.769a42.5 42.5 0 0 1 9.366 0c1.16.13 2.177.756 2.82 1.667L11.5 13.439l-2.47-2.47a.75.75 0 1 0-1.06 1.061l3 3a.75.75 0 0 0 1.06 0l8.116-8.115q.033.164.053.334c.37 3.157.37 6.346 0 9.503-.215 1.837-1.69 3.275-3.516 3.48a42.5 42.5 0 0 1-9.366 0c-1.827-.205-3.302-1.643-3.516-3.48a41 41 0 0 1 0-9.503c.214-1.837 1.69-3.276 3.516-3.48"
    />
  </svg>
);
export default StFillCheckedBox;
