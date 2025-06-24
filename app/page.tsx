import SocialButtons from '@/components/social-buttons.component'
import AnimatedText from '../components/motion/animated-text'

export default function HomePage() {
  return (
    <>
      <section className='h-screen flex flex-col justify-center items-center text-center gap-y-10'>
        <div className='flex flex-col gap-4 w-fit h-fit'>
          <AnimatedText className='text-4xl md:text-6xl font-bold'>
            Miguel Castillo
          </AnimatedText>
          <AnimatedText
            className='capitalize font-medium tracking-wide text-muted-foreground'
            tag='p'
          >
            Full Stack Developer
          </AnimatedText>
        </div>

        <SocialButtons />
      </section>
    </>
  )
}
