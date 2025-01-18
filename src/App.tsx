import Filter from "./components/filter";

import Header from "./components/header";
import Hero from "./components/hero";
import List from "./components/list";

const App = () => {
  return (
    <div className="bg-black-100 text-white min-h-screen">
      <Header />
      <Hero />

      <Filter />

      <List />
    </div>
  );
};

export default App;
