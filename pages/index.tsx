import dynamic from "next/dynamic";
const NavigationBar = dynamic(() => import("@/components/NavigationBar"));
const Greetings = dynamic(() => import("@/containers/Greetings"));

export default function Home() {
  return (
    <div>
      <NavigationBar />
      <Greetings />
    </div>
  );
}
