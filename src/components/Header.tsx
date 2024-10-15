import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ModeToggle } from './ModeToggle';

export default function Header() {
  return (
    <header className='fixed flex w-screen items-center justify-between border-b bg-background px-4 py-3'>
      <Link href='#' className='text-lg font-bold' prefetch={false}>
        MakeDevEasy
      </Link>
      <div className='flex items-center gap-4'>
        <Button variant='secondary' size='sm' className='rounded-md'>
          <Link href='https://discord.gg/9pB5nB4p3Q' target='_blank'>
            Join us on Discord
          </Link>
        </Button>
        <ModeToggle />
      </div>
    </header>
  );
}
