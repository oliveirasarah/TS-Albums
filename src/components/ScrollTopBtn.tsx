function ScrollTopBtn() {
  const scrollTop = () => (document.documentElement.scrollTop = 0)
  return (
    <span onClick={scrollTop} className="scrollTop">
      ↑
    </span>
  )
}

export default ScrollTopBtn
