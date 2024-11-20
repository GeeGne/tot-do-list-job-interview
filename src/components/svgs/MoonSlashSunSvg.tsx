type Props = {
  color?: string;
  width?: string;
  height?: string;
  className?: string;
};

export default function MoonSlashSunSvg({
  color = "black",
  width = "1rem",
  height = "1rem",
  className = "",
}: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      className={className}
      viewBox="0 0 24 24"
    >
      <defs>
        <mask id="lineMdLightDarkLoop0">
          <circle cx="7.5" cy="7.5" r="5.5" fill="#fff" />
          <circle cx="7.5" cy="7.5" r="5.5">
            <animate
              fill="freeze"
              attributeName="cx"
              dur="0.4s"
              values="7.5;11"
            />
            <animate
              fill="freeze"
              attributeName="r"
              dur="0.4s"
              values="5.5;6.5"
            />
          </circle>
        </mask>
        <mask id="lineMdLightDarkLoop1">
          <g fill="#fff">
            <circle cx="12" cy="9" r="5.5">
              <animate
                fill="freeze"
                attributeName="cy"
                begin="1s"
                dur="0.5s"
                values="9;15"
              />
            </circle>
            <g fill-opacity="0">
              <use href="#lineMdLightDarkLoop2" transform="rotate(-75 12 15)" />
              <use href="#lineMdLightDarkLoop2" transform="rotate(-25 12 15)" />
              <use href="#lineMdLightDarkLoop2" transform="rotate(25 12 15)" />
              <use href="#lineMdLightDarkLoop2" transform="rotate(75 12 15)" />
              <set
                fill="freeze"
                attributeName="fill-opacity"
                begin="1.5s"
                to="1"
              />
              <animateTransform
                attributeName="transform"
                dur="5s"
                repeatCount="indefinite"
                type="rotate"
                values="0 12 15;50 12 15"
              />
            </g>
          </g>
          <path d="M0 10h26v5h-26z" />
          <path
            stroke="#fff"
            strokeDasharray="26"
            strokeDashoffset="26"
            strokeWidth="2"
            d="M22 12h-22"
          >
            <animate
              attributeName="d"
              dur="6s"
              repeatCount="indefinite"
              values="M22 12h-22;M24 12h-22;M22 12h-22"
            />
            <animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              begin="0.5s"
              dur="0.4s"
              values="26;0"
            />
          </path>
        </mask>
        <symbol id="lineMdLightDarkLoop2">
          <path d="M11 18h2L12 20z" opacity="0">
            <animate
              fill="freeze"
              attributeName="d"
              begin="1.5s"
              dur="0.4s"
              values="M11 18h2L12 20z;M10.5 21.5h3L12 24z"
            />
            <set fill="freeze" attributeName="opacity" begin="1.5s" to="1" />
          </path>
        </symbol>
      </defs>
      <g fill={color}>
        <rect
          width="13"
          height="13"
          x="1"
          y="1"
          mask="url(#lineMdLightDarkLoop0)"
        />
        <path
          d="M-2 11h28v13h-28z"
          mask="url(#lineMdLightDarkLoop1)"
          transform="rotate(-45 12 12)"
        />
      </g>
    </svg>
  );
}