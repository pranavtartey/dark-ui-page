import HelixIage from "@/app/assets//images/helix2.png"
import EmojiStar from "@/app/assets/images/emojistar.png"
import Image from "next/image";

export const CallToAction = () => {
  return (
    <section className="bg-black text-white sm:py-24 py-[72px] overflow-hidden">
      <div className="container max-w-xl relative">
        <Image src={HelixIage} alt="" className="absolute top-6 left-[calc(100%+36px)]" />
        <Image src={EmojiStar} alt="" className="absolute -top-[120px] right-[calc(100%+24px)]" />
        <h2 className="font-bold text-5xl tracking-tighter text-center">Get instant access</h2>
        <p className="text-xl text-center text-white/70 mt-5">
          Celebrate the joy of accomplishment with an app designed to track your
          progress and motivate your efforts.
        </p>

        <form className="mt-10 flex max-sm:flex-col gap-2.5 max-w-sm mx-auto">
          <input className="h-12 bg-white/20 rounded-lg px-5 font-medium placeholder:text-white/50 sm:flex-1" type="email" placeholder="your@email.com" />
          <button className="bg-white text-black h-12 rounded-lg px-5">Get access</button>
        </form>
      </div>
    </section>
  );
};
