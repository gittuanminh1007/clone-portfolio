import dynamic from "next/dynamic";
const NavigationBar = dynamic(() => import("@/components/NavigationBar"));
const Greetings = dynamic(() => import("@/containers/Greetings"));
import SEO from "@/components/SEO";

export default function Home() {
  return (
    <div>
      <SEO />
      <NavigationBar />
      <Greetings />
    </div>
  );
}
