import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [currentImage, setCurrentImage] = useState(1);

  const imagesData = [
    {
      title: "Novel of the month",
      description: "After 6 years since his last publication, Haruki Murakami returns with his novel 'The City and Its Uncertain Walls'. 📘...Little does the young protagonist of this novel imagine that the girl he has fallen in love with is about to disappear of their life..."
    },
    {
      title: "Gabriel García Márquez's collection",
      description: "We have the complete collection of Gabriel García Márquez's works. 📚...The Nobel Prize in Literature winner is one of the most important authors of the 20th century. His works are characterized by their magical realism..."
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage % 2) + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getImageSource = () => {
    return `/img/jumbotron_${currentImage}.JPG`;
  };

  return (
    <div className="mt-10 mx-6 xl:mx-16 w-full flex flex-col xl:flex-row items-center">
      <img src={getImageSource()} alt="Jumbotron image" className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 md:mb-6" />

      <div className="flex flex-col items-center xl:w-3/4">
        <h1 className="text-4xl text-gray-600 font-bold">
          <span className="px-4 py-1 xl:mt-4">{imagesData[currentImage - 1].title}</span>
        </h1>
        <p className="text-2xl my-10 text-justify mx-6 xl:mx-48">{imagesData[currentImage - 1].description}</p>
        <Link to="/" className="bg-teal-600 text-white font-bold rounded-lg px-4 py-2 shadow-lg">Go to the Bookshop</Link>
      </div>
    </div>
  );
}
