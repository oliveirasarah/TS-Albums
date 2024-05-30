import { FaArrowUp } from "react-icons/fa6"

function ScrollTopBtn() {
  const scrollTop = () => (document.documentElement.scrollTop = 0)
  return (
    <span onClick={scrollTop} className="scrollTop">
      <FaArrowUp />
    </span>
  )
}

export default ScrollTopBtn
