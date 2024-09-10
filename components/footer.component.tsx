const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className='text-center pt-5'>&copy; Miguel Castillo {year}</footer>
  )
}
export default Footer
