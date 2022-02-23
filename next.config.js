const API_KEY = process.env.API_KEY;

// redirect를 이용해서 해당 페이지 주소에서 다른 페이지 주소로 이동하게 할 수 있음 ( 아예 다른 URL의 웹사이트로 이동하게 할 수도 있음 )
// rewrites는 유저를 redirect 시키기는 하지만 URL은 변하지 않음
module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/contact/:path*",
        destination: "/",
        permanent: false,
      },
    ]
  },
  async rewrites() {
    return [
      {
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
      },
    ];
  },
}
