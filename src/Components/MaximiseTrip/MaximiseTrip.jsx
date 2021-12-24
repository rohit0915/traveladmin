import React from "react";
import HOC from "../../Common/HOC";
import { Grid, Card } from "@material-ui/core";

const MaximiseTrip = (props) => {
  const caravan = [
    { title: "Lorem ipsum dolor" },
    { title: "Lorem ipsum dolor" },
    { title: "Lorem ipsum dolor" },
  ];

  return (
    <>
      <div className="main_div side_margin ">
        <div className="container">
          <form>
            <div class="form-group">
              <label for="exampleInputEmail1">Title</label>
              <input
                type="Title"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Title"
              />
            </div>

            <input type="file" multiple />

            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </form>

          <div className="mt-5">
            <Card>
              <Grid className="Component_main_grid ml-2 ">
                <Grid item md={4}>
                  <h5>Images</h5>
                </Grid>
                <hr />
                <Grid item md={4}>
                  <h5>Title</h5>
                </Grid>
                <Grid item md={4}>
                  <h5>Action</h5>
                </Grid>
              </Grid>
              <hr />
              {caravan.map((item, index) => (
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
              ))}
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default HOC(MaximiseTrip);
