"use client";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FaGithub } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  const router = useRouter();
  const session = useSession();


  const handleSocialLogin = async (provider) => {
     await signIn(provider);
  };

  if (session?.status === 'authenticated') {
    router.push("/");
  }

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
