import { SVGProps } from "react";
const StLightbulb = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 3.75c-3.476 0-6.25 2.717-6.25 6.016 0 2.005.82 3.733 2.285 4.81.323.237.6.591.705 1.04.087.369.186.818.284 1.294h5.952c.098-.476.197-.925.284-1.294.106-.449.382-.803.705-1.04 1.464-1.077 2.285-2.806 2.285-4.81 0-3.299-2.774-6.016-6.25-6.016m2.689 14.66H9.31c.11.637.197 1.24.224 1.674.027.457.368.866.871.974l.196.043c.92.199 1.875.199 2.796 0l.196-.043c.503-.108.844-.517.872-.974.026-.433.112-1.037.223-1.674M4.25 9.766C4.25 5.59 7.744 2.25 12 2.25s7.75 3.341 7.75 7.516c0 2.424-1.004 4.627-2.897 6.018a.32.32 0 0 0-.133.176 51 51 0 0 0-.394 1.843c-.183.938-.332 1.848-.363 2.372-.07 1.158-.922 2.105-2.052 2.35l-.196.042c-1.13.244-2.3.244-3.43 0l-.196-.042c-1.13-.244-1.982-1.192-2.052-2.35-.031-.524-.18-1.434-.363-2.372a51 51 0 0 0-.394-1.843.32.32 0 0 0-.133-.176C5.254 14.394 4.25 12.19 4.25 9.767"
      clipRule="evenodd"
    />
  </svg>
);
export default StLightbulb;
