import Image from "next/image";

export const Logo = () => (
  <Image
    className="rounded-full"
    width={`20`}
    height={`20`}
    src={`/logo.png`}
    alt="logo"
  />
);
