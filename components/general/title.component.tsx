const Title = ({ text, className }: { text: string; className?: string }) => {
  return (
    <h1
      className={`capitalize text-3xl font-bold w-full self-start text-left ${
        className && className
      }`}
    >
      {text}
    </h1>
  )
}
export default Title
