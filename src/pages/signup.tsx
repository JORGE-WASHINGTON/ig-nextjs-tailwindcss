import Image from "next/image";
import React from "react";
import SignUpForm from "../components/SignUpForm";
import logo from "../../public/logo.png";

export default function SignUp() {
  return (
    <div className="h-screen w-screen bg-white xs:bg-[#FAFAFA]  flex flex-col">
      <div className="p-1.5"></div>
      <main className="flex justify-center grow">
        <section className="xs:border xs:w-[350px] h-fit xs:bg-[#ffffff] flex justify-center">
          <div className="w-3/4 flex flex-col items-center">
            <div className="mt-10 mb-4">
              <Image src={logo} alt="logo" />
            </div>
            <p className="leading-5 text-center mb-4 text-[#8e8e8e] text-[17px] font-semibold ">
              Sign up to see photos and videos from your friends.
            </p>
            <button className="bg-[#0095f6] w-full text-white p-1.5 rounded text-[14px] font-semibold mb-3">
              Log in with Facebook
            </button>
            <div className="relative w-full text-center mb-3">
              <span
                className="before:absolute before:h-[1px] before:w-[120px] before:top-[50%] before:left-0 before:bg-[#DBDBDB]
              after:absolute after:h-[1px] after:w-[120px] after:top-[50%] after:right-0 after:bg-[#DBDBDB]
              text-[#8e8e8e] text-[13px] 
            "
              >
                OR
              </span>
            </div>

            <SignUpForm />
            <div className="my-8">
              Have an account? <span className="text-[#0095f6]">Log in</span>
            </div>
          </div>
        </section>
      </main>
      <footer className="px-10 text-[#8e8e8e] text-[12px] text-center">
        <ul className="flex flex-wrap space-x-3 justify-center mb-2">
          <li>Meta</li>
          <li>About</li>
          <li>Blog</li>
          <li>Jobs</li>
          <li>Help</li>
          <li>API</li>
          <li>Privacy</li>
          <li>Terms</li>
          <li>Top Accounts</li>
          <li>Hashtags</li>
          <li>locations</li>
          <li>Instagram Lite</li>
          <li>Contact</li>
          <li>Uploading</li>
          <li>&</li>
          <li>Non-Users</li>
        </ul>
        <div>2022 Instagram from Meta</div>
        <div className="p-5"></div>
      </footer>
    </div>
  );
}
