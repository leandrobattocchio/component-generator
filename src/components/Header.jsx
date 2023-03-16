import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

const Header = () => {
  return (
    <div>
      <h1
        className={`text-6xl my-16 font-bold ${inter.className} w-3/5 text-center mx-auto`}
      >
        Generate{' '}
        <span className='font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>
          components
        </span>{' '}
        with{' '}
        <span className='font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>
          artificial intelligence
        </span>
      </h1>
    </div>
  )
}

export default Header
