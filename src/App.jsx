import "./App.scss";
import { useEffect, useReducer, useRef, useState } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import ProgressBar from "react-bootstrap/ProgressBar";
import Title from "./pages/Title";
import About from "./pages/About";
import Neko from "./pages/Neko";
import Intro01 from "./pages/Intro01";
import Intro02 from "./pages/Intro02";
import Intro03 from "./pages/Intro03";
import Intro04 from "./pages/Intro04";
import Intro05 from "./pages/Intro05";
import Web01 from "./pages/Web01";
import Web01_1 from "./pages/Web01_1";
import Web01_2 from "./pages/Web01_2";
import Web01_3 from "./pages/Web01_3";
import Web01_4 from "./pages/Web01_4";
import Web02 from "./pages/Web02";
import Web03 from "./pages/Web03";
import Web04 from "./pages/Web04";
import Web04_0 from "./pages/Web04_0";
// import Web04_1 from "./pages/Web04_1";
// import Web04_2 from "./pages/Web04_2";
import Web05 from "./pages/Web05";
import Web06 from "./pages/Web06";
import Emotional from "./pages/Emotional";
import MyNav from "./components/MyNav";
import PoseFace from "./pages/PoseFace";
import Future from "./pages/Future";

//const URLPrefix = import.meta.env.DEV ? "" : "/kutc-publec-2024";
const baseURL = import.meta.env.BASE_URL;

const pages = [
  {
    path: baseURL + "",
    component: <Title />,
  },
  {
    path: baseURL + "intro01",
    component: <Intro01 />,
  },
  {
    path: baseURL + "intro02",
    component: <Intro02 />,
  },
  {
    path: baseURL + "intro03",
    component: <Intro03 />,
  },
  {
    path: baseURL + "intro04",
    component: <Intro04 />,
  },
  {
    path: baseURL + "intro05",
    component: <Intro05 />,
  },
  {
    path: baseURL + "about",
    component: <About />,
  },
  {
    path: baseURL + "neko",
    component: <Neko />,
  },
  {
    path: baseURL + "web01",
    component: <Web01 />,
  },
  {
    path: baseURL + "web01_1",
    component: <Web01_1 />,
  },
  {
    path: baseURL + "web01_2",
    component: <Web01_2 />,
  },
  {
    path: baseURL + "web01_3",
    component: <Web01_3 />,
  },
  {
    path: baseURL + "web01_4",
    component: <Web01_4 />,
  },
  {
    path: baseURL + "web02",
    component: <Web02 />,
  },
  {
    path: baseURL + "web03",
    component: <Web03 />,
  },
  {
    path: baseURL + "web04",
    component: <Web04 />,
  },
  {
    path: baseURL + "web04_0",
    component: <Web04_0 />,
  },
  // {
  //   path: baseURL + "web04_1",
  //   component: <Web04_1 />,
  // },
  // {
  //   path: baseURL + "web04_2",
  //   component: <Web04_2 />,
  // },
  {
    path: baseURL + "web05",
    component: <Web05 />,
  },
  {
    path: baseURL + "emotional",
    component: <Emotional />,
  },
  {
    path: baseURL + "pose",
    component: <PoseFace />,
  },
  {
    path: baseURL + "web06",
    component: <Web06 />,
  },
  {
    path: baseURL + "future",
    component: <Future />,
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
  const [menu, setMenu] = useState(false);
  useEffect(() => {
    // change url
    ref.current.focus();
    navigate(pages[page]?.path || baseURL);
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
          case "m":
            setMenu(!menu);
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
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 999,
        }}
      >
        <ProgressBar
          variant="secondary"
          className="rounded-0"
          style={{
            height: "0.5rem",
          }}
          now={(page * 100) / (pages.length - 1)}
        />
        <MyNav
          page={page}
          hidden={menu}
          setPage={setPage}
          totalPageNum={pages.length}
        />
      </div>
      <Routes>
        {pages.map((page, i) => (
          <Route key={`page-${i}`} path={page.path} element={page.component} />
        ))}
        <Route path="*" element={<Title />} />
      </Routes>
    </div>
  );
}

export default App;
