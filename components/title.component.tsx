const Title = ({ text }: { text: string }) => {
  return (
    <h1 className='uppercase text-3xl font-bold pl-5 w-full self-start text-left'>
      {text}
    </h1>
  )
}
export default Title
