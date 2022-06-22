import * as React from "react";
import { DataDisplay } from "../../components/DataDisplay";
import { Heading } from "../../components/Heading";

export const Dashboard = () => (
  <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">
    <Heading />
    <DataDisplay />
  </div>
)