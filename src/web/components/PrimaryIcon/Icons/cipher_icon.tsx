import * as React from "react";
import { SVGProps } from "react";

const CipherIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    viewBox="0 0 6.139 12.917"
    {...props}
  >
    <path d="M3.597 5.928H2.563a1.644 1.644 0 0 1-.009-3.277h3.1a.493.493 0 0 0 .421-.266.551.551 0 0 0 0-.524.5.5 0 0 0-.429-.266H4.108a.542.542 0 0 1-.528-.555V.5a.5.5 0 0 0-1 0v.59a.548.548 0 0 1-.44.555A2.67 2.67 0 0 0 .022 4.523a2.616 2.616 0 0 0 2.544 2.468h1.037a1.644 1.644 0 0 1 0 3.277h-3.1a.528.528 0 0 0 0 1.055h1.545a.542.542 0 0 1 .528.555v.542a.5.5 0 0 0 1 0v-.6a.549.549 0 0 1 .435-.555 2.676 2.676 0 0 0 2.068-2.866 2.622 2.622 0 0 0-2.482-2.471Z" />
  </svg>
);

export default CipherIcon;