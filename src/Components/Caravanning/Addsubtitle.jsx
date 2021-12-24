import React from "react";
import { Card, Grid } from "@material-ui/core";
import HOC from "../../Common/HOC";

const Addsubtitle = () => {
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
              <label for="exampleInputEmail1">Sub Title</label>
              <input
                type="Title"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Sub Title"
              />
            </div>

            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </form>

          <div className="mt-5">
            <Card>
              <Grid className="Component_main_grid ml-2 ">
                <Grid item md={6}>
                  <h5>Add</h5>
                </Grid>
                <Grid item md={6}>
                  <h5>Action</h5>
                </Grid>
              </Grid>
              <hr />
              {caravan.map((item, index) => (
                <Grid className="Component_main_grid m-2 data_box">
                  <Grid item md={6}>
                    {item.title}
                  </Grid>
                  <Grid item md={6}>
                    <span className="pr-3">
                      <i class="fas fa-edit"></i>
                    </span>
                    <span>
                      <i class="far fa-trash-alt"></i>
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

export default HOC(Addsubtitle);
