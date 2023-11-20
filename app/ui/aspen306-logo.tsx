import Image from "next/image";
export default function Aspen306() {
  return (
    <div
      className={`flex flex-row items-center leading-none text-white`}
    >
        <Image
          className="relative dark:invert"
          src="/aspen-306-logo.svg"
          alt="Aspen 306"
          width={180}
          height={37}
          priority
        />
    </div>
  );
}
