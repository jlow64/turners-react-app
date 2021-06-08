import React from 'react';
import "./App.css"
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Homepage from './components/Homepage';
import Insurance from './components/Insurance';

function App() {
  return (  
    <Router>
      <Switch>
        <React.Fragment>
          <div className="App">
            <Route exact path="/">
              <Redirect to="/home"/>
            </Route>
            <Route path="/home" >
              <Homepage {...finalHomepageV22Data} />
            </Route>
            <Route path="/insurance" >
              <Insurance {...finalInsuranceV22Data} />
            </Route>
          </div>
        </React.Fragment>
      </Switch>
    </Router> 
  );
}

export default App;

const image2Data = {
  vector2: "https://anima-uploads.s3.amazonaws.com/projects/60bc802e0d81379b238f1ca0/img/vector-8@2x.svg",
};

const image22Data = {
  vector2: "https://anima-uploads.s3.amazonaws.com/projects/60bc802e0d81379b238f1ca0/img/vector-8@2x.svg",
};

const image23Data = {
  vector2: "https://anima-uploads.s3.amazonaws.com/projects/60bc802e0d81379b238f1ca0/img/vector-8@2x.svg",
};

const image24Data = {
  vector2: "https://anima-uploads.s3.amazonaws.com/projects/60bc802e0d81379b238f1ca0/img/vector-8@2x.svg",
};

const group82Data = {
  nzsMostTrusted: "NZ’S MOST TRUSTED",
  spanText: <>Lorem ipsum dolor sit amet, consectetur adipiscing elit donec consectetur semper nunc in molestie.<br /></>,
  spanText2: "Read more",
};

const group822Data = {
  nzsMostTrusted: "CUSTOMER REVIEWS",
  spanText: <>Lorem ipsum dolor sit amet, consectetur adipiscing elit donec consectetur semper nunc in molestie.<br /></>,
  spanText2: "Read more",
};

const toolbarData = {
  x2021Turners: "© 2021 Turners",
  surname: "BRANCH DETAILS",
  newsletter: "NEWSLETTER",
  emailAlerts: "EMAIL ALERTS",
  facebook: "FACEBOOK",
  instagram: "INSTAGRAM",
};

const finalHomepageV22Data = {
  logo: "LOGO",
  findACar: "FIND A CAR",
  sellYourCar: "SELL YOUR CAR",
  finance: "FINANCE",
  insurance: "INSURANCE",
  text1: "SERVICES & INFORMATION",
  auctionsEvents: "AUCTIONS & EVENTS",
  vector2: "https://anima-uploads.s3.amazonaws.com/projects/60bc802e0d81379b238f1ca0/img/vector-6@2x.svg",
  phone: "0800 887 637",
  overlapGroup13: "https://anima-uploads.s3.amazonaws.com/projects/60bc802e0d81379b238f1ca0/img/vector-3@2x.svg",
  vector3: "https://anima-uploads.s3.amazonaws.com/projects/60bc802e0d81379b238f1ca0/img/vector@2x.png",
  loginRegister: "LOGIN / REGISTER",
  title: "WELCOME TO TURNERS",
  findACar2: "FIND A CAR",
  sellYourCar2: "SELL YOUR CAR",
  finance2: "FINANCE",
  insurance2: "INSURANCE",
  text4: "LOOKING FOR SOMETHING ELSE?",
  appraisal: "APPRAISAL",
  place: "CONTACT",
  finance3: "FINANCE",
  faqs: "FAQS",
  surname: "GOOD OIL BLOG",
  vector4: "https://anima-uploads.s3.amazonaws.com/projects/60bc802e0d81379b238f1ca0/img/vector@2x.svg",
  spanText: <>Lorem ipsum dolor sit amet, consectetur adipiscing elit donec consectetur semper nunc in molestie.<br /></>,
  spanText2: "Read more",
  contents: "CONTENTS",
  emailAlerts: "EMAIL ALERTS",
  image2Props: image2Data,
  image22Props: image22Data,
  image23Props: image23Data,
  image24Props: image24Data,
  group82Props: group82Data,
  group822Props: group822Data,
  toolbarProps: toolbarData,
};

