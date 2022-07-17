const HeaderMenu = ({ isNavOpen }) => {
  return (
    <div
      className={`desktop-menu ${
        isNavOpen ? "block" : "hidden"
      } fixed z-10 left-0 right-0 top-[73px] bottom-0 bg-white lg:static lg:flex lg:gap-x-5 dark:bg-black-300`}
    >
      <nav className="flex flex-col h-full justify-between lg:flex-row lg:gap-x-5 lg:h-auto">
        <ul className="flex flex-col gap-y-4 px-4 pt-3 lg:flex-row lg:gap-y-0 lg:gap-x-5 lg:items-center lg:px-0 lg:pt-0">
          <li>
            <a
              href="#"
              className="text-base font-semibold text-black-50 dark:text-white"
            >
              Explore
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-base font-semibold text-black-50 lg:text-grey-100 dark:text-white dark:lg:text-grey-200"
            >
              My Items
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-base font-semibold text-black-50 lg:text-grey-100 dark:text-white dark:lg:text-grey-200"
            >
              Following
            </a>
          </li>
        </ul>
        <ul className="flex flex-row gap-x-2.5 items-center border border-grey-50 py-4 pl-7 lg:border-0 lg:py-0 lg:pl-0 dark:border-black-50">
          <li>
            <a
              href="#"
              className="block px-[1.88rem] py-2.5 text-sm font-semibold text-white rounded-[0.63rem] bg-gradient-to-r from-red-linear-start to-red-linear-end"
            >
              Create
            </a>
          </li>
          <li>
            <a
              href="3#"
              className="block text-sm text-red-violet font-semibold border-2 border-red-violet px-[2.5rem] py-2 rounded-[10px]"
            >
              Connect
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}
export default HeaderMenu
