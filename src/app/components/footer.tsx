import Link from "next/link";

export default function Footer (){
    return(
        <ul className="flex gap-10 bg-red-600">
            <li> <Link href="/">core course</Link></li>
            <li><Link href="/about">Advanced course</Link></li>
            <li><Link href="/contact-us">social Links</Link></li>
            <li><Link href="/portfolio">Portfolio</Link></li>



        </ul>

    )
}