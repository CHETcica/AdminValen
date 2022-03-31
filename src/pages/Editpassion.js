import React, { useState, useEffect } from "react";

const Editpassion = () => {
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
            ชื่อ
          </label>
          <input
            type="Text"
            class="form-control"
            id="inputPassword4"
            placeholder="ชื่อภาษาไทย"
          />
        </div>

        <div class="col-md-6">
          <label for="inputGender" class="form-label">
            Type
          </label>
          <select
            className="form-control form-select"
            aria-label="Default select example"
          >
            <option selected="">Select TYPE </option>
            <option value={1}>travel</option>
            <option value={2}>sport</option>
            <option value={3}>exercise</option>
            <option value={4}>art</option>
            <option value={5}>music</option>
          </select>
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
export default Editpassion;
