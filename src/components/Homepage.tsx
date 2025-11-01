export const Homepage = () => {
  return (
    <main className="bg-white text-gray-900">
      <section className="flex flex-col-reverse md:flex-row justify-between items-center px-10 md:px-20 py-16 gap-12">
        <div className="flex-1 space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            A link in bio built for you
          </h1>

          <p className="text-gray-600 text-lg md:text-xl max-w-xl mx-auto md:mx-0">
            Join <span className="font-semibold text-purple-600">70M+</span> people using Linktree for their link in bio.
            One link to help you share everything you create, curate, and sell from your
            Instagram, TikTok, Twitter, YouTube, and other social media profiles.
          </p>


          <div className="flex flex-col sm:flex-row items-center gap-3 mt-4">
            <input
              type="text"
              placeholder="linktr.ee/username"
              className="border border-gray-300 rounded-lg px-4 py-3 w-full sm:w-auto sm:flex-1 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition">
              Get Started For Free
            </button>
          </div>
        </div>


        <div className="flex-1 flex justify-center">
          <img
            src="https://play-lh.googleusercontent.com/QbavRFj9bwEj8Wm3mIfOG781pUoPIWdOGEnOGKk35mf_M5AvIEhDhyEP7ZfQFwpzPwM"
            alt="Showcase of a Linktree-style profile"
            className="w-full max-w-md md:max-w-lg object-contain rounded-xl"
          />
        </div>
      </section>


      <section className="px-10 md:px-20 py-14">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-2xl md:text-3xl font-bold">
              Create and customize your Linktree in minutes
            </h2>
            <p className="text-gray-600 mt-4">
              Connect all your content across social media, websites, stores and more in one link in bio.
              Customize every detail or let Linktree automatically enhance it to match your brand and drive more clicks.
            </p>
            <button className="mt-6 bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition">
              Get Started For Free
            </button>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <img
              src="https://play-lh.googleusercontent.com/QbavRFj9bwEj8Wm3mIfOG781pUoPIWdOGEnOGKk35mf_M5AvIEhDhyEP7ZfQFwpzPwM"
              alt="Customize your Linktree"
              className="w-full max-w-md md:max-w-lg object-contain rounded-xl"
            />
          </div>
        </div>
      </section>

      <section className="px-10 md:px-20 py-14 bg-gray-50">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <img
              src="https://play-lh.googleusercontent.com/QbavRFj9bwEj8Wm3mIfOG781pUoPIWdOGEnOGKk35mf_M5AvIEhDhyEP7ZfQFwpzPwM"
              alt="Share your Linktree anywhere"
              className="w-full max-w-md md:max-w-lg object-contain rounded-xl"
            />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">
              Share your Linktree anywhere you like!
            </h2>
            <p className="text-gray-600 mt-4">
              Add your unique Linktree URL to all the platforms and places you find your audience.
              Then use your QR code to drive your offline traffic back to your link in bio.
            </p>
            <button className="mt-6 bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition">
              Get Started For Free
            </button>
          </div>
        </div>
      </section>


      <section className="px-10 md:px-20 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">

            <div className="p-5 border rounded-2xl shadow-sm bg-white">
              <div className="text-sm text-gray-500 mb-1">Graph</div>
              <div className="text-3xl font-bold">43,500</div>
              <div className="text-gray-600">Links</div>
            </div>

            <div className="p-5 border rounded-2xl shadow-sm bg-white">
              <div className="text-2xl">🎧</div>
              <div className="text-xl font-semibold mt-1">643 Tracks</div>
              <div className="text-gray-600">Track Plays</div>
            </div>

            <div className="p-5 border rounded-2xl shadow-sm bg-white">
              <div className="text-2xl">💸</div>
              <div className="text-3xl font-bold mt-1">$2,362</div>
              <div className="text-gray-600">Sales</div>
            </div>

            <div className="p-5 border rounded-2xl shadow-sm bg-white col-span-2 sm:col-span-1">
              <div className="flex items-center gap-3">
                <div className="text-2xl">📍</div>
                <div>
                  <div className="font-semibold">New York, USA</div>
                  <div className="text-2xl font-bold">960</div>
                  <div className="text-gray-600">Visits</div>
                </div>
              </div>
            </div>
          </div>


          <div>
            <h2 className="text-2xl md:text-3xl font-bold">
              Analyze your audience and keep them engaged
            </h2>
            <p className="text-gray-600 mt-4">
              Track your engagement over time, monitor revenue and learn what’s converting your audience.
              Make informed updates on the fly to keep them coming back.
            </p>
            <button className="mt-6 bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition">
              Get Started For Free
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};
