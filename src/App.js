import "./App.css";
import Nav from "./components/Nav/Nav";
import Row from "./components/Row/Row";
import requests from "./utils/requests";
import Banner from "./components/Banner/Banner";

function App() {
	return (
		<div className="app">
			<Nav />
			<Banner />
			<Row
				isLargeRow
				title="NETFLIX ORIGINALS"
				fetchUrl={requests.fetchNetflixOriginals}
			/>
			<Row title="Trending Now" fetchUrl={requests.fetchTrending} />
			<Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
			<Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
			<Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
			<Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
			<Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
			<Row title="Documentries" fetchUrl={requests.fetchDocumentaries} />
		</div>
	);
}

export default App;
