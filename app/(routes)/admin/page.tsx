'use client'

import { auth } from '@/firebase/config'
import { redirect } from 'next/navigation'
import { action } from '@/actions/admin/action'

import { tags } from '@/utils/tags'

import Subtitle from '@/components/general/subtitle.component'
import Title from '@/components/general/title.component'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'
import { BarLoader } from 'react-spinners'
import { useUserWithToken } from '@/hooks/useUserWithToken'
import { signOut } from 'firebase/auth'

const AdminPage = () => {
  const { user, idToken, loading } = useUserWithToken()

  if (loading)
    return (
      <div className='w-full h-screen flex flex-col justify-center items-center'>
        <BarLoader />
      </div>
    )

  if (!user) return redirect('/auth')

  return (
    <div>
      <Title text='Admin Dashboard' />

      <div className='flex flex-col gap-2 items-start'>
        <p className='text-lg'>{user.displayName}</p>
        <Button variant='outline' size='sm' onClick={() => signOut(auth)}>
          Logout
        </Button>
      </div>

      {/* ADD PROJECTS */}
      <div className='mt-8'>
        <Subtitle text='Add Project' />

        <form
          action={action}
          className='mt-4 bg-muted rounded p-10 grid gap-y-8'
        >
          <div>
            <Label htmlFor='title'>Project Title</Label>
            <Input
              id='title'
              name='title'
              type='text'
              className='mt-2'
              required
            />
          </div>

          <div>
            <Label htmlFor='description'>Project Description</Label>
            <Textarea
              id='description'
              name='description'
              className='mt-2'
              required
            />
          </div>

          <div>
            <Label htmlFor='imageUrl'>Project Image URL</Label>
            <Input
              id='imageUrl'
              name='imageUrl'
              type='text'
              className='mt-2'
              required
            />
          </div>

          <div>
            <Label htmlFor='githubUrl'>Project GitHub URL</Label>
            <Input
              id='githubUrl'
              name='githubUrl'
              type='text'
              className='mt-2'
              required
            />
          </div>

          <div>
            <Label htmlFor='demoUrl'>Project Demo URL</Label>
            <Input
              id='demoUrl'
              name='demoUrl'
              type='text'
              className='mt-2'
              required
            />
          </div>

          <div>
            <Label htmlFor='tags'>Project Tags</Label>

            <div className='flex flex-col gap-3 mt-4'>
              {tags.map((tag) => (
                <div className='capitalize flex gap-1' key={tag}>
                  <Checkbox name='tags' value={tag} />
                  <Label>{tag}</Label>
                </div>
              ))}
            </div>
          </div>

          <input type='hidden' name='idToken' value={idToken || ''} />

          <Button
            className='w-32'
            type='submit'
            disabled={loading || !user || !idToken}
          >
            Add Project
          </Button>
        </form>
      </div>
    </div>
  )
}
export default AdminPage
