import type { NextPage } from 'next'
import Link from 'next/link'
import { Dispatch, FC, SetStateAction, useState } from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

const colors = [
  'slate',
  'gray',
  'zinc',
  'neutral',
  'stone',
  'red',
  'orange',
  'amber',
  'yellow',
  'lime',
  'green',
  'emerald',
  'teal',
  'cyan',
  'sky',
  'blue',
  'indigo',
  'violet',
  'purple',
  'fuchsia',
  'pink',
  'rose',
] as const

type Colors = typeof colors[number]

const Home: NextPage = () => {
  const [invertBg, setInvertBg] = useState<boolean>(false)
  const [color, setColor] = useState<Colors>('blue')

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
          <Link href="/demo.mp4">
            <a className="underline mb-4 inline-block">Watch demo</a>
          </Link>
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
          <ColorSelector setColor={setColor} color={color} />
        </div>
        <code className="px-4 lg:px-6 font-medium">{`.btn-{color}-{fill|outline|ghost}{-dark}`}</code>
        <Grid>
          <Button pluginClass={`btn-${color}-fill-dark`} />
          <Button pluginClass={`btn-${color}-outline-dark`} />
          <Button pluginClass={`btn-${color}-ghost-dark`} />
          <Button pluginClass={`btn-${color}-fill`} />
          <Button pluginClass={`btn-${color}-outline`} />
          <Button pluginClass={`btn-${color}-ghost`} />
        </Grid>
        <hr className="mb-8 border-transparent" />
        <code className="px-4 lg:px-6 font-medium">{`.badge-{color}-{fill|outline}{-dark}`}</code>
        <Grid>
          <Badge pluginClass={`badge-${color}-fill-dark`} />
          <Badge pluginClass={`badge-${color}-outline-dark`} />
          <Badge pluginClass={`badge-${color}-fill`} />
          <Badge pluginClass={`badge-${color}-outline`} />
        </Grid>
        <hr className="mb-8 border-transparent" />
        <code className="px-4 lg:px-6 font-medium">{`.checkbox-{color}{-dark}`}</code>
        <Grid>
          <Checkbox pluginClass={`checkbox-${color}`} />
          <Checkbox pluginClass={`checkbox-${color}-dark`} />
        </Grid>
        <hr className="mb-8 border-transparent" />
        <code className="px-4 lg:px-6 font-medium">{`.input-{color}-{outline|underline}{-dark}`}</code>
        <Grid>
          <Input pluginClass={`input-${color}-outline-dark`} />
          <Input pluginClass={`input-${color}-underline-dark`} />
          <Input pluginClass={`input-${color}-outline`} />
          <Input pluginClass={`input-${color}-underline`} />
        </Grid>
      </div>
    </>
  )
}

export default Home

type ColorSelectorProps = {
  color: string
  setColor: Dispatch<SetStateAction<Colors>>
}

const ColorSelector: FC<ColorSelectorProps> = ({ color, setColor }) => {
  return (
    <div>
      <label htmlFor="color-selector" className="text-lg font-medium">
        Select a color
      </label>
      <select
        id="color-selector"
        defaultValue="blue"
        className={`input-${color}-outline mb-4 ml-3`}
        onChange={(e) => setColor(e.target.value as Colors)}
      >
        {colors.map((color) => (
          <option key={color} value={color}>
            {color}
          </option>
        ))}
      </select>
    </div>
  )
}

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

type TestElementProps = {
  pluginClass: string
}

const Badge: FC<TestElementProps> = ({ pluginClass }) => (
  <Card>
    <code className="mb-2 inline-block">.{pluginClass}</code>
    <div className="grid place-items-center flex-grow gap-3">
      <div className={pluginClass}>badge</div>
      <div className={pluginClass}>
        badge
        <HiArrowNarrowRight className="h-5 w-5" />
      </div>
    </div>
  </Card>
)

const Checkbox: FC<TestElementProps> = ({ pluginClass }) => {
  const [disabled, setDisabled] = useState<boolean>(false)

  return (
    <Card>
      <code className="mb-2 inline-block">.{pluginClass}</code>
      <Disable disabled={disabled} setDisabled={setDisabled} />
      <div className="grid place-items-center flex-grow gap-3">
        <input type="checkbox" disabled={disabled} className={pluginClass} />
      </div>
    </Card>
  )
}

const Button: FC<TestElementProps> = ({ pluginClass }) => {
  const [disabled, setDisabled] = useState<boolean>(false)

  return (
    <Card>
      <code className="mb-2 inline-block">.{pluginClass}</code>
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

const Input: FC<TestElementProps> = ({ pluginClass }) => {
  const [disabled, setDisabled] = useState<boolean>(false)

  return (
    <Card>
      <code className="mb-2 inline-block">.{pluginClass}</code>
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
