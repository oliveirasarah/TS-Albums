import { AlbumProps } from "../types/Album"

function Album({ id, title, releaseYear, cover, songs }: AlbumProps) {
  return (
    <section id={id} className="album-box">
      <h1 className="title">{title}</h1>
      <p className="releaseYear">Release year: {releaseYear}</p>
      <img
        className="cover"
        src={cover}
        alt={`Taylor Swift's ${title} album cover`}
      />
      <ul className="songs-list">
        {songs.map((song, i) => (
          <li key={song} className="songName">
            <span className="songNumber">{i + 1}. </span>
            {song}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Album
