import type { NextPage } from 'next'
import { HiArrowNarrowRight } from 'react-icons/hi'

const Badges: NextPage = () => {
  return (
    <>
      <div className="text-white">
        <div className="bg-neutral-900 grid grid-cols-3 place-items-center h-screen">
          <div className="space-y-4">
            <span className="badge-blue-fill-dark">
              fill blue badge with icon
              <HiArrowNarrowRight className="h-5 w-5" />
            </span>
          </div>
          <div className="space-y-4">
            <span className="badge-blue-outline-dark">outline blue badge</span>
          </div>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-3 place-items-center h-screen">
          <div className="space-y-4">
            <span className="badge-blue-fill">
              fill blue badge with icon
              <HiArrowNarrowRight className="h-5 w-5" />
            </span>
          </div>
          <div className="space-y-4">
            <span className="badge-blue-outline">outline blue badge</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Badges
