const Home = () => {
  return (
    <div className="h-screen pt-8 w-full flex flex-col justify-between">
        <img className="w-16 ml-8" src="/uber-logo.png" alt="logo" />
        <div className="py-5 px-5 pb-7">
          <h2 className="text-3xl font-bold">Get Started with Uber</h2>
          <button className="w-full bg-black text-white py-3 rounded mt-4">
            Continue
          </button>
        </div>
    </div>
  );
};

export default Home;
