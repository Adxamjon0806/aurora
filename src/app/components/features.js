export default function Features() {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-2xl font-semibold text-white  ">
            Features
          </h2>
          <div className="cursor-pointer mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <img
              alt="Transistor"
              src="https://tailwindui.com/plus/img/logos/158x48/transistor-logo-gray-900.svg"
              width={158}
              height={48}
              className="transform transition-transform duration-300 hover:scale-105 cursor-pointer col-span-2 bg-gray-200 p-3 rounded-xl object-contain h-full w-full lg:col-span-1"
            />
            <img
              alt="Reform"
              src="https://tailwindui.com/plus/img/logos/158x48/reform-logo-gray-900.svg"
              width={158}
              height={48}
              className="transform transition-transform duration-300 hover:scale-105 cursor-pointer col-span-2 bg-gray-200 p-3 rounded-xl object-contain h-full w-full lg:col-span-1"
            />
            <img
              alt="Tuple"
              src="https://tailwindui.com/plus/img/logos/158x48/tuple-logo-gray-900.svg"
              width={158}
              height={48}
              className="transform transition-transform duration-300 hover:scale-105 cursor-pointer col-span-2 bg-gray-200 p-3 rounded-xl object-contain h-full w-full lg:col-span-1"
            />
            <img
              alt="SavvyCal"
              src="https://tailwindui.com/plus/img/logos/158x48/savvycal-logo-gray-900.svg"
              width={158}
              height={48}
              className="transform transition-transform duration-300 hover:scale-105 cursor-pointer col-span-2 bg-gray-200 p-3 rounded-xl object-contain h-full w-full lg:col-span-1"
            />
            <img
              alt="Statamic"
              src="https://tailwindui.com/plus/img/logos/158x48/statamic-logo-gray-900.svg"
              width={158}
              height={48}
              className="transform transition-transform duration-300 hover:scale-105 cursor-pointer col-span-2 col-start-2 bg-gray-200 p-3 rounded-xl h-full w-full object-contain sm:col-start-auto lg:col-span-1"
            />
          </div>
        </div>
      </div>
    )
  }
  