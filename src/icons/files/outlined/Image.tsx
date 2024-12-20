import { SVGProps } from "react";
const FlImage = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="currentColor" d="M14 9a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0" />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M7.268 4.658a54.7 54.7 0 0 1 9.465 0l1.51.132a3.14 3.14 0 0 1 2.831 2.66 30.6 30.6 0 0 1 0 9.1 3.14 3.14 0 0 1-2.831 2.66l-1.51.131a54.6 54.6 0 0 1-9.465 0l-1.51-.131a3.14 3.14 0 0 1-2.832-2.66 30.6 30.6 0 0 1 0-9.1 3.14 3.14 0 0 1 2.831-2.66zm9.335 1.495a53 53 0 0 0-9.205 0l-1.51.131a1.64 1.64 0 0 0-1.479 1.388 29 29 0 0 0-.311 5.17L7.97 8.97a.75.75 0 0 1 1.09.032l3.672 4.13 2.53-.844a.75.75 0 0 1 .796.21l3.519 3.91.014-.08a29.1 29.1 0 0 0 0-8.656 1.64 1.64 0 0 0-1.478-1.388zm2.017 11.435-3.349-3.721-2.534.844a.75.75 0 0 1-.797-.213l-3.472-3.905-4.244 4.243q.073.748.185 1.491a1.64 1.64 0 0 0 1.478 1.389l1.51.131c3.063.266 6.143.266 9.206 0l1.51-.131q.27-.025.507-.128"
      clipRule="evenodd"
    />
  </svg>
);
export default FlImage;
