import "./home.scss";
import React, { useState, useEffect } from "react";
import { Button, Segment} from "semantic-ui-react";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import Card from "../../components/card/card";
import product from "../../assets/data/data";
import Card_Product from "../../components/card_Product/card_Product";
function Home() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    await setData(product);
  };

  useEffect(async () => {
    await fetchData();
  }, []);
  return (
    <div className="home">
      <Navbar />
      <div className="span">
        <span>Adventure Idea!</span>
        <hr style={{ width: "20%" }} />
      </div>
      <div className="home-content">
        <div className="home-img">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu7oeKWlhDrbyer17LDyb0hi224b5JrzZ4VA&usqp=CAU"
            alt=""
          />
          <h4>Sea Surf</h4>
          <h5>Experience Adventure</h5>
          <Button basic>Read More</Button>
        </div>
        <div className="home-img">
          <img
            src="https://cdn.thodianhatrang.vn/Media/Articles/190918090549/Gallery/nui-co-tien-nha-trang-7.jpg?width=786&height=590&quality=80&mode=crop"
            alt=""
          />
          <h4>Night Camping</h4>
          <h5>Experience Adventure</h5>
          <Button basic>Read More</Button>
        </div>
        <div className="home-img">
          <img
            src="https://dulichvietnam.com.vn/vnt_upload/news/05_2020/dia_diem_cheo_thuyen_kayak_4.jpg"
            alt=""
          />
          <h4>Kayaking</h4>
          <h5>Experience Adventure</h5>
          <Button basic>Read More</Button>
        </div>
        <div className="home-img">
          <img
            src="https://phunugioi.com/wp-content/uploads/2020/10/hinh-anh-di-phuot.jpg"
            alt=""
          />
          <h4>Watch The Sunset</h4>
          <h5>Experience Adventure</h5>
          <Button basic>Read More</Button>
        </div>
      </div>

      <div className="content">
        <div className="span">
          <span>Popular Packages</span>
          <hr style={{ width: "20%" }} />
        </div>
        <div className="content-position">
          <div className="content-img1">
            <h4>THE ART OF LETTING GO</h4>
            <h3>BEACH HOUSE EXPERENCE</h3>
            <Button content>VIEW MORE</Button>
          </div>
          <div className="content-position1">
            <div className="content-img2">
              <h4>MEMORABLE DISHES</h4>
              <h3>ANCH0R AND DEN</h3>
              <Button content>VIEW MORE</Button>
            </div>
          </div>
          <div className="content-position2">
            <div className="content-img3">
              <h4>CONCEPT</h4>
              <h3>ENERGY MEETINGS</h3>
              <Button content>VIEW MORE</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="content-card">
        <div className="content-center">
          <span>Popular Packages</span>
          <hr style={{ width: "20%" }} />
        </div>
        <Segment className="content-center1">
          {data.map(item => (
            <Card product={item} />
          ))}
        </Segment>
      </div>
      <Card_Product />
      <Footer />
    </div>
  );
}
export default Home;