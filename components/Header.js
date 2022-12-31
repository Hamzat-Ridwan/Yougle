import Avatar from "./Avatar"
import {ViewGridIcon, MicrphonIcon} from "@heroicons/react/solid"

const Header = () => {
  return (
    <header className="flex justify-between py-4 px-10 w-full text-gray-700">
        <div className="flex space-x-4 items-center">
            <p className="link">About</p>
            <p className="link">Store</p>
        </div>
        <div className="flex space-x-4 items-center">
            <p className="link">Gmail</p>
            <p className="link">Images</p>
            <ViewGridIcon className='h-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer' />
            <Avatar  />
        </div>
    </header>
  )
}

export default Header