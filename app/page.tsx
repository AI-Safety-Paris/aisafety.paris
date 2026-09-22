import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Full-width banner */}
      <header className="relative w-full mb-8 sm:mb-16">
        {/* Banner Image */}
        <div className="relative h-[300px] sm:h-[500px] overflow-hidden">
            <Image
              src="/ai_action_summit.jpeg"
              alt="AI Action Summit"
              fill
              className="object-cover object-center"
              priority
            />
            {/* Overlay gradient for text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70"></div>

            {/* Content over banner - Logo and Title only on mobile */}
            <div className="relative h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
              <div className="flex justify-center mb-4 sm:mb-6">
                <div className="bg-white rounded-full p-4 sm:p-8 shadow-2xl">
                  <Image
                    src="/logo.png"
                    alt="AI Safety Paris"
                    width={120}
                    height={120}
                    className="w-16 h-16 sm:w-24 sm:h-24"
                  />
                </div>
              </div>
              <h1 className="text-4xl sm:text-6xl font-bold text-white mb-4 sm:mb-6 drop-shadow-lg">
                AI Safety Paris
              </h1>
              {/* Paragraphs only visible on larger screens */}
              <p className="hidden sm:block text-lg text-white mb-4 leading-relaxed max-w-3xl drop-shadow-md">
                AI Safety Paris is the community of people in Paris working on AI Safety, AI Governance, AI Alignment, and related fields. This page is a resource for anyone interested in working in AI Safety in Paris or meeting the community.
              </p>
            </div>
          </div>

        </header>

        {/* Paragraphs below banner on mobile only */}
        <div className="sm:hidden px-4 pb-6 text-center">
          <p className="text-base text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
            AI Safety Paris is the community of people in Paris working on AI Safety, AI Governance, AI Alignment, and related fields. This page is a resource for anyone interested in working in AI Safety in Paris or meeting the community.
          </p>
        </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <main className="space-y-16">

                    {/* Events */}
          <section className="pb-12 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Events</h2>

            <p className="my-2">
              See the{" "}
              <a
                href="https://lu.ma/ais-paris"
                className="text-blue-600 dark:text-blue-400 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                AI Safety Paris Luma calendar
              </a>{" "}
              for upcoming events.
            </p>

            <div className="my-4 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
              <iframe
                src="https://lu.ma/embed/calendar/ais-paris/events"
                width="100%"
                height="300"
                frameBorder="0"
                style={{ border: "1px solid #bfcbda88", borderRadius: "4px" }}
                allowFullScreen
                aria-hidden="false"
                tabIndex={0}
              ></iframe>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-8">
              EA events
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300 mb-6">
              <li>
                •{" "}
                <a
                  href="https://lu.ma/altruismeefficacefrance"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Altruisme Efficace France Events Calendar
                </a>
                {" "}and{" "}
                <a
                  href="https://lu.ma/altruismeefficaceparis"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  AE Paris Calendar
                </a>
                <span className="block text-sm text-gray-600 dark:text-gray-400 ml-4 mt-1">
                  Not all focused on AI Safety, but people in AI Safety regularly go there.
                  I especially recommend the monthly English-speaking meetup
                </span>
              </li>
            </ul>

            <p className="text-gray-700 dark:text-gray-300 text-sm italic">
              There are lots of private ad-hoc event happening in the AI Safety community. Contact
              Maxime directly for more info.
            </p>
          </section>

