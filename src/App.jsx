import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";

function App() {
	return (
		<main className="relative min-h-screen w-screen overflow-x-hidden">
			<Navbar />
			<Hero />
			<About />
		</main>
	);
}

export default App;
