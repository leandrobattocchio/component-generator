import { useEffect, useState } from 'react'

const LOADING_STATES = [
  [true, false, false],
  [true, true, false],
  [true, true, true]
]

const Loading = () => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index + 1) % LOADING_STATES.length)
    }, 500)

    return () => clearInterval(interval)
  }, [index])

  return (
    <div className='flex items-center '>
      <div className='font-extrabold'>.</div>
      <div className={index > 0 ? 'font-extrabold' : 'invisible'}>.</div>
      <div className={index === 2 ? 'font-extrabold' : 'invisible'}>.</div>
    </div>
  )
}

export default Loading
