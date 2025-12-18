import SectionTitle from "../components/SectionTitle";
import Logo from "../assets/logo.png";
import { Github, ArrowRight } from "lucide-react";

export default function Repository() {
  return (
    <div className="pt-22 max-w-5xl mx-auto px-6">
      <SectionTitle title="Repository" />
      <div className="absolute -top-32 -left-20 w-[400px] h-[400px] bg-emerald-800 rounded-full blur-[150px]" />
      <div className="absolute -top- -left-20 w-[400px] h-[400px] bg-emerald-800 rounded-full blur-[150px]" />
      <div className="absolute top-1/2 -right-40 w-[450px] h-[450px] bg-yellow-500 rounded-full blur-[250px]" />
      <div className="absolute top-1 -right-40 w-[450px] h-[450px] bg-yellow-500 rounded-full blur-[250px]" />
      <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-teal-800 rounded-full blur-[200px]" />

      {/* PRODUCT VISUAL */}
      <div className="relative group mt-5">
        <img
          src={Logo}
          alt="Product Preview"
          className="w-full h-64 md:h-72 object-cover rounded-2xl shadow-lg 
          transition-all duration-300 group-hover:scale-[1.02]"
        />

        {/* OVERLAY */}
        <div
          className="absolute inset-0 rounded-2xl bg-black/10 opacity-0 
          group-hover:opacity-100 transition duration-300"
        ></div>

        {/* LABEL */}
        <div
          className="absolute bottom-4 left-4 bg-white/70 backdrop-blur-md 
          px-4 py-2 rounded-xl text-gray-800 font-medium shadow-md
          opacity-0 group-hover:opacity-100 transition-all duration-300"
        >
          Preview Produk
        </div>
      </div>

      {/* REPOSITORY CARD */}
      <div
        className="bg-white mt-5 p-8 rounded-2xl shadow-lg border border-gray-200 
        hover:shadow-xl transition-all duration-300"
      >
        <div className="flex items-center gap-4">
          {/* ICON BOX */}
          <div
            className="bg-gray-900 text-white p-4 rounded-xl shadow 
            transition duration-300 group hover:scale-105"
          >
            <Github size={32} />
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900">
              GitHub Repository
            </h2>
            <p className="text-black font-semibold text-sm mt-1">
              Anda dapat mengakses kode sumber project ini melalui link di bawah.
            </p>
          </div>
        </div>

        {/* CTA BUTTON */}
        <a
          href="https://github.com/marini122430101/ProductWebsite" 
          target="_blank"
          className="inline-flex items-center gap-2 mt-6 bg-indigo-600 text-white 
          px-6 py-3 rounded-xl shadow-md hover:bg-indigo-700 hover:shadow-lg 
          transition-all duration-300 group"
        >
          Visit Repository
          <ArrowRight
            size={20}
            className="opacity-80 group-hover:translate-x-1 transition"
          />
        </a>
      </div>
    </div>
  );
}
