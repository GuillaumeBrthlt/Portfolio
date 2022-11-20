import Image1 from "../../../public/assets/img/portfolio/project-1.jpg";
import Image2 from "../../../public/assets/img/portfolio/project-2.jpg";
import Image2_2 from "../../../public/assets/img/portfolio/project-2-2.jpg";
import Image2_3 from "../../../public/assets/img/portfolio/project-2-3.jpg";
import Image2_4 from "../../../public/assets/img/portfolio/project-2-4.jpg";
import Image3 from "../../../public/assets/img/portfolio/project-3.jpg";
import Image4 from "../../../public/assets/img/portfolio/project-4.jpg";

const PortfolioData = [
  {
    id: 1,
    name: "Progame",
    image: Image1,
    tag: ["mockup"],
    delayAnimation: "0",
    modalDetails: [
      {
        project: "Website",
        language: "HTML, CSS, Javascript",
        preview: "The Hyper Progame",
        link: "https://progame.vercel.app/#pagelist",
      },
    ],
  },
  {
    id: 2,
    name: "The Place to Play",
    image: Image2,
    image_2: Image2_2,
    image_3: Image2_3,
    image_4: Image2_4,
    delayAnimation: "100",
    modalDetails: [
      {
        project: " Website",
        language: " Html, CSS, Ruby, Javascript",
        preview: "Github repository",
        link: "https://github.com/GuillaumeBrthlt/Place_To_Play",
      },
    ],
  },
  {
    id: 3,
    name: "slider project",
    image: Image3,
    tag: [],
    delayAnimation: "200",
    modalDetails: [
      {
        project: "Website",
        client: "Themeforest",
        language: " HTML, CSS, Javascript",
        preview: "www.envato.com",
        link: "https://www.envato.com",
      },
    ],
  },
  {
    id: 4,
    name: "local project",
    image: Image4,
    tag: ["logo", "video"],
    delayAnimation: "0",
    modalDetails: [
      {
        project: "video",
        client: "Videohive",
        language: " Adobe After Effects",
        preview: "www.videohive.net",
        link: "https://www.videohive.net",
      },
    ],
  },

];

export default PortfolioData;
