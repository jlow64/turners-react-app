import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/homepageStyle.scss';

function Homepage() {
  return (
    <div class="container-center-horizontal">
      <div className="final-homepage-v2-2 screen">
        <div className="flex-col-1">
          <div className="flex-col-3">
            <div className="flex-col-2">
              <div className="flex-row">
                <div className="logo valign-text-middle lato-bold-cape-cod-24px">LOGO</div>
                <div className="find-a-car-1 valign-text-middle mulish-semi-bold-cape-cod-16px">FIND A CAR</div>
                <div className="sell-your-car-1 valign-text-middle mulish-semi-bold-cape-cod-16px">SELL YOUR CAR</div>
                <div className="finance valign-text-middle mulish-semi-bold-cape-cod-16px">FINANCE</div>
                <div className="insurance-1 valign-text-middle mulish-semi-bold-cape-cod-16px">INSURANCE</div>
              </div>
              <div className="overlap-group3">
                <div className="group-31">
                  <div className="overlap-group13-5">
                    <div className="text-1 valign-text-middle mulish-semi-bold-white-18px">
                      SERVICES &amp; INFORMATION
                    </div>
                    <div className="auctions-events valign-text-middle mulish-semi-bold-white-18px">
                      AUCTIONS &amp; EVENTS
                    </div>
                  </div>
                </div>
                <div className="group-81">
                  <div className="localphone">
                    <div className="overlap-group14">
                      <img
                        className="vector-7"
                        src="https://anima-uploads.s3.amazonaws.com/projects/60bc802e0d81379b238f1ca0/img/vector@2x.png"
                      />
                      <img
                        className="vector-10"
                        src="https://anima-uploads.s3.amazonaws.com/projects/60bc802e0d81379b238f1ca0/img/vector-6@2x.svg"
                      />
                    </div>
                  </div>
                  <div className="phone valign-text-middle mulish-semi-bold-white-16px">0800 887 637</div>
                  <div className="person">
                    <div className="overlap-group13-6">
                      <img
                        className="vector-9"
                        src="https://anima-uploads.s3.amazonaws.com/projects/60bc802e0d81379b238f1ca0/img/vector@2x.png"
                      />
                    </div>
                  </div>
                  <div className="login-register valign-text-middle mulish-semi-bold-white-16px">LOGIN / REGISTER</div>
                </div>
              </div>
              <div className="overlap-group10">
                <Image />
              </div>
              <h1 className="title valign-text-middle lato-bold-cape-cod-30px">WELCOME TO TURNERS</h1>
            </div>
            <div className="flex-row-5">
              <div className="overlap-group5">
                <Rectangle10 />
                <div className="find-a-car valign-text-middle lato-bold-cape-cod-24px">FIND A CAR</div>
                <div className="ellipse-"></div>
                <div className="image-3">
                  <div className="overlap-group13-4">
                    <img
                      className="vector-5"
                      src="https://anima-uploads.s3.amazonaws.com/projects/60bc802e0d81379b238f1ca0/img/vector@2x.png"
                    />
                    <img
                      className="vector-6"
                      src="https://anima-uploads.s3.amazonaws.com/projects/60bc802e0d81379b238f1ca0/img/vector-8@2x.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="overlap-group">
                <Rectangle10 />
                <div className="sell-your-car valign-text-middle lato-bold-cape-cod-24px">SELL YOUR CAR</div>
                <div className="ellipse-"></div>
                <div className="image-3">
                  <div className="overlap-group13-4">
                    <img
                      className="vector-5"
                      src="https://anima-uploads.s3.amazonaws.com/projects/60bc802e0d81379b238f1ca0/img/vector@2x.png"
                    />
                    <img
                      className="vector-6"
                      src="https://anima-uploads.s3.amazonaws.com/projects/60bc802e0d81379b238f1ca0/img/vector-8@2x.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="overlap-group">
                <Rectangle10 />
                <div className="finance-1 valign-text-middle lato-bold-cape-cod-24px">FINANCE</div>
                <div className="ellipse-"></div>
                <div className="image-3">
                  <div className="overlap-group13-4">
                    <img
                      className="vector-5"
                      src="https://anima-uploads.s3.amazonaws.com/projects/60bc802e0d81379b238f1ca0/img/vector@2x.png"
                    />
                    <img
                      className="vector-6"
                      src="https://anima-uploads.s3.amazonaws.com/projects/60bc802e0d81379b238f1ca0/img/vector-8@2x.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="overlap-group">
                <Link to="/insurance">
                <Rectangle10 />
                <div className="insurance valign-text-middle lato-bold-cape-cod-24px">INSURANCE</div>
                <div className="ellipse-"></div>
                <div className="image-3">
                  <div className="overlap-group13-4">
                    <img
                      className="vector-5"
                      src="https://anima-uploads.s3.amazonaws.com/projects/60bc802e0d81379b238f1ca0/img/vector@2x.png"
                    />
                    <img
                      className="vector-6"
                      src="https://anima-uploads.s3.amazonaws.com/projects/60bc802e0d81379b238f1ca0/img/vector-8@2x.svg"
                    />
                  </div>
                </div>
                </Link>
              </div>
            </div>
            <div className="flex-row-2">
              <Group82
                nzsMostTrusted="NZ’S MOST TRUSTED"
                spanText={
                  <>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit donec consectetur semper nunc in molestie.
                    <br />
                  </>
                }
                spanText2="Read more"
              />
              <Group82
                nzsMostTrusted="CUSTOMER REVIEWS"
                spanText={
                  <>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit donec consectetur semper nunc in molestie.
                    <br />
                  </>
                }
                spanText2="Read more"
                className="group-83"
              />
            </div>
            <div className="text-4 valign-text-middle lato-bold-cape-cod-30px">LOOKING FOR SOMETHING ELSE?</div>
          </div>
          <div className="flex-row-1">
            <Group39 />
            <Group39 className="group-" />
            <Group39 className="group-" />
            <Group39 className="group-" />
            <Group39 className="group-" />
            <Group39 className="group-" />
            <Group39 className="group-" />
          </div>
          <div className="flex-row-3">
            <div className="overlap-group11">
              <div className="appraisal valign-text-middle lato-bold-cape-cod-25px">APPRAISAL</div>
            </div>
            <div className="overlap-group-1">
              <div className="place valign-text-middle lato-bold-cape-cod-25px">CONTACT</div>
            </div>
            <div className="overlap-group-1">
              <div className="finance-2 valign-text-middle lato-bold-cape-cod-25px">FINANCE</div>
            </div>
            <div className="overlap-group-1">
              <div className="faqs valign-text-middle lato-bold-cape-cod-25px">FAQS</div>
            </div>
          </div>
          <div className="surname-1 valign-text-middle lato-bold-cape-cod-25px">GOOD OIL BLOG</div>
        </div>
        <div className="flex-row-4">
          <div className="overlap-group7">
            <Rectangle10 className="rectangle-18" />
            <img
              className="vector-8"
              src="https://anima-uploads.s3.amazonaws.com/projects/60bc802e0d81379b238f1ca0/img/vector@2x.svg"
            />
            <p className="text-5 lato-light-black-14px">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit donec consectetur semper nunc in molestie.
                <br />
              </span>
              <span className="span-2 lato-medium-black-14px">Read more</span>
            </p>
            <Group84 />
          </div>
          <Group84 className="group-85" />
          <Group84 className="group-8" />
          <Group84 className="group-8" />
        </div>
        <div className="overlap-group4">
          <div className="contents valign-text-middle lato-bold-cape-cod-30px">CONTENTS</div>
        </div>
        <div className="overlap-group1">
          <div className="email-alerts-1 valign-text-middle">EMAIL ALERTS</div>
          <Toolbar
            x2021Turners="© 2021 Turners"
            surname="BRANCH DETAILS"
            newsletter="NEWSLETTER"
            emailAlerts="EMAIL ALERTS"
            facebook="FACEBOOK"
            instagram="INSTAGRAM"
          />
        </div>
      </div>
    </div>
  );
}

