import { ModeToggle } from '@/components/ModeToggle';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center p-6 sm:p-12'>
      <h1 className='mb-8 text-center text-4xl font-bold sm:text-6xl'>MakeDevEasy</h1>
      <p className='text-center text-lg sm:text-xl'>
        We are currently under development and will be launching soon!
      </p>
      <p className='mt-8 text-center'>Stay tuned for exciting updates!</p>
    </main>
  );
}