{/* AI Safety Organizations */}
          <section className="pb-12 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">AI Safety Organizations</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 italic mb-8">
              Paris has multiple organizations doing work relevant for AI safety. Them being listed here does not represent an endorsement on their part of all the opinions expressed on this site or in the AI safety community.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 justify-items-center">
              <a
                href="https://www.securite-ia.fr/en"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-white rounded-lg p-3 hover:opacity-75 transition-opacity"
              >
                <Image src="/cesia-logo.svg" alt="Centre pour la Sécurité de l'IA" width={120} height={40} className="h-10 w-auto" />
              </a>
              <a
                href="https://www.safer-ai.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-white rounded-lg p-3 hover:opacity-75 transition-opacity"
              >
                <Image src="/saferai-logo.svg" alt="Safer AI" width={120} height={40} className="h-10 w-auto" />
              </a>
              <a
                href="https://www.ml4good.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-white rounded-lg p-3 hover:opacity-75 transition-opacity"
              >
                <Image src="/ml4good_logo.png" alt="ML4Good" width={120} height={40} className="h-10 w-auto" />
              </a>
              <a
                href="https://pauseia.fr/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-white rounded-lg p-3 hover:opacity-75 transition-opacity"
              >
                <Image src="/pauseia-logo-dark.svg" alt="Pause IA" width={120} height={40} className="h-10 w-auto" />
              </a>
              <a
                href="https://foreview.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-white rounded-lg p-3 hover:opacity-75 transition-opacity"
              >
                <Image src="/foreview.svg" alt="Foreview" width={120} height={40} className="h-10 w-auto" />
              </a>
            </div>
          </section>

          {/* Offices */}
          <section className="pb-12 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Paris AI Safety Office</h2>
            <p className="text-gray-700 dark:text-gray-300">
              There's now a physical AI Safety office space in Paris, shared between Safer AI, CeSIA, ML4Good, and some independent researchers.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mt-2">
              If you want to join us, be it for a day, a week, or long term, get in touch.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mt-2">
              For more information, contact Maxime at{" "}
              <a
                href="mailto:maxime.galpin@gmail.com"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                maxime.galpin@gmail.com
              </a>
            </p>
          </section>

          {/* Communication */}
          <section className="pb-12 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Community Channels
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Most of the communication in the community happens by private chats, although there
              are some public channels:
            </p>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300 mb-4">
              <li>
                • The #paris and #cause-ai-safety channels in{" "}
                <a
                  href="https://www.altruismeefficacefrance.org/"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Altruisme Efficace France
                </a>{" "}
                Slack
              </li>
              <li>
                • The{" "}
                <a
                  href="https://discord.gg/KjZHTyGWjQ"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Sûreté de l'IA Discord server
                </a>
                , managed by CeSIA
              </li>
              <li>
                • The{" "}
                <a
                  href="https://discord.gg/vyXGd7AeGc"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Pause IA Discord server
                </a>
              </li>
            </ul>
            <p className="text-sm text-gray-600 dark:text-gray-400 italic mb-2">
              There is currently no public communication channel for people currently working in AI Safety in Paris.
            </p>
          </section>


          {/* More resources */}
          <section className="pb-12 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              More resources
            </h2>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>
                •{" "}
                <a
                  href="https://docs.google.com/document/d/1qGnp1tc9ilRQeVHub_9VRvpUOCEJ26_VZsQRg9FDGRw/edit?tab=t.0#heading=h.3rbqh72h091y"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Career path: Working in AI policy in France
                </a>
              </li>
              <li>
                •{" "}
                <a
                  href="https://docs.google.com/document/d/1VP26Zlp5tVpx0RYWPQdG0mCaMYRUF4p-ZFgt_FA9ows/edit?tab=t.0#heading=h.tg542uvqyvn2"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Career path: Working in Technical AI Safety in France
                </a>
              </li>
            </ul>
            <p className="text-sm text-gray-600 dark:text-gray-400 italic mt-2">
              Works in progress. Authored by Lucie Philippon
            </p>
          </section>

        </main>

        <footer className="text-center mt-12 pb-12 text-gray-600 dark:text-gray-400 text-sm space-y-2">
          <p>For feedback on this website, contact Maxime Galpin at maxime.galpin@gmail.com</p>
          <p>
            <a
              href="https://docs.google.com/document/d/1pudXgEO4gQ_OvGl_8luk3sR2nS0VEclmfSpUDKXYUIE/edit?tab=t.0"
              className="text-blue-600 dark:text-blue-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Doc version
            </a>
            {" • "}
            <a
              href="https://github.com/Aelerinya/aisafety.paris"
              className="text-blue-600 dark:text-blue-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
