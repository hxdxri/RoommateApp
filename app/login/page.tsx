import Image from 'next/image'
import Link from 'next/link'


// Fix password field
export default function Login() {
    return (
        <div className="Inter flex min-h-screen flex-col items-center justify-between p-20">
            {/* Top component (heading) */}
            <div className="z-10 max-w-5xl w-full items-center justify-between text-sm lg:flex">
                <Link
                    href={"/"}>
                    <p
                        className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-opacity-0 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30"
                    >  &lt;—&nbsp; Home
                    </p>
                </Link>
            </div>
            {/* Middle component (form) */}
            <div className="flex max-w-3xl  min-h-screen flex-col items-center p-24">
                {/* Form */}
                <div className="Inter pb-6">
                    {/* Title */}
                    <div>
                        <h2 className="text-base font-semibold leading-7 text-gray-900">Log in</h2>
                    </div>
                    {/* Collect info*/}
                    <div className="items-center mt-10  gap-x-6 gap-y-8 sm:grid-cols-6">
                        {/* Username */}
                        <div className="  p-2 col-span-4">
                            <label htmlFor="username" className="block text-sm font-medium leading-6">
                                Username
                            </label>
                            <div className="mt-2">
                                <div className="flex shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                    <span className=" flex select-none bg-white items-center pl-3 text-gray-500 sm:text-sm">hxdxri.com/Aspen-306/</span>
                                    <input
                                        type="text"
                                        name="username"
                                        id="username"
                                        autoComplete="username"
                                        className="block flex-1 border-0 py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                        placeholder="example"
                                    />
                                </div>
                            </div>
                        </div>
                        {/* Password */}
                        <div className=" p-2 col-span-4">
                            <label htmlFor="password" className="block text-sm font-medium leading-6">
                                Password
                            </label>
                            <div className="mt-2">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                    <input
                                        type="text"
                                        name="password"
                                        id="password"
                                        autoComplete="password"
                                        className="block flex-1 border-0 py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Login */}
                <div className=" w-56 block justify-end">
                    <div className=" text-center rounded-md bg-yellow-800 px-3 py-2 text-sm font-semibold text-white hover:bg-amber-600">
                        Login
                    </div>
                </div>
                {/* Register */}

                <div className="text-yellow-950 underline underline-offset-1 italic pt-2 text-sm">
                    <Link
                     href={"/register"}>
                        <h1>Don&apos;t have an account?</h1>
                    </Link>
                </div>
            </div>
            {/* Bottom component (footer) */}
            <div className="z-10 max-w-5xl w-full items-center justify-between text-sm lg:flex lg:bg-transparent">
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
        </div>
    )
}
