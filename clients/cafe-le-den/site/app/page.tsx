import Image from "next/image";

const ADDRESS = "121 Ave Donegani, Pointe-Claire, QC H9R 2W3";
const MAP_LINK =
  "https://www.google.com/maps/search/?api=1&query=121+Avenue+Donegani+Pointe-Claire+QC+H9R+2W3";

const highlights = [
  { name: "Signature Latte", desc: "Smooth espresso, steamed milk, a little Le Den magic.", img: "/samples/latte.jpg" },
  { name: "Fresh Pastries", desc: "Buttery croissants and baked goods, made for the morning rush.", img: "/samples/croissant.jpg" },
  { name: "House Cakes", desc: "Something sweet to share, or not.", img: "/samples/cake.jpg" },
  { name: "Light Bites", desc: "Sandwiches and lunch favourites, ready when you are.", img: "/samples/sandwich.jpg" },
];

const menu = [
  { cat: "Coffee", items: ["Espresso", "Americano", "Cappuccino", "Latte", "Iced Coffee"] },
  { cat: "Bakery", items: ["Croissant", "Muffin of the Day", "Cake Slice", "Cookie"] },
  { cat: "Lunch", items: ["Sandwich of the Day", "Soup", "Salad", "Panini"] },
];

function DemoTag() {
  return (
    <span className="ml-2 rounded bg-accent/10 px-2 py-0.5 align-middle text-xs font-medium uppercase tracking-wide text-accent">
      Sample
    </span>
  );
}

export default function Home() {
  return (
    <>
      <div className="bg-roast px-4 py-2 text-center text-sm text-cream">
        Design preview. Sample photos and placeholder content, not yet approved by the owner.
      </div>

      <header className="sticky top-0 z-20 border-b border-latte bg-cream/90 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="font-serif text-2xl font-bold">
            Café Le Den
          </a>
          <ul className="hidden gap-8 text-sm font-medium md:flex">
            <li><a className="hover:text-accent" href="#about">About</a></li>
            <li><a className="hover:text-accent" href="#gallery">Favourites</a></li>
            <li><a className="hover:text-accent" href="#menu">Menu</a></li>
            <li><a className="hover:text-accent" href="#visit">Visit</a></li>
          </ul>
          <a
            href="#visit"
            className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white hover:bg-mocha focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            Find us
          </a>
        </nav>
        <ul className="flex justify-center gap-6 border-t border-latte px-4 py-2 text-sm font-medium md:hidden">
          <li><a className="inline-block py-2" href="#about">About</a></li>
          <li><a className="inline-block py-2" href="#gallery">Favourites</a></li>
          <li><a className="inline-block py-2" href="#menu">Menu</a></li>
          <li><a className="inline-block py-2" href="#visit">Visit</a></li>
        </ul>
      </header>

      <main id="top">
        <section className="relative isolate overflow-hidden">
          <Image
            src="/samples/hero.jpg"
            alt="A cup of coffee on a wooden table"
            fill
            priority
            sizes="100vw"
            className="-z-10 object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-roast/60" />
          <div className="mx-auto max-w-6xl px-6 py-32 text-cream md:py-44">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em]">Pointe-Claire, Québec</p>
            <h1 className="max-w-2xl font-serif text-4xl sm:text-5xl font-bold leading-tight md:text-7xl">
              Your neighbourhood spot for coffee &amp; good company.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-cream/90">
              Stop by Café Le Den on Avenue Donegani for a fresh cup, something baked, and a
              moment to slow down.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#menu" className="rounded-full bg-cream px-7 py-3 font-semibold text-roast hover:bg-latte">
                See the menu
              </a>
              <a href="#visit" className="rounded-full border border-cream px-7 py-3 font-semibold hover:bg-cream/10">
                Get directions
              </a>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 md:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image src="/samples/interior.jpg" alt="Cozy café interior" fill sizes="(min-width:768px) 50vw, 100vw" className="object-cover" />
          </div>
          <div>
            <h2 className="font-serif text-4xl font-bold">A cozy corner of Pointe-Claire<DemoTag /></h2>
            <p className="mt-6 text-lg leading-relaxed text-mocha">
              Placeholder story: Café Le Den is a local café where neighbours meet, students
              study, and everyone leaves a little happier. This section will be rewritten with
              the owner&apos;s real story.
            </p>
            <ul className="mt-8 grid grid-cols-3 gap-4 text-center">
              {["Fresh coffee", "Baked goods", "Friendly vibe"].map((t) => (
                <li key={t} className="rounded-xl bg-latte px-3 py-4 text-sm font-semibold">{t}</li>
              ))}
            </ul>
          </div>
        </section>

        <section id="gallery" className="bg-latte/60 py-24">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-center font-serif text-4xl font-bold">House favourites<DemoTag /></h2>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {highlights.map((h) => (
                <article key={h.name} className="overflow-hidden rounded-2xl bg-cream shadow-sm">
                  <div className="relative aspect-square">
                    <Image src={h.img} alt={h.name} fill sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw" className="object-cover" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-serif text-xl font-bold">{h.name}</h3>
                    <p className="mt-2 text-sm text-mocha">{h.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="menu" className="mx-auto max-w-4xl px-6 py-24">
          <h2 className="text-center font-serif text-4xl font-bold">Menu<DemoTag /></h2>
          <p className="mt-3 text-center text-mocha">Sample items only. Final menu and prices to come from the owner.</p>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {menu.map((m) => (
              <div key={m.cat}>
                <h3 className="border-b-2 border-accent pb-2 font-serif text-2xl font-bold">{m.cat}</h3>
                <ul className="mt-4 space-y-3">
                  {m.items.map((i) => (
                    <li key={i} className="flex justify-between gap-4">
                      <span>{i}</span>
                      <span className="text-mocha/60">$—</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="visit" className="bg-roast py-24 text-cream">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2">
            <div>
              <h2 className="font-serif text-4xl font-bold">Come say hello</h2>
              <address className="mt-6 text-lg not-italic leading-relaxed">
                Café Le Den<br />
                121 Avenue Donegani<br />
                Pointe-Claire, Québec H9R 2W3
              </address>
              <dl className="mt-8 space-y-2 text-cream/80">
                <div><dt className="inline font-semibold text-cream">Hours: </dt><dd className="inline">Coming soon<DemoTag /></dd></div>
                <div><dt className="inline font-semibold text-cream">Phone: </dt><dd className="inline">Coming soon<DemoTag /></dd></div>
              </dl>
              <a href={MAP_LINK} target="_blank" rel="noopener noreferrer" className="mt-8 inline-block rounded-full bg-accent px-7 py-3 font-semibold text-white hover:bg-cream hover:text-roast">
                Open in Google Maps
              </a>
            </div>
            <div className="overflow-hidden rounded-2xl">
              <iframe
                title={`Map of ${ADDRESS}`}
                src="https://www.google.com/maps?q=121+Avenue+Donegani+Pointe-Claire+QC+H9R+2W3&output=embed"
                className="h-80 w-full border-0 md:h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-roast px-6 py-8 text-center text-sm text-cream/70">
        <p>Café Le Den · {ADDRESS}</p>
        <p className="mt-1">Design demo. Photos are stock samples.</p>
      </footer>
    </>
  );
}
