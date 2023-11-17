import Image from 'next/image'
import Link from "next/link";

export default function Home() {
  return (

    <main className="flex min-h-screen flex-col items-center justify-between p-20">
      {/* Top component */}
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <Link
            href={"/login"}>
          <p
              className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-opacity-0 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30"
          >  Log in &nbsp;
              <Image
                  src="/login-logo.svg"
                  alt="login"
                  className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
                  width={20}
                  height={24}
                  priority
              />

        </p>
      </Link>
        {/* By hxdxri*/}
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <Link
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://www.instagram.com/hxdxri/"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="hxdxri-logo.svg"
              alt="hxdxri logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </Link>
        </div>
      </div>
      {/* Center logo 'Aspen  306' */}
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[240px] before:-translate-x-1/2 before:rounded-lg before:bg-gray-500 before:content-[''] after:absolute after:-z-20 after:h-[120px] after:w-[160px] after:translate-x-1/3 after:bg-gray-300 after:content-[''] before:dark:bg-gray-800 before:dark:opacity-70 after:dark:opacity-40 before:lg:h-[240px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/aspen-306-logo.svg"
          alt="Aspen 306"
          width={180}
          height={37}
          priority
        />
      </div>
      {/* Bottom description */}
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left pt-3">
        <div
          className="group rounded-lg border border-transparent px-5 py-6 transition-colors"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Organize{' '}
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Log your chore activities, plan grocery lists, organize workload.
          </p>
        </div>

        <div
          className="group rounded-lg border border-transparent px-5 py-6 transition-colors"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Manage{' '}
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            View the upcoming chores and responsibilities of roommates, tasks will be assigned in rotation.
          </p>
        </div>

        <div
          className="group rounded-lg border border-transparent px-5 py-6 transition-colors"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Communicate and Coordinate{' '}
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Directly chat with roommates, coordinate schedules among roommates.
          </p>
        </div>

        <div
          className="group rounded-lg border border-transparent px-5 py-6 transition-colors"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Personalize{' '}
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Add custom information to display for other users, ensuring that the living environment aligns with the needs and preferences of all roommates
          </p>
        </div>
      </div>
    </main>
  )
}
