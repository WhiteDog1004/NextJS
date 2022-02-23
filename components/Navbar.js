import Link from "next/link";
import { useRouter } from "next/router";
export default function Navbar() {
    const router = useRouter();
    console.log(router);

    return <nav>
        <img src="/vercel.svg" />
        <Link href="/">
            <a className={router.pathname === "/" ? "active" : ""}>홈</a>
        </Link>
        <Link href="/about">
            <a className={router.pathname === "/about" ? "active" : ""}>첫번째</a>
        </Link>

        {/* 이 컴포넌트 한정에서만 css가 적용됨. 다른곳에서 같은 이름이있어도 그곳은 해당css 적용 X  */}
        <style jsx>{`
                nav {
                    display: flex;
                    gap: 10px;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    padding-top: 20px;
                    padding-bottom: 10px;
                    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
                    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
                }
                img {
                    max-width: 100px;
                    margin-bottom: 5px;
                }
                nav a {
                    font-weight: 600;
                    font-size: 18px;
                    text-decoration: none;
                    color: black;
                }
                nav a:hover {
                    color: red;
                }
                .active {
                    color: tomato !important;
                }
                nav div {
                    display: flex;
                    gap: 10px;
                }
            `}
        </style>
    </nav>
}