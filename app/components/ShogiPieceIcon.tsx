interface ShogiPieceIconProps {
  kanji?: string;
  size?: number;
  color?: string;
  textColor?: string;
  className?: string;
}

export default function ShogiPieceIcon({
  kanji = "王",
  size = 64,
  color = "#1b3a6b",
  textColor = "#c9a84c",
  className = "",
}: ShogiPieceIconProps) {
  return (
    <svg
      viewBox="0 0 100 120"
      width={size}
      height={size * 1.2}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <polygon
        points="50,4 94,22 97,116 3,116 6,22"
        fill={color}
        stroke={textColor}
        strokeWidth="3"
      />
      <text
        x="50"
        y="82"
        textAnchor="middle"
        fontSize="42"
        fontWeight="bold"
        fill={textColor}
        fontFamily="'Hiragino Mincho ProN','Yu Mincho',serif"
      >
        {kanji}
      </text>
    </svg>
  );
}