export default Homepage;

function Image(props) {
  const { className } = props;

  return (
    <div className={`image ${className || ""}`}>
      <div className="overlap-group13">
        <img
          className="vector"
          src="https://anima-uploads.s3.amazonaws.com/projects/60bc802e0d81379b238f1ca0/img/vector@2x.png"
        />
        <img
          className="vector-1"
          src="https://anima-uploads.s3.amazonaws.com/projects/60bc802e0d81379b238f1ca0/img/vector-2@2x.svg"
        />
      </div>
    </div>
  );
}


function Rectangle10(props) {
  const { className } = props;

  return <div className={`rectangle-2 smart-layers-pointers ${className || ""}`}></div>;
}


function Group82(props) {
  const { nzsMostTrusted, spanText, spanText2, className } = props;

  return (
    <div className={`group-82 ${className || ""}`}>
      <div className="overlap-group15">
        <div className="overlap-group13-1">
          <Image className="image-1" />
        </div>
        <div className="flex-col">
          <div className="nzs-most-trusted valign-text-middle lato-bold-cape-cod-25px">{nzsMostTrusted}</div>
          <div className="default">
            <p className="text-2 lato-light-black-14px">
              <span>{spanText}</span>
              <span className="span lato-medium-black-14px">{spanText2}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}


function Group39(props) {
  const { className } = props;

  return (
    <div className={`group-39 ${className || ""}`}>
      <div className="image-2">
        <div className="overlap-group13-2">
          <img
            className="vector-3"
            src="https://anima-uploads.s3.amazonaws.com/projects/60bc802e0d81379b238f1ca0/img/vector@2x.png"
          />
          <img
            className="vector-2"
            src="https://anima-uploads.s3.amazonaws.com/projects/60bc802e0d81379b238f1ca0/img/vector-20@2x.svg"
          />
        </div>
      </div>
    </div>
  );
}


function Group84(props) {
  const { className } = props;

  return (
    <div className={`group-84 ${className || ""}`}>
      <div className="overlap-group13-3">
        <img
          className="vector-4"
          src="https://anima-uploads.s3.amazonaws.com/projects/60bc802e0d81379b238f1ca0/img/vector@2x.svg"
        />
      </div>
      <p className="text-6 lato-light-black-14px">
        <span className="span-1 lato-light-black-14px">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit donec consectetur semper nunc in molestie.
          <br />
        </span>
        <span className="span-1 lato-medium-black-14px">Read more</span>
      </p>
    </div>
  );
}


function Toolbar(props) {
  const { x2021Turners, surname, newsletter, emailAlerts, facebook, instagram } = props;

  return (
    <div className="toolbar">
      <div className="x2021-turners valign-text-middle">{x2021Turners}</div>
      <div className="surname valign-text-middle mulish-semi-bold-white-18px">{surname}</div>
      <div className="newsletter valign-text-middle mulish-semi-bold-white-18px">{newsletter}</div>
      <div className="email-alerts valign-text-middle mulish-semi-bold-white-18px">{emailAlerts}</div>
      <div className="facebook valign-text-middle mulish-semi-bold-white-18px">{facebook}</div>
      <div className="instagram valign-text-middle mulish-semi-bold-white-18px">{instagram}</div>
    </div>
  );
}

