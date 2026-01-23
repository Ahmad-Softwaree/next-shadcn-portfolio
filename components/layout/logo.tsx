import Image from "next/image";

export const Logo = () => (
  <Image
    className="rounded-full"
    width={`40`}
    height={`40`}
    src={`/logo.png`}
    alt="logo"
  />
);
