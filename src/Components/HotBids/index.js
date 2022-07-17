import { useEffect, useState } from "react"
import axios from "axios"
import HotBidsItem from "./HotBidsItem"

const Index = () => {
  const [hotBids, setHotBids] = useState([])
  const [limit, setLimit] = useState(8)
  const [page, setPage] = useState(1)
  const [showMore, setShowMore] = useState(true)
  const [loading, setLoading] = useState(false)

  const getHotBids = async (page, limit) => {
    try {
      setLoading(true)
      const res = await axios.get(
        `https://62ceb596826a88972d016070.mockapi.io/bids?page=${page}&limit=${limit}`
      )
      const newHotBids = [...hotBids, ...res.data]
      setHotBids(newHotBids)
      setLoading(false)
      if (res.data.length < limit) {
        setShowMore(false)
      }
    } catch (error) {
      console.log(error.message)
      setLoading(false)
    }
  }

  const showMoreItems = () => {
    setPage((prevValue) => prevValue + 1)
  }

  useEffect(() => {
    getHotBids(page, limit)
  }, [limit, page])

  return (
    <section className="pb-10 md:pb-16">
      <div className="container">
        <h2 className="text-xl font-semibold text-black-100 mb-5 md:text-2.5xl dark:text-white">
          Hot Bids
        </h2>
        <div className="grid grid-cols-2 gap-2.5 md:grid-cols-3 md:gap-5 xl:grid-cols-4">
          {hotBids.map((item) => {
            return (
              <HotBidsItem
                key={item.id}
                name={item.name}
                image={item.image}
                price={item.price}
                fav={item.fav}
              />
            )
          })}
        </div>
        {showMore && (
          <div className="flex justify-center pt-10 md:pt-[3.75rem]">
            <button
              type="button"
              className="w-[18.75rem] h-10 text-sm font-semibold text-red-violet border-2 border-red-violet rounded-[0.63rem]"
              onClick={showMoreItems}
            >
              {loading ? "Loading..." : "Load More"}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
export default Index
