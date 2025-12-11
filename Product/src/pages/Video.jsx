import SectionTitle from "../components/SectionTitle";
import DemoVideo from "../assets/videoyt.mp4";

export default function Video() {
  return (
    <div
      className="
        relative w-full min-h-screen 
        bg-gradient-to-b from-white via-green-100 to-green-200 
        pt-25 pb-20 px-6 overflow-hidden
      "
    >
      {/* Floating background decorations */}
      <div className="absolute top-16 left-10 w-36 h-36 bg-green-300/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-16 right-10 w-48 h-48 bg-green-400/25 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto">
        <SectionTitle title="Video" />

        {/* VIDEO + DESCRIPTION IN ROW */}
        <div className="mt-5 flex flex-col lg:flex-row gap-10 items-start">

          {/* VIDEO PLAYER */}
          <div
            className="
              bg-white/60 backdrop-blur-md border border-green-100 shadow-xl 
              rounded-2xl p-4 flex-1 max-w-3xl
            "
          >
            <video
              src={DemoVideo}
              controls
              className="w-full max-w-4xl rounded-xl shadow-lg"
            ></video>
          </div>

          {/* DESCRIPTION */}
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-green-900">
              Penjelasan Singkat
            </h3>

            <p className="mt-3 text-green-900/70 leading-relaxed text-lg">
              Berikut merupakan video dari cara kerja produk kami. 
              Video ini menunjukkan alur proses, fitur utama, dan bagaimana 
              produk ini digunakan dalam situasi nyata.
            </p>

            <p className="mt-6 text-green-800 font-semibold text-lg">
              Tonton versi YouTube:
            </p>

            <a
              href="https://youtu.be/A-m0-y2ZKJU?si=ovZL6hDemjvxaXaR"
              target="_blank"
              className="
                inline-block mt-1 text-green-700 underline 
                hover:text-green-900 transition font-medium
              "
            >
              https://youtu.be/A-m0-y2ZKJU?si=ovZL6hDemjvxaXaR
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
