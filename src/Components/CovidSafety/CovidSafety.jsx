import React from "react";
import HOC from "../../Common/HOC";
import { Card, Grid } from "@material-ui/core";

//import css
import "./CovidSafety.css";

const CovidSafety = () => {
  return (
    <div>
      <div className="">
        <div className="content_padding">
          <Card className="Card_shadow ">
            <div className="card_box p-2">
              <div class="form-group mr-2">
                <label for="exampleInputEmail1">Covid-19 Safety Protocol</label>
                <input
                  type="text"
                  class="form-control "
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter Safety Protocol"
                />
              </div>
            </div>
            <button type="submit" class="btn btn-primary ml-3 mb-2">
              Create
            </button>
          </Card>

          <Card className="p-4 Card_shadow m-3">
            <Grid className="Component_main_grid m-2 data_box">
              <Grid item md={4} className="img_height mb-2">
                <p>
                  <span className="pr-2">1.</span>Sanitise Your Hand
                </p>
              </Grid>
              <Grid item md={4}></Grid>
              <Grid item md={4}>
                <span className="pr-3">
                  <i class="fas fa-edit"></i>
                </span>
                <span>
                  <i class="far fa-trash-alt"></i>
                </span>
              </Grid>
            </Grid>
          </Card>

          <Card className="p-4 Card_shadow m-3">
            <Grid className="Component_main_grid m-2 data_box">
              <Grid item md={4} className="img_height mb-2">
                <p>
                  <span className="pr-2">2.</span>Wear Mask
                </p>
              </Grid>
              <Grid item md={4}></Grid>
              <Grid item md={4}>
                <span className="pr-3">
                  <i class="fas fa-edit"></i>
                </span>
                <span>
                  <i class="far fa-trash-alt"></i>
                </span>
              </Grid>
            </Grid>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default HOC(CovidSafety);
