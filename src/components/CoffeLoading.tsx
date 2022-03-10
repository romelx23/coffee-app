import Lottie, { useLottie, useLottieInteractivity } from "lottie-react";
import coffeeLoading from "../assets/animations/coffee_loading.json";

export const CoffeLoading = () => {

  const options = {
    animationData: coffeeLoading,
  };
  const lottieObj = useLottie(options);
  const Animation = useLottieInteractivity({
    lottieObj,
    mode: "cursor",
    actions: [
      {
        position: { x: [0, 1], y: [0, 1] },
        type: "seek",
        frames: [0, 400],
      },
    ],
  });
  return (
    <>
      {
        Animation
      }
    </>
  )
}
