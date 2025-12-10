import SectionTitle from "../components/SectionTitle";

export default function Team() {
  const teamMembers = [
    {
      name: "Nama Anggota 1",
      role: "Frontend Developer",
      img: "https://via.placeholder.com/200", // ganti nanti
    },
    {
      name: "Nama Anggota 2",
      role: "Backend Developer",
      img: "https://via.placeholder.com/200",
    },
    {
      name: "Nama Anggota 3",
      role: "UI/UX Designer",
      img: "https://via.placeholder.com/200",
    },
  ];

  return (
    <div className="pt-24 max-w-6xl mx-auto px-6">
      <SectionTitle title="Our Team" />

      <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
        Berikut adalah anggota tim yang berkontribusi dalam pengembangan proyek ini.
        Nantinya kamu bisa mengganti foto, nama, dan jobdesk masing-masing.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 text-center"
          >
            <img
              src={member.img}
              alt={member.name}
              className="w-32 h-32 object-cover rounded-full mx-auto shadow-md"
            />
            <h3 className="mt-4 text-xl font-semibold text-gray-800">
              {member.name}
            </h3>
            <p className="text-indigo-600 font-medium">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
