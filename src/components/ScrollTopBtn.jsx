export default function ScrollTopBtn() {
  return (
    <span
      onClick={() => (document.documentElement.scrollTop = 0)}
      className="scroll-top"
    >
      ↑
    </span>
  );
}
