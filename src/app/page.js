import Image from "next/image";
import logo from "./navbar_logo.png"
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="bg-gray-800 text-white py-4 px-8 fixed top-0 left-0 w-full shadow-lg z-50">
        <nav className="flex items-center justify-between">
          <div className="text-lg font-semibold flex">
            <Link href="/">
              <Image
                className=""
                src={logo}
                alt="logo"
                width={170}
                height={170}
              />
            </Link>
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 ">
            <div className="flex items-center justify-center space-x-2 bg-gray-700">
              <Image src="/path/to/logo1.png" alt="Gazprom" width={40} height={40} />
              <span className="text-white">Газпром</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Image src="/path/to/logo2.png" alt="NIIT" width={40} height={40} />
              <span className="text-white">НИИ Строительство</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Image src="/path/to/logo3.png" alt="Elma" width={40} height={40} />
              <span className="text-white">ЭЛМА</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Image src="/path/to/logo4.png" alt="Roseltorg" width={40} height={40} />
              <span className="text-white">Росэлторг</span>
            </div>
            {/* Добавьте дополнительные блоки для остальных логотипов */}
          </div>
        </section>

        <section
          id="about"
          className="py-16 px-8 bg-gray-100 text-center text-gray-700"
        >
          <h2 className="text-3xl font-bold mb-8">About Us</h2>
          <p className="max-w-2xl mx-auto text-sm">
            Aurora Inc — это инновационная компания, ориентированная на развитие информационной инфраструктуры Узбекистана и создание более доступной цифровой экономики. Стремясь стать лучше и масштабнее, чем существующие решения, Aurora создает мощные цифровые продукты и сервисы для повседневной жизни — от мультимедийных платформ и приложений для погоды и такси до благотворительных программ, помогающих исполнять мечты детей с онкологическими заболеваниями. В будущем компания планирует запустить собственный поисковик, который станет более надежной и удобной версией для местных пользователей. Системы обучения от Aurora Inc. призваны предоставить жителям страны доступ к современным знаниям, помогая каждому развиваться и расти. Ориентируясь на потребности широкой аудитории, Aurora Inc. стремится не просто развивать технологические продукты, но и менять жизнь общества к лучшему, создавая удобные и социально значимые решения для всех.
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
        <p>&copy; {new Date().getFullYear()} created by Aurora Inc. All rights reserved.</p>
      </footer>
    </>
  );
}
