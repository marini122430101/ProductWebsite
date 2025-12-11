import SectionTitle from "../components/SectionTitle";
import Logo from "../assets/logo.png";

export default function Documentation() {
  return (
    <div className="
      relative w-full min-h-screen 
      bg-gradient-to-b from-white via-green-100 to-green-200
      pt-28 pb-20 px-6 overflow-hidden
    ">

      {/* Floating background decorations */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-teal-800 rounded-full blur-3xl"></div>
      <div className="absolute top-10 right-10 w-40 h-40 bg-teal-800 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-green-400 rounded-full blur-3xl"></div>

      <div className="relative max-w-6xl mx-auto">
        
        {/* TITLE */}
        <SectionTitle title="Documentation" />

        <div className="space-y-20 mt-10">

          {/* ===== Gambar Produk ===== */}
          <div className="bg-white/60 backdrop-blur-lg p-6 rounded-3xl shadow-xl border border-green-100">
            <img
              src={Logo}
              className="w-full h-72 object-cover rounded-xl shadow-lg"
              alt="produk"
            />
          </div>

          {/* ===== STEP 1 ===== */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            
            {/* Placeholder img */}
            <div className="
              h-72 rounded-2xl shadow-lg 
              bg-white/50 backdrop-blur-md border border-green-100 
              animate-pulse
            "></div>

            {/* Text */}
            <div>
              <h3 className="text-3xl font-bold text-green-900 mb-2">
                Proses 1 — Judul Proses
              </h3>
              <p className="text-green-900/70 leading-relaxed text-lg">
                Tulis penjelasan detail mengenai proses pertama. 
                Nantinya bagian ini berisi deskripsi lengkap mengenai langkah
                yang terjadi pada produk Anda.
              </p>
            </div>
          </div>

          {/* ===== STEP 2 ===== */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            
            {/* Text kiri */}
            <div className="order-2 md:order-1">
              <h3 className="text-3xl font-bold text-green-900 mb-2">
                Proses 2 — Judul Proses
              </h3>
              <p className="text-green-900/70 leading-relaxed text-lg">
                Tulis deskripsi yang menjelaskan proses kedua. Gambar di samping
                akan diganti nanti sesuai dokumentasi asli produk Anda.
              </p>
            </div>

            {/* Placeholder img */}
            <div className="
              h-72 rounded-2xl shadow-lg 
              bg-white/50 backdrop-blur-md border border-green-100 
              animate-pulse order-1 md:order-2
            "></div>
          </div>

          {/* ===== STEP 3 ===== */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            
            <div className="
              h-72 rounded-2xl shadow-lg 
              bg-white/50 backdrop-blur-md border border-green-100 animate-pulse
            "></div>

            <div>
              <h3 className="text-3xl font-bold text-green-900 mb-2">
                Proses 3 — Judul Proses
              </h3>
              <p className="text-green-900/70 leading-relaxed text-lg">
                Tambahkan proses ketiga atau proses tambahan lainnya jika diperlukan.
                Semua placeholder ini dapat diganti gambar asli saat dokumentasi sudah siap.
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
