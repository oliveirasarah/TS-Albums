import { AlbumProps } from "../types/Album"

interface TOCProps {
  albums: AlbumProps[]
}

function TableOfContents({ albums }: TOCProps) {
  return (
    <div className="table-of-contents">
      {albums.map(({ id, title }) => {
        const dynamicId = `#${id}`
        return (
          <a className="link" key={id} href={dynamicId}>
            {title}
          </a>
        )
      })}
    </div>
  )
}
export default TableOfContents
