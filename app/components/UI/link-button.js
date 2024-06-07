import Link from "next/link";

export default function LinkButton({linkRoute, linkName, linkClassName}){
    return(
        <>
        <Link className={`${linkClassName} font-light`} href={linkRoute}>{linkName}</Link>
        </>

    )
}