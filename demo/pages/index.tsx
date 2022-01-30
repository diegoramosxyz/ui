import type { NextPage } from 'next'
import { HiArrowNarrowRight } from 'react-icons/hi'

const Home: NextPage = () => {
  return (
    <>
      <div className="text-white">
        <div className="bg-neutral-900 grid grid-cols-3 place-items-center h-screen">
          <div className="space-y-4">
            <button className="btn-blue-fill-dark">
              fill blue button with icon
              <HiArrowNarrowRight className="h-5 w-5" />
            </button>
            <button disabled className="btn-blue-fill-dark">
              disabled fill blue button with icon
              <HiArrowNarrowRight className="h-5 w-5" />
            </button>
          </div>
          <div className="space-y-4">
            <button className="btn-blue-outline-dark">
              outline blue button
            </button>
            <button disabled className="btn-blue-outline-dark">
              disabled outline blue button
            </button>
          </div>
          <div className="space-y-4">
            <button className="btn-blue-ghost-dark">ghost blue button</button>
            <button disabled className="btn-blue-ghost-dark">
              disabled ghost blue button
            </button>
          </div>
          <div className="space-y-4">
            <label className="block">
              <input
                placeholder="blue outline input"
                className="input-blue-outline-dark"
              />
            </label>
            <label className="block">
              <input
                disabled
                placeholder="disabled blue outline input"
                className="input-blue-outline-dark w-[250px]"
              />
            </label>
            <label className="block">
              <input
                type="date"
                placeholder="blue outline input"
                className="input-blue-outline-dark"
              />
            </label>
            <label className="block">
              <input
                disabled
                type="date"
                placeholder="blue outline input"
                className="input-blue-outline-dark"
              />
            </label>
          </div>
          <div className="space-y-4">
            <label className="block">
              <input
                placeholder="blue underline input"
                className="input-blue-underline-dark"
              />
            </label>
            <label className="block">
              <input
                disabled
                placeholder="disabled blue underline input"
                className="input-blue-underline-dark w-[250px]"
              />
            </label>
          </div>

          <div className="space-y-4">
            <select className="block input-blue-outline-dark">
              <option value="">blue outline input</option>
              <option value="dog">Dog</option>
              <option value="cat">Cat</option>
            </select>
            <select disabled className="block input-blue-outline-dark">
              <option value="">disabled blue outline input</option>
              <option value="dog">Dog</option>
              <option value="cat">Cat</option>
            </select>
            <select className="block input-blue-underline-dark">
              <option value="">blue underline input</option>
              <option value="dog">Dog</option>
              <option value="cat">Cat</option>
            </select>
            <select disabled className="block input-blue-underline-dark">
              <option value="">disabled blue underline input</option>
              <option value="dog">Dog</option>
              <option value="cat">Cat</option>
            </select>
          </div>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-3 place-items-center h-screen">
          <div className="space-y-4">
            <button className="btn-brown-fill">
              fill brown button with icon
              <HiArrowNarrowRight className="h-5 w-5" />
            </button>
            <button disabled className="btn-brown-fill">
              disabled fill brown button with icon
              <HiArrowNarrowRight className="h-5 w-5" />
            </button>
          </div>
          <div className="space-y-4">
            <button className="btn-blue-outline">outline blue button</button>
            <button disabled className="btn-blue-outline">
              disabled outline blue button
            </button>
          </div>
          <div className="space-y-4">
            <button className="btn-blue-ghost">ghost blue button</button>
            <button disabled className="btn-blue-ghost">
              disabled ghost blue button
            </button>
          </div>
          <div className="space-y-4">
            <label className="block">
              <input
                placeholder="blue outline input"
                className="input-blue-outline"
              />
            </label>
            <label className="block">
              <input
                disabled
                placeholder="disabled blue outline input"
                className="input-blue-outline w-[250px]"
              />
            </label>
          </div>
          <div className="space-y-4">
            <label className="block">
              <input
                placeholder="blue underline input"
                className="input-blue-underline"
              />
            </label>
            <label className="block">
              <input
                disabled
                placeholder="disabled blue underline input"
                className="input-blue-underline w-[250px]"
              />
            </label>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
