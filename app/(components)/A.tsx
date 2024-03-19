import Link from "next/link";

type AProps = {
    children: string;
    href: string;
  };
export default function A({children, href}: AProps) {
    return (
        <Link className={"cursor-pointer text-blue-500 underline hover:text-blue-800 hover:decoration-blue-800 active:text-red-700 active:decoration-red-700"} href={href}>{children}</Link>
    )
}