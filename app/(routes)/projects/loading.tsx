import { Skeleton } from '@/components/ui/skeleton'

const Loading = () => {
  return (
    <>
      <div className='w-full mt-10 flex flex-col justify-center items-center gap-y-1'>
        <Skeleton className='min-w-[350px] w-[650px]  h-6' />
        <Skeleton className='min-w-[250px] w-[550px]  h-6' />
      </div>

      <div className='mt-20 grid md:grid-cols-3 gap-y-10 justify-center'>
        <Skeleton className='flex flex-col items-center justify-center w-[450px] h-[250px] opacity-80 hover:opacity-100 group relative' />
        <Skeleton className='flex flex-col items-center justify-center w-[450px] h-[250px] opacity-80 hover:opacity-100 group relative' />
        <Skeleton className='flex flex-col items-center justify-center w-[450px] h-[250px] opacity-80 hover:opacity-100 group relative' />
        <Skeleton className='flex flex-col items-center justify-center w-[450px] h-[250px] opacity-80 hover:opacity-100 group relative' />
        <Skeleton className='flex flex-col items-center justify-center w-[450px] h-[250px] opacity-80 hover:opacity-100 group relative' />
        <Skeleton className='flex flex-col items-center justify-center w-[450px] h-[250px] opacity-80 hover:opacity-100 group relative' />
        <Skeleton className='flex flex-col items-center justify-center w-[450px] h-[250px] opacity-80 hover:opacity-100 group relative' />
      </div>
    </>
  )
}
export default Loading
