import SocialButtons from '@/components/social-buttons.component'

export default function HomePage() {
  return (
    <>
      <section className='h-screen flex flex-col justify-center items-center text-center gap-y-10 relative'>
        <div className='flex flex-col gap-4 w-fit h-fit'>
          <h1 className='uppercase text-4xl md:text-6xl font-bold tracking-wide md:tracking-wider'>
            MIGUEL CASTILLO
          </h1>
          <p className='uppercase font-medium tracking-wide'>
            Full Stack Engineer
          </p>
        </div>

        <SocialButtons />
      </section>
    </>
  )
}
