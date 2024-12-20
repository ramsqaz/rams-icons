import { SVGProps } from "react";
const CnEnvelope = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.804 8.353c-.28 2.603-.268 5.605.122 8.198a3.14 3.14 0 0 0 2.831 2.66l1.51.13c3.15.274 6.317.274 9.466 0l1.51-.13a3.14 3.14 0 0 0 2.831-2.66c.39-2.593.403-5.594.122-8.197a30 30 0 0 0-.122-.904 3.14 3.14 0 0 0-2.831-2.66l-1.51-.131a54.7 54.7 0 0 0-9.465 0l-1.51.131a3.14 3.14 0 0 0-2.832 2.66q-.068.45-.122.903m4.594-2.2a53 53 0 0 1 9.205 0l1.51.131c.754.066 1.365.64 1.478 1.389l.034.233-5.561 3.09a4.25 4.25 0 0 1-4.128 0l-5.56-3.09q.016-.117.033-.233a1.64 1.64 0 0 1 1.478-1.389zm12.41 3.367a29 29 0 0 1-.217 6.808 1.64 1.64 0 0 1-1.478 1.388l-1.51.131a53 53 0 0 1-9.205 0l-1.51-.131a1.64 1.64 0 0 1-1.479-1.388 29 29 0 0 1-.217-6.808l5.016 2.787a5.75 5.75 0 0 0 5.585 0z"
      clipRule="evenodd"
    />
  </svg>
);
export default CnEnvelope;
