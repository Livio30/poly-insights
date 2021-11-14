import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const ToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="bg-dark text-secondary px-4 py-5 text-center">
        <div className="py-5">
          <h1 className="display-6 fw-bold text-white">
            Why you should choose us?
          </h1>
          <div className="col-lg-6 mx-auto">
            <p className="fs-5 mb-4">
            We provide you information which is non-judgemental, based on the facts which will make you clear about your decision to vote for the better future of state of Goa.We take use of the articles,news and interviews posted by the writers on the internet.
We assure you that our page does not provide hate against other parties.
              <br></br>
              Website designed by: Adnan   Livio   Chaitanya   Priya
            </p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <button
                type="button"
                className="calbtn btn-md px-4 me-sm-3 fw-bold"
              >
                <Link className="Link" to="/">
                  Home
                </Link>
              </button>
              <button
                type="button"
                className="calbtn btn-md px-4"
                onClick={() => ToTop()}
              >
                Take me to the top!
              </button>
            </div>
          </div>
        </div>
        <div className="simple d-flex justify-content-center align-items-center">
          <p>
            <font>
              <font>© 2019--2021 Company, Inc. </font>
              <font>· </font>
            </font>
            <a href="https://www.websitepolicies.com/blog/terms-conditions-vs-privacy-policy">
              <font>
                <font>Privacy</font>
              </font>
            </a>
            <font>
              <font> · </font>
            </font>
            <a href="https://www.websitepolicies.com/blog/terms-conditions-vs-privacy-policy">
              <font>
                <font>Terms</font>
              </font>
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
