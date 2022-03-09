import React from "react";
import "./card_Product.scss";
import { Segment,Button } from "semantic-ui-react";
import Carousel from "react-multi-carousel";
function Card_Product(props) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div className="home-card-product">
      <div className="Card-product">
        <span>Popular Packages</span>
        <hr style={{ width: "25%" }} />
        <Carousel responsive={responsive}>
          <Segment className="packages">
            <img
              className="images"
              src="https://cf.shopee.vn/file/8e6fa5585826d92c00623010b83ed516"
              alt=""
            />
            <div className="name">
              <h4>Hat Style</h4>
            </div>
            <div className="price">$20-30$</div>
            <div className="icons">
              <Button content>VIEW MORE</Button>
            </div>
          </Segment>
          <Segment className="packages">
            <img
              className="images"
              src="https://cf.shopee.vn/file/352c6499722de9a432d5af3499a88ca2"
              alt=""
            />
            <div className="name">
              <h4>Other Shirt</h4>
            </div>
            <div className="price">$20-30$</div>
            <div className="icons">
              <Button content>VIEW MORE</Button>
            </div>
          </Segment>
          <Segment className="packages">
            <img
              className="images"
              src="https://cdn.pixabay.com/photo/2018/05/03/22/07/outdoors-3372666_960_720.jpg"
              alt=""
            />
            <div className="name">
              <h4>Sports Shoes</h4>
            </div>
            <div className="price">$20-30$</div>
            <div className="icons">
              <Button content>VIEW MORE</Button>
            </div>
          </Segment>
          <Segment className="packages">
            <img
              className="images"
              src="https://storage.googleapis.com/cdn.nhanh.vn/store1/31089/ps/20200213/img_4583.jpg"
              alt=""
            />
            <div className="name">
              <h4>Glasses</h4>
            </div>
            <div className="price">$20-30$</div>
            <div className="icons">
              <Button content>VIEW MORE</Button>
            </div>
          </Segment>
          <Segment className="packages">
            <img
              className="images"
              src="https://cdn.shopify.com/s/files/1/1980/4847/products/NH60A100-L_3.jpg?v=1529999889"
              alt=""
            />
            <div className="name">
              <h4>Backpack</h4>
            </div>
            <div className="price">$20-30$</div>
            <div className="icons">
              <Button content>VIEW MORE</Button>
            </div>
          </Segment>
          <Segment className="packages">
            <img
              className="images"
              src="http://dophuotgiare.com/hinh-anh/san-pham/san-pham-thumb-1589786162.jpg"
              alt=""
            />
            <div className="name">
              <h4>Knife</h4>
            </div>
            <div className="price">$20-30$</div>
            <div className="icons">
              <Button content>VIEW MORE</Button>
            </div>
          </Segment>
          <Segment className="packages">
            <img
              className="images"
              src="https://vn-test-11.slatic.net/p/c7fada31727e7fe08c12c48ae3555729.jpg"
              alt=""
            />
            <div className="name">
              <h4>Helmet</h4>
            </div>
            <div className="price">$20-30$</div>
            <div className="icons">
              <Button content>VIEW MORE</Button>
            </div>
          </Segment>
        </Carousel>
      </div>
    </div>
  );
}
export default Card_Product;