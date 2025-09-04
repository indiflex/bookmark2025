import { logout } from '@/actions/sign';
import { Button } from '@/components/ui/button';
import LabelInput from '@/components/ui/label-input';
import DummyProfile from '@/public/profile_dummy.png';
import Image from 'next/image';
import { use } from 'react';
import { FolderOutputIcon, LogOutIcon, SaveAllIcon } from 'lucide-react';
import { auth } from '@/lib/auth';

export default function My() {
  const session = use(auth())!;

  const { user } = session;

  return (
    <div className='grid place-items-center h-full'>
      <div className='border rounded-lg shadow-md w-full text-center p-5'>
        <h1 className='text-3xl font-semibold mb-5'>My Page</h1>
        <form className='grid grid-cols-3 gap-2 mb-5'>
          <div className='div border p-5'>
            <Image
              src={user.image || DummyProfile}
              alt={user.name!}
              width={50}
              height={50}
              className='w-full rounded-full border shadow'
            />
          </div>
          <div className='border col-span-2 p-3 text-left space-y-3'>
            <LabelInput
              label='nickname'
              name='nickname'
              focus={true}
              defaultValue={user.name!}
            />

            <div className='flex w-full'>
              <LabelInput
                label='email'
                name='email'
                type='email'
                defaultValue={user.email!}
                className='w-full'
              />
            </div>
            <LabelInput
              label='current password'
              name='curr_passwd'
              type='password'
              placeholder='current password...'
            />
            <LabelInput
              label='new password'
              name='passwd'
              type='password'
              placeholder='new password...'
            />
            <LabelInput
              label='current password'
              name='passwd2'
              type='password'
              placeholder='new password confirm...'
            />
          </div>
        </form>
        <div className='flex items-center justify-center gap-5'>
          <Button onClick={logout}>
            <LogOutIcon /> Sign Out
          </Button>

          <Button variant={'destructive'}>
            <FolderOutputIcon /> Withdraw
          </Button>

          <Button variant={'primary'}>
            <SaveAllIcon /> Save
          </Button>
        </div>
      </div>
    </div>
  );
}
