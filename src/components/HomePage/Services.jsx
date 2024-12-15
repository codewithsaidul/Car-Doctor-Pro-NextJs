"use client";

import Image from "next/image";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

const Services = () => {


  const { data: services = [], isLoading} = useQuery({
    queryKey: ['services'],
    queryFn: async () => {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/services/api/get-all`
      );
      return response.data;
    }
  })


  if (isLoading) return <div>Loading...</div>;
  return (
    <div className="my-20">
      <div className="text-center w-[600px] mx-auto mb-16">
        <span className="text-xl text-primary font-semibold capitalize">
          service
        </span>
        <h3 className="text-5xl font-bold mb-3">Our Service Area</h3>
        <p className="text-base text-[#777777]">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don&apos;t look even slightly
          believable.{" "}
        </p>
      </div>

      {/* =================== Service Container ====================== */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services?.map((service) => (
          <div key={service._id}>
            <div className="border-2 border-gray-400 py-8 px-6 rounded-xl   ">
              <figure>
                <Image
                  src={service.img}
                  alt={service.title}
                  width={1200}
                  height={1200}
                  className="w-fit h-60"
                />
              </figure>

              <h3 className="mt-5 text-3xl font-bold">{service.title}</h3>

              <div className="flex flex-col gap-5 mt-4">
                <p className="text-xl font-semibold text-primary">
                  Price: ${service.price}
                </p>

                <Link href={`services/${service._id}`}>
                  <button className="text-lg font-medium bg-primary py-2 px-4 text-white rounded-full">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
