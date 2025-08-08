function Attribution() {
  const freepikAttributions = [
    {
      href: "https://www.freepik.com/author/pch-vector",
      text: "Designed by pch.vector - Freepik",
    },
    {
      href: "https://www.freepik.com/author/dc-studio",
      text: "Designed by DC Studio - Freepik",
    },
    {
      href: "https://www.freepik.com/author/creativeart",
      text: "Designed by creativeart - Freepik",
    },
    {
      href: "https://www.freepik.com/author/rawpixel-com",
      text: "Designed by rawpixel.com - Freepik",
    },
    { href: "https://www.freepik.com", text: "Designed by Freepik" },
  ];

  const flaticonAttributions = [
    {
      href: "https://www.flaticon.com/free-icons/address",
      title: "address icons",
      text: "Address icons created by Irfansusanto20 - Flaticon",
    },
    {
      href: "https://www.flaticon.com/free-icons/email",
      title: "email icons",
      text: "Email icons created by kornkun - Flaticon",
    },
    {
      href: "https://www.flaticon.com/free-icons/cycling",
      title: "cycling icons",
      text: "Cycling icons created by Futuer - Flaticon",
    },
    {
      href: "https://www.flaticon.com/free-icons/next",
      title: "next icons",
      text: "Next icons created by Roundicons - Flaticon",
    },
    {
      href: "https://www.flaticon.com/free-icons/analysis",
      title: "analysis icons",
      text: "Analysis icons created by Freepik - Flaticon",
    },
    {
      href: "https://www.flaticon.com/free-icons/website",
      title: "website icons",
      text: "Website icons created by Freepik - Flaticon",
    },
    {
      href: "https://www.flaticon.com/free-icons/cyber-security",
      title: "cyber security icons",
      text: "Cyber security icons created by juicy_fish - Flaticon",
    },
    {
      href: "https://www.flaticon.com/authors/grow-studio",
      title: "Grow studio",
      text: "Icons created by Grow studio - Flaticon",
    },
    {
      href: "https://www.flaticon.com/authors/kalashnyk",
      title: "Kalashnyk",
      text: "Icons created by Kalashnyk - Flaticon",
    },
    {
      href: "https://www.flaticon.com/authors/payungkead",
      title: "Payungkead",
      text: "Icons created by Payungkead - Flaticon",
    },
    {
      href: "https://www.flaticon.com/authors/smashingstocks",
      title: "smashingstocks",
      text: "Icons created by smashingstocks - Flaticon",
    },
    {
      href: "https://www.flaticon.com/authors/muhammad-ali",
      title: "Muhammad Ali",
      text: "Icons created by Muhammad Ali - Flaticon",
    },
    {
      href: "https://www.flaticon.com/authors/iconjam",
      title: "Iconjam",
      text: "Icons created by Iconjam - Flaticon",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-12 md:px-10 lg:px-20">
      <div className="max-w-5xl mx-auto">
        <h1 className=" text-2xl lg:text-4xl font-semibold text-center text-gray-800 mb-12">
          Resources & Attributions
        </h1>

        {/* Freepik Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-[#fbb039] mb-6 border-b border-rose-200 pb-2">
            Freepik Resources
          </h2>
          <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
            {freepikAttributions.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-blue-600 hover:text-blue-800 transition-colors underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                • {item.text}
              </a>
            ))}
          </div>
        </section>

        {/* Flaticon Section */}
        <section>
          <h2 className="text-2xl font-semibold text-[#fbb039] mb-6 border-b border-rose-200 pb-2">
            Flaticon Icons
          </h2>
          <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
            {flaticonAttributions.map((item, index) => (
              <a
                key={index}
                href={item.href}
                title={item.title}
                className="text-blue-600 hover:text-blue-800 transition-colors underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                • {item.text}
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Attribution;
