import React from "react";

function MoneyIcon({ width = "326", height = "325" }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 326 325"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_b_113_200)">
        <rect
          x="33.6225"
          y="32.9238"
          width="259.15"
          height="259.15"
          rx="129.575"
          fill="url(#paint0_linear_113_200)"
          fillOpacity="0.2"
        />
      </g>
      <path
        d="M174.567 148.603C168.787 147.161 163.006 144.275 158.671 139.947C154.335 138.505 152.89 134.177 152.89 131.291C152.89 128.406 154.335 124.078 157.226 122.635C161.561 119.75 165.896 116.865 170.232 118.307C178.903 118.307 186.128 122.635 190.464 128.406L203.47 111.094C199.135 106.766 194.799 103.881 190.464 100.995C186.128 98.1098 180.348 96.6672 174.567 96.6672V76.4697H157.226V96.6672C150 98.1098 142.774 102.438 136.994 108.209C131.213 115.422 126.878 124.078 128.323 132.734C128.323 141.39 131.213 150.046 136.994 155.817C144.219 163.03 154.335 167.358 163.006 171.686C167.342 173.129 173.122 176.014 177.458 178.9C180.348 181.785 181.793 186.113 181.793 190.441C181.793 194.769 180.348 199.097 177.458 203.425C173.122 207.753 167.342 209.196 163.006 209.196C157.226 209.196 150 207.753 145.664 203.425C141.329 200.54 136.994 196.212 134.103 191.884L119.652 207.753C123.987 213.524 128.323 217.852 134.103 222.18C141.329 226.508 150 230.836 158.671 230.836V249.591H174.567V227.951C183.238 226.508 190.464 222.18 196.244 216.409C203.47 209.196 207.805 197.654 207.805 187.556C207.805 178.9 204.915 168.801 197.689 163.03C190.464 155.817 183.238 151.489 174.567 148.603Z"
        fill="url(#paint1_linear_113_200)"
      />
      <defs>
        <filter
          id="filter0_b_113_200"
          x="-66.3775"
          y="-67.0762"
          width="459.15"
          height="459.15"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImage" stdDeviation="50" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_113_200"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_113_200"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_113_200"
          x1="33.6225"
          y1="292.074"
          x2="292.773"
          y2="32.9238"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3796E5" />
          <stop offset="1" stopColor="#46ECE3" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_113_200"
          x1="119.652"
          y1="249.591"
          x2="259.657"
          y2="178.299"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3796E5" />
          <stop offset="1" stopColor="#46ECE3" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default MoneyIcon;
