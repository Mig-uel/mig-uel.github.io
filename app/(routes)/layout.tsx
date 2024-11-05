const RoutesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='py-10'>
      <section className='container'>{children}</section>
    </div>
  )
}
export default RoutesLayout
