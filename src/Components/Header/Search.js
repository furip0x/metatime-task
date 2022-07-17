const Search = ({ isNavOpen }) => {
  return (
    <div className={`${isNavOpen && "invisible"} relative flex-grow`}>
      <button
        type="button"
        className="absolute left-4 top-2/4 -translate-y-2/4 pointer-events-none text-grey-100 dark:text-white"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="11.7666"
            cy="11.7666"
            r="8.98856"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.0183 18.4852L21.5423 22.0001"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <input
        type="text"
        placeholder="Search Item Here"
        className="w-full h-10 text-[0.63rem] text-black-50 placeholder:text-grey-100 rounded-[0.63rem] border border-grey-50 bg-white pl-12 pr-4 md:text-xs dark:text-white dark:bg-black-100 dark:placeholder:text-white dark:border-0"
      />
    </div>
  )
}
export default Search
