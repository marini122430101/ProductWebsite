import SectionTitle from "../components/SectionTitle";
import produkImg from "../assets/produk.png";
import { Github } from "lucide-react";

export default function Repository() {
  return (
    <div className="pt-24 max-w-5xl mx-auto px-6">
      <SectionTitle title="Repository" />

      {/* PRODUCT VISUAL */}
      <div className="relative group">
        <img
          src={produkImg}
          className="w-full h-64 object-cover rounded-2xl shadow-lg transition duration-300 group-hover:scale-[1.02]"
        />

        <div className="absolute inset-0 bg-black/20 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300"></div>
      </div>

      {/* REPOSITORY CARD */}
      <div className="bg-white mt-10 p-8 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition duration-300">
        <div className="flex items-center gap-4">
          <div className="bg-gray-900 text-white p-4 rounded-xl shadow">
            <Github size={32} />
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900">
              GitHub Repository
            </h2>
            <p className="text-gray-600 text-sm mt-1">
              Anda dapat mengakses kode sumber project ini melalui link di bawah.
            </p>
          </div>
        </div>

        {/* CTA */}
        <a
          href="#"
          target="_blank"
          className="inline-block mt-6 bg-indigo-600 text-white px-6 py-3 rounded-xl 
          shadow-md hover:bg-indigo-700 hover:shadow-lg transition duration-300"
        >
          Visit Repository
        </a>
      </div>
    </div>
  );
}
