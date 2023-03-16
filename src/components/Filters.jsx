import FrameworkSelector from './FrameworkSelector'
import LanguageSelector from './LanguageSelector'

const Filters = () => {
  return (
    <div className='flex justify-around w-full'>
      <FrameworkSelector />
      <LanguageSelector />
    </div>
  )
}

export default Filters
