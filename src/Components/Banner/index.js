import heroPattern from "../../assets/images/hero-pattern.svg"

const Banner = () => {
  return (
    <section className="pt-4 pb-10 md:py-[3.75rem]">
      <div className="container">
        <div className="relative rounded-3xl py-[3.31rem] px-[1.12rem] bg-gradient-to-r from-red-linear-start to-red-linear-end md:min-h-[18.75rem] md:px-[3.31rem] md:flex md:flex-col md:justify-center">
          <img
            src={heroPattern}
            alt=""
            className="absolute left-0 top-0 w-full h-full object-cover"
          />
          <h1 className="reative z-[1] font-gotham font-bold text-xl leading-tight text-white max-w-[16.44rem] md:text-5xl md:max-w-[41.44rem]">
            Discover, collect, and sell extraordinary NFTs
          </h1>
        </div>
      </div>
    </section>
  )
}
export default Banner
