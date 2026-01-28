import './i18n';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
    return (
        <div className="min-h-screen">
            <Navbar />
            <main>
                <Hero />
                <Skills />
                <Projects />
                <Contact />
            </main>
        </div>
    );
}

export default App;
