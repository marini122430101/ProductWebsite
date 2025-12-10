import SectionTitle from "../components/SectionTitle";
import produkImg from "../assets/produk.png";

export default function Documentation() {
  return (
    <div className="pt-24 max-w-6xl mx-auto px-6">
      <SectionTitle title="Documentation" />

      <div className="space-y-16">

        {/* Gambar Produk */}
        <div>
          <h3 className="text-xl font-semibold text-indigo-600 mb-3">
            Overview Dokumentasi
          </h3>

          <img
            src={produkImg}
            className="w-full h-72 object-cover rounded-xl shadow-lg border border-indigo-100"
            alt="produk"
          />
        </div>

        {/* =============================
            STEP 1
        ============================== */}
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Placeholder Image */}
          <div className="bg-gray-200 h-72 rounded-xl shadow-inner animate-pulse"></div>

          {/* Text */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              Proses 1 — Judul Proses
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Tulis penjelasan detail mengenai proses pertama. 
              Nantinya bagian ini berisi deskripsi lengkap mengenai langkah
              yang terjadi pada produk Anda.
            </p>
          </div>
        </div>

        {/* =============================
            STEP 2
        ============================== */}
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Swap posisi (text kiri – image kanan) */}
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              Proses 2 — Judul Proses
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Tulis deskripsi yang menjelaskan proses kedua. 
              Gambar di samping akan diganti nanti sesuai dokumentasi asli produk Anda.
            </p>
          </div>

          {/* Placeholder Image */}
          <div className="bg-gray-200 h-72 rounded-xl shadow-inner animate-pulse order-1 md:order-2"></div>
        </div>

        {/* =============================
            STEP 3 (Optional)
        ============================== */}
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Placeholder */}
          <div className="bg-gray-200 h-72 rounded-xl shadow-inner animate-pulse"></div>

          {/* Text */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              Proses 3 — Judul Proses
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Tambahkan proses ketiga atau proses tambahan lainnya jika diperlukan.
              Semua placeholder ini dapat diganti gambar asli saat dokumentasi sudah siap.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
