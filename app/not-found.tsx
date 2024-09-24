import { Button } from '@/components/ui/button'
import Link from 'next/link'

const NotFound = () => {
  return (
    <div className='h-screen flex flex-col items-center justify-center gap-y-8'>
      <h1 className='text-xl uppercase font-bold'>Page not found</h1>

      <div>
        <Button size='lg' className='uppercase'>
          <Link href='/'>Home</Link>
        </Button>
      </div>
    </div>
  )
}
export default NotFound
