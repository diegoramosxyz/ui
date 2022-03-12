import type { NextPage } from 'next'
import { Dispatch, FC, SetStateAction, useState } from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

const Home: NextPage = () => {
  const [invertBg, setInvertBg] = useState<boolean>(false)

  return (
    <>
      <div
        className={`${
          invertBg ? 'bg-neutral-50' : 'text-white bg-neutral-900'
        }`}
      >
        <div className="p-4 lg:p-6 ">
          <p className="mb-4">
            Use Chrome Dev Tools to test{' '}
            <a
              className="underline"
              target="_blank"
              rel="noreferrer"
              href="https://developer.chrome.com/docs/devtools/css/reference/#pseudo-class"
            >
              element states
            </a>
            .
          </p>
          <div className="mb-4">
            <label htmlFor="invertBg" className="text-lg font-medium">
              Invert Theme
            </label>
            <input
              type="checkbox"
              name="invertBg"
              id="invertBg"
              className="transform scale-150 ml-3"
              onChange={() => setInvertBg(!invertBg)}
            />
          </div>
        </div>
        <code className="px-4 lg:px-6 font-medium">{`.btn-{color}-{fill|outline|ghost}{-dark}`}</code>
        <Grid>
          <Button pluginClass="btn-blue-fill-dark" />
          <Button pluginClass="btn-blue-outline-dark" />
          <Button pluginClass="btn-blue-ghost-dark" />
          <Button pluginClass="btn-blue-fill" />
          <Button pluginClass="btn-blue-outline" />
          <Button pluginClass="btn-blue-ghost" />
        </Grid>
        <hr className="mb-8 border-transparent" />
        <code className="px-4 lg:px-6 font-medium">{`.input-{color}-{outline|underline}{-dark}`}</code>
        <Grid>
          <Input pluginClass="input-blue-outline-dark" />
          <Input pluginClass="input-blue-underline-dark" />
          <Input pluginClass="input-blue-outline" />
          <Input pluginClass="input-blue-underline" />
        </Grid>
      </div>
    </>
  )
}

export default Home

const Grid: FC = ({ children }) => {
  return (
    <div className="gap-6 grid md:grid-cols-2 lg:grid-cols-3 justify-center p-4 lg:p-6">
      {children}
    </div>
  )
}
const Card: FC = ({ children }) => {
  return (
    <div className="flex flex-col ring-1 ring-neutral-700 p-4 rounded-md">
      {children}
    </div>
  )
}

type DisableProps = {
  setDisabled: Dispatch<SetStateAction<boolean>>
  disabled: boolean
}

const Disable: FC<DisableProps> = ({ setDisabled, disabled }) => {
  return (
    <div className="mb-4">
      <label htmlFor="disable">Disable</label>
      <input
        type="checkbox"
        name="disable"
        id="disable"
        className="transform scale-150 ml-3"
        onChange={() => setDisabled(!disabled)}
      />
    </div>
  )
}

type ButtonProps = {
  pluginClass: string
}

const Button: FC<ButtonProps> = ({ pluginClass }) => {
  const [disabled, setDisabled] = useState<boolean>(false)

  return (
    <Card>
      <code className="mb-2 inline-block">{pluginClass}</code>
      <Disable disabled={disabled} setDisabled={setDisabled} />
      <div className="grid place-items-center flex-grow gap-3">
        <button className={pluginClass} disabled={disabled}>
          button
        </button>
        <button className={pluginClass} disabled={disabled}>
          button
          <HiArrowNarrowRight className="h-5 w-5" />
        </button>
      </div>
    </Card>
  )
}

type InputProps = {
  pluginClass: string
}

const Input: FC<InputProps> = ({ pluginClass }) => {
  const [disabled, setDisabled] = useState<boolean>(false)

  return (
    <Card>
      <code className="mb-2 inline-block">{pluginClass}</code>
      <Disable disabled={disabled} setDisabled={setDisabled} />
      <div className="grid place-items-center flex-grow gap-3">
        <input
          type="text"
          disabled={disabled}
          placeholder="text"
          className={pluginClass}
        />
        <input
          type="password"
          disabled={disabled}
          placeholder="password"
          className={pluginClass}
        />
        <input
          type="email"
          disabled={disabled}
          placeholder="email"
          className={pluginClass}
        />
        <input
          type="url"
          disabled={disabled}
          placeholder="url"
          className={pluginClass}
        />
        <input
          type="number"
          disabled={disabled}
          placeholder="number"
          className={pluginClass}
        />
        <input
          type="tel"
          disabled={disabled}
          placeholder="tel"
          className={pluginClass}
        />
        <input
          type="search"
          disabled={disabled}
          placeholder="search"
          className={pluginClass}
        />
        <select disabled={disabled} defaultValue="" className={pluginClass}>
          <option value="" disabled>
            select
          </option>
          <option value="dog">dog</option>
          <option value="cat">cat</option>
        </select>
      </div>
    </Card>
  )
}
