import Link from 'next/link';
import Image from 'next/image';
import SideNavLinks from '@/app/ui/sidenav-links';
import { PowerIcon } from '@heroicons/react/24/outline';
import Aspen306 from './aspen306-logo';

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px- bg-amber-950">

        {/* Logo */}
      <Link
        className="mb-2 flex h-20 items-end justify-start rounded-md p-4 md:h-40"
        href="/"
      >
        <div className="w-32 text-white md:w-40">
            <Aspen306/>
        </div>
      </Link>
      
      <div className="flex grow flex-row justify-between text-white space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <SideNavLinks />
        {/* Gap */}
        <div className="hidden h-auto w-full grow rounded-md bg-transparent md:block"></div>
        <form>
          <button className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-transparent p-3 text-sm font-medium hover:bg-white hover:text-black md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
      </div>
    </div>
  );
}