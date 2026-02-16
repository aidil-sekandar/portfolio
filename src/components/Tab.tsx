export default function Tab({ isActive, title, onShow, id }) {
  return (
    <>
      {
        isActive ? (
          <button
            id={id}
            className="inline-flex items-center rounded-md py-2.5 px-5 border-2 border-[#ffffffd9] text-[#0d0e11] bg-[linear-gradient(135deg,rgba(255,255,255,0.96),rgba(255,255,255,0.78)_85%)] backdrop-blur-sm shadow-[0_8px_24px_rgba(255,255,255,0.18)] font-semibold duration-100"
          >
            {title}
          </button>
        ) : (
          <button
            id={id}
            onClick={onShow}
            className="inline-flex items-center rounded-md py-2.5 px-5 border-2 border-[#ffffff73] text-white bg-[#ffffff14] hover:bg-[#ffffff33] backdrop-blur-sm font-light duration-100"
          >
            {title}
          </button >
        )
      }
    </>
  )
}
