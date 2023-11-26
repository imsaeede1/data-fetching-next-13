import LocalFonts from "next/font/local";
const roboto = LocalFonts({
  src: [
    {
      path: "../public/fonts/roboto/Roboto-Light.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/roboto/Roboto-Medium.ttf",
      weight: "500",
      style: "normal",
    },
  ],
  weight: ["400"],
  style: "normal",
  variable: "--font-roboto",
});

export default roboto;
