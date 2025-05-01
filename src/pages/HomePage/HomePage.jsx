const HomePage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="flex items-center animate-fancy-text">
        <h1 className=" text-4xl font-bold text-gray-800">Contacts App</h1>
        <span
          className="animate-wiggle ml-2 text-5xl"
          role="img"
          aria-label="Greeting icon"
        >
          📲
        </span>
      </div>
    </div>
  );
};

export default HomePage;
