import { Routes, Route } from "react-router-dom"
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import HomePage from "./pages/HomePage"

function App() {
  return (
    <div className="site-wrapper dark:bg-black-300">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="about" element={<HotBidsItem />} /> */}
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
