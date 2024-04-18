import dynamic from "next/dynamic";
const NavigationBar = dynamic(() => import('@/components/NavigationBar'));
const Greetings = dynamic(() => import('@/containers/Greetings'));
const Skills = dynamic(() => import('@/containers/Skills'));
import SEO from "@/components/SEO";

export default function Home() {
  return (
    <div>
      <SEO />
      <NavigationBar />
      <Greetings />
      <Skills />
    </div>
  );
}
