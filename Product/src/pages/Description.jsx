import produkImg from "../assets/produk.png";

export default function Description() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white pt-24 pb-20 px-6">

      {/* Title */}
      <div className="text-center mb-10 animate-fadeIn">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800">
          Product Description
        </h1>
        <div className="mx-auto mt-2 w-24 h-1 bg-indigo-500 rounded-full"></div>
        <p className="text-gray-600 mt-2 text-sm md:text-base">
          Detail informasi lengkap mengenai produk Anda
        </p>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-6 md:p-10 animate-slideUp">

        {/* Image */}
        <div className="flex justify-center">
          <img
            src={produkImg}
            alt="Product"
            className="rounded-2xl shadow-lg max-h-[420px] object-cover transition-all duration-300 hover:scale-[1.03]"
          />
        </div>

        {/* Description Text */}
        <div className="mt-8 text-gray-700 leading-relaxed text-justify">
          <p>
            Ini merupakan deskripsi lengkap mengenai produk Anda. Tuliskan manfaat, tujuan,
            dan cara kerja produk untuk menjelaskan nilai yang ditawarkan kepada pengguna.
          </p>

          <p className="mt-4">
            Anda dapat menambahkan informasi seperti fitur unggulan, teknologi yang digunakan,
            keunggulan dibanding kompetitor, serta alasan mengapa produk ini layak digunakan
            oleh target pengguna.
          </p>

          <p className="mt-4">
            Semakin jelas dan menarik deskripsi yang disampaikan, semakin mudah pengguna
            memahami kualitas dan potensi dari produk yang Anda buat.
          </p>
        </div>

      </div>
    </div>
  );
}
