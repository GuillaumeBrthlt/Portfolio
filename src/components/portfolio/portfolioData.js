import Image1 from "../../../public/assets/img/portfolio/project-1.jpg";
import Image2 from "../../../public/assets/img/portfolio/project-2.jpg";
import Image2_2 from "../../../public/assets/img/portfolio/project-2-2.jpg";
import Image2_3 from "../../../public/assets/img/portfolio/project-2-3.jpg";
import Image2_4 from "../../../public/assets/img/portfolio/project-2-4.jpg";
import Image3 from "../../../public/assets/img/portfolio/project-3.jpg";
import Image4 from "../../../public/assets/img/portfolio/project-4.jpg";
import Image5 from "../../../public/assets/img/portfolio/project-5.jpg";
import Image5_2 from "../../../public/assets/img/portfolio/project-5-2.jpg";
import Image5_3 from "../../../public/assets/img/portfolio/project-5-3.jpg";

const PortfolioData = [
  {
    id: 5,
    name: "Real'Immo",
    image: Image5,
    image_2: Image5_2,
    image_3: Image5_3,
    delayAnimation: "0",
    modalDetails: [
      {
        project: "Website",
        language: "HTML, CSS, Javascript",
        preview: "Real'Immo",
        link: "https://marketplace-mvp-front.vercel.app/",
        framework: " Ruby on Rails, Reactjs"
      },
    ],
  },
  {
    id: 1,
    name: "Progame",
    image: Image1,
    delayAnimation: "100",
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
    delayAnimation: "200",
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
    name: "The kitty shop",
    image: Image3,
    delayAnimation: "300",
    modalDetails: [
      {
        project: "E-shop",
        language: " HTML, CSS, Javascript, Ruby",
        preview: "Github Repository",
        link: "https://github.com/GuillaumeBrthlt/kitty_project",
      },
    ],
  },
  {
    id: 4,
    name: "Kwot'z BETA",
    image: Image4,
    delayAnimation: "400",
    modalDetails: [
      {
        project: " web app",
        language: " HTML, CSS, Javascript, Ruby",
        preview: "",
        link: "",
      },
    ],
  },

];

export default PortfolioData;
