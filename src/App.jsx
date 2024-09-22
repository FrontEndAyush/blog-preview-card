function App() {
  return (
    <>
      <main className="flex justify-center items-center h-screen">
        <div className="w-[350px] p-5 bg-white border-r-8 border-b-8 rounded-md h-[500px] border border-black">
          <img
            src="/images/illustration-article.svg"
            className="rounded-lg"
            alt=""
          />
          <p className=" font-bold bg-[#F7D056] rounded-md w-[80px] mt-4 text-center p-1">
            Learning
          </p>
          <p className="mt-2 font-semibold">Published 21 Dec 2023</p>
          <h1 className="mt-2 font-bold text-[25px] hover:text-[#F7D056] duration-300 cursor-pointer">HTML & CSS Foundations</h1>
          <p className="mt-3 text-[#777777]">
            These Languages are the backbone of every website, defining
            structure,content, and presenatation.
          </p>
          <div className="flex items-center gap-2 mt-4">
            <img src="/images/image-avatar.webp" className="w-[30px] " alt="" />
            <h1 className="font-bold">Greg Hooper</h1>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
