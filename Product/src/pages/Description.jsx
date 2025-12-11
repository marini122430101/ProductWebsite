import Logo from "../assets/logo.png";

export default function Description() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-green-50/40 to-slate-50 pt-25 pb-20 px-6 relative">

      {/* Floating Background Decorations */}
      <div className="absolute -top-32 -left-20 w-[400px] h-[400px] bg-green-500 rounded-full blur-[120px]" />
      <div className="absolute top-1/2 -right-40 w-[450px] h-[450px] bg-yellow-500 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-1/3 w-[350px] h-[350px] bg-teal-800 rounded-full blur-[130px]" />

      {/* Title */}
      <div className="text-center mb-5 animate-slideInLeft relative z-10">
        <h1
          className="text-4xl md:text-5xl font-extrabold leading-tight 
          bg-gradient-to-r from-green-800 via-emerald-600 to-teal-500 
          text-transparent bg-clip-text drop-shadow-md tracking-tight"
        >
          Product Description
        </h1>
      </div>

      {/* Content Card */}
      <div
        className="
          max-w-6xl mx-auto bg-white/90 backdrop-blur-xl 
          rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.08)] 
          p-6 md:p-10
          animate-slideInRight relative z-10
        "
      >

        {/* FLEX ROW: Image Left, Description Right */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10">

          {/* Image */}
          <div className="flex-1 flex justify-center">
            <img
              src={Logo}
              alt="Product"
              className="
                rounded-2xl shadow-xl max-h-[360px] object-contain 
                transition-all duration-300 hover:scale-105
              "
            />
          </div>

          {/* Description */}
          <div className="flex-1 text-gray-700 leading-relaxed text-justify space-y-5 text-[1.07rem]">
            <p>
              Ini merupakan deskripsi lengkap mengenai produk Healvire. Tuliskan manfaat,
              tujuan penggunaan, dan bagaimana produk ini bekerja untuk memberikan nilai
              terbaik kepada pengguna.
            </p>

            <p>
              Anda dapat menambahkan fitur unggulan, bahan utama, teknologi yang digunakan,
              serta keunggulan yang membedakan produk ini dari kompetitor di pasaran.
            </p>

            <p>
              Informasi yang jelas, terstruktur, dan menarik akan memudahkan pengguna
              memahami kualitas serta potensi produk yang Anda buat.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
