/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Layout, Navigation, Card } from "../../components";
import { Form, FormControl } from "react-bootstrap";
import vehicleDetail from "../../images/vehicle-detail.png";
import "../../style.css";

const History = () => {
  return (
    <Layout>
      <Navigation />
      <div className="row history-wrapper">
      <div className="col col-md-6 col-lg-7 main-section-history">
        <div className=" row mx-auto align-items-center">
          <div className="col col-sm-6 col-md-9">
            <Form className="d-flex formSearch px-3">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2 searchbar"
                aria-label="Search"
              />
              <i className="bi bi-search my-auto"></i>
            </Form>
          </div>
          <div className="col col-sm-2 col-md-3">
            <div className="form-check">
              <label className="form-check-label history-check-form">Select</label>
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
            </div>
          </div>
        </div>
        <div className="btn-group">
          <button
            className="btn btn-light dropdown-toggle history-filter-btn mx-2"
            type="button"
            id="defaultDropdown"
            data-bs-toggle="dropdown"
            data-bs-auto-close="true"
            aria-expanded="false"
          >
            Filter
            <span className="dropdown-span-icon">
              <i className="bi bi-chevron-down"></i>
            </span>
          </button>
          <ul className="dropdown-menu" aria-labelledby="defaultDropdown">
            <li>
              <a className="dropdown-item">Menu item</a>
            </li>
            <li>
              <a className="dropdown-item">Menu item</a>
            </li>
            <li>
              <a className="dropdown-item">Menu item</a>
            </li>
          </ul>
        </div>

        <div className="row justify-content-start align-items-center">
          <div className="col col-sm-7 col-md-11 form-check my-3 history-check-form">
            <p className="form-check-label m-0">
              Please finish your payment for vespa for Vespa Rental Jogja
              <i className="bi bi-chevron-right mx-5"></i>
            </p>
          </div>
          <div className="col col-sm-1 col-md-1">
            <input
              className="form-check-input"
              type="checkbox"
              id="checkboxNoLabel"
              value=""
              aria-label="..."
            />
          </div>
        </div>

        <div className="row justify-content-start align-items-center">
          <div className="col col-sm-7 col-md-11 form-check my-3 history-check-form">
            <p className="form-check-label m-0">
              Your payment has been confirmed!
              <i className="bi bi-chevron-right mx-5"></i>
            </p>
          </div>
          <div className="col col-sm-1">
            <input
              className="form-check-input"
              type="checkbox"
              id="checkboxNoLabel"
              value=""
              aria-label="..."
            />
          </div>
        </div>

        <div>
          <p className="history-card-title-header"> Week ago</p>

          <div
            className="row justify-content-center"
            style={{ width: "500px" }}
          >
            <div className="col-sm-6 col-md-12 col-lg">
              <div className="vehicle-detail-container">
                <div className="grid-image">
                  <img
                    src={vehicleDetail}
                    alt="detail-vehicle"
                    className="img-fluid img-thumbnail rounded"
                  />
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-12 col-lg">
              <div className="card">
                <div className="card-body vehicle-info-wrapper">
                  <p className="vehicle-detail-title-history">
                    Fixie Gray - Only
                  </p>
                  <p className="card-subtitle text-history-card">
                    Jan 18 to 21 2021
                  </p>
                  <p className="card-subtitle text-history-card">
                    <strong>Prepayment : Rp. 245.000</strong>
                  </p>
                  <p className="card-subtitle status-vehicle">
                    Has been returned
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className="row justify-content-center"
            style={{ width: "500px" }}
          >
            <div className="col-sm-6 col-md-12 col-lg">
              <div className="vehicle-detail-container">
                <div className="grid-image">
                  <img
                    src={vehicleDetail}
                    alt="detail-vehicle"
                    className="img-fluid img-thumbnail rounded"
                  />
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-12 col-lg">
              <div className="card">
                <div className="card-body vehicle-info-wrapper">
                  <p className="vehicle-detail-title-history">
                    Fixie Gray - Only
                  </p>
                  <p className="card-subtitle text-history-card">
                    Jan 18 to 21 2021
                  </p>
                  <p className="card-subtitle text-history-card">
                    <strong>Prepayment : Rp. 245.000</strong>
                  </p>
                  <p className="card-subtitle status-vehicle">
                    Has been returned
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <aside className="col col-md-4 col-lg-4 aside-history">
        <p className="aside-title-history">New Arrival</p>
        <Card />
        <Card />
        <p className="aside-title-history-bottom">View more</p>
        <button className="aside-history-icon-chevron">
          <i className="bi bi-chevron-down"></i>
        </button>
      </aside>
      </div>
     
    </Layout>
  );
};

export default History;
