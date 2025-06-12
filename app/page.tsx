import Image from "next/image";
import SocialLinks from "@/components/SocialLinks";

export default function Home() {
  return (
    <div className="flex items-center justify-center w-full min-h-screen bg-gradient-to-tr p-5 pb-20 sm:p-2 font-[family-name:var(--font-geist-sans)]">
      {/* <div className="min-w-2 w-full border-r-neutral-800 border-1 h-f"></div> */}
      <div className="bg-neutral-800 flex justify-center rounded-4xl w-full max-w-lg flex-col items-center pt-8 p-6 gap-2.5">
        <Image className="rounded-4xl" width={120} height={120} src={"/jp.jpg"} alt={"avatar"}/>
        <h1 className="text-center text-2xl font-medium tracking-tight">João Pedro Magalhães</h1>
        <h2 className="text-center text-neutral-400 font-medium tracking-tight">Designer & Developer</h2>
        <SocialLinks></SocialLinks>
      </div>
    </div>
  );
}
