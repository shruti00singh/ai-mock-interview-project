import { Sparkles } from "lucide-react";
import Marquee from "react-fast-marquee";

import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { MarqueImg } from "@/components/marquee-img";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex-col w-full pb-24">
      <Container>
        {/* Hero Section */}
        <div className="my-4">
          <h2 className="text-3xl text-center md:text-left md:text-6xl">
            <span className="text-black font-extrabold md:text-8xl">
              Interview Acer
            </span>{" "}
            <span className="text-gray-500 font-extrabold">
              - A better way to
            </span>
            <br />
            boost your interview skills and land more offers
          </h2>

          <p className="mt-2 text-muted-foreground text-sm">
            Boost your interview skills and increase your success rate with AI-driven insights. 
            Prepare smarter, practise with confidence, and stand out from the competition with ease.
          </p>
        </div>

      
{/* Stats Section - Right Aligned, Smaller Buttons */}
<div className="w-full flex justify-end mt-6 mb-6">
  <div className="flex flex-wrap gap-3">
    <div className="px-4 py-2 rounded-md bg-black text-white shadow-sm text-center">
      <p className="text-lg font-bold">100+</p>
      <span className="text-xs text-gray-300">Offers Received</span>
    </div>

    <div className="px-4 py-2 rounded-md bg-gray-200 text-black shadow-sm text-center">
      <p className="text-lg font-bold">550+</p>
      <span className="text-xs text-gray-600">Interviews Aced</span>
    </div>

    <div className="px-4 py-2 rounded-md bg-gray-100 text-black shadow-sm text-center">
      <p className="text-lg font-bold">300+</p>
      <span className="text-xs text-gray-600">Satisfied Users</span>
    </div>
  </div>
</div>

          {/* Hero Image */}
        <div className="w-full mt-8  rounded-xl bg-gray-100 h-[420px] drop-shadow-md overflow-hidden relative">
          <img
            src="/assets/img/hero.jpg"
            alt="Interview Preparation"
            className="w-full h-full object-cover"
          />
        </div>
      </Container>

      

      {/* Marquee Section */}
      <div className="w-full mt-2 mb-2">
        <Marquee pauseOnHover>
          <MarqueImg img="/assets/img/logo/firebase.png" />
          <MarqueImg img="/assets/img/logo/meet.png" />
          <MarqueImg img="/assets/img/logo/zoom.png" />
          <MarqueImg img="/assets/img/logo/firebase.png" />
          <MarqueImg img="/assets/img/logo/microsoft.png" />
          <MarqueImg img="/assets/img/logo/meet.png" />
          <MarqueImg img="/assets/img/logo/tailwindcss.png" />
          <MarqueImg img="/assets/img/logo/microsoft.png" />
        </Marquee>
      </div>

      {/* CTA Section */}
      <Container>
        <div className="py-8 space-y-8">
          <h2 className="tracking-wide text-xl text-gray-800 font-semibold">
            Unleash your potential with personalized AI insights and targeted
            interview practice.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
            <div className="col-span-1 md:col-span-3">
              <img
                src="/assets/img/office.jpg"
                alt="Office Preparation"
                className="w-full max-h-96 rounded-md object-cover"
              />
            </div>

            <div className="col-span-1 md:col-span-2 gap-8 max-h-96 min-h-96 w-full flex flex-col items-center justify-center text-center">
              <p className="text-center text-muted-foreground">
                Transform the way you prepare, gain confidence, and boost your
                chances of landing your dream job. Let AI be your edge in
                today&apos;s competitive job market.
              </p>

              <Link to="/generate" className="w-full">
                <Button className="w-3/4">
                  Generate <Sparkles className="ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HomePage;
