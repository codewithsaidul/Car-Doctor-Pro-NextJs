"use client"

import Image from "next/image";
import Link from "next/link";

const page = () => {

  const handleRegister = async (e) => {
    e.preventDefault();

    const newUser = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
    }

    console.log(newUser)
    
    // Call your API to register the user
    
  }


  return (
    <div className="px-4 sm:px-6 md:px-12 lg:px-20 mx-auto  min-h-[calc(100vh-150px)] my-40">
      <div className="flex flex-col lg:flex-row items-center gap-0">
        <figure className="w-full lg:w-1/2">
          <Image
            src="/assets/images/login/login.svg"
            alt=""
            width={1000}
            height={1000}
            className="w-fit h-[400px]"
          />
        </figure>

        <div className="w-full lg:w-1/2 border-2 border-gray-300 p-4 sm:px-6 md:px-8 lg:p-10">
          <form className="w-full space-y-4" onSubmit={handleRegister}>
            <h2 className="text-3xl text-center font-bold mb-10">Register New Account</h2>
            <div className="form__group">
              <label>Name</label>
              <input type="text" name="name" placeholder="Your Name" />
            </div>
            <div className="form__group">
              <label>E-mail</label>
              <input type="email" name="email" placeholder="Your E-mail" />
            </div>
            <div className="form__group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Your Password"
              />
            </div>

            <input
              type="submit"
              value="Sign Up"
              className="text-white text-xl font-semibold py-2 px-4 bg-primary w-full mt-7 rounded-lg"
            />
          </form>

          <div className="divider my-10">or Sign In With</div>

          {/* ================== Social Login ==================== */}
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


          <p className="text-base text-[#737373] text-center mt-5 font-medium">Already Have an account? <Link href="/login" className="text-primary">Sign In</Link></p>
        </div>
      </div>
    </div>
  );
};

export default page;
