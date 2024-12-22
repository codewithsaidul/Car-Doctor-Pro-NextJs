"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";
import { useParams } from "next/navigation";
import Loading from "../../../components/Shared/Loading"

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

  if (isLoading) return <Loading />;

  return (
    <div className="mb-20 w-full px-4 sm:px-8 md:px-14 lg:px-20 mx-auto">
      <div
        className="w-full h-96 relative px-12"
        style={{
          backgroundImage: `linear-gradient(45deg, rgba(7, 25, 82, 0.7), rgba(0, 0, 0, 0.3)), url(${service.img}`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          objectFit: "contain",
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

      {/* ==================== Service Details Container ============================== */}
      <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* details left side */}
        <div>
          <div>
            {/* service details image */}
            <figure>
              <Image
                src={service.img}
                alt={service.title}
                width={800}
                height={600}
                className="w-[700px] h-[300px] object-cover"
              />
            </figure>

            <h2 className="my-10 text-4xl font-bold text-black">
              {service?.title}
            </h2>
            <p className="text-base text-[#737373] font-normal">
              {service?.description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-8">
            {service?.facility.map((item, index) => (
              <div key={index} className="bg-[#F3F3F3] border-t-2 border-primary py-5 px-5 rounded-xl">
                <h3 className="text-xl font-semibold text-black mb-3">{item.name}</h3>
                <p className="text-sm font-normal text-[#737373]">{item.details}</p>
              </div>
            ))}
          </div>
        </div>

        {/* details right side */}
      </div>
    </div>
  );
};

export default SingleData;
