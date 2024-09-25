const Subtitle = ({
  text,
  className,
}: {
  text: string
  className?: string
}) => {
  return (
    <h1
      className={`text-xl md:text-2xl font-medium pt-10 capitalize tracking-wide ${
        className && className
      }`}
    >
      {text}
    </h1>
  )
}
export default Subtitle