import { useState, useEffect } from "react"

import TableOfContents from "./components/TableOfContents"
import ScrollTopBtn from "./components/ScrollTopBtn"
import Album from "./components/Album"
import { AlbumProps } from "./types/Album"

function App() {
  const [albums, setAlbums] = useState<AlbumProps[]>([])
  const [showButton, setShowButton] = useState<boolean>(false)
  const [headerBg, setHeaderBg] = useState<string>("")

  useEffect(() => {
    fetch("https://json-data-so.vercel.app/albums")
      .then((res) => res.json())
      .then((json) => setAlbums(json))
  }, [])

  const renderedAlbums = albums.map((album) => (
    <Album key={album.id} {...album} />
  ))

  useEffect(() => {
    function toggleScrollBtn() {
      document.documentElement.scrollTop > 100
        ? setShowButton(true)
        : setShowButton(false)
    }

    window.addEventListener("scroll", toggleScrollBtn)
  })

  if (!albums) return <p>Loading...</p>

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
