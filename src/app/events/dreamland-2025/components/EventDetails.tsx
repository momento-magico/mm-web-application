import eventImage from "../../../../../public/assets/images/events/about.webp";
export function EventDetails() {
  return (
    <section className="w-full bg-gradient-to-b from-transparent via-black/95 to-black py-12 md:py-24  px-2">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-2">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold">Where Dreams, Drop Beats!</h2>
            <p className="text-gray-300 leading-relaxed">
              {`Get ready to lose yourself in the rhythm! Dreamland is back,
              bringing electrifying energy, mind-blowing visuals, and the
              hottest EDM acts under one sky. Whether you're a seasoned raver or
              a first-time dreamer, this is your invitation to an unforgettable
              night of music, lights, and pure euphoria.`}
            </p>
            <p className="text-xl font-medium">
              {
                "Mark your calendar. Gather your crew. Let's make dreams happen."
              }
            </p>
          </div>
          <div
            className="rounded-2xl overflow-hidden min-h-[400px]"
            style={{
              backgroundImage: `url(${eventImage.src})`,
              backgroundSize: "cover",
              backgroundPosition: "top",
            }}
          ></div>
        </div>
        {/* <div className="space-y-8">
          <h3 className="text-2xl font-bold">Our Artists</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-4">
            {[...Array(10)].map((_, i) => <div key={i} className="aspect-square rounded-2xl overflow-hidden bg-white/5 hover:bg-white/10 transition-colors cursor-pointer">
                <div className="w-full h-full bg-gradient-to-br from-purple-500/20 to-blue-500/20" />
              </div>)}
          </div>
        </div> */}
      </div>
    </section>
  );
}
