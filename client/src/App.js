import Navbar from "./components/navbar/Navbar";
import Features from "./pages/home/Features";
import Home from "./pages/home/Home";
// import ImageSlider from "./pages/home/ImageSlider";
// import Community from "./pages/home/Community";
export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      {/* <ImageSlider /> */}
      <Features />
      {/* <Community /> */}
    </div>
  );
}
