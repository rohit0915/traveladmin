import React from "react";
import HOC from "../../Common/HOC";
import { Grid, Card } from "@material-ui/core";

const TripDetail = (props) => {
  const caravan = [
    { day: "1", title: "Lorem ipsum dolor" },
    { day: "2", title: "Lorem ipsum dolor" },
    { day: "3", title: "Lorem ipsum dolor" },
  ];

  return (
    <>
      <div className="main_div side_margin ">
        <div className="container">
          <Card className="p-2 Card_shadow">
            <div class="form-group">
              <label for="exampleInputEmail1">Title</label>
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Title"
              />
            </div>

            <div class="form-group">
              <label for="exampleInputEmail1">Days</label>
              <input
                type=""
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter Day"
              />
            </div>

            <label for="exampleInputEmail1">Choose Image</label>

            <input class="form-control" type="file" />

            <button type="submit" class="btn btn-primary mt-2">
              Submit
            </button>
          </Card>

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
                    <p>Day-{item.day}</p>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQdF30EABvRd2nZR69QnKIeVOn_AD0ce4WJAlIakwbtISoD7QOvRLlqsGCkBhcpBeWc4w&usqp=CAU" />
                  </Grid>
                  <Grid item md={4}>
                    {item.title}
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

export default HOC(TripDetail);
