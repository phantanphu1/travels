import "./footer.scss";
import React from "react";
import { Button } from "semantic-ui-react";
function Footer() {
  return (
    <div className="footer">
      <div className="footer-content item1">
        <h3>Contact Information</h3>
        <ul>
          <li>
          <i class='bx bx-home-heart'></i>
            <a href="">Địa chỉ:36 Nguyễn Tất Thành-Đông Anh-Hà Nội</a>
          </li>
          <li>
          <i class='bx bxl-gmail' ></i>
            <a href="">Email:phantanphu1505@gmail.com</a>
          </li>
          <li>
          <i class='bx bx-phone-call'></i>
            <a href="">Phone:0835129813</a>
          </li>
          <li>
          <i class='bx bx-time-five' ></i>
            <a href="">Time word:8:00-16:30</a>
          </li>
        </ul>
      </div>
      <div className="footer-content item2">
        {/* dịch vụ */}
        <h3>Service</h3>
        <ul>
          <li>
            <a href="">Service:Food - Restaurant</a>
          </li>
          <li>
            <a href="">Service:Hotel</a>
          </li>
          <li>
            <a href="">Service:Self-drive car rental</a>
          </li>
          <li>
            <a href="">Service:Ticket booking plane</a>
          </li>
        </ul>
      </div>
      <div className="footer-content item3">
        {/* chính sách */}
        <h3>Policy</h3>
        <ul>
          <li>
            <a href="">Hóa Đơn Thanh Toán</a>
          </li>
          <li>
            <a href="">Hóa Đơn Tour</a>
          </li>
        </ul>
      </div>
      <div className="footer-content item4">
        {/* Tour trọn gói */}
        <h3>Inclusive Tour</h3>
        <ul>
          <li>
            {/* <Icon name="bicycle" /> */}
            <a href="">Tour:Nha Trang-Đà Lạt</a>
          </li>
          <li>
            {/* <Icon name="bicycle" /> */}
            <a href="">Tour:TP Đà Lạt-SaPa</a>
          </li>
          <li>
            {/* <Icon name="bicycle" /> */}
            <a href="">Tour:SaPa-Hà Nội-Quảng Ninh</a>
          </li>
          <li>
            {/* <Icon name="bicycle" /> */}
            <a href="">Tour:Đà Nẵng-Nha Trang</a>{" "}
          </li>
        </ul>
      </div>
      <div className="footer-content item5">
        <h3>Follow Us</h3>
        <a href="https://www.facebook.com/">
          {" "}
          <Button circular color="facebook" icon="facebook" />
          <a href=""><Button circular color='twitter' icon='twitter' /></a>
          <a href=""><Button circular color='youtube' icon='youtube' /></a>
          <a href=""> <Button circular color='instagram' icon='instagram' /></a>

        </a>
      </div>
    </div>
  );
}
export default Footer;