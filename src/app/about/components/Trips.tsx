import React from "react";
import { prisma } from "@/lib/prisma";

const getTrips = async () => {
  const trips = await prisma.trip.findMany({});

  return trips;
};

const Trips = async () => {
  const trips = await getTrips();

  console.log(trips);
  return (
    <div>
      <h1>trips</h1>
    </div>
  );
};

export default Trips;
