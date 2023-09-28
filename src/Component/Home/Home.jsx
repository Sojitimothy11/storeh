import React from "react";

import "../Home/home.css";

const Home = () => {
  return (
    <div className="container-fluid">
      <div className="top">
        <div id="carouselExampleDark" className="carousel carousel-dark slide">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
              <img
                src="https://res.cloudinary.com/dxrxekidt/image/upload/v1694081567/central-embassy-498560_ftot1y.jpg"
                className="d-block w-100 height:"
                height={400}
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h1>Store Harmony</h1>
                <h2>Manages your sales and inventories.</h2>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img
                src="https://res.cloudinary.com/dxrxekidt/image/upload/v1694081639/beverages-3105631_nokxac.jpg"
                className="d-block w-100"
                height={400}
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h1>Harmonize your Business</h1>
                <h2>
                  Store Harmony keeps track of the business success and manages
                  your administration
                </h2>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://res.cloudinary.com/dxrxekidt/image/upload/v1694081585/bakery-1868925_tfr2kn.jpg"
                height={400}
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block" />
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="main">
        <div className=" stocker">
          <div className="word">
            <h1>StoreHarmony Stocker App</h1>
            <p>
              We imagine a boundary-less retail where you and your sales team
              invoice customers from anywhere whether you intend to sell on
              Whatsapp, online or in person, we just made you more remote with
              the stocker app.
              <br />
              Go Mobile Now. Enable Your Team Manage Sales Individually. Connect
              your team to same account where various roles can supervise, track
              orders, audit inventory and create invoices
              <br />
              <p />
              <strong>Easy delivery service integrations</strong>
              <br />
              Do you want to plug-in a logistics company, using logistics API of
              popular logistics companies, storeharmony can automate ride
              hailing or notify of shipment from your store point to a customer
              address
            </p>
            <img
              src={
                "https://res.cloudinary.com/dxrxekidt/image/upload/v1695103832/png-transparent-google-play-store-logo-google-play-app-store-android-wallets-text-label-logo-thumbnail-removebg-preview-removebg-preview_devygn.png"
              }
              width="120px"
              className="google"
              alt=""
            />
          </div>
          <div className="stockimage">
            <center>
              <img
                src={
                  "https://res.cloudinary.com/dxrxekidt/image/upload/v1695102154/Snapshot_230919063323-removebg-preview_efytrk.png"
                }
                alt="..."
              />
              <br />
              <a href="https://play.google.com/store/apps/details?id=com.dabarobjects.storeharmony.stocker&hl=en">
                <button className="btndo btn btn-success">Download</button>
                {""}
              </a>
            </center>
          </div>
        </div>
        <div className="desktop">
          <div className="dimage">
            <center>
              {" "}
              <img
                src={
                  "https://res.cloudinary.com/dxrxekidt/image/upload/v1695102153/Snapshot_230919063512-removebg-preview_cxaixe.png"
                }
                width="550"
                height="400"
                alt="..."
              />
            </center>
          </div>

          <div className="dword">
            <h1>StoreHarmony Software</h1>
            <p>
              Store harmony provides the most comprehensive and easily
              accessible offline based inventory management enterprise software
              you can find to run your warehouse and physical store chains. It
              provides a well integrated accountability system that lets you
              automatically handle some of the most challenging inventory
              control tasks in a very simple way that is not burdensome to your
              operations team who might simple and low tech basic computing
              skillsets. From purchase Invoices, to finishing stocks, to reorder
              management to expiry management, Store Harmony is able to manage
              your inventory in a way that helps you also enforce enterprise
              level complaiance across board.
            </p>
          </div>
        </div>
        <hr />{" "}
      </div>
      <h1 className="text-center">Download Software Now</h1> <br />
      <div className="download">
        <div className="card1 col-4 sm-12 card">
          <strong>
            <h4>Get Store Harmony Desktop</h4>
          </strong>
          <p>
            Basic Requirements: Windows 10 PC, Min. RAM: 4GB, HDD 500GB and
            Internet Access for activation and remote admin functions. <br />
            Server Requirements: Windows 10 PC, Min. RAM: 8GB, HDD 1TB,
            Networking Switch and Reliable Wired Network
          </p>
          <a href="https://storeharmony.com/download/install-harmony-3i.msi">
            <button className="btndo  btn btn-success">Download</button>
          </a>
        </div>
        <div className="card2 col-4 sm-12 card">
          <strong>
            <h4>Get Store Harmony For Windows 7</h4>
          </strong>
          <p>
            Basic Requirements: Windows 7 PC, Min. RAM: 4GB, HDD 500GB and
            Internet Access for activation and remote admin functions
          </p>
          <a href="https://storeharmony.com/download/install-harmony-3-win7-installer.msi">
            <button className="btndo  btn btn-success">Download</button>
          </a>
        </div>
        <div className="card3 col-4 sm-12 card">
          <strong>
            <h4>Get Store Harmony For MAC</h4>
          </strong>
          <p>
            Basic Requirements: MAC OS, Min. RAM: 4GB, HDD 500GB and Internet
            Access for activation and remote admin functions. Note: POS for
            Cashier functions are not supported on MAC. Only provides support
            for inventory management
          </p>
          <a href="https://storeharmony.com/download/storeharmony1.0.dmg">
            <button className="btndo btn btn-success">Download</button>
          </a>
        </div>
      </div>
      
    </div>
  );
};

export default Home;
