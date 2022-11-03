import React from 'react';
import { BsFillStarFill, BsStar } from 'react-icons/bs';
import { BiRupee } from 'react-icons/bi';

const DoctorcoursesVideo = () => {
  return (
    <div className="container-fluid my-5">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>Blogs From Doctor</h1>
          </div>
          <div className="col-12">
            <p>First time in India in animated story format</p>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col col-md-5 my-3">
            <div className="card">
              <img
                src="https://quer.vercel.app/static/media/docblog01.4a968d78b3e8064b5e4e.png"
                class="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <div className="d-flex">
                  <span>
                    <BsFillStarFill color="#FEB422" />
                  </span>
                  <p className="p-1">4.2</p>
                </div>
                <div className="card-title">
                  <h5 className="fw-bolder text-truncate">
                    Boost your Testosterone and Sex Drive Naturally
                  </h5>
                </div>
                <p>
                  Low Testosterone Causes and Ways to Increase Testosterone
                  Levels...
                </p>
                <div className="d-flex justify-content-between">
                  <p>By Henry King</p>
                  <p>124 read this</p>
                </div>
                <hr />
                <div className="d-flex justify-content-between">
                  <a href="#">
                    <p>
                      Read More<span>{'>'}</span>
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col col-md-5 my-3">
            <div className="card">
              <img
                src="https://quer.vercel.app/static/media/rdocart01.570e9cef82b47007c15e.png"
                class="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <div className="d-flex">
                  <span>
                    <BsFillStarFill color="#FEB422" />
                  </span>
                  <p className="p-1">4.2</p>
                </div>
                <div className="card-title text-truncate">
                  <h5 className="fw-bolder">Limit Your Alcohol Consumption</h5>
                </div>
                <p>
                  Oriental Sexual Knowledge: The importance of Love and its
                  interrelati..
                </p>
                <div className="d-flex justify-content-between">
                  <p>By Henry King</p>
                  <p>124 read this</p>
                </div>
                <hr />
                <div className="d-flex justify-content-between">
                  <a href="#">
                    <p>
                      Read More<span>{'>'}</span>
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorcoursesVideo;
