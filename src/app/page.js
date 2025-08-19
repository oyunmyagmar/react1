import { PostCard } from "@/components";
const Home = () => {
  const cards = [
    {
      id: "1",
      image:
        "https://www.ntc.edu/sites/default/files/styles/16_9_1600x900/public/2021-06/web-design-header.jpg?itok=KPytPu7S",
      date: "January 15, 2025",
      title: "Getting Started with Modern Web Development",
      description:
        "Learn the fundamentals of modern web development including React, Next.js and TypeScript. This comprehensive guide will help you build your first...",
      btnText: "Read More",
    },
    {
      id: "2",
      image: "https://miro.medium.com/1*zRGlIMeuVmw6PrQkaOLvfg.jpeg",
      date: "January 12, 2025",
      title: "The Art of Clean Code",
      description:
        "Discover best practices for writing maintainable, readable code that your future self and teammates will thank you for. Clean code is not just about syntax.",
      btnText: "Read More",
    },
    {
      id: "3",
      image:
        "https://searchengineland.com/wp-content/seloads/2018/04/responsive-design-ss-1.jpg",
      date: "January 10, 2025",
      title: "Building Responsive Designs",
      description:
        "Master the techniques for creating websites that look great on all devices. From mobile-first design to advanced CSS Grid layouts.",
      btnText: "Read More",
    },
    {
      id: "4",
      image:
        "https://aws-storage-aulab.s3.eu-south-1.amazonaws.com/aulabes/app/public/6/conversions/jsarticle-cover.jpg",
      date: "January 9, 2025",
      title: "Understanding JavaScript ES6+",
      description:
        "Explore the modern features of JavaScript including arrow functions, destructuring, and modules that make your code more expressive and easier to maintain.",
      btnText: "Read More",
    },
    {
      id: "5",
      image:
        "https://www.pgsuae.com/wp-content/uploads/2024/10/Importance-of-Version-Control-Git-GitHub-in-Web-Development.jpg",
      date: "January 7, 2025",
      title: "Mastering Git and Version Control",
      description:
        "Take control of your projects with Git. Learn essential commands, branching strategies, and collaboration workflows for smoother team development.",
      btnText: "Read More",
    },
    {
      id: "6",
      image:
        "https://blog.pixelfreestudio.com/wp-content/uploads/2024/07/The-Ultimate-Guide-to-Website-Performance-Optimization-transformed-1-1024x612.jpeg",
      date: "January 5, 2025",
      title: "Optimizing Web Performance",
      description:
        "Speed up your websites with practical tips on minimizing load times, optimizing images, and leveraging caching to improve user experience.",
      btnText: "Read More",
    },
  ];

  return (
    <div>
      <div className="w-full h-screen flex items-center">
        <div className="flex flex-wrap gap-6 justify-center">
          {cards.map((post) => {
            return (
              <PostCard
                image={post.image}
                date={post.date}
                title={post.title}
                description={post.description}
                btnText={post.btnText}
              ></PostCard>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Home;

// <div className="w-full h-screen flex justify-center items-center">
//   <div className="flex flex-wrap gap-6 p-10">
//     <PostCard
//       image="https://www.ntc.edu/sites/default/files/styles/16_9_1600x900/public/2021-06/web-design-header.jpg?itok=KPytPu7S"
//       date="January 15, 2025"
//       title="Getting Started with Modern Web Development"
//       description="Learn the fundamentals of modern web development including React, Next.js and TypeScript. This comprehensive guide will help you build your first..."
//       btnText="Read More"
//     ></PostCard>
//     <PostCard
//       image="https://miro.medium.com/1*zRGlIMeuVmw6PrQkaOLvfg.jpeg"
//       date="January 12, 2025"
//       title="The Art of Clean Code"
//       description="Discover best practices for writing maintainable, readable code that your future self and teammates will thank you for. Clean code is not just about syntax."
//       btnText="Read More"
//     ></PostCard>
//     <PostCard
//       image="https://searchengineland.com/wp-content/seloads/2018/04/responsive-design-ss-1.jpg"
//       date="January 10, 2025"
//       title="Building Responsive Designs"
//       description="Master the techniques for creating websites that look great on all devices. From mobile-first design to advanced CSS Grid layouts."
//       btnText="Read More"
//     ></PostCard>
//     <PostCard
//       image="https://aws-storage-aulab.s3.eu-south-1.amazonaws.com/aulabes/app/public/6/conversions/jsarticle-cover.jpg"
//       date="January 9, 2025"
//       title="Understanding JavaScript ES6+"
//       description="Explore the modern features of JavaScript including arrow functions, destructuring, and modules that make your code more expressive and easier to maintain."
//       btnText="Read More"
//     ></PostCard>
//     <PostCard
//       image="https://www.pgsuae.com/wp-content/uploads/2024/10/Importance-of-Version-Control-Git-GitHub-in-Web-Development.jpg"
//       date="January 7, 2025"
//       title="Mastering Git and Version Control"
//       description="Take control of your projects with Git. Learn essential commands, branching strategies, and collaboration workflows for smoother team development."
//       btnText="Read More"
//     ></PostCard>
//     <PostCard
//       image="https://blog.pixelfreestudio.com/wp-content/uploads/2024/07/The-Ultimate-Guide-to-Website-Performance-Optimization-transformed-1-1024x612.jpeg"
//       date="January 5, 2025"
//       title="Optimizing Web Performance"
//       description="Speed up your websites with practical tips on minimizing load times, optimizing images, and leveraging caching to improve user experience."
//       btnText="Read More"
//     ></PostCard>
//   </div>
// </div>
