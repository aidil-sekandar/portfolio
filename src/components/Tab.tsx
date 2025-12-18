export default function Tab({ isActive, title, onShow, id }) {
  return (
    <>
      {
        isActive ? (
          <button id={id} className="bg-white text-cardColor  rounded-full shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[5px] py-2 px-5  hover:outline duration-100">{title}</button>
        ) : (
          <button
            id={id}
            onClick={onShow}
            className="bg-cardColor text-[#fff] rounded-full shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[5px] py-2 px-5 font-light hover:outline duration-100"
          >
            {title}
          </button >
        )
      }
    </>
  )
}
