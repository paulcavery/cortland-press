import CardGrid from "./Components/cardGrid";
import ContactForm from "./Components/contactForm";
import Header from "./Components/header";
import Hero from "./Components/hero";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Header />
				<Hero />
				<CardGrid />
				<ContactForm />
			</header>
		</div>
	);
}

export default App;
