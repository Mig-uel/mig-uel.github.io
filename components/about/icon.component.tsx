type Icon = {
  icon: React.ReactNode
  text: string
}

const Icon = ({ icon, text }: Icon) => {
  return (
    <div className='flex gap-2 justify-center items-center'>
      {icon}
      <p>{text}</p>
    </div>
  )
}
export default Icon
