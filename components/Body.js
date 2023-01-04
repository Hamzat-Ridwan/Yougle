import { MicrophoneIcon, SearchIcon } from "@heroicons/react/solid"


const Body = () => {
  return (
    <form className="text-9xl ">
        <h1>Yougle</h1>
        <div className="">
            <SearchIcon className="h-5 mr-3 text-gray-500" />
            <input type='text' className='bg-red-500 h-5 focus:outline-none' />
            <MicrophoneIcon className="h-5" />
        </div>
    </form>
  )
}

export default Body