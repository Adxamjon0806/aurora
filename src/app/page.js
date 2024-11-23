import Image from "next/image";
import logo from "./navbar_logo.png"
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="bg-gray-800 text-white py-4 px-8 fixed top-0 left-0 w-full shadow-lg z-50">
        <nav className="flex items-center justify-between">
          <div className="text-lg font-semibold flex">
          <Image
                className=""
                src={logo}
                alt="logo"
                width={170}
                height={170}
              />
            {/* <Link href="/">Aurora Inc</Link> */}
          </div>
          <ul className="flex gap-6 text-sm">
            <li>
              <Link href="#features" className="hover:underline">
                Features
              </Link>
            </li>
            <li>
              <Link href="#about" className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link href="#contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="pt-20">
        <section className="min-h-screen bg-gray-100 flex flex-col items-center justify-center text-center px-8">
          <h1 className="text-4xl text-gray-600 font-bold mt-8">
            Welcome to MyLanding
          </h1>
          <p className="text-gray-600 mt-4 max-w-2xl">
            Build stunning websites faster with Next.js and our tailored design
            approach.
          </p>
          <div className="mt-8 flex gap-4">
            <Link
              href="#features"
              className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-500 transition"
            >
              Learn More
            </Link>
            <Link
              href="#contact"
              className="bg-gray-800 text-white px-6 py-3 rounded-full shadow-md hover:bg-gray-700 transition"
            >
              Contact Us
            </Link>
          </div>
        </section>

        <section
          id="features"
          className="py-16 px-8 bg-white text-center text-gray-700"
        >
          <h2 className="text-3xl font-bold mb-8">Features</h2>
          <div className="grid sm:grid-cols-3 gap-8">
            <div>
              <div
                className="bg-gray-600"
                src="/feature1.svg"
                alt="Feature 1"
                width={80}
                height={80}
              />
              <h3 className="font-semibold mt-4">Fast Performance</h3>
              <p className="text-sm mt-2">
                Experience blazing-fast loading times for your users.
              </p>
            </div>
            <div>
              <div
                src="/feature2.svg"
                alt="Feature 2"
                width={80}
                height={80}
              />
              <h3 className="font-semibold mt-4">Responsive Design</h3>
              <p className="text-sm mt-2">
                Your site will look great on any device.
              </p>
            </div>
            <div>
              <div
                src="/feature3.svg"
                alt="Feature 3"
                width={80}
                height={80}
              />
              <h3 className="font-semibold mt-4">SEO Friendly</h3>
              <p className="text-sm mt-2">
                Boost your rankings with built-in optimizations.
              </p>
            </div>
          </div>
        </section>

        <section
          id="about"
          className="py-16 px-8 bg-gray-100 text-center text-gray-700"
        >
          <h2 className="text-3xl font-bold mb-8">About Us</h2>
          <p className="max-w-2xl mx-auto text-sm">
            At MyLanding, we are passionate about crafting exceptional web
            experiences. Leveraging Next.js, we deliver solutions that are fast,
            modern, and user-friendly.
          </p>
        </section>

        <section
          id="contact"
          className="py-16 px-8 bg-gray-800 text-white text-center"
        >
          <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
          <p className="max-w-md mx-auto text-sm">
            Have questions or want to work with us? Reach out and let's make
            something amazing together!
          </p>
          <a
            href="mailto:info@mylanding.com"
            className="mt-4 inline-block bg-blue-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-500 transition"
          >
            Email Us
          </a>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-4 text-center">
        <p>&copy; {new Date().getFullYear()} created by Fymos. All rights reserved.</p>
      </footer>
    </>
  );
}
