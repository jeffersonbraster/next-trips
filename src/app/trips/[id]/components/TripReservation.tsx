"use client";
import Button from "@/components/Button";
import DatePicker from "@/components/DatePicker";
import Input from "@/components/Input";
import { Trip } from "@prisma/client";
import React from "react";

interface TripReservationProps {
  trip: Trip;
}

const TripReservation = ({ trip }: TripReservationProps) => {
  return (
    <div className="flex flex-col px-5">
      <div className="flex gap-4">
        <DatePicker
          placeholderText="Data de partida"
          onChange={() => {}}
          className="w-full"
        />
        <DatePicker
          placeholderText="Data de chegada"
          onChange={() => {}}
          className="w-full"
        />
      </div>
      <Input
        placeholder={`número de hóspedes (max: ${trip.maxGuests})`}
        className="mt-4"
      />

      <div className="flex justify-between mt-3">
        <p className="font-medium text-sm text-primaryDarker">Total: </p>
        <p className="font-medium text-sm text-primaryDarker">R$ 2500</p>
      </div>

      <div className="pb-10 border-b border-l-grayLighter w-full">
        <Button className="mt-3 w-full">Reservar agora</Button>
      </div>
    </div>
  );
};

export default TripReservation;
