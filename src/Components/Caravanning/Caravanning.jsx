import React from "react";
import { Card, Grid } from "@material-ui/core";
import HOC from "../../Common/HOC";

//import css
import "./Caravanning.css";

const caravan = [
  { title: "Lorem ipsum dolor" },
  { title: "Lorem ipsum dolor" },
  { title: "Lorem ipsum dolor" },
];

const Caravanning = (props) => {
  return (
    <>
      <div className="main_div side_margin ">
        <div className="container">
          <Card className="p-4 Card_shadow m-3">
            <div class="">
              <label for="exampleInputEmail1">Title</label>
              <input
                type="Title"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Title"
              />
            </div>

            <span className="">
              <input className="mt-2" type="file" />
            </span>

            <button type="submit" class="btn btn-primary mt-3">
              Create
            </button>
          </Card>

          <div className="make_card mt-5 mb-5">
            {caravan.map((item, index) => (
              <Card className="p-4 Card_shadow m-3">
                {/* <Grid className="Component_main_grid mt-2">
              <Grid item md={4}>
                <h5>Images</h5>
              </Grid>

              <Grid item md={4}>
                <h5>Title</h5>
              </Grid>
              <Grid item md={4}>
                <h5>Action</h5>
              </Grid>
            </Grid> */}

                <Grid className="Component_main_grid m-2 data_box">
                  <Grid item md={4} className="img_height mb-2">
                    <img src="https://designingminds.files.wordpress.com/2016/03/lorem-ipsum.jpg" />
                  </Grid>
                  <Grid item md={4}>
                    tittle
                  </Grid>
                  <Grid item md={4}>
                    <span className="pr-3">
                      <i class="fas fa-edit"></i>
                    </span>
                    <span>
                      <i class="far fa-trash-alt"></i>
                    </span>
                    <span
                      className="pointer ml-2"
                      onClick={() => props.history.push("/subtitle")}
                    >
                      Add Sub Heading
                    </span>
                  </Grid>
                </Grid>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HOC(Caravanning);
