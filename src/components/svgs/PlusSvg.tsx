type Props = {
  color?: string;
  width?: string;
  height?: string;
  className?: string;
}

export default function InboxFillSvg ({color = "black", width = "1rem", height = "1rem"}: Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill={color} className="bi bi-plus" viewBox="0 0 16 16">
      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
    </svg>
  )
}