import { useState } from "react";
import Album from "./components/Album";
import ScrollTopBtn from "./components/ScrollTopBtn";
import data from "./api/albums.json";

const ALBUMS = data.albums;

export default function App() {
  const [showButton, setShowButton] = useState(false);

  useState(() => {
    function toggleScrollBtn() {
      document.documentElement.scrollTop > 100
        ? setShowButton(true)
        : setShowButton(false);
    }

    window.addEventListener("scroll", toggleScrollBtn);
  }, []);

  return (
    <>
      <header>
        <h1>Albums</h1>
        <div className="table-of-contents">
          {ALBUMS.map(({ id, title }) => (
            <a key={id} href={`#${id}`}>
              {title}
            </a>
          ))}
        </div>
      </header>
      <p className="pic-credits">Photo credit: Beth Garrabrant</p>
      <main className="albums">
        {ALBUMS.map((el) => (
          <Album key={el.id} {...el} />
        ))}
      </main>

      {showButton && <ScrollTopBtn />}
    </>
  );
}
