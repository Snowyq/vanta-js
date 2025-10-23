import Fog from "./fog";

export default function Home() {
  return (
    <>
      <div
        className={"relative w-full h-screen flex justify-center items-center "}
      >
        <h1 className="text-white font-bold text-8xl ">AMOK STUDIO</h1>
        <div className="absolute inset-0 -z-10 ">
          <Fog />
        </div>
      </div>
      <div className="h-[300vh]"></div>
    </>
  );
}
