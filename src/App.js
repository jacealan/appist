import { Routes, Route, Outlet, Link } from "react-router-dom"

import Layout from "./components/layout"
import NoMatch from "./components/nomatch"
import Home from "./routes/home"

import theme from "./theme.json"

function App() {
  return (
    <div className="App">
      {/* Routes nest inside one another. Nested route paths build upon
            parent route paths, and nested route elements render inside
            parent route elements. See the note about <Outlet> below. */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          {/* Using path="*"" means "match anything", so this route
                    acts like a catch-all for URLs that we don't have explicit
                    routes for. */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>

      <style jsx="true">{`
        .App {
          // background-color: ${theme.black2};
          // color: ${theme.white2};
          background-color: ${theme.white0};
          color: ${theme.black2};
        }
      `}</style>
    </div>
  )
}

export default App
