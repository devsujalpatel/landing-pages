import React from "react";

const imagesLinks = [
  {
    link: "https://i.pinimg.com/736x/2e/33/27/2e3327b1d69c0d4c3c5446a075db9d23.jpg",
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
    link: "https://i.pinimg.com/736x/55/7e/bc/557ebcf3b86e7e4e9610da0e4411863f.jpg",
    title: "Thomas Shelby",
  },
  {
    link: "https://i.pinimg.com/736x/71/ba/00/71ba005f759cf748457d51875049df63.jpg",
    title: "Walter White",
  },
];

const Carousal = () => {
  return (
    <main className="flex h-screen">
      <div className="flex min-h-screen gap-2">
        {imagesLinks.map(({ link, title }, i) => (
          <div
            key={i}
            className="h-full w-full flex-1 cursor-pointer overflow-hidden transition-all duration-500 ease-in-out hover:flex-2"
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
