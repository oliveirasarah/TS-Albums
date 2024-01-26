export default function Album({ id, title, releaseYear, cover, songs }) {
  return (
    <section id={id} className="album">
      <h1 className="album__title">{title}</h1>
      <p className="album__release-year">Release year: {releaseYear}</p>
      <img className="album__cover" src={cover} alt={`${title} album cover`} />
      <ul className="album__songs">
        {songs.map((song, i) => (
          <li key={song} className="album__song">
            <span className="album__song-number">{i + 1}. </span>
            {song}
          </li>
        ))}
      </ul>
    </section>
  );
}
