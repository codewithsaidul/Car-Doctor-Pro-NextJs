import Image from "next/image"


const SocialLogin = () => {
  return (
    <div className="flex justify-center items-center gap-3">
            <button className="py-2 px-4 rounded-full bg-[#F5F5F8]">
              <Image
                src="/assets/icons/facebook.png"
                alt="facebook logo"
                width={16}
                height={16}
              />
            </button>
            <button className="p-3 rounded-full bg-[#F5F5F8]">
              <Image
                src="/assets/icons/googl.png"
                alt="facebook logo"
                width={28}
                height={28}
              />
            </button>
          </div>
  )
}

export default SocialLogin