import Layout from "../components/Layout";
import Navbar from "../components/Navbar";

export default function App({ Component, pageProps }) {
    return (
        // index.js & nohi.js를 렌더링하기전에 _app.js가 먼저 렌더링 시작 : 파일명 _app는 절대 바꿀수 없음. NextJS가 정한거임
        <Layout>
            <Component {...pageProps} />
            <span> HIHIHIHI</span>
            <style jsx global>{`
                body {
                    color: blue;
                }
            `}</style>
        </Layout>
    )
}