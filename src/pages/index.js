import Benefits from '../components/Benefits/Benefits';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Skills from '../components/Skills/Skills';
import { Layout } from '../layout/Layout';


const Home = () => {
  return (
    <Layout>
      <Hero />
      <Projects />
      <Skills />
      <Benefits />
    </Layout>
  );
};

export default Home;
