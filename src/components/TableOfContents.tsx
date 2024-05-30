import { AlbumProps } from "../types/Album"

interface TOCProps {
  albums: AlbumProps[]
  setHeaderBg: (id: string) => void
}

function TableOfContents({ albums, setHeaderBg }: TOCProps) {
  return (
    <div className="table-of-contents">
      {albums.map(({ id, title }) => {
        const dynamicId = `#${id}`
        return (
          <a
            onMouseLeave={() => setHeaderBg("")}
            onMouseOver={() => setHeaderBg(id)}
            className="link"
            key={id}
            href={dynamicId}
          >
            {title}
          </a>
        )
      })}
    </div>
  )
}
export default TableOfContents
