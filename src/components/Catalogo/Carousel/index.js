import Slider from "react-slick";
import { Slide } from "../Slide";

export const Carousel = ({ data = [], mb = 0, mobile }) => (
  <div style={{ margin: "0 -13px", marginBottom: mb }}>
    <Slider slidesToShow={mobile ? 2 : 4}>
      {Array.isArray(data) &&
        data.map((item) => <Slide key={item.id} {...item} />)}
    </Slider>
  </div>
);
