import React from "react";
import Links from "../Links";
import ImageInsurance from "../ImageInsurance";
import Group89 from "../Group89";
import Group92 from "../Group92";
import Toolbar from "../Toolbar";
import "./Insurance.css";

function Insurance(props) {
  const {
    overlapGroup1,
    logo,
    text1,
    auctionsEvents,
    vector2,
    vector3,
    phone,
    overlapGroup9,
    vector4,
    loginRegister,
    title,
    spanText,
    spanText2,
    getAQuote,
    moreInformation,
    text3,
    text10,
    line1,
    line7,
    line2,
    line3,
    line5,
    line4,
    line6,
    thirdParty,
    text11,
    text12,
    text13,
    text14,
    text15,
    text16,
    text17,
    text18,
    text19,
    text20,
    text21,
    text22,
    text23,
    text24,
    text25,
    damageToYourCar,
    fireDamage,
    text26,
    text27,
    vehicleRemoval,
    vector5,
    vector6,
    vector7,
    vector8,
    vector9,
    loadMore,
    rectangle33,
    popular,
    fullCover,
    text34,
    rectangle113,
    economical,
    text8,
    text9,
    getAQuote2,
    text28,
    line9,
    text29,
    vector10,
    line10,
    text30,
    vector11,
    line11,
    text31,
    vector12,
    line13,
    text32,
    vector13,
    line12,
    text33,
    vector14,
    line14,
    loadMore2,
    contents,
    emailAlerts,
    linksProps,
    group89Props,
    group892Props,
    group893Props,
    group92Props,
    group922Props,
    toolbarProps,
  } = props;

  return (
    <div class="container-center-horizontal">
      <div className="final-insurance-v2-2 screen">
        <div className="overlap-group1-insurance" style={{ backgroundImage: `url(${overlapGroup1})` }}>
          <img
            className="vector-3-insurance"
            src="https://anima-uploads.s3.amazonaws.com/projects/60bc802e0d81379b238f1ca0/img/vector-90@2x.svg"
          />
        </div>
        <div className="flex-row-2-insurance">
          <div className="logo-insurance valign-text-middle">{logo}</div>
          <Links
            findACar={linksProps.findACar}
            sellYourCar={linksProps.sellYourCar}
            finance={linksProps.finance}
            insurance={linksProps.insurance}
          />
        </div>
        <div className="overlap-group2-insurance">
          <div className="group-31-insurance">
            <div className="overlap-group9-1-insurance">
              <div className="text-1-insurance valign-text-middle mulish-semi-bold-white-18px">{text1}</div>
              <div className="auctions-events-insurance valign-text-middle mulish-semi-bold-white-18px">{auctionsEvents}</div>
            </div>
          </div>
          <div className="group-81-insurance">
            <div className="localphone-insurance">
              <div className="overlap-group10-insurance">
                <img className="vector-5-insurance" src={vector2} />
                <img className="vector-2-insurance" src={vector3} />
              </div>
            </div>
            <div className="phone-insurance valign-text-middle mulish-semi-bold-white-16px">{phone}</div>
            <div className="person-insurance">
              <div className="overlap-group9-insurance" style={{ backgroundImage: `url(${overlapGroup9})` }}>
                <img className="vector-12-insurance" src={vector4} />
              </div>
            </div>
            <div className="login-register-insurance valign-text-middle mulish-semi-bold-white-16px">{loginRegister}</div>
          </div>
        </div>
        <div className="overlap-group4-insurance">
          <ImageInsurance />
        </div>
        <h1 className="title-insurance valign-text-middle lato-bold-cape-cod-30px">{title}</h1>
        <p className="text-2-insurance valign-text-middle lato-normal-cape-cod-16px">
          <span>
            <span className="span-insurance lato-normal-cape-cod-16px">{spanText}</span>
            <span className="span-insurance lato-bold-cape-cod-16px">{spanText2}</span>
          </span>
        </p>
        <div className="group-106-insurance">
          <div className="frame-insurance">
            <div className="get-a-quote-insurance valign-text-middle lato-semi-bold-white-25px">{getAQuote}</div>
          </div>
        </div>
        <div className="more-information-insurance valign-text-middle">{moreInformation}</div>
        <div className="text-3-insurance valign-text-middle lato-bold-cape-cod-30px">{text3}</div>
        <div className="overlap-group7-insurance">
          <Group89 turnersRewards={group89Props.turnersRewards} text16={group89Props.text16} />
          <Group89 turnersRewards={group892Props.turnersRewards} text16={group892Props.text16} className="group-" />
          <Group89 turnersRewards={group893Props.turnersRewards} text16={group893Props.text16} className="group-" />
        </div>
        <div className="text-10-insurance valign-text-middle lato-bold-cape-cod-30px">{text10}</div>
        <div className="overlap-group-insurance">
          <div className="rectangle-29-insurance"></div>
          <img className="line-insurance" src={line1} />
          <img className="line-insurance" src={line7} />
          <img className="line-2-insurance" src={line2} />
          <img className="line-3-insurance" src={line3} />
          <img className="line-5-insurance" src={line5} />
          <img className="line-4-insurance" src={line4} />
          <img className="line-6-insurance" src={line6} />
          <div className="third-party-insurance valign-text-middle lato-bold-cape-cod-20px">{thirdParty}</div>
          <div className="text-11-insurance valign-text-middle lato-bold-cape-cod-20px">{text11}</div>
          <div className="text-12-insurance valign-text-middle lato-bold-cape-cod-20px">{text12}</div>
          <div className="text-13-insurance valign-text-middle lato-bold-cape-cod-20px">{text13}</div>
          <div className="text-14-insurance valign-text-middle lato-bold-cape-cod-20px">{text14}</div>
          <div className="text-15-insurance valign-text-middle lato-bold-cape-cod-20px">{text15}</div>
          <div className="text-16-insurance valign-text-middle lato-bold-cape-cod-20px">{text16}</div>
          <div className="text-17-insurance valign-text-middle lato-bold-cape-cod-20px">{text17}</div>
          <div className="text-18-insurance valign-text-middle lato-bold-cape-cod-20px">{text18}</div>
          <div className="text-19-insurance valign-text-middle lato-bold-cape-cod-20px">{text19}</div>
          <div className="text-20-insurance valign-text-middle lato-bold-cape-cod-20px">{text20}</div>
          <div className="text-21-insurance valign-text-middle lato-bold-cape-cod-20px">{text21}</div>
          <div className="text-22-insurance valign-text-middle lato-bold-cape-cod-20px">{text22}</div>
          <div className="text-23-insurance valign-text-middle lato-bold-cape-cod-20px">{text23}</div>
          <div className="text-24-insurance valign-text-middle lato-bold-cape-cod-20px">{text24}</div>
          <div className="text-25-insurance valign-text-middle lato-bold-cape-cod-20px">{text25}</div>
          <div className="damage-to-your-car-insurance valign-text-middle lato-semi-bold-cape-cod-18px">{damageToYourCar}</div>
          <div className="fire-damage-insurance valign-text-middle lato-semi-bold-cape-cod-18px">{fireDamage}</div>
          <div className="text-26-insurance valign-text-middle lato-semi-bold-cape-cod-18px">{text26}</div>
          <div className="text-27-insurance valign-text-middle lato-semi-bold-cape-cod-18px">{text27}</div>
          <div className="vehicle-removal-insurance valign-text-middle lato-semi-bold-cape-cod-18px">{vehicleRemoval}</div>
          <img className="vector-11-insurance" src={vector5} />
          <img className="vector-4-insurance" src={vector6} />
          <img className="vector-7-insurance" src={vector7} />
          <img className="vector-13-insurance" src={vector8} />
          <img className="vector-9-insurance" src={vector9} />
          <div className="load-more-insurance valign-text-middle lato-semi-bold-cape-cod-18px">{loadMore}</div>
          <Group92 src={group92Props.src} />
          <img className="rectangle-33-insurance" src={rectangle33} />
          <div className="popular-insurance lato-bold-white-14px">{popular}</div>
          <div className="full-cover-insurance valign-text-middle lato-bold-cape-cod-20px">{fullCover}</div>
          <div className="text-34-insurance valign-text-middle lato-bold-cape-cod-20px">{text34}</div>
          <img className="rectangle-113-insurance" src={rectangle113} />
          <div className="economical-insurance lato-bold-white-14px">{economical}</div>
        </div>
        <div className="text-8-insurance valign-text-middle lato-bold-cape-cod-30px">{text8}</div>
        <div className="overlap-group3-insurance">
          <div className="rectangle-33-1-insurance"></div>
          <ImageInsurance className="image-1-insurance" />
          <div className="text-9-insurance valign-text-middle lato-black-white-50px">{text9}</div>
        </div>
        <div className="group-107-insurance">
          <div className="frame-insurance">
            <div className="get-a-quote-insurance valign-text-middle lato-semi-bold-white-25px">{getAQuote2}</div>
          </div>
        </div>
        <div className="text-28-insurance valign-text-middle lato-bold-cape-cod-30px">{text28}</div>
        <img className="line-9-insurance" src={line9} />
        <div className="overlap-group5-insurance">
          <div className="text-29-insurance valign-text-middle lato-bold-cape-cod-20px">{text29}</div>
          <img className="vector-10-insurance" src={vector10} />
        </div>
        <img className="line-10-insurance" src={line10} />
        <div className="flex-row-1-insurance">
          <div className="text-30-insurance valign-text-middle lato-bold-cape-cod-20px">{text30}</div>
          <img className="vector-8-insurance" src={vector11} />
        </div>
        <img className="line-1-insurance" src={line11} />
        <div className="flex-row-1-insurance">
          <div className="text-31-insurance valign-text-middle lato-bold-cape-cod-20px">{text31}</div>
          <img className="vector-1-insurance" src={vector12} />
        </div>
        <img className="line-1-insurance" src={line13} />
        <div className="flex-row-insurance">
          <div className="text-32-insurance valign-text-middle lato-bold-cape-cod-20px">{text32}</div>
          <img className="vector-6-insurance" src={vector13} />
        </div>
        <img className="line-12-insurance" src={line12} />
        <div className="flex-row-1-insurance">
          <div className="text-33-insurance valign-text-middle lato-bold-cape-cod-20px">{text33}</div>
          <img className="vector-insurance" src={vector14} />
        </div>
        <img className="line-1-insurance" src={line14} />
        <div className="load-more-1-insurance valign-text-middle lato-semi-bold-cape-cod-18px">{loadMore2}</div>
        <Group92 src={group922Props.src} className="group-93-insurance" />
        <div className="overlap-group8-insurance">
          <div className="contents-insurance valign-text-middle lato-bold-cape-cod-30px">{contents}</div>
        </div>
        <div className="overlap-group6-insurance">
          <div className="email-alerts-insurance valign-text-middle mulish-semi-bold-white-20px">{emailAlerts}</div>
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

export default Insurance;
