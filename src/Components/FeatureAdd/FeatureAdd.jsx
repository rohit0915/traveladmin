import React from "react";
import { Button, Card, Grid, TextField } from "@material-ui/core";
import HOC from "../../Common/HOC";

//import css\
import "./FeatureAdd.css";

const updtes = [
  { update: "Latest Update", message: "message update" },

  { update: "Latest Update", message: "message update" },
  { update: "Latest Update", message: "message update" },
  { update: "Latest Update", message: "message update" },
  { update: "Latest Update", message: "message update" },
];

const FeatureAdd = () => {
  return (
    <>
      <div className="main_div">
        <div className="container">
          <Card>
            <form className="p-2">
              <div class="form-group">
                <label for="exampleInputEmail1">Updates</label>
                <input
                  type="Update"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter Update"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Message</label>
                <input
                  type="Message"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Message"
                />
              </div>
              <span className="feature_add_btn">
                <button type="submit " className="btn btn-primary ">
                  Submit
                </button>
              </span>
            </form>
          </Card>

          <div
            className="table_responsive mt-3 mb-3"
            style={{ overflowX: "auto" }}
          >
            <table>
              <tr>
                <th>Updates</th>
                <th>Message</th>
                <th>Action</th>
              </tr>
              {updtes.map((item, index) => (
                <tr>
                  {item.update}
                  {item.message}
                  {item.message}
                  <td>
                    <i class="fas fa-edit"></i>
                  </td>
                  <td>
                    <i class="far fa-trash-alt"></i>
                  </td>
                </tr>
              ))}
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default HOC(FeatureAdd);
