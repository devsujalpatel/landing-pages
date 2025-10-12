import React from "react";

const imagesLinks = [
  {
    link: "https://res.cloudinary.com/jerrick/image/upload/d_642250b563292b35f27461a7.png,f_jpg,fl_progressive,q_auto,w_1024/67243e0614411f001d3df79a.jpg",
    title: "Ragnar Lothbrok",
  },
  {
    link: "https://i.pinimg.com/736x/3a/11/15/3a11153eb2b0b6e1db927ca08547f34c.jpg",
    title: "Bjorn Lothbrok",
  },
  {
    link: "https://i.pinimg.com/736x/5d/2a/5b/5d2a5b0c9356cfd5cc9fdb2f7afab1f8.jpg",
    title: "Jon Snow",
  },
  {
    link: "https://media2.s-nbcnews.com/i/streams/2013/August/130808/6C8560752-34628450-63ac-0450-b9d3-f4075ef2312b-bbs5b-gallery-0858-rgb-v1.jpg",
    title: "Walter White",
  },
  {
    link: "https://i.pinimg.com/736x/55/7e/bc/557ebcf3b86e7e4e9610da0e4411863f.jpg",
    title: "Thomas Shelby",
  },
];

const Carousal = () => {
  return (
    <main className="flex h-screen">
      <div className="flex min-h-screen gap-2">
        {imagesLinks.map(({ link, title }, i) => (
          <div
            key={i}
            className="h-full w-full flex-1 overflow-hidden cursor-pointer transition-all duration-500 ease-in-out hover:flex-2"
          >
            <img
              src={link}
              alt={title}
              className="h-full w-full object-cover object-center"
            />
          </div>
        ))}
      </div>
    </main>
  );
};

export default Carousal;
