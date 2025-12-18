import SectionTitle from "../components/SectionTitle";
import Img1 from "../assets/tim1.png";
import Img2 from "../assets/tim2.png";
import Img3 from "../assets/tim3.png";
import DosenImg from "../assets/dosen.png"; // sesuaikan gambar dosennya

export default function Team() {
  const teamMembers = [
    { name: "Marini F. Situmorang (122430101)", role: "Anggota", img: Img2 },
    { name: "Herlita Putri F. Sidabalok (122430096)", role: "Ketua Tim", img: Img1 },
    { name: "Rahma Aulia Ramdani (122430136)", role: "Anggota", img: Img3 },
  ];

  return (
    <div className="relative min-h-screen w-full overflow-hidden">

      {/* ============================
          FULL PAGE BACKGROUND BLOBS
      ============================= */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-emerald-700 rounded-full blur-[180px] opacity-40" />
        <div className="absolute top-1/3 -right-40 w-[550px] h-[550px] bg-yellow-400 rounded-full blur-[200px] opacity-40" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-teal-600 rounded-full blur-[180px] opacity-40" />
      </div>

      {/* ============================
               CONTENT BOX
      ============================= */}
      <div className="pt-22 pb-24 max-w-7xl mx-auto px-6 relative z-10">
        <SectionTitle title="About Us" />

        {/* GRID 3 CARD */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1 mt-3 justify-items-center">

          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="
                bg-white/90 backdrop-blur-xl
                rounded-3xl p-8 shadow-[0_8px_30px_rgba(0,0,0,0.08)]
                hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)]
                transition-all duration-300 
                hover:-translate-y-2
                text-center w-80 h-70
              "
            >
              {/* PHOTO */}
              <div className="relative mx-auto w-32 h-32">
                <div className="
                  absolute inset-0 rounded-full 
                  bg-gradient-to-br from-green-300 via-emerald-400 to-teal-500 
                  blur-md opacity-6
                "></div>

                <img
                  src={member.img}
                  alt={member.name}
                  className="
                    w-32 h-32 object-cover rounded-full 
                    border-[4px] border-blue-200 shadow-lg 
                    relative z-10
                  "
                />
              </div>

              <h3 className="mt-6 text-xl font-bold text-gray-800">{member.name}</h3>
              <p className="mt-1 text-indigo-600 font-semibold">{member.role}</p>
            </div>
          ))}

        </div>

        {/* CARD DOSEN */}
        <div className="flex justify-center mt-5">
          <div
            className="
              bg-white/90 backdrop-blur-xl
              rounded-3xl p-8 shadow-[0_8px_30px_rgba(0,0,0,0.08)]
              hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)]
              transition-all duration-300 
              hover:-translate-y-2
              text-center w-117 h-67
            "
          >
            <div className="relative mx-auto w-32 h-32">
              <div className="
                absolute inset-0 rounded-full 
                bg-gradient-to-br from-green-300 via-emerald-400 to-teal-500 
                blur-md opacity-60
              "></div>

              <img
                src={DosenImg}
                alt="Dosen Pengampu"
                className="
                  w-32 h-32 object-cover rounded-full 
                  border-[4px] border-teal-200 shadow-lg 
                  relative z-10
                "
              />
            </div>

            <h3 className="mt-6 text-xl font-bold text-gray-800">Sekar Asri Tresnaningtyas, S.Si., M.Biomed.</h3>
            <p className="mt-1 text-indigo-600 font-semibold">Pembimbing Mata Kuliah</p>
          </div>
        </div>

      </div>
    </div>
  );
}
