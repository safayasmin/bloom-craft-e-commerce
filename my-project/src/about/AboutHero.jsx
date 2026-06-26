const AboutHero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
         src="https://lh3.googleusercontent.com/aida-public/AB6AXuCo31K9i_wPxJukkTSFo3JrHE1-hq83ovk7sBjMxPepS_T-VqdItlNfSGv2YqTEtUK50XqjZq9I9fGOQqAP11eRkQjyvK9-AEKKw8MvYxdU6PzjpuSyndhIyy2SvRjnib_3c3ELTKe3F4CZIxUBBb6zhhkT_TbwQUNFjKDO75FILhD5kQEMFr627j_aXcp1s0vk7y6ViD_-2pxk03Id3BoRGesqTvrvbnXhZ8Sjflw673b1gaPvoFP9LzdcyvJKPfeyIALl6VfD3-s"
          alt=""
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black"></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl px-6">
        <span className="uppercase tracking-[0.3em] text-yellow-400 block mb-4">
          The Art of the Nocturnal Bloom
        </span>

        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Elegance Born in the{" "}
          <span className="italic text-red-300">
            Midnight Hour
          </span>
        </h1>

        <p className="text-gray-300 max-w-2xl mx-auto">
          We curate ephemeral wonders that thrive when the world sleeps,
          capturing the fleeting romance of luxury floristry.
        </p>
      </div>
    </section>
  );
};

export default AboutHero;