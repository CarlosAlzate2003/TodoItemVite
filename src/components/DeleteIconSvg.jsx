const DeleteIconSvg = ({ color }) => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 96 96"
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
    >
      <path d="M48 0a48 48 0 1 0 48 48A48.05 48.05 0 0 0 48 0m0 84a36 36 0 1 1 36-36 36.04 36.04 0 0 1-36 36" />
      <path d="M64.242 31.758a6 6 0 0 0-8.484 0L48 39.516l-7.758-7.758a6 6 0 0 0-8.484 8.484L39.516 48l-7.758 7.758a6 6 0 1 0 8.484 8.484L48 56.484l7.758 7.758a6 6 0 0 0 8.484-8.484L56.484 48l7.758-7.758a6 6 0 0 0 0-8.484" />
    </svg>
  )
}

export { DeleteIconSvg as ReactComponent }
