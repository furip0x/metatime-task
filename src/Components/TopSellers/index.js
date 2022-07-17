import { useEffect, useState } from "react"
import axios from "axios"
import TopSellersItem from "./TopSellersItem"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper"
import "swiper/css"
// import "swiper/css/navigation"

const Index = () => {
  const [topSellers, setTopSellers] = useState(null)
  const [swiperPrevNav, setSwiperPrevNav] = useState(null)
  const [swiperNextNav, setSwiperNextNav] = useState(null)

  const getTopSellers = () => {
    axios
      .get("https://62ceb596826a88972d016070.mockapi.io/sellers")
      .then((res) => {
        setTopSellers(res.data)
      })
      .catch(function (error) {
        console.log(error.message)
      })
  }

  useEffect(() => {
    getTopSellers()
  }, [])

  if (topSellers) {
    return (
      <section className="pb-10 md:pb-16">
        <div className="container xl:max-w-[1048px] pr-0 md:pr-[10px]">
          <h2 className="text-xl font-semibold text-black-100 mb-5 md:text-2.5xl dark:text-white">
            Top Sellers
          </h2>
          <div className="relative md:px-5">
            <Swiper
              modules={[Navigation]}
              spaceBetween={10}
              slidesPerView={2.3}
              // navigation={{ enabled: false }}
              navigation={{ prevEl: swiperPrevNav, nextEl: swiperNextNav }}
              loop={true}
              breakpoints={{
                576: {
                  slidesPerView: 3,
                },
                768: {
                  slidesPerView: 5,
                  spaceBetween: 22,
                },
              }}
            >
              {topSellers.map((item) => {
                return (
                  <SwiperSlide key={item.id} className="h-[auto!important]">
                    <TopSellersItem
                      id={item.id}
                      name={item.name}
                      image={item.avatar}
                      price={item.price}
                    />
                  </SwiperSlide>
                )
              })}
            </Swiper>
            <button
              ref={(node) => setSwiperPrevNav(node)}
              className="hidden absolute top-1/2 left-0 -translate-y-1/2 z-[1] md:block"
            >
              <svg
                width="41"
                height="40"
                viewBox="0 0 41 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M20.4998 4.58368C11.9865 4.58368 5.08317 11.4853 5.08317 20.0003C5.08317 28.5137 11.9865 35.417 20.4998 35.417C29.0132 35.417 35.9165 28.5137 35.9165 20.0003C35.9165 11.4853 29.0132 4.58368 20.4998 4.58368Z"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="stroke-grey-100 dark:stroke-white"
                />
                <path
                  d="M22.9038 14.215L17.0938 20L22.9038 25.785"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="stroke-grey-100 dark:stroke-white"
                />
              </svg>
            </button>
            <button
              ref={(node) => setSwiperNextNav(node)}
              className="hidden absolute top-1/2 right-0 -translate-y-1/2 z-[1] md:block"
            >
              <svg
                width="41"
                height="40"
                viewBox="0 0 41 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M20.4999 35.4163C29.0133 35.4163 35.9166 28.5147 35.9166 19.9997C35.9166 11.4863 29.0133 4.58299 20.4999 4.58299C11.9866 4.58299 5.08325 11.4863 5.08325 19.9997C5.08325 28.5147 11.9866 35.4163 20.4999 35.4163Z"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="stroke-grey-100 dark:stroke-white"
                />
                <path
                  d="M18.0962 25.785L23.9062 20L18.0962 14.215"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="stroke-grey-100 dark:stroke-white"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>
    )
  }

  // return <h1 className="text-red-500 text-5xl py-14">Error!</h1>
}
export default Index
