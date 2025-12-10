import SectionTitle from "../components/SectionTitle";

export default function Video() {
  return (
    <div className="pt-24 max-w-5xl mx-auto px-6">
      <SectionTitle title="Video Demo" />

      {/* VIDEO PLACEHOLDER */}
      <div className="w-full bg-gray-200 h-80 rounded-xl shadow-lg flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M14.752 11.168l-5.197-3.023A1 1 0 008 9.012v6.045a1 1 0 001.555.848l5.197-3.023a1 1 0 000-1.714z"
              />
            </svg>
          </div>
          <p className="text-gray-500 mt-3">
            Video belum tersedia — placeholder
          </p>
        </div>
      </div>

      {/* DESCRIPTION + YT LINK */}
      <div className="mt-10">
        <h3 className="text-xl font-semibold text-gray-800">
          Penjelasan Singkat
        </h3>
        <p className="mt-2 text-gray-600 leading-relaxed">
          Ini adalah demo video yang akan menampilkan cara kerja produk Anda.
          Setelah video asli sudah dibuat, Anda dapat mengganti placeholder di atas
          dengan elemen video sebenarnya.
        </p>

        {/* YOUTUBE LINK */}
        <p className="mt-4 text-indigo-600 font-medium">
          Lihat Video di YouTube:
        </p>
        <a
          href="#"
          target="_blank"
          className="text-indigo-500 underline hover:text-indigo-700"
        >
          (Link YouTube akan ditampilkan di sini)
        </a>
      </div>
    </div>
  );
}
