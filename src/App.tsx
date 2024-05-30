import { useEffect, useState } from "react"

import { AlbumProps } from "./types/Album"
import TableOfContents from "./components/TableOfContents"
import ScrollTopBtn from "./components/ScrollTopBtn"
import Album from "./components/Album"

function App() {
  const [showButton, setShowButton] = useState<boolean>(false)
  const [albums, setAlbums] = useState<AlbumProps[]>([])
  const [headerBg, setHeaderBg] = useState<string>("")

  const renderedAlbums = albums.map((album) => (
    <Album key={album.id} {...album} />
  ))

  useEffect(() => {
    fetch("http://localhost:3000/albums")
      .then((res) => res.json())
      .then((json) => setAlbums(json))
      .catch((err) => console.log("Error", err))
  }, [])

  useState(() => {
    function toggleScrollBtn() {
      document.documentElement.scrollTop > 100
        ? setShowButton(true)
        : setShowButton(false)
    }

    window.addEventListener("scroll", toggleScrollBtn)
  })

  return (
    <>
      <header className={headerBg}>
        <h1>Albums</h1>
        <TableOfContents setHeaderBg={setHeaderBg} albums={albums} />
      </header>

      <main className="albums">{renderedAlbums}</main>

      {showButton && <ScrollTopBtn />}
    </>
  )
}

export default App
