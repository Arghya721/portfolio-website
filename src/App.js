import { Topbar } from "./components/Topbar";
import { Layout } from "./components/Layout";
import { useEffect } from "react";



function App() {

  useEffect(() => {
    document.title = "Arghya's Portfolio";
  }, []);

  return (
 
      <Layout>
        <Topbar />
      </Layout>

  );
}

export default App;
