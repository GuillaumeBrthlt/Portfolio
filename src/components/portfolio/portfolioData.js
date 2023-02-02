import Image1 from "../../../public/assets/img/portfolio/project-1.jpg";
import Image1_2 from "../../../public/assets/img/portfolio/project-1-2.jpg";
import Image1_3 from "../../../public/assets/img/portfolio/project-1-3.jpg";
import Image2 from "../../../public/assets/img/portfolio/project-2.jpg";
import Image2_2 from "../../../public/assets/img/portfolio/project-2-2.jpg";
import Image2_3 from "../../../public/assets/img/portfolio/project-2-3.jpg";
import Image2_4 from "../../../public/assets/img/portfolio/project-2-4.jpg";
import Image3 from "../../../public/assets/img/portfolio/project-3.jpg";
import Image3_2 from "../../../public/assets/img/portfolio/project-3-2.jpg";
import Image3_3 from "../../../public/assets/img/portfolio/project-3-3.jpg";
import Image3_4 from "../../../public/assets/img/portfolio/project-3-4.jpg";
import Image4 from "../../../public/assets/img/portfolio/project-4.jpg";
import Image5 from "../../../public/assets/img/portfolio/project-5.jpg";
import Image5_2 from "../../../public/assets/img/portfolio/project-5-2.jpg";
import Image5_3 from "../../../public/assets/img/portfolio/project-5-3.jpg";

const PortfolioData = [
  {
    id: 5,
    name: "Real'Immo",
    image: Image5_2,
    image_2: Image5,
    image_3: Image5_3,
    delayAnimation: "0",
    modalDetails: [
      {
        project: "Site WEB",
        language: "HTML, CSS, Javascript",
        preview: "Real'Immo",
        link: "https://marketplace-mvp-front.vercel.app/",
        framework: " Ruby on Rails, Reactjs"
      },
    ],
  },
  {
    id: 3,
    name: "Tostad'Or",
    image: Image3,
    image_2: Image3_2,
    image_3: Image3_3,
    image_4: Image3_4,
    delayAnimation: "0",
    modalDetails: [
      {
        project: "Site WEB",
        language: "HTML, CSS, Javascript, Ruby",
        framework: " Ruby on Rails, Reactjs"
      },
    ],
  },
  {
    id: 1,
    name: "Progame",
    image: Image1,
    image_2: Image1_2,
    image_3: Image1_3,
    delayAnimation: "100",
    modalDetails: [
      {
        project: "Site WEB",
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
        project: " Site WEB",
        language: " Html, CSS, Ruby, Javascript",
        preview: "Github repository",
        link: "https://github.com/GuillaumeBrthlt/Place_To_Play",
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
        project: "application web",
        language: " HTML, CSS, Javascript, Ruby",
        preview: "",
        link: "",
      },
    ],
  },

];

export default PortfolioData;
