"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";
import { useParams } from "next/navigation";
import React from "react";

const SingleData = () => {
  const params = useParams();
  const serviceId = params.id;

  const { data: service = {}, isLoading } = useQuery({
    queryKey: ["services", "serviceId"],
    queryFn: async () => {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/services/api/${serviceId}`
      );
      return response.data;
    },
  });

  console.log(service);

  return (
    <div className="mb-20 w-full px-4 sm:px-8 md:px-14 lg:px-20 mx-auto">
      <div
        className="w-full h-96 relative px-12"
        style={{
          backgroundImage: `linear-gradient(45deg, rgba(7, 25, 82, 0.7), rgba(0, 0, 0, 0.3)), url(${service.img}`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          objectFit: "contain"
        }}
      >
        <div className="custom__shad"></div>
        <h2 className="pt-40 text-2xl md:text-5xl text-center md:text-left font-bold text-white">
          Service Details
        </h2>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 py-3 px-6 bg-primary text-xl text-white font-bold">
          <p> Home / Service Details</p>
        </div>
      </div>
    </div>
  );
};

export default SingleData;
