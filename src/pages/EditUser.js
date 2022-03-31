import React, { useState, useEffect } from "react";

const EditUser = () => {
  return (
    <div className="container">
      <form class="row g-3">
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">
            Name
          </label>
          <input type="Text" class="form-control" id="inputName" />
        </div>
        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="inputPassword4"
            placeholder="******"
          />
        </div>
        <div class="col-md-6">
          <label for="inputPhone" class="form-label">
            Phonenumber
          </label>
          <input
            type="Text"
            class="form-control"
            id="inputPhonenumber"
            placeholder="0x-xxx-xxxxx"
          />
        </div>
        <div class="col-md-6">
          <label for="inputPhone" class="form-label">
            Born
          </label>
          <input type="Date" class="form-control" id="inputPhonenumber" />
        </div>

        <div class="col-md-6">
          <label for="inputGender" class="form-label">
            Gender
          </label>
          <select
            className="form-control form-select"
            aria-label="Default select example"
          >
            <option selected="">Open this select menu</option>
            <option value={1}>Women</option>
            <option value={2}>Man</option>
            <option value={3}>LGBT</option>
          </select>
        </div>
        <div class="col-md-6">
          <label for="inputPassion" class="form-label">
            Passion
          </label>
          <input type="Text" class="form-control" id="inputPassion" />
        </div>
        <div class="col-md-6">
          <label for="input Interested" class="form-label">
            Interested
          </label>
          <input type="Text" class="form-control" id="inputInterested" />
        </div>
        <div class="col-md-6">
          <label for="input Social" class="form-label">
            Social
          </label>
          <input type="Text" class="form-control" id="input Social" />
        </div>
        <div class="col-12">
          <label for="inputAddress" class="form-label">
            Address
          </label>
          <input
            type="text"
            class="form-control"
            id="inputAddress"
            placeholder="1234 Main St"
          />
        </div>
       

        <div class="col-12">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="gridCheck" />
            <label class="form-check-label" for="gridCheck">
              Check me out
            </label>
          </div>
        </div>
        <div class="col-12">
          <button type="submit" class="btn btn-primary">
            Apply
          </button>
        </div>
      </form>
    </div>
  );
};
export default EditUser;
