import React from "react";
import Image from "../Image";
import Rectangle10 from "../Rectangle10";
import Image2 from "../Image2";
import Group82 from "../Group82";
import Group39 from "../Group39";
import Group84 from "../Group84";
import Toolbar from "../Toolbar";
import "./Homepage.css";

function Homepage(props) {
  const {
    logo,
    findACar,
    sellYourCar,
    finance,
    insurance,
    text1,
    auctionsEvents,
    vector2,
    phone,
    overlapGroup13,
    vector3,
    loginRegister,
    title,
    findACar2,
    sellYourCar2,
    finance2,
    insurance2,
    text4,
    appraisal,
    place,
    finance3,
    faqs,
    surname,
    vector4,
    spanText,
    spanText2,
    contents,
    emailAlerts,
    image2Props,
    image22Props,
    image23Props,
    image24Props,
    group82Props,
    group822Props,
    toolbarProps,
  } = props;

  return (
    <div class="container-center-horizontal">
      <div className="final-homepage-v2-2 screen">
        <div className="flex-col">
          <div className="flex-col-2">
            <div className="flex-col-1">
              <div className="flex-row-5">
                <div className="logo valign-text-middle lato-bold-cape-cod-24px">{logo}</div>
                <div className="find-a-car-1 valign-text-middle mulish-semi-bold-cape-cod-16px">{findACar}</div>
                <div className="sell-your-car-1 valign-text-middle mulish-semi-bold-cape-cod-16px">{sellYourCar}</div>
                <div className="finance valign-text-middle mulish-semi-bold-cape-cod-16px">{finance}</div>
                <div className="insurance-1 valign-text-middle mulish-semi-bold-cape-cod-16px">{insurance}</div>
              </div>
              <div className="overlap-group3">
                <div className="group-31">
                  <div className="overlap-group13-1">
                    <div className="text-1 valign-text-middle mulish-semi-bold-white-18px">{text1}</div>
                    <div className="auctions-events valign-text-middle mulish-semi-bold-white-18px">
                      {auctionsEvents}
                    </div>
                  </div>
                </div>
                <div className="group-81">
                  <div className="localphone">
                    <div className="overlap-group14">
                      <img
                        className="vector-1"
                        src="https://anima-uploads.s3.amazonaws.com/projects/60bc802e0d81379b238f1ca0/img/vector@2x.png"
                      />
                      <img className="vector" src={vector2} />
                    </div>
                  </div>
                  <div className="phone valign-text-middle mulish-semi-bold-white-16px">{phone}</div>
                  <div className="person">
                    <div className="overlap-group13" style={{ backgroundImage: `url(${overlapGroup13})` }}>
                      <img className="vector-3" src={vector3} />
                    </div>
                  </div>
                  <div className="login-register valign-text-middle mulish-semi-bold-white-16px">{loginRegister}</div>
                </div>
              </div>
              <div className="overlap-group10">
                <Image />
              </div>
              <h1 className="title valign-text-middle lato-bold-cape-cod-30px">{title}</h1>
            </div>
            <div className="flex-row-3">
              <div className="overlap-group5">
                <Rectangle10 />
                <div className="find-a-car valign-text-middle lato-bold-cape-cod-24px">{findACar2}</div>
                <div className="ellipse-"></div>
                <Image2 vector2={image2Props.vector2} />
              </div>
              <div className="overlap-group">
                <Rectangle10 />
                <div className="sell-your-car valign-text-middle lato-bold-cape-cod-24px">{sellYourCar2}</div>
                <div className="ellipse-"></div>
                <Image2 vector2={image22Props.vector2} />
              </div>
              <div className="overlap-group">
                <Rectangle10 />
                <div className="finance-1 valign-text-middle lato-bold-cape-cod-24px">{finance2}</div>
                <div className="ellipse-"></div>
                <Image2 vector2={image23Props.vector2} />
              </div>
              <div className="overlap-group">
                <div className="rectangle-10 smart-layers-pointers"></div>
                <div className="insurance valign-text-middle lato-bold-cape-cod-24px">{insurance2}</div>
                <div className="ellipse-"></div>
                <Image2 vector2={image24Props.vector2} />
              </div>
            </div>
            <div className="flex-row-1">
              <Group82
                nzsMostTrusted={group82Props.nzsMostTrusted}
                spanText={group82Props.spanText}
                spanText2={group82Props.spanText2}
              />
              <Group82
                nzsMostTrusted={group822Props.nzsMostTrusted}
                spanText={group822Props.spanText}
                spanText2={group822Props.spanText2}
                className="group-83"
              />
            </div>
            <div className="text-4 valign-text-middle lato-bold-cape-cod-30px">{text4}</div>
          </div>
          <div className="flex-row-4">
            <Group39 />
            <Group39 className="group-" />
            <Group39 className="group-" />
            <Group39 className="group-" />
            <Group39 className="group-" />
            <Group39 className="group-" />
            <Group39 className="group-" />
          </div>
          <div className="flex-row-2">
            <div className="overlap-group11">
              <div className="appraisal valign-text-middle lato-bold-cape-cod-25px">{appraisal}</div>
            </div>
            <div className="overlap-group-1">
              <div className="place valign-text-middle lato-bold-cape-cod-25px">{place}</div>
            </div>
            <div className="overlap-group-1">
              <div className="finance-2 valign-text-middle lato-bold-cape-cod-25px">{finance3}</div>
            </div>
            <div className="overlap-group-1">
              <div className="faqs valign-text-middle lato-bold-cape-cod-25px">{faqs}</div>
            </div>
          </div>
          <div className="surname valign-text-middle lato-bold-cape-cod-25px">{surname}</div>
        </div>
        <div className="flex-row">
          <div className="overlap-group7">
            <Rectangle10 className="rectangle-18" />
            <img className="vector-2" src={vector4} />
            <p className="text-5 lato-light-black-14px">
              <span>{spanText}</span>
              <span className="span lato-medium-black-14px">{spanText2}</span>
            </p>
            <Group84 />
          </div>
          <Group84 className="group-85" />
          <Group84 className="group-8" />
          <Group84 className="group-8" />
        </div>
        <div className="overlap-group4">
          <div className="contents valign-text-middle lato-bold-cape-cod-30px">{contents}</div>
        </div>
        <div className="overlap-group1">
          <div className="email-alerts valign-text-middle">{emailAlerts}</div>
          <Toolbar
            x2021Turners={toolbarProps.x2021Turners}
            surname={toolbarProps.surname}
            newsletter={toolbarProps.newsletter}
            emailAlerts={toolbarProps.emailAlerts}
            facebook={toolbarProps.facebook}
            instagram={toolbarProps.instagram}
          />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
