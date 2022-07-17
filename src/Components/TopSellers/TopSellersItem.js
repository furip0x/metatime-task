const TopSellersItem = ({ id, name, image, price }) => {
  return (
    <a
      href="#"
      className="relative flex justify-center w-full min-h-full border border-grey-50 rounded-[1.25rem] pt-8 pb-2 px-2.5 md:px-4 md:pt-11 md:pb-4 dark:border-black-200 dark:bg-black-200"
    >
      <div className="absolute top-[0.61rem] left-2 flex items-center justify-center w-6 h-6 font-semibold text-xs text-white bg-red-violet rounded-full md:w-8 md:h-8 md:text-base">
        {id}
      </div>
      <div className="flex flex-col items-center text-center">
        <div className="relative">
          <div className="w-[4.81rem] h-[4.81rem] mb-1">
            <img
              className="w-full h-full object-cover rounded-full"
              src={image}
              alt={name}
            />
          </div>
          <div className="absolute right-[0.31rem] bottom-1 flex items-center justify-center w-4 h-4 bg-green-50 rounded-full">
            <svg
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-2 h-2"
            >
              <g clipPath="url(#clip0_29422_62)">
                <path
                  d="M3.38092 6.9413C3.28042 6.9413 3.17991 6.90283 3.10335 6.82627L0.698546 4.4214C0.544983 4.26791 0.544983 4.01973 0.698546 3.86624C0.852036 3.71275 1.10014 3.71275 1.2537 3.86624L3.38092 5.99347L7.91309 1.46137C8.06658 1.30788 8.31468 1.30788 8.46825 1.46137C8.62174 1.61493 8.62174 1.86303 8.46825 2.0166L3.65857 6.82627C3.58201 6.90283 3.48143 6.9413 3.38092 6.9413Z"
                  className="fill-white"
                />
              </g>
              <defs>
                <clipPath id="clip0_29422_62">
                  <rect
                    width="8"
                    height="8"
                    transform="translate(0.583374 0.137512)"
                    className="fill-white"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
        <div className="font-semibold text-sm text-black-50 md:text-base dark:text-white">
          <div className="mb-1">{name}</div>
          <div>
            {price} <span className="font-normal">ETH</span>
          </div>
        </div>
      </div>
    </a>
  )
}
export default TopSellersItem
