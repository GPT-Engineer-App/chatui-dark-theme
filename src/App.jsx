import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Navbar from "./components/Navbar.jsx";
import Sidebar from "./components/Sidebar.jsx";
import ChatArea from "./components/ChatArea.jsx";
import RightPanel from "./components/RightPanel.jsx";
import { Flex } from "@chakra-ui/react";

function App() {
  return (
    <Router>
      <Navbar />
      <Flex>
        <Sidebar />
        <ChatArea />
        <RightPanel />
      </Flex>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;