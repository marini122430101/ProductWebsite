import Logo from "../assets/logo.png";

export default function Home() {
  return (
    <div className="relative w-full min-h-screen bg-gradient-to-b from-white via-slate-100 to-slate-200 pt-28 pb-20 px-6 overflow-hidden">

      {/* 🔵 Background Decorative Blobs */}
      <div className="absolute -top-32 -left-20 w-[400px] h-[400px] bg-emerald-800 rounded-full blur-[50px]" />
      <div className="absolute -top- -left-20 w-[400px] h-[400px] bg-emerald-800 rounded-full blur-[50px]" />
      <div className="absolute top-1/2 -right-40 w-[450px] h-[450px] bg-yellow-500 rounded-full blur-[150px]" />
      <div className="absolute top-1 -right-40 w-[450px] h-[450px] bg-yellow-500 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-teal-800 rounded-full blur-[90px]" />

      {/* 🔶 Soft Grid Overlay (modern premium style) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.4),rgba(255,255,255,0)),linear-gradient(to_right,rgba(255,255,255,0.25),rgba(255,255,255,0))] pointer-events-none" />

      {/* Content Container */}
      <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">

        {/* Left Content */}
        <div className="flex-1 animate-slideInLeft">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight 
            bg-gradient-to-r from-green-800 via-emerald-600 to-teal-500 
            text-transparent bg-clip-text drop-shadow-md tracking-tight">
            Healvire
          </h1>


          <div className="mt-4 text-lg text-gray-700 max-w-2xl leading-relaxed space-y-4">
            <p className="font-medium">
              Healvire mengintegrasikan tiga mekanisme kunci penyembuhan luka dalam satu plester:
            </p>
            
            <div className="space-y-3 pl-2">
              <div>
                <p className="font-semibold text-green-800">1. Regenerasi Jaringan yang Lebih Optimal</p>
                <p className="mt-1">
                  Ekstrak ikan gabus dikenal kaya akan protein albumin dan asam amino esensial yang mendukung 
                  proses epitelisasi dan pembentukan jaringan baru. Bahan bioaktif ini membantu memulihkan 
                  struktur kulit lebih cepat dan lebih kuat.
                </p>
              </div>

              <div>
                <p className="font-semibold text-green-800">2. Perlindungan Antimikroba Alami</p>
                <p className="mt-1">
                  Kandungan antimikroba dalam madu membantu menekan pertumbuhan bakteri penyebab infeksi, 
                  menjaga luka tetap bersih tanpa mengiritasi kulit sensitif penderita diabetes.
                </p>
              </div>

              <div>
                <p className="font-semibold text-green-800">3. Moist Wound Healing yang Stabil dan Aman</p>
                <p className="mt-1">
                  Matriks polyvinyl alcohol (PVA) menghasilkan lingkungan lembap yang stabil, memfasilitasi 
                  migrasi sel, mengurangi rasa sakit, dan mempercepat penutupan luka. PVA juga memberikan 
                  struktur plester yang nyaman, fleksibel, dan higienis.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="mt-8 flex gap-4">
            <a 
              href="/Documentation"
              className="px-6 py-3 bg-green-700 text-white font-semibold rounded-xl shadow-lg shadow-green-200 hover:bg-green-800 transition-all"
            >
              Lihat Dokumentasi
            </a>

            <a 
              href="/Description"
              className="px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-xl bg-white/60 backdrop-blur-sm hover:bg-white/80 transition-all shadow"
            >
              Tentang Produk
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center animate-slideInRight">
          <img 
            src={Logo} 
            alt="logo.png"
            className="w-[350px] md:w-[450px] rounded-2xl shadow-2xl hover:scale-105 transition-all duration-300 bg-white/50 backdrop-blur-md"
          />
        </div>

      </div>
    </div>
  );
}
