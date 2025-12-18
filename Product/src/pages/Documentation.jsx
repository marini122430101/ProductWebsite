import SectionTitle from "../components/SectionTitle";
import Logo from "../assets/logo.png";
import Dokumen1 from "../assets/dokumen1.jpeg";
import Dokumen2 from "../assets/dokumen2.jpeg";
import Dokumen3 from "../assets/dokumen3.jpeg";
import Dokumen4 from "../assets/dokumen4.jpeg";
import Dokumen5 from "../assets/dokumen5.jpeg";
import Dokumen6 from "../assets/dokumen6.jpeg";
import Dokumen7 from "../assets/dokumen7.jpeg";
import Dokumen8 from "../assets/dokumen8.jpeg";
import Dokumen9 from "../assets/dokumen9.jpeg";

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
            
            {/* Gambar */}
            <img
              src={Dokumen1}
              alt="Proses 1"
              className="h-full w-full object-cover rounded-2xl shadow-lg border border-green-100"
            />

            {/* Text */}
            <div>
              <h3 className="text-3xl font-bold text-green-900 mb-2">
                Proses 1 — Pengukuran Alat dan Bahan
              </h3>
              <p className="text-grey-900/70 leading-relaxed text-lg">
                Pada tahap ini dilakukan proses penyiapan seluruh bahan yang akan digunakan dalam pembuatan film biopolimer. 
                Bahan-bahan yang digunakan meliputi gelatin dari kulit ikan gabus, PVA, madu steril, gliserin, dan aquades. Masing-masing bahan ditimbang menggunakan timbangan digital dengan ketelitian tinggi sesuai komposisi yang telah ditentukan dalam formulasi. 
                Tahap ini bertujuan untuk memastikan rasio antar bahan tetap konsisten agar hasil film yang diperoleh memiliki karakteristik fisik dan mekanik yang sesuai dengan yang diharapkan.
              </p>
            </div>
          </div>

          {/* ===== STEP 2 ===== */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            
            {/* Text kiri */}
            <div className="order-2 md:order-1">
              <h3 className="text-3xl font-bold text-green-900 mb-2">
                Proses 2 — Pelarutan Biopolimer
              </h3>
              <p className="text-grey-900/70 leading-relaxed text-lg">
                Tahap selanjutnya adalah pembuatan larutan biopolimer, di mana proses pencampuran dilakukan menggunakan electromagnetic heating mixer. Gelatin dan PVA terlebih dahulu dilarutkan dalam aquades pada suhu terkontrol agar larut sempurna dan menghasilkan larutan homogen. 
                Setelah kedua bahan utama tercampur dengan baik, madu steril dan gliserin ditambahkan secara perlahan sambil diaduk. 
                Madu berfungsi sebagai agen bioaktif alami dengan efek antibakteri dan penyembuh luka, sedangkan gliserin berperan sebagai plasticizer untuk meningkatkan elastisitas film.
              </p>
            </div>

            {/* Gambar */}
            <img
              src={Dokumen2}
              alt="Proses 2"
              className="h-72 w-full object-cover rounded-2xl shadow-lg border border-green-100 order-1 md:order-2"
            />
          </div>

          {/* ===== STEP 3 ===== */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            
            {/* Gambar */}
            <img
              src={Dokumen3}
              alt="Proses 3"
              className="h-72 w-full object-cover rounded-2xl shadow-lg border border-green-100"
            />

            {/* Text */}
            <div>
              <h3 className="text-3xl font-bold text-green-900 mb-2">
                Proses 3 — Pencetakan film
              </h3>
              <p className="text-grey-900/70 leading-relaxed text-lg">
                Setelah larutan biopolimer terbentuk dengan baik, proses dilanjutkan dengan pencetakan film menggunakan cetakan datar yang bersih dan halus. Larutan dituangkan secara perlahan ke dalam cetakan untuk mencegah terbentuknya gelembung udara dan memastikan ketebalan film yang merata di seluruh permukaan. Proses ini dilakukan di lingkungan yang bersih agar film yang dihasilkan tidak terkontaminasi partikel asing. Tahap ini sangat penting karena ketidakteraturan pada saat pencetakan dapat memengaruhi kualitas dan kekuatan mekanik film yang dihasilkan.
              </p>
            </div>
          </div>

          {/* ===== STEP 4 ===== */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            
            {/* Text kiri */}
            <div className="order-2 md:order-1">
              <h3 className="text-3xl font-bold text-green-900 mb-2">
                Proses 4 — Pengeringan Film
              </h3>
              <p className="text-grey-900/70 leading-relaxed text-lg">
                Film yang telah dicetak kemudian dikeringkan menggunakan oven inkubator pada suhu terkontrol selama beberapa jam. Proses pengeringan dilakukan secara bertahap untuk memastikan air dalam larutan menguap secara merata tanpa menyebabkan retakan atau perubahan struktur pada film. Pengeringan yang baik akan menghasilkan film dengan permukaan halus, transparan, serta mudah dilepaskan dari cetakan. Tahapan ini juga bertujuan untuk mendapatkan film dengan kadar air yang stabil sebelum dilakukan uji karakterisasi lanjutan.
              </p>
            </div>

            {/* Gambar */}
            <img
              src={Dokumen4}
              alt="Proses 4"
              className="h-72 w-full object-cover rounded-2xl shadow-lg border border-green-100 order-1 md:order-2"
            />
          </div>

          {/* ===== STEP 5 ===== */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            
            {/* Gambar */}
            <img
              src={Dokumen5}
              alt="Proses 5"
              className="h-72 w-full object-cover rounded-2xl shadow-lg border border-green-100"
            />

            {/* Text */}
            <div>
              <h3 className="text-3xl font-bold text-green-900 mb-2">
                Proses 5 — Pengujian Awal Film
              </h3>
              <p className="text-grey-900/70 leading-relaxed text-lg">
                Setelah proses pengeringan selesai, film biopolimer dilepaskan dengan hati-hati dari cetakan agar tidak rusak. Film yang dihasilkan kemudian diuji ketebalannya menggunakan mikrometer digital untuk memastikan keseragaman antar sampel. Pengukuran ketebalan ini penting karena memengaruhi sifat mekanik, fleksibilitas, serta kemampuan film dalam menyerap cairan luka. Film yang dihasilkan pada tahap ini memiliki karakteristik elastis, tidak mudah robek, dan siap untuk tahap uji selanjutnya.
              </p>
            </div>
          </div>

          {/* ===== STEP 6 ===== */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            
            {/* Text kiri */}
            <div className="order-2 md:order-1">
              <h3 className="text-3xl font-bold text-green-900 mb-2">
                Proses 6 — Uji Karakterisrik Fisik (Ketebalan)
              </h3>
              <p className="text-grey-900/70 leading-relaxed text-lg">
                Uji ketebalan dilakukan untuk memastikan bahwa film biopolimer yang dihasilkan memiliki ketebalan yang seragam dan sesuai dengan kebutuhan fungsional sebagai wound dressing untuk luka diabetes. Ketebalan film diukur menggunakan mikrometer digital pada lima titik berbeda untuk memastikan homogenitas struktur film. Berdasarkan hasil pengujian, film memiliki ketebalan rata-rata sekitar 1 mm dengan variasi antartitik yang sangat kecil, menandakan bahwa proses pencampuran larutan gelatin-PVA-
                madu steril dan teknik pencetakan (solvent casting) berhasil menghasilkan matriks polimer yang merata. Ketebalan ini dianggap ideal karena memberikan keseimbangan antara fleksibilitas dan kekuatan mekanik. Film yang terlalu tipis akan mudah robek terutama saat diaplikasikan pada luka diabetik yang memiliki kontur tidak rata, sementara film yang terlalu tebal dapat menghambat difusi oksigen dan mengurangi kenyamanan pasien. Ketebalan seragam juga membantu menjaga kemampuan film dalam mempertahankan kelembapan dan mengontrol laju penyerapan eksudat, yang sangat diperlukan dalam penyembuhan luka diabetes
              </p>
            </div>

            {/* Gambar */}
            <img
              src={Dokumen6}
              alt="Proses 6"
              className="h-72 w-full object-cover rounded-2xl shadow-lg border border-green-100 order-1 md:order-2"
            />
          </div>

          {/* ===== STEP 7 ===== */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            
            {/* Gambar */}
            <img
              src={Dokumen7}
              alt="Proses 7"
              className="h-72 w-full object-cover rounded-2xl shadow-lg border border-green-100"
            />

            {/* Text */}
            <div>
              <h3 className="text-3xl font-bold text-green-900 mb-2">
                Proses 7 — Uji Stabilitas Produk
              </h3>
              <p className="text-grey-900/70 leading-relaxed text-lg">
                Uji stabilitas bertujuan untuk mengetahui ketahanan fisik dan kimia film selama penyimpanan pada kondisi lingkungan yang umum untuk produk wound dressing. Film disimpan pada suhu 25–37°C dan kelembapan relatif sekitar 60% selama enam bulan untuk menilai potensi perubahan warna, tekstur, kekuatan mekanik, dan integritas strukturalnya. Hasil pengujian menunjukkan bahwa film tetap stabil sepanjang periode penyimpanan tanpa menunjukkan tanda-tanda degradasi seperti perubahan warna menjadi lebih gelap, munculnya retak halus, atau tekstur yang menjadi rapuh. Warna film tetap kekuningan alami akibat kandungan madu steril, dan tidak terjadi pemisahan fase antara gelatin dan PVA.
                Stabilitas ini penting karena menunjukkan bahwa komponen bioaktif madu tetap terjaga, sementara matriks polimer tetap kuat dan tidak mengalami proses autodegradasi yang dapat menurunkan kualitas wound dressing. Dengan stabilitas yang baik, film ini berpotensi dikemas dan disimpan dalam jangka panjang tanpa kehilangan fungsi klinisnya, sehingga layak dikembangkan sebagai produk wound dressing komersial.
              </p>
            </div>
          </div>

          {/* ===== STEP 8 ===== */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            
            {/* Text kiri */}
            <div className="order-2 md:order-1">
              <h3 className="text-3xl font-bold text-green-900 mb-2">
                Proses 8 — Uji Swelling
              </h3>
              <p className="text-grey-900/70 leading-relaxed text-lg">
                Uji swelling dilakukan untuk mengetahui kemampuan film dalam menyerap cairan, khususnya eksudat luka, tanpa menyebabkan kerusakan struktur atau maceration pada jaringan kulit. Pada pengujian ini, sampel film kering direndam dalam larutan PBS pH 7,4 pada suhu 37°C selama 24 jam untuk mensimulasikan kondisi fisiologis luka. Hasil penelitian menunjukkan bahwa film memiliki swelling ratio sekitar 60 ± 5%, yang berarti film mampu menyerap cairan dalam jumlah cukup besar namun tetap mempertahankan kestabilan bentuknya. Nilai swelling ini ideal untuk luka diabetes, yang biasanya menghasilkan eksudat dalam jumlah sedang.
              </p>
            </div>

            {/* Gambar */}
            <img
              src={Dokumen8}
              alt="Proses 8"
              className="h-72 w-full object-cover rounded-2xl shadow-lg border border-green-100 order-1 md:order-2"
            />
          </div>

          {/* ===== STEP 9 ===== */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            
            {/* Gambar */}
            <img
              src={Dokumen9}
              alt="Proses 9"
              className="h-72 w-full object-cover rounded-2xl shadow-lg border border-green-100"
            />

            {/* Text */}
            <div>
              <h3 className="text-3xl font-bold text-green-900 mb-2">
                Proses 9 — Uji Elastisitas dan Flexibilitas
              </h3>
              <p className="text-grey-900/70 leading-relaxed text-lg">
                Uji elastisitas dan fleksibilitas dilakukan untuk menentukan kemampuan film dalam menahan deformasi mekanik seperti penekukan, peregangan, dan pembengkokan. Film wound dressing harus cukup elastis agar dapat mengikuti bentuk permukaan kulit, terutama pada area luka diabetes yang sering berada pada bagian kaki dengan kontur tidak rata. Berdasarkan hasil pengujian, film mampu ditekuk hingga sepuluh kali lipatan tanpa menunjukkan adanya retakan, patahan, atau perubahan struktural pada permukaan film. Hal ini menunjukkan bahwa interaksi antar polimer, yaitu gelatin dan PVA, serta penambahan gliserin sebagai plasticizer, menciptakan matriks yang lentur namun tetap kuat.
                Fleksibilitas tinggi ini juga mempermudah proses aplikasi dan pelepasan balutan, sehingga mengurangi risiko trauma pada jaringan baru yang sedang terbentuk di area luka. Selain kenyamanan pasien, elastisitas yang baik juga membantu menjaga kontak optimal antara film dan permukaan luka sehingga efek terapi baik dari madu steril maupun kondisi lembap dapat bekerja secara efektif selama proses penyembuhan.
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
