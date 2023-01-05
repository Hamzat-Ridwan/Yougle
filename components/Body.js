import { MicrophoneIcon, SearchIcon } from "@heroicons/react/solid"


const Body = () => {
  return (
    <form className="flex flex-col items-center mt-24 flex-grow" >
        <h1 className="text-8xl sm:text-9xl mb-10">Yougle</h1>
        <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-[90%] rounded-full border  border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl ">
            <SearchIcon className="h-5 mr-3 text-gray-500" />
            <input type='text' className='flex-grow w-[80%] focus:outline-none' />
            <MicrophoneIcon className="h-5 text-gray-500"  /> 
        </div>
        <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
          <button className="btn">Google Search</button>
          <button className="btn">I'm Feeling Lucky</button>
        </div>
    </form>
  )
}

export default Body