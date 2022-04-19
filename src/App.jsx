import Header from "./components/Header";
import PolpularItems from "./components/PolpularItems";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div className="container">
      <Header />
      <PolpularItems />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default App;
