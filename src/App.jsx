import "./App.scss";
import { useEffect, useReducer, useRef } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import ProgressBar from "react-bootstrap/ProgressBar";
import Button from "react-bootstrap/Button";
import Title from "./pages/Title";
import About from "./pages/About";
import Intro from "./pages/Intro";
import Web01 from "./pages/Web01";
import Web02 from "./pages/Web02";
import Web03 from "./pages/Web03";
import Emotional from "./pages/Emotional";

//const URLPrefix = import.meta.env.DEV ? "" : "/kutc-publec-2024";
const URLPrefix = process.env.VITE_BUILD ? "/kutc-publec-2024" : "";

const pages = [
  {
    path: URLPrefix + "/",
    component: <Title />,
  },
  {
    path: URLPrefix + "/about",
    component: <About />,
  },
  {
    path: URLPrefix + "/intro",
    component: <Intro />,
  },
  {
    path: URLPrefix + "/web01",
    component: <Web01 />,
  },
  {
    path: URLPrefix + "/web02",
    component: <Web02 />,
  },
  {
    path: URLPrefix + "/web03",
    component: <Web03 />,
  },
  {
    path: URLPrefix + "/emotional",
    component: <Emotional />,
  },
];

function App() {
  const ref = useRef();
  const navigate = useNavigate();
  const location = useLocation();
  const [page, setPage] = useReducer(
    (state, action) => (state + action + pages.length) % pages.length,
    pages.findIndex((page) => page.path === location.pathname) || 0
  );
  useEffect(() => {
    // change url
    ref.current.focus();
    console.log(location.pathname);
    console.log(process.env.VITE_BUILD);
    navigate(pages[page]?.path || (URLPrefix + "/"));
    // eslint-disable-next-line
  }, [page]);
  return (
    <div
      tabIndex={0}
      className="App"
      style={{ height: "100svh" }}
      ref={ref}
      onKeyDown={(e) => {
        switch (e.key) {
          case "ArrowLeft":
            setPage(-1);
            break;
          case "ArrowRight":
          case " ":
            setPage(1);
            break;
          default:
            break;
        }
      }}
      // onTouchStart={(e) => {
      //   if (e.touches[0].clientX < window.innerWidth / 2) {
      //     setPage(-1);
      //   } else {
      //     setPage(1);
      //   }
      //  }}
    >
      <ProgressBar
        variant="secondary"
        className="rounded-0"
        now={(page * 100) / (pages.length - 1)}
        style={{
          height: "0.5rem",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 999,
        }}
      />
      <Routes>
        {pages.map((page, i) => (
          <Route key={`page-${i}`} path={page.path} element={page.component} />
        ))}
        {/* <Route path="*" element={<Title />} /> */}
      </Routes>
      <Button
        variant="outline-primary d-block d-md-none"
        className="rounded-0 py-2"
        style={{ zIndex: 999, position: "fixed", bottom: "0", left: "0", width: "5rem"}}
        onClick={() => setPage(-1)}
      >&lt;</Button>
      <Button
        variant="outline-primary"
        className="rounded-0 py-2 d-block d-md-none"
        style={{ zIndex: 999, position: "fixed", bottom: "0", right: "0", width: "5rem" }}
        onClick={() => setPage(1)}
      >&gt;</Button>
    </div>
  );
}

export default App;
