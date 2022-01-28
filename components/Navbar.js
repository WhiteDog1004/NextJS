import Link from "next/link";
import { useRouter } from "next/router";
export default function Navbar() {
    const router = useRouter();
    console.log(router);

    return <nav>
        <Link href="/">
            <a className={ router.pathname === "/" ? "active" : ""}>홈</a>
        </Link>
        <Link href="/about">
            <a className={ router.pathname === "/about" ? "active" : ""}>첫번째</a>
        </Link>

        {/* 이 컴포넌트 한정에서만 css가 적용됨. 다른곳에서 같은 이름이있어도 그곳은 해당css 적용 X  */}
        <style jsx>{`
            nav {
                background-color: grey;
            }
            a {
                color: white;
                text-decoration: none;
            }
            .active {
                color: pink;
            }
        `}</style>
    </nav>
}