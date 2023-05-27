import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";

export default function Contents() {
  return (
    <>
    <div className="relative">
    <input type="text" placeholder="Type here" className="input input-ghost w-full" />
    <button className="btn btn-ghost btn-circle absolute right-2.5">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>
    </div>
    </>
  );
}
