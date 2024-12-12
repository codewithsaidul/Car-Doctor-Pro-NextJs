"use client";

import { signIn } from "next-auth/react"
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import SocialLogin from "../../components/Shared/SocialLogin"


const LoginPage = () => {

  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();


    const email = e.target.email.value;
    const password = e.target.password.value;

    // Perform login logic here.
    const response = await signIn("credentials", {
      email,
      password,
      redirect: false
    })

    if (response?.status === 200) {
      router.push("/")
    }

  };

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
          <form className="w-full" onSubmit={handleLogin}>
            <h2 className="text-3xl text-center font-bold mb-10">Login</h2>
            <div className="form__group">
              <label>E-mail</label>
              <input type="email" name="email" placeholder="Your E-mail" />
            </div>
            <div className="form__group mt-3">
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Your Password"
              />
            </div>

            <input
              type="submit"
              value="Sign In"
              className="text-white text-xl font-semibold py-2 px-4 bg-primary w-full mt-7 rounded-lg"
            />
          </form>

          <div className="divider my-10">or Sign In With</div>

          {/* ================== Social Login ==================== */}
          <SocialLogin />

          <p className="text-base text-[#737373] text-center mt-5 font-medium">
            Don&apos;t Have an account?{" "}
            <Link href="/register" className="text-primary">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
