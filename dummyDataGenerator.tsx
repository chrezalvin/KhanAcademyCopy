import { SvgUri } from "react-native-svg";

const calculator = require("./assets/icons/calculator.svg");
const art = require("./assets/icons/art.svg");
const atom = require("./assets/icons/atom.svg");
const briefcase = require("./assets/icons/briefcase.svg");
const coin = require("./assets/icons/coin.svg");
const handshake = require("./assets/icons/handshake.svg");
const testExam = require("./assets/icons/testExam.svg");

export const data = [
    {
        id: 1,
        topic: "Math",
        icon: <SvgUri uri={calculator} />,
    },
    {
        id: 2,
        topic: "Arts and Humanities",
        icon: <SvgUri uri={art} />,
    },
    {
        id: 3,
        topic: "Science",
        icon: <SvgUri uri={atom} />,
    },
    {
        id: 4,
        topic: "Life Skills",
        icon: <SvgUri uri={briefcase} />,
    },
    {
        id: 5,
        topic: "Economics",
        icon: <SvgUri uri={coin} />,
    },
    {
        id: 6,
        topic: "Partner Content",
        icon: <SvgUri uri={handshake} />,
    },
    {
        id: 7,
        topic: "Test Prep",
        icon: <SvgUri uri={testExam} />,
    }
]

export default data;