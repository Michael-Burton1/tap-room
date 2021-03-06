import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import KegControl from "./KegControl";

function App() {
  return (
    <React.Fragment>
      <Header />
      <KegControl />
      <Footer />
    </React.Fragment>
  );
}

export default App;