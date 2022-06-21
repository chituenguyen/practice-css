import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Row from "../components/Row";
import trendingNow from "../data/tredingNow";
import topRated from "../data/topRated";
import actionMovies from "../data/actionMovies";
import comedyMovies from "../data/comedyMovies";
import scaryMovies from "../data/scaryMovies";
import romanceMovies from "../data/romanceMovies";
import documentaries from "../data/documentaries";


const Home = () => {
  return (
    <div
      className="relative h-screen bg-gradient-to-b 
    lg:h-[140vh]"
    >
      <Head>
        <title>Netflix app</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="relative pl-4 pb-24 lg:space-y-24 lg:pl-16">
        <Banner></Banner>
        <section className='md:space-y-24'>
          <Row title="Trending Now" movies={trendingNow}/>
          <Row title="Top Rated" movies={topRated}/>
          <Row title="Action Thrillers" movies={actionMovies}/>
          <Row title="Comedies" movies={comedyMovies}/>
          <Row title="Scary Movies" movies={scaryMovies}/>
          <Row title="Romance Movies" movies={romanceMovies}/>
          <Row title="Documentaries" movies={documentaries}/>
        </section>
      </main>
      {/* Modal*/}
    </div>
  );
};

export default Home;


