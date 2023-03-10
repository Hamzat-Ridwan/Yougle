import { GlobeIcon } from "@heroicons/react/solid"

const Footer = () => {
  return (
    <footer className="divide-y-[1px] divide-gray-300 bg-gray-100 text-sm text-gray-500">
        <div className="px-8 py-3 items-center">
            <p>Nigeria</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
            gap-y-4 px-8 py-3 grid-flow-row-dense
        ">
            <div className="flex space-x-1 justify-center items-center md:col-span-2 lg:col-span-1 lg:col-start-2">
                🍃
                Carbon neutral since 2007
            </div>
            <div className="flex space-x-8 justify-center
                whitespace-nowrap md:justify-self-start
            ">
                <p>Advertising</p>
                <p>Business</p>
                <p>How search works</p>
            </div>
            <div className="flex space-x-8 justify-center md:ml-auto">
                <p>Privacy</p>
                <p>Terms</p>
                <p>Settings</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer