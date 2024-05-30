import { AlbumProps } from "../types/Album"

function Album({ id, title, cover, songs, vault, deluxe }: AlbumProps) {
  const songsLength = songs.length
  const renderSongs = (array: string[], indexRestarts: boolean = false) => {
    return (
      <ul className="songs-list">
        {array.map((song, i) => {
          let index = !indexRestarts ? i : i + songsLength

          return (
            <li className="title" key={song}>
              <span className="number">{index + 1}.</span> {song}
            </li>
          )
        })}
      </ul>
    )
  }

  return (
    <section id={id} className={`album-box ${id}`}>
      <h2 className="title">{title}</h2>
      <img
        className="cover"
        src={cover}
        alt={`Taylor Swift's ${title} album cover`}
      />

      {(vault || deluxe) && <h3 className="subtitle">Original tracklist</h3>}

      {renderSongs(songs)}

      {vault && (
        <>
          <h3 className="subtitle">From the vault</h3>
          {renderSongs(vault, true)}
        </>
      )}

      {deluxe && (
        <>
          <h3 className="subtitle">deluxe edition</h3>
          {renderSongs(deluxe, true)}
        </>
      )}
    </section>
  )
}

export default Album
