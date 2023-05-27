export default function Hero() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url("shiueo_wallpaper.png")`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-lg">
          <h1 className="mb-5 text-5xl font-bold">블뤠기의 만화방</h1>
          <p className="mb-5">설명 주세요</p>
          <button className="btn btn-primary">
            눌러도 아직 아무것도 안돼요
          </button>
        </div>
      </div>
    </div>
  );
}
