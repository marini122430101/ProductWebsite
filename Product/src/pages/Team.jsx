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

        {/* FOOTER - CONTACT PERSON */}
        <footer className="mt-16 pt-12 pb-8 border-t border-gray-200/50">
          <div className="max-w-4xl mx-auto">
            {/* Title */}
            <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
              Contact Person
            </h3>

            {/* Contact Cards Grid */}
            <div className="grid md:grid-cols-3 gap-6">
              
              {/* Contact 1 - Marini */}
              <div className="bg-white/70 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
                <div className="text-center">
                  <h4 className="font-bold text-lg text-gray-800 mb-3">Marini F. Situmorang</h4>
                  <div className="space-y-2 text-sm text-gray-700">
                    <div className="flex items-center justify-center gap-2">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                      </svg>
                      <span>marini122430101@student.itera.ac.id</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                      </svg>
                      <span>+62 822-1704-0353</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact 2 - Herlita (Ketua Tim) */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border-2 border-green-200">
                <div className="text-center">
                  <div className="inline-block bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-2">
                    Ketua Tim
                  </div>
                  <h4 className="font-bold text-lg text-gray-800 mb-3">Herlita Putri F. Sidabalok</h4>
                  <div className="space-y-2 text-sm text-gray-700">
                    <div className="flex items-center justify-center gap-2">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                      </svg>
                      <span>herlita122430096@student.itera.ac.id</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                      </svg>
                      <span>+62 823-7719-7398</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact 3 - Rahma */}
              <div className="bg-white/70 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
                <div className="text-center">
                  <h4 className="font-bold text-lg text-gray-800 mb-3">Rahma Aulia Ramdani</h4>
                  <div className="space-y-2 text-sm text-gray-700">
                    <div className="flex items-center justify-center gap-2">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                      </svg>
                      <span>rahma430136@student.itera.ac.id</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                      </svg>
                      <span>+62 877-1851-8295</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Copyright */}
            <div className="mt-10 text-center text-sm text-gray-600">
              <p>© 2025 Healvire Team. All rights reserved.</p>
              <p className="mt-1">Institut Teknologi Sumatera</p>
            </div>
          </div>
        </footer>

      </div>
    </div>
  );
}
