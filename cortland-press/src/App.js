import About from "./Components/about";
import CardGrid from "./Components/cardGrid";
import ContactFormHero from "./Components/contactFormHero";
import { Footer } from "./Components/footer";
import Header from "./Components/header";
import Hero from "./Components/hero";
import ScrollButton from "./Components/ScrollButton";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Header />

				<Hero />
				<CardGrid />
				<About />
				<ContactFormHero />
				<Footer />
				<ScrollButton />
			</header>
		</div>
	);
}

export default App;
