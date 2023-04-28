import React from "react";
import "./HomeScreen.css";
import Navbar from "../../components/Navbar/Navbar";
import Row from "../../components/Row/Row";
import Requests from "../../components/Requests";
import Banner from "../../components/Banner/Banner";


const HomeScreen = () => {
    return (
        <>
            <div className="home-screen">
                <Navbar />
                <Banner />
                <Row title="NETFLIX ORIGINAL" fetchUrl={Requests.fetchNetflixOriginals} isLargeRow />
                <Row title="Trending Now" fetchUrl={Requests.fetchTrending} />
                <Row title="Top Rated" fetchUrl={Requests.fetchTopRated} />
                <Row title="Action Movies" fetchUrl={Requests.fetchActionMovies} />
                <Row title="Comedy Movies" fetchUrl={Requests.fetchComedyMovies} />
                <Row title="Horror Movies" fetchUrl={Requests.fetchHorrorMovies} />
                <Row title="Romance Movies" fetchUrl={Requests.fetchRomanceMovies} />
                <Row title="Documentaries" fetchUrl={Requests.fetchDocumentaries} />
            </div>
        </>
    );
}

export default HomeScreen;