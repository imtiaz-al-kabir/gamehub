const Newsletter = () => {
  return (
    <div className="w-full bg-transparent px-2 text-center text-white py-20 flex flex-col items-center justify-center">
      <p className="text-indigo-500 font-medium">Get updated</p>
      <h1 className="max-w-xl font-semibold text-4xl/[44px] mt-2 !font-orbitron">
        Subscribe to our newsletter & get the latest game news
      </h1>
      <div className="flex items-center justify-center mt-10 border border-slate-600 focus-within:outline focus-within:outline-indigo-600 text-sm rounded-full h-14 max-w-md w-full">
        <input
          type="text"
          className="bg-transparent outline-none rounded-full px-4 h-full flex-1"
          placeholder="Enter your email address"
        />
        <button className="  rounded-full h-11 mr-1 px-8 flex items-center justify-center bg-gradient-to-r from-red-600 to-red-400 text-white py-2 cursor-pointer font-semibold hover:from-red-500 hover:to-pink-500 transition-all duration-300">
          Subscribe now
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
