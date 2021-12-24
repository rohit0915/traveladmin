import React from "react";
import HOC from "../../Common/HOC";
import { Card, Grid } from "@material-ui/core";

const Feedback = () => {
  return (
    <div>
      <div className="content_padding">
        <h3 className="pl-4 mb-2">
          Collect feedback from customers and teammates
        </h3>
        <Card className="p-4 Card_shadow m-3">
          <Grid className="Component_main_grid m-2 data_box">
            <Grid item md={4} className="img_height mb-2">
              <h5>
                <span className="pr-2">1.</span>Bedroom Bed
              </h5>
            </Grid>
            <Grid item md={4}></Grid>
            <Grid item md={4}>
              <span className="pr-2">
                <i class="far fa-star"></i>
              </span>
              <span>
                <i class="far fa-star pr-2"></i>
              </span>
              <span>
                <i class="far fa-star pr-2"></i>
              </span>
              <span>
                <i class="far fa-star pr-2"></i>
              </span>
              <span>
                <i class="far fa-star pr-2"></i>
              </span>
            </Grid>
          </Grid>
        </Card>
        <Card className="p-4 Card_shadow m-3">
          <Grid className="Component_main_grid m-2 data_box">
            <Grid item md={4} className="img_height mb-2">
              <h5>
                <span className="pr-2">2.</span>Bedroom Bed
              </h5>
            </Grid>
            <Grid item md={4}></Grid>
            <Grid item md={4}>
              <span className="pr-2">
                <i class="far fa-star"></i>
              </span>
              <span>
                <i class="far fa-star pr-2"></i>
              </span>
              <span>
                <i class="far fa-star pr-2"></i>
              </span>
              <span>
                <i class="far fa-star pr-2"></i>
              </span>
              <span>
                <i class="far fa-star pr-2"></i>
              </span>
            </Grid>
          </Grid>
        </Card>
        <Card className="p-4 Card_shadow m-3">
          <Grid className="Component_main_grid m-2 data_box">
            <Grid item md={4} className="img_height mb-2">
              <h5>
                <span className="pr-2">3.</span>Bedroom Bed
              </h5>
            </Grid>
            <Grid item md={4}></Grid>
            <Grid item md={4}>
              <span className="pr-2">
                <i class="far fa-star"></i>
              </span>
              <span>
                <i class="far fa-star pr-2"></i>
              </span>
              <span>
                <i class="far fa-star pr-2"></i>
              </span>
              <span>
                <i class="far fa-star pr-2"></i>
              </span>
              <span>
                <i class="far fa-star pr-2"></i>
              </span>
            </Grid>
          </Grid>
        </Card>
      </div>
    </div>
  );
};

export default HOC(Feedback);
