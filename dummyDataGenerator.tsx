import Calculator from "./assets/icons/calculator.svg";
import Art from "./assets/icons/art.svg";
import Atom from "./assets/icons/atom.svg";
import Briefcase from "./assets/icons/briefcase.svg";
import Coin from "./assets/icons/coin.svg";
import Handshake from "./assets/icons/handshake.svg";
import TestExam from "./assets/icons/testExam.svg";

export const data = [
    {
        id: 1,
        topic: "Math",
        icon: <Calculator height={50} width={50} />,
    },
    {
        id: 2,
        topic: "Arts and Humanities",
        icon: <Art height={50} width={50} />,
    },
    {
        id: 3,
        topic: "Science",
        icon: <Atom height={50} width={50} />,
    },
    {
        id: 4,
        topic: "Life Skills",
        icon: <Briefcase height={50} width={50} />,
    },
    {
        id: 5,
        topic: "Economics",
        icon: <Coin height={50} width={50} />,
    },
    {
        id: 6,
        topic: "Partner Content",
        icon: <Handshake height={50} width={50} />,
    },
    {
        id: 7,
        topic: "Test Prep",
        icon: <TestExam height={50} width={50} />,
    },
]

export default data;