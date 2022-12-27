import { FC } from "react";
import { Arrow } from "../../../UI/Arrow/Arrow";
import { Banner } from "../../../UI/Banner/Banner";
import { Discount } from "../../../UI/Discount/Discount";
import { Heading } from "../../../UI/Heading/Heading";
import style from "./Sidebar.module.scss";
import darkImg from "../../../../public/image 55.jpg";
import lightImg from "../../../../public/image 60.jpg";

const Sidebar: FC = () => {
  return (
    <div className={style.sidebar}>
      <Heading>Всё для комфортной работы</Heading>
      <Arrow />
      <div>
        <Banner img={darkImg} link="/cabinet" type="dark">
          <div className={style.content_dark}>
            <div>
              <Discount discount="- 25" />
            </div>
            на товары для кабинета
          </div>
        </Banner>
        <Banner img={lightImg} link="/computer" type="light">
          <div className={style.content_light}>
            <div>Скидка</div>
            <div>
              <Discount discount="10" />
            </div>
            <div> на товары для кабинета</div>
          </div>
        </Banner>
      </div>
    </div>
  );
};

export default Sidebar;
