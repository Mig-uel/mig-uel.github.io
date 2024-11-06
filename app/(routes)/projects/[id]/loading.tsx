import { Skeleton } from '@/components/ui/skeleton'

const Loading = () => {
  return (
    <div className='grid grid-cols-1 md:'>
      <Skeleton className='w-32 h-8 ml-2 md:ml-0' />

      {/* IMAGE */}
      <Skeleton className='w-full h-56 rounded mt-10' />

      {/* DESCRIPTION */}
      <Skeleton className='w-28 h-8 mt-8' />
      <Skeleton className='w-full h-40 rounded mt-10' />

      {/* TECH STACK */}
      <Skeleton className='w-28 h-8 mt-8' />
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center place-items-center'>
        <Skeleton className='w-[250px] h-56 rounded mt-10' />
        <Skeleton className='w-[250px] h-56 rounded mt-10' />
        <Skeleton className='w-[250px] h-56 rounded mt-10' />
      </div>

      {/* Links */}
      <Skeleton className='w-28 h-8 mt-8' />
      <div className='grid md:grid-cols-2 text-center mt-8 gap-y-3 justify-center place-items-center'>
        <Skeleton className='w-40 h-16 rounded mt-10' />
        <Skeleton className='w-40 h-16 rounded mt-10' />
      </div>
    </div>
  )
}
export default Loading
