import FacebookSVG from "./icons/FacebookSVG";
import InstaSVG from "./icons/InstaSVG";
import LinkedinSVG from "./icons/LinkedinSVG";
import TwitterSVG from "./icons/TwitterSVG";

interface SMprops {
  color: string;
  height?: string;
  width?: string;
}
const SocialMediaBox = ({ color, height = "20", width = "14" }: SMprops) => {
  const images = [
    <FacebookSVG color={color} height={height} width={width} />,
    <TwitterSVG color={color} height={height} width={width} />,
    <LinkedinSVG color={color} height={height} width={width} />,
    <InstaSVG color={color} height={height} width={width} />,
  ];
  return (
    <>
      {images.map((item) => {
        return item;
      })}
    </>
  );
};

export default SocialMediaBox;
