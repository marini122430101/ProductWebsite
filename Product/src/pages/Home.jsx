import produkImg from "../assets/produk.png";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-white to-slate-50 pt-28 pb-20 px-6">
      
      {/* Container */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">

        {/* Left Content */}
        <div 
          className="flex-1 animate-slideInLeft"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Welcome to Our Product
          </h1>

          <p className="mt-4 text-lg text-gray-600 max-w-lg">
            Kami menghadirkan solusi digital modern yang informatif, interaktif, dan mudah digunakan.
            Temukan deskripsi produk, dokumentasi, demo video, dan informasi tim pengembang di website ini.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex gap-4">
            <a 
              href="/Documentation"
              className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl shadow-md hover:bg-indigo-700 transition-all"
            >
              Lihat Dokumentasi
            </a>

            <a 
              href="/Description"
              className="px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-100 transition-all"
            >
              Tentang Produk
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div 
          className="flex-1 flex justify-center animate-slideInRight"
        >
          <img 
            src={produkImg} 
            alt="Produk"
            className="w-[350px] md:w-[450px] rounded-2xl shadow-xl hover:scale-105 transition-all duration-300"
          />
        </div>

      </div>
    </div>
  );
}
