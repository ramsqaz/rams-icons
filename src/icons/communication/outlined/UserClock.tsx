import { SVGProps } from "react";
const CnUserClock = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10 3.25a4.25 4.25 0 1 0 0 8.5 4.25 4.25 0 0 0 0-8.5M7.25 7.5a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M3.75 17A2.25 2.25 0 0 1 6 14.75h.34q.04 0 .078.012l.866.283c.68.222 1.38.358 2.084.41a.3.3 0 0 0 .312-.239q.114-.491.294-.952a.214.214 0 0 0-.192-.29 7.3 7.3 0 0 1-2.032-.355l-.866-.283a1.8 1.8 0 0 0-.543-.086H6A3.75 3.75 0 0 0 2.25 17v1.188c0 .754.546 1.396 1.29 1.517 2.157.353 4.337.527 6.517.524.152 0 .247-.165.18-.3a7 7 0 0 1-.38-.914.42.42 0 0 0-.388-.29 38.6 38.6 0 0 1-5.688-.5.04.04 0 0 1-.031-.037zM17.25 15.3a.75.75 0 1 0-1.5 0v1.773c0 .24.115.465.309.606l1 .728a.75.75 0 1 0 .882-1.214l-.691-.502z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M16.5 22.3a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11m0-1.5a4 4 0 1 0 0-8 4 4 0 0 0 0 8"
      clipRule="evenodd"
    />
  </svg>
);
export default CnUserClock;