const linksDataInsurance = {
  findACar: "FIND A CAR",
  sellYourCar: "SELL YOUR CAR",
  finance: "FINANCE",
  insurance: "INSURANCE",
};

const group89DataInsurance = {
  turnersRewards: "TURNERS REWARDS",
  text16: "Lorem ipsum dolor sit amet, consectetur adipiscing elit donec consectetur semper nunc in molestie.",
};

const group892DataInsurance = {
  turnersRewards: "MULTI-POLICY DISCOUNTS",
  text16: "Lorem ipsum dolor sit amet, consectetur adipiscing elit donec consectetur semper nunc in molestie.",
};

const group893DataInsurance = {
  turnersRewards: "EARN FLY BUY POINTS",
  text16: "Lorem ipsum dolor sit amet, consectetur adipiscing elit donec consectetur semper nunc in molestie.",
};

const group92DataInsurance = {
  src: "https://anima-uploads.s3.amazonaws.com/projects/60bc802e0d81379b238f1ca0/img/vector-100@2x.svg",
};

const group922DataInsurance = {
  src: "https://anima-uploads.s3.amazonaws.com/projects/60bc802e0d81379b238f1ca0/img/vector-100@2x.svg",
};


const finalInsuranceV22Data = {
  overlapGroup1: "https://anima-uploads.s3.amazonaws.com/projects/60bc802e0d81379b238f1ca0/img/vector-90@2x.svg",
  logo: "LOGO",
  text1: "SERVICES & INFORMATION",
  auctionsEvents: "AUCTIONS & EVENTS",
  vector2: "https://anima-uploads.s3.amazonaws.com/projects/60bc802e0d81379b238f1ca0/img/vector@2x.png",
  vector3: "https://anima-uploads.s3.amazonaws.com/projects/60bc802e0d81379b238f1ca0/img/vector-6@2x.svg",
  phone: "0800 887 637",
  overlapGroup9: "https://anima-uploads.s3.amazonaws.com/projects/60bc802e0d81379b238f1ca0/img/vector-86@2x.svg",
  vector4: "https://anima-uploads.s3.amazonaws.com/projects/60bc802e0d81379b238f1ca0/img/vector@2x.png",
  loginRegister: "LOGIN / REGISTER",
  title: "INSURANCE",
  spanText: <>Sed velit lectus, porttitor eu convallis sit amet, semper eget mauris.<br />Integer in pulvinar mauris. Donec facilisis placerat magna sed cursus. Mauris vel tristique arcu.<br /><br /></>,
  spanText2: "Ut nec maximus leo.",
  getAQuote: "GET A QUOTE",
  moreInformation: "MORE INFORMATION",
  text3: "BENEFITS WITH TURNERS",
  text10: "COMPARE OUR CAR INSURANCE COVER",
  line1: "https://anima-uploads.s3.amazonaws.com/projects/60bc802e0d81379b238f1ca0/img/line-1@1x.svg",
  line7: "https://anima-uploads.s3.amazonaws.com/projects/60bc802e0d81379b238f1ca0/img/line-1@1x.svg",
  line2: "https://anima-uploads.s3.amazonaws.com/projects/60bc802e0d81379b238f1ca0/img/line-1@1x.svg",
  line3: "https://anima-uploads.s3.amazonaws.com/projects/60bc802e0d81379b238f1ca0/img/line-1@1x.svg",
  line5: "https://anima-uploads.s3.amazonaws.com/projects/60bc802e0d81379b238f1ca0/img/line-1@1x.svg",
  line4: "https://anima-uploads.s3.amazonaws.com/projects/60bc802e0d81379b238f1ca0/img/line-1@1x.svg",
  line6: "https://anima-uploads.s3.amazonaws.com/projects/60bc802e0d81379b238f1ca0/img/line-1@1x.svg",
  thirdParty: "THIRD PARTY",
  text11: "✖",
  text12: "✖",
  text13: "✖",
  text14: "✖",
  text15: "✔",
  text16: "✔",
  text17: "✔",
  text18: "✔",
  text19: "✔",
  text20: "✔",
  text21: "✖",
  text22: "✔",
  text23: "✔",
  text24: "✔",
  text25: "✔",
  damageToYourCar: "DAMAGE TO YOUR CAR",
  fireDamage: "FIRE DAMAGE",
  text26: "THEFT OR ILLEGAL CONVERSION",
  text27: "LEGAL LIABILITY UP TO $20,000",
  vehicleRemoval: "VEHICLE REMOVAL",
  vector5: "https://anima-uploads.s3.amazonaws.com/projects/60bc802e0d81379b238f1ca0/img/vector-74@2x.svg",
  vector6: "https://anima-uploads.s3.amazonaws.com/projects/60bc802e0d81379b238f1ca0/img/vector-74@2x.svg",
  vector7: "https://anima-uploads.s3.amazonaws.com/projects/60bc802e0d81379b238f1ca0/img/vector-74@2x.svg",
  vector8: "https://anima-uploads.s3.amazonaws.com/projects/60bc802e0d81379b238f1ca0/img/vector-74@2x.svg",
  vector9: "https://anima-uploads.s3.amazonaws.com/projects/60bc802e0d81379b238f1ca0/img/vector-74@2x.svg",
  loadMore: "LOAD MORE",
  rectangle33: "https://anima-uploads.s3.amazonaws.com/projects/60bc802e0d81379b238f1ca0/img/rectangle-33@2x.svg",
  popular: "Popular",
  fullCover: "FULL COVER",
  text34: <>THIRD PARTY,<br />FIRE AND THEFT</>,
  rectangle113: "https://anima-uploads.s3.amazonaws.com/projects/60bc802e0d81379b238f1ca0/img/rectangle-113@2x.svg",
  economical: "Economical",
  text8: "MECHANICAL BREAKDOWN INSURANCE ADD-ON",
  text9: "+",
  getAQuote2: "GET A QUOTE",
  text28: "FREQUENTLY ASKED QUESTIONS",
  line9: "https://anima-uploads.s3.amazonaws.com/projects/60bc802e0d81379b238f1ca0/img/line-9@1x.svg",
  text29: "WHO IS THE UNDERWRITER?",
  vector10: "https://anima-uploads.s3.amazonaws.com/projects/60bc802e0d81379b238f1ca0/img/vector-74@2x.svg",
  line10: "https://anima-uploads.s3.amazonaws.com/projects/60bc802e0d81379b238f1ca0/img/line-9@1x.svg",
  text30: "IF I NEED TO CANCEL MY POLICY, CAN I GET A REFUND?",
  vector11: "https://anima-uploads.s3.amazonaws.com/projects/60bc802e0d81379b238f1ca0/img/vector-74@2x.svg",
  line11: "https://anima-uploads.s3.amazonaws.com/projects/60bc802e0d81379b238f1ca0/img/line-9@1x.svg",
  text31: "I’VE MOVED HOUSE. HOW DO I UPDATE MY POLICY ADDRESS WITH YOU?",
  vector12: "https://anima-uploads.s3.amazonaws.com/projects/60bc802e0d81379b238f1ca0/img/vector-74@2x.svg",
  line13: "https://anima-uploads.s3.amazonaws.com/projects/60bc802e0d81379b238f1ca0/img/line-9@1x.svg",
  text32: "HOW DO I MAKE A CAR INSURANCE CLAIM?",
  vector13: "https://anima-uploads.s3.amazonaws.com/projects/60bc802e0d81379b238f1ca0/img/vector-74@2x.svg",
  line12: "https://anima-uploads.s3.amazonaws.com/projects/60bc802e0d81379b238f1ca0/img/line-9@1x.svg",
  text33: "WHAT IF MY WINDSCREEN OR WINDOW IS DAMAGED?",
  vector14: "https://anima-uploads.s3.amazonaws.com/projects/60bc802e0d81379b238f1ca0/img/vector-74@2x.svg",
  line14: "https://anima-uploads.s3.amazonaws.com/projects/60bc802e0d81379b238f1ca0/img/line-9@1x.svg",
  loadMore2: "LOAD MORE",
  contents: "CONTENTS",
  emailAlerts: "EMAIL ALERTS",
  linksProps: linksDataInsurance,
  group89Props: group89DataInsurance,
  group892Props: group892DataInsurance,
  group893Props: group893DataInsurance,
  group92Props: group92DataInsurance,
  group922Props: group922DataInsurance,
  toolbarProps: toolbarData,
};