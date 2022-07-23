import React from "react";
import "./Home.css";
import Image1 from "../../assets/image/tamil-book1.jpg";
import Image2 from "../../assets/image/tamil-book2.jpg";
import Image3 from "../../assets/image/tamil-book3.jpg";
import Image4 from "../../assets/image/tamil-book4.jpg";
import Image5 from "../../assets/image/english-book1.jpg";
import Image6 from "../../assets/image/english-book2.jpg";
import Image7 from "../../assets/image/english-book3.jpg";
import Image8 from "../../assets/image/english-book4.jpg";
import Image9 from "../../assets/image/coding-book1.jpg";
import Image10 from "../../assets/image/coding-book2.jpg";
import Image11 from "../../assets/image/coding-book3.jpg";
import Image12 from "../../assets/image/coding-book4.jpg";
import Image13 from "../../assets/image/business-book1.jpg";
import Image14 from "../../assets/image/business-book2.jpg";
import Image15 from "../../assets/image/business-book3.jpg";
import Image16 from "../../assets/image/business-book4.jpg";
import Image17 from "../../assets/image/lifestory-book1.jpg";
import Image18 from "../../assets/image/lifestory-book2.jpg";
import Image19 from "../../assets/image/lifestory-book3.jpg";
import Image20 from "../../assets/image/lifestory-book4.jpg";

function Home() {
  return (
    <>
      <div className="home-banner d-flex flex-column align-items-center justify-content-center text-white">
        <h1>Educate Yourself</h1>
      </div>
      <div className="container">
        <h3 className="mt-5">Tamil Books</h3>
        <div className="row mt-3">
          <div className="col-md-3">
            <div className="book-wrapper">
              <img src={Image1} alt="tamil-book" width={"100%"} />
              <button className=" btn-warning btn-lg mt-2">Borrow</button>
            </div>
          </div>
          <div className="col-md-3">
            <div className="book-wrapper">
              <img src={Image2} alt="tamil-book" width={"100%"} />
              <button className=" btn-warning btn-lg mt-2">Borrow</button>
            </div>
          </div>
          <div className="col-md-3">
            <div className="book-wrapper">
              <img src={Image3} alt="tamil-book" width={"100%"} />
              <button className=" btn-warning btn-lg mt-2">Borrow</button>
            </div>
          </div>
          <div className="col-md-3">
            <div className="book-wrapper">
              <img src={Image4} alt="tamil-book" width={"100%"} />
              <button className=" btn-warning btn-lg mt-2">Borrow</button>
            </div>
          </div>
        </div>
        <hr />
        <h3 className="mt-5 ">English Books</h3>
        <div className="row mt-3">
          <div className="col-md-3">
            <div className="book-wrapper">
              <img src={Image5} alt="tamil-book" width={"100%"} />
              <button className=" btn-warning btn-lg mt-2">Borrow</button>
            </div>
          </div>
          <div className="col-md-3">
            <div className="book-wrapper">
              <img src={Image6} alt="tamil-book" width={"100%"} />
              <button className=" btn-warning btn-lg mt-2">Borrow</button>
            </div>
          </div>
          <div className="col-md-3">
            <div className="book-wrapper">
              <img src={Image7} alt="tamil-book" width={"100%"} />
              <button className=" btn-warning btn-lg mt-2">Borrow</button>
            </div>
          </div>
          <div className="col-md-3">
            <div className="book-wrapper">
              <img src={Image8} alt="tamil-book" width={"100%"} />
              <button className=" btn-warning btn-lg mt-2">Borrow</button>
            </div>
          </div>
        </div>
        <hr />
        <h3 className="mt-5 ">Coding Books</h3>
        <div className="row mt-3">
          <div className="col-md-3">
            <div className="book-wrapper">
              <img src={Image9} alt="tamil-book" width={"100%"} />
              <button className=" btn-warning btn-lg mt-2">Borrow</button>
            </div>
          </div>
          <div className="col-md-3">
            <div className="book-wrapper">
              <img src={Image10} alt="tamil-book" width={"100%"} />
              <button className=" btn-warning btn-lg mt-2">Borrow</button>
            </div>
          </div>
          <div className="col-md-3">
            <div className="book-wrapper">
              <img src={Image11} alt="tamil-book" width={"100%"} />
              <button className=" btn-warning btn-lg mt-2">Borrow</button>
            </div>
          </div>
          <div className="col-md-3">
            <div className="book-wrapper">
              <img src={Image12} alt="tamil-book" width={"100%"} />
              <button className=" btn-warning btn-lg mt-2">Borrow</button>
            </div>
          </div>
        </div>
        <hr />
        <h3 className="mt-5 ">Business Books</h3>
        <div className="row mt-3">
          <div className="col-md-3">
            <div className="book-wrapper">
              <img src={Image13} alt="tamil-book" width={"100%"} />
              <button className=" btn-warning btn-lg mt-2">Borrow</button>
            </div>
          </div>
          <div className="col-md-3">
            <div className="book-wrapper">
              <img src={Image14} alt="tamil-book" width={"100%"} />
              <button className=" btn-warning btn-lg mt-2">Borrow</button>
            </div>
          </div>
          <div className="col-md-3">
            <div className="book-wrapper">
              <img src={Image15} alt="tamil-book" width={"100%"} />
              <button className=" btn-warning btn-lg mt-2">Borrow</button>
            </div>
          </div>
          <div className="col-md-3">
            <div className="book-wrapper">
              <img src={Image16} alt="tamil-book" width={"100%"} />
              <button className=" btn-warning btn-lg mt-2">Borrow</button>
            </div>
          </div>
        </div>
        <hr />
        <h3 className="mt-5 ">Life Story Books</h3>
        <div className="row mt-3">
          <div className="col-md-3">
            <div className="book-wrapper">
              <img src={Image17} alt="tamil-book" width={"100%"} />
              <button className=" btn-warning btn-lg mt-2">Borrow</button>
            </div>
          </div>
          <div className="col-md-3">
            <div className="book-wrapper">
              <img src={Image18} alt="tamil-book" width={"100%"} />
              <button className=" btn-warning btn-lg mt-2">Borrow</button>
            </div>
          </div>
          <div className="col-md-3">
            <div className="book-wrapper">
              <img src={Image19} alt="tamil-book" width={"100%"} />
              <button className=" btn-warning btn-lg mt-2">Borrow</button>
            </div>
          </div>
          <div className="col-md-3">
            <div className="book-wrapper">
              <img src={Image20} alt="tamil-book" width={"100%"} />
              <button className=" btn-warning btn-lg mt-2">Borrow</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
