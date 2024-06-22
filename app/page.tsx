import Image from 'next/image'

export default function Home() {
  return (
    <section className='flex flex-row gap-10 justify-center content-center'>
      <div className='flex flex-col gap-5 justify-center w-[400px] h-[400px'>
        <h1 className='text-4xl'>HELLO,</h1>
        <h1 className='text-4xl'>I AM MIGUEL</h1>
        <p className='leading-7'>
          A front-end developer with some experience in back-end. Skilled in
          JavaScript programming language and JaveScript frameworks, with a
          proven track record of developing successful applications. Able to
          work independently and as part of team, and comfortable with agile
          development methods.
        </p>
      </div>

      <div className='h-fit'>
        <Image
          src='https://raw.githubusercontent.com/Mig-uel/mig-uel.github.io/0a9fcf0bfdc3b3ab163d553c49e9f4f9d849e76e/assets/memoji.svg'
          alt='An Apple Memoji of Miguel'
          width={300}
          height={0}
          className='rounded-full'
        />
      </div>
    </section>
  )
}
