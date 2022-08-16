import React from "react";
import { render, cleanup } from "@testing-library/react";
import Appointment from "components/Appointment/index";

describe("test Appointment component", () => {
  it("render without crashing", () => {
    render(<Appointment />)
  })
})
