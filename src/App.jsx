import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Features from "./components/features";

function App() {
	return (
		<main className="relative min-h-screen w-screen overflow-x-hidden">
			<Navbar />
			<Hero />
			<About />
			<Features />
		</main>
	);
}

export default App;
