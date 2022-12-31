
const Avatar = () => {
  return (
    <img 
        loading="lazy"
        src='profile.png'
        alt="avatar"
        className="w-[40px] h-[40px] cursor-pointer rounded-full transform transition duration-150 hover:scale-110"
    />
  )
}

export default Avatar