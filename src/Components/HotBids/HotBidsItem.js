const HotBidsItem = ({ name, image, price, fav }) => {
  return (
    <div className="bg-white rounded-[1.25rem] pt-3 pb-4 px-[0.44rem] drop-shadow-[0_0.25rem_0.44rem_rgba(0,0,0,0.1)] md:px-3 md:pb-5 dark:bg-black-200">
      <a href="#" className="block">
        <img
          className="w-full h-auto object-cover aspect-[21/23] rounded-[0.63rem] mb-1 md:mb-4"
          src={image}
          alt={name}
        />
      </a>
      <div className="text-xs font-semibold text-black-50 whitespace-nowrap overflow-hidden text-ellipsis mb-1 md:text-sm dark:text-white">
        {name}
      </div>
      <div className="flex justify-between">
        <div className="text-[0.63rem] font-semibold text-black-50 md:text-xs dark:text-white">
          {price} <span className="font-normal">ETH</span>
        </div>
        <div className="flex gap-0.5 items-center text-[0.63rem] text-black-50 md:text-xs dark:text-black-300">
          {price > 400 ? (
            <svg
              width="13"
              height="12"
              viewBox="0 0 13 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.548 1.70105C10.9268 1.02731 10.0745 0.65625 9.1478 0.65625C8.45511 0.65625 7.82074 0.875244 7.26227 1.3071C6.98047 1.52509 6.72513 1.79178 6.5 2.10306C6.27496 1.79187 6.01953 1.52509 5.73764 1.3071C5.17926 0.875244 4.54489 0.65625 3.8522 0.65625C2.92551 0.65625 2.07306 1.02731 1.45187 1.70105C0.838104 2.36691 0.5 3.27658 0.5 4.2626C0.5 5.27747 0.878204 6.20645 1.69019 7.18625C2.41656 8.06268 3.46054 8.95239 4.66949 9.98264C5.08231 10.3345 5.55023 10.7333 6.0361 11.1581C6.16446 11.2705 6.32916 11.3324 6.5 11.3324C6.67075 11.3324 6.83554 11.2705 6.96371 11.1583C7.44958 10.7334 7.91779 10.3344 8.33078 9.98236C9.53955 8.9523 10.5835 8.06268 11.3099 7.18616C12.1219 6.20645 12.5 5.27747 12.5 4.26251C12.5 3.27658 12.1619 2.36691 11.548 1.70105Z"
                fill="currentColor"
              />
            </svg>
          ) : (
            <svg
              width="13"
              height="12"
              viewBox="0 0 13 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.49999 11.3324C6.32915 11.3324 6.16445 11.2705 6.03609 11.1581C5.55132 10.7342 5.08395 10.3358 4.67159 9.98447L4.66949 9.98263C3.46054 8.95239 2.41656 8.06268 1.69018 7.18625C0.878204 6.20645 0.5 5.27747 0.5 4.2626C0.5 3.27658 0.838104 2.36691 1.45196 1.70105C2.07315 1.02731 2.9255 0.65625 3.85229 0.65625C4.54498 0.65625 5.17934 0.875244 5.73772 1.3071C6.01952 1.52509 6.27495 1.79187 6.49999 2.10306C6.72512 1.79187 6.98046 1.52509 7.26235 1.3071C7.82073 0.875244 8.45509 0.65625 9.14778 0.65625C10.0745 0.65625 10.9269 1.02731 11.5481 1.70105C12.162 2.36691 12.5 3.27658 12.5 4.2626C12.5 5.27747 12.1219 6.20645 11.3099 7.18616C10.5835 8.06268 9.53963 8.9523 8.33086 9.98245C7.91777 10.3344 7.44966 10.7334 6.96379 11.1583C6.83553 11.2705 6.67073 11.3324 6.49999 11.3324V11.3324ZM3.85229 1.35919C3.12417 1.35919 2.45529 1.64978 1.96869 2.17749C1.47485 2.71317 1.20285 3.45364 1.20285 4.2626C1.20285 5.11615 1.52008 5.87952 2.23135 6.73773C2.91882 7.56729 3.94137 8.43869 5.12533 9.44769L5.12752 9.44952C5.54143 9.80228 6.01064 10.2022 6.49898 10.6292C6.99025 10.2014 7.46019 9.80081 7.87492 9.44751C9.05879 8.43851 10.0813 7.56729 10.7687 6.73773C11.4799 5.87952 11.7971 5.11615 11.7971 4.2626C11.7971 3.45364 11.5251 2.71317 11.0313 2.17749C10.5448 1.64978 9.87581 1.35919 9.14778 1.35919C8.61439 1.35919 8.12468 1.52875 7.69228 1.8631C7.30693 2.16119 7.0385 2.53802 6.88112 2.8017C6.80019 2.93729 6.65773 3.01822 6.49999 3.01822C6.34224 3.01822 6.19979 2.93729 6.11886 2.8017C5.96157 2.53802 5.69314 2.16119 5.3077 1.8631C4.8753 1.52875 4.38558 1.35919 3.85229 1.35919V1.35919Z"
                fill="currentColor"
              />
            </svg>
          )}
          <span className="dark:text-white">{fav}</span>
        </div>
      </div>
    </div>
  )
}
export default HotBidsItem