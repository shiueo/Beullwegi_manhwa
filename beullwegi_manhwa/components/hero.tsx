export const Hero: React.FC = () => {
  return (
    <div
      className="min-h-screen hero"
      style={{
        backgroundImage: `url("sample_manhwa.png")`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="text-center hero-content text-neutral-content">
        <div className="max-w-lg">
          <h1 className="mb-5 text-5xl font-bold">블뤠기의 만화방입니다.</h1>
          <p className="mb-5">입장 시 커피 한 잔을 내셔야 합니다.</p>
          <button className="btn btn-primary">커피를 내놓으란 말이다.</button>
        </div>
      </div>
    </div>
  );
};
