import React from 'react'
import "pure-react-carousel/dist/react-carousel.es.css";
import "../Partners/Partner.css"

const Partner = () => {
  return (
    <div className="main">
      <h2 className=" text-center">
        PARTNER WITH US BY SUBSCRIBING INTO OUR LICENSES
      </h2>
      <p className="text-center">
        Requirement for onboarding are: PC/Laptop with minimum of 4gig
        Ram,500HDD| Internet Connectivity| UPS| Receipt Printer.| Android
        Phone(Stocker).{" "}
      </p>
      <div className="subscription d-flex row sm-column">
        <div className="basic col-3 sm-12 text-center" title="give us a trial">
          <h2>Basic License Feature</h2>
          <ul>
            <li>Accept Inventory in Excel Format</li>
            <li>Automated Inventory Deduction</li>
            <li>Offline and Online Enabled</li>
            <li>A cloud based synchronized Account</li>
            <li>
              Can work with any hardware device <br />
              with PC on(Receipt, Label, Printers e.t.c)
            </li>
            <li>Support 1000 SKUs</li>
            <li>Simple Sales Interface</li>
            <li>Generate Receipt After Sale is made</li>
            <li>Detailed report available</li>
            <li>Expense Management...</li>
            <br />
            <h3>minimum of ₦9000</h3>
            <p>
              price varies depending on number of store and connected devices
            </p>
          </ul>
        </div>
        <div
          className="classic col-3 sm-12 text-center"
          title="enjoy amazing benefit"
        >
          <h2>Classic License Feature</h2>
          <ul>
            <li>All basic license features</li>
            <li>A cloud based synchronized Account</li>
            <li>Supports Product Variants</li>
            <li>Support Services</li>
            <li>Support Raw Material Management</li>
            <li>Supplier and Vendoor Management</li>
            <li>Flexible for any business</li>
            <li>Virtual Store/Warehouse Management</li>
            <li>Store to Store transfer system</li>
            <li>Support 2000/2500 SKU</li>
            <li>Wallet Integration,coupons, giftcard system</li>
            <li>Account Management</li>
            <li>And so much more</li>
            <br />
            <h3>minimum of ₦12000</h3>
            <p>
              price varies depending on number of store and connected devices
            </p>
          </ul>
        </div>
        <div className="cloud col-3 sm-12 text-center" title="subscribe now">
          <h2>Cloud Features</h2>
          <ul>
            <li>End of day report</li>
            <li>Email Receipt</li>
            <li>Online Dashboard(Sales and orders record)</li>
            <li>Data Backup/Fast Synchronization system</li>
            <li>E-commerce site integration</li>
            <li>Audit Management</li>
            <li>Data Import and Export</li>
          </ul>
        </div>
      </div>
      <br />
      <h2 className="text-center">A SIMPLE SETUP DEMO </h2>

      <center>
        <iframe
          width="70%"
          height="400"
          src="https://www.youtube.com/embed/6J6jjIMQSAM?autoplay=0"
          title="streharmonyP.O.S"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </center>
      <center>
        {""}
        <em>
          request more demo via<a href="mailto:info@storeharmony.com">info@storeharmony.com</a>
        </em>
      </center>
      <br />
      <h1 className="text-center">CONTACT US</h1>
      <div />
      <center>
        <div className="details">
          <div className="phone d-flex row">
            <div>
              <img
                src={
                  "https://res.cloudinary.com/dxrxekidt/image/upload/v1693938771/Ringer_Volume_ebmoxc.png"
                }
                alt="phone call"
              />
            </div>
            <div>
              <a href="tel:+2348143188076">
                <h6>Call Us</h6>
              </a>
            </div>
          </div>

          <div className="mail d-flex row text-center">
            <div>
              <img
                src={
                  "https://res.cloudinary.com/dxrxekidt/image/upload/v1693938771/Email_ztyadt.png"
                }
                alt="location"
              />{""}
            </div>
            <div>
              <a href="mailto:sales@storeharmony.com" className="lgft">
                <h6>Email Us</h6>
              </a>
              <a href="mailto:sales@storeharmony.com" className="smft">
                <h6>Email</h6>
              </a>
            </div>
          </div>
        </div>
      </center>
    </div>
  );
}

export default Partner