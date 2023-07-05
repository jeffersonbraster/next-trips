"use client";

import Button from "@/components/Button";
import CurrencyInput from "@/components/CurrencyInput";
import DatePicker from "@/components/DatePicker";
import Input from "@/components/Input";
import React from "react";

const TripSearch = () => {
  return (
    <div className="container mx-auto p-5 bg-search-background bg-cover bg-center bg-no-repeat">
      <h2 className="font-semibold text-xl text-primaryDarker text-center">
        Encontre sua proxima <span className="text-primary">viagem!</span>
      </h2>

      <div className="flex flex-col gap-4 mt-5">
        <Input placeholder="Qual seu destino?" />

        <div className="flex gap-4">
          <DatePicker
            placeholderText="Data de partida?"
            onChange={() => {}}
            className="w-full"
          />
          <CurrencyInput placeholder="Orçamento?" />
        </div>
        <Button>Buscar</Button>
      </div>
    </div>
  );
};

export default TripSearch;
