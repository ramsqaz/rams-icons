import { SVGProps } from "react";
const IcCurDangerTriangle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 13.145a.75.75 0 0 1-.75-.75V8.5a.75.75 0 0 1 1.5 0v3.895a.75.75 0 0 1-.75.75M11.25 15.895c0 .414.34.75.755.75a.75.75 0 0 0 0-1.5h-.01a.747.747 0 0 0-.745.75"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 21.75c-5.793 0-9.633-.238-10.194-3.416-.38-2.139 1.263-5.398 2.92-8.305l.21-.368C7.974 4.259 9.889 2.25 12 2.25s4.027 2.009 7.064 7.411l.209.368c1.658 2.907 3.3 6.166 2.92 8.305-.56 3.178-4.4 3.416-10.193 3.416m0-18c-1.415 0-3.138 1.988-5.758 6.646l-.213.376-.003.005c-.845 1.482-3.079 5.404-2.744 7.296C3.58 19.762 5.537 20.25 12 20.25s8.42-.488 8.718-2.177c.334-1.892-1.9-5.814-2.744-7.296l-.003-.005-.213-.376C15.139 5.738 13.418 3.75 12 3.75"
      clipRule="evenodd"
    />
  </svg>
);
export default IcCurDangerTriangle;
