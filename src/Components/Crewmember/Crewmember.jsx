import React from "react";
import HOC from "../../Common/HOC";
import { Card, Grid } from "@material-ui/core";

//import css
import "./Crewmember.css";

const Crewmember = (props) => {
  const caravan = [
    { title: "Lorem ipsum dolor" },
    { title: "Lorem ipsum dolor" },
    { title: "Lorem ipsum dolor" },
  ];

  return (
    <>
      <div className="main_div side_margin ">
        <div className="container">
          <Card className="Card_shadow p-2">
            <Grid className="Component_main_grid">
              <Grid item md={6}>
                <div class="form-group mr-2">
                  <label for="exampleInputEmail1">Crewname</label>
                  <input
                    type="text"
                    class="form-control "
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Name"
                  />
                </div>
                <div class="form-group mr-2">
                  <label for="exampleInputEmail1">Enter date Of Birth</label>
                  <input
                    type="date"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="DOB"
                  />
                </div>
                <div class="form-group mr-2">
                  <label for="exampleInputEmail1">Enter Mobile no</label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Mobile no"
                  />
                </div>
              </Grid>
              <Grid item md={6}>
                <div class="form-group">
                  <label for="exampleInputEmail1">Enter Driving Licence</label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Licence no"
                  />
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1">Service</label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Service"
                  />
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1">Image-upload</label>
                  <input
                    type="file"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Service"
                  />
                </div>
              </Grid>
            </Grid>

            <button type="submit" class="btn btn-primary">
              Create
            </button>
          </Card>

          <div className="mt-5 ">
            <Card className="p-2 ">
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

export default HOC(Crewmember);
