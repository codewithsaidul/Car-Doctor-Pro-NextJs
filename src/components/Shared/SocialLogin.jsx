import { FaGithub } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {

    const handleSocialLogin = async () => {}

  return (
    <div className="flex justify-center items-center gap-3">
            <button className="p-2 rounded-full bg-[#F5F5F8]">
              <FcGoogle size={24} />
            </button>
            <button className="p-2 rounded-full bg-[#F5F5F8]">
              <FaGithub size={24} />
            </button>
          </div>
  )
}

export default SocialLogin