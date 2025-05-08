import Card from "../Fragments/Card";
import AnimatePage from "./AnimatePage";

const CardProjects = () => {
  const Cards = [
    {
      id: 1,
      title: "ToDo-List",
      image: "../assets/todolist.png",
      link: "https://mission4-muhammad-ulil-albab-13054.vercel.app/",
      description: "Helps increase productivity by recording all activities",
    },
    {
      id: 2,
      title: "Stream Online Movie",
      image: "../assets/stream-online-movie.png",
      link: "https://chill-app-nine.vercel.app/",
      description: "Provides the newest and most up-to-date film services",
    },
    {
      id: 3,
      title: "videobelajar course",
      image: "../assets/videobelajar.png",
      link: "https://education-course-livid.vercel.app/",
      description: "Course for learning online and improving skills",
    },
  ];
  return (
    <AnimatePage>
      <div className="bg-slate-50">
        <div className="flex flex-col justify-center items-center ">
          {Cards.map((Cards) => (
            <div key={Cards.id}>
              <Card image={Cards.image} title={Cards.title} description={Cards.description} link={Cards.link} id={Cards.id} />
            </div>
          ))}
        </div>
      </div>
    </AnimatePage>
  );
};

export default CardProjects;
