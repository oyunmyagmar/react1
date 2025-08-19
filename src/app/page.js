// import Image from "next/image";

const Home = () => {
  return (
    <div>
      <div className="w-[350px] bg-gray-100 rounded-lg shadow-md">
        <img
          className="w-full pt-5"
          src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20221222184908/web-development1.png"
          alt=""
        ></img>
        <div className="p-5">
          <p className="text-sm">January 15, 2025</p>
          <h3 className="mt-3 text-lg font-bold">
            Getting Started with Modern Web Development
          </h3>
          <p className="mt-4 text-base">
            Learn the fundamentals of modern web development including React,
            Next.js and TypeScript. This comprehensive guide will help you build
            your first...
          </p>
          <button className="mt-3 bg-blue-600 w-full text-white">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};
export default Home;
