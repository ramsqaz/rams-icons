import { SVGProps } from "react";
const NvNavigation = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.762 3.25c.46.006.99.223 1.276.734l.174.312a82.5 82.5 0 0 1 6.474 14.753c.218.67-.14 1.237-.589 1.5a1.48 1.48 0 0 1-1.552-.037l-4.728-3.04c-.522-.336-1.231-.337-1.72-.028L6.464 20.37a1.48 1.48 0 0 1-1.553.01c-.427-.255-.809-.808-.61-1.482a77.7 77.7 0 0 1 6.006-14.608l.164-.308c.284-.531.832-.737 1.29-.73m-.007 1.513-.125.233A76.2 76.2 0 0 0 5.84 18.99l4.455-2.813c1-.63 2.337-.607 3.334.034l4.496 2.892a81 81 0 0 0-6.222-14.074z"
      clipRule="evenodd"
    />
  </svg>
);
export default NvNavigation;
