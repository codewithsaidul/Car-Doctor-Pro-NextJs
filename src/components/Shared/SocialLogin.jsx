"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FaGithub } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";

const SocialLogin = () => {
  const router = useRouter();

  const handleSocialLogin = async (provider) => {
    const response = await signIn(provider);
    // Add your own logic here. For example, redirect to a dashboard page.
    if (response?.status === 200) {
      router.push("/");
    } else {
      Swal.fire({
        position: "center",
        icon: "error",
        text: response.error.message,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div className="flex justify-center items-center gap-3">
      <button
        onClick={() => handleSocialLogin("google")}
        className="p-2 rounded-full bg-[#F5F5F8]"
      >
        <FcGoogle size={24} />
      </button>
      <button
        onClick={() => handleSocialLogin("github")}
        className="p-2 rounded-full bg-[#F5F5F8]"
      >
        <FaGithub size={24} />
      </button>
    </div>
  );
};

export default SocialLogin;
