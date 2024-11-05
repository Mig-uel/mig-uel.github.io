import SocialButtons from '@/components/social-buttons.component'

export default function HomePage() {
  return (
    <>
      <section className='h-screen flex flex-col justify-center items-center text-center gap-y-10'>
        <div className='flex flex-col gap-4 w-fit h-fit'>
          <h1 className='text-4xl md:text-6xl font-bold'>Miguel Castillo</h1>
          <p className='capitalize font-medium tracking-wide text-muted-foreground'>
            Full Stack Developer
          </p>
        </div>

        <SocialButtons />
      </section>
    </>
  )
}
