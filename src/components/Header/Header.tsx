import { HeaderTime } from "../../interface/HeaderTime";
import { HeaderComponent } from "./HeaderStyled";

export const Header = ({ time }: { time: HeaderTime }) => {
  console.log(time);

  return (
    <HeaderComponent>
      <span>{time.minutes}</span>:<span>{time.seconds}</span>,
      <span>{time.centiseconds}</span>
    </HeaderComponent>
  );
};
