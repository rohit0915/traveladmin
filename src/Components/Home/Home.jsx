import React from "react";
import HOC from "../../Common/HOC";

//imort material ui
import { Card, Grid } from "@material-ui/core";

//import css
import "./Home.css";

const Home = (props) => {
  //local array
  const home = [
    { show: "Caravanning with RV ON", link: "Caravanning" },
    { show: "Maximize your Trip", link: "trip" },
    { show: "Your trip detils", link: "tripdetail" },
    { show: "Crew at your service", link: "crew" },
    { show: "Covid-19 safety Protocol", link: "safety" },
    { show: "FAQ" , link:"faq"},
    { show: "Feedback", link: "feedback" },
  ];
  return (
    <>
      <div className="main_div ">
        <div className="container">
          <div className="row">
            {home.map((item, index) => (
              <div className="col-md-4  col-lg-4">
                <Card
                  className="main_card Card_shadow "
                  onClick={() => props.history.push(`${item.link}`)}
                >
                  <div className="main_content ">
                    <p>
                      <span className="">
                        <i class="fa fa-plus pr-1" aria-hidden="true"></i>
                      </span>
                      {item.show}
                    </p>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HOC(Home);
