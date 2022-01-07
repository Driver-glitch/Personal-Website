import React from 'react';
import './HomeCards.css';
import { Link } from "react-router-dom";

function Cards() {
  return (
    <div>
      <h1>Explore </h1>
      <section className="wrapper">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="card text-white card-has-bg click-col">
                <div className="card-img-overlay d-flex flex-column">
                  <div className="card-body">
                    <h4 className="card-title mt-0 ">
                      <Link
                        to="/certifications"
                        className="text-white-50"
                        style={{ textDecoration: "none" }}
                      >
                        Certifications
                        <img
                          className="card-img"
                          src="/images/img-6.jpg"
                          alt="G"
                        />
                      </Link>
                    </h4>

                    <h4> Some of His Certifications</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card text-white card-has-bg click-col">
                <div className="card-img-overlay d-flex flex-column">
                  <div className="card-body">
                    <h4 className="card-title mt-0 ">
                      <Link
                        to="/AboutMe"
                        className="text-white-50"
                        style={{ textDecoration: "none" }}
                      >
                        About Me
                        <img
                          className="card-img"
                          src="/images/img-1.jpg"
                          alt="G"
                        />
                      </Link>
                    </h4>

                    <h4> A Little About Daniel</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card text-white card-has-bg click-col">
                <div className="card-img-overlay d-flex flex-column">
                  <div className="card-body">
                    <h4 className="card-title mt-0 ">
                      <Link
                        to="/portfolio"
                        className="text-white-50"
                        style={{ textDecoration: "none" }}
                      >
                        Portfolio
                        <img
                          className="card-img"
                          src="/images/img-7.jpg"
                          alt="G"
                        />
                      </Link>
                    </h4>

                    <h4> Explore Daniels Projects</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Cards;
