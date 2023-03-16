import { useConversationStorage } from '@/store/conversation'
import { useEffect, useRef } from 'react'
import { SendIcon } from './Icons'
import Loading from './Loading'

const Prompt = () => {
  const [generateComponent, loading] = useConversationStorage((state) => [
    state.generateComponent,
    state.loading
  ])
  const inputRef = useRef()

  const handleSubmit = async (event) => {
    event.preventDefault()
    const form = new FormData(event.target)
    const prompt = form.get('prompt')
    await generateComponent({ prompt })
  }

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  return (
    <form onSubmit={handleSubmit} className='w-3/5 mb-8'>
      <div className='relative block'>
        <input
          autoComplete='off'
          ref={inputRef}
          name='prompt'
          placeholder='Crea un botón de color rojo con un borde de 2px y un borde redondeado de 5px.'
          className={`${
            loading ? 'opacity-60' : ''
          }   placeholder-white/30 rounded-2xl block w-full text-md px-6 text-xl py-4 border border-zinc-600 bg-white/5 backdrop-blur-3xl sm:text-md shadow-lg text-white outline-none overflow-hidden transition ring-white/40 focus:ring-2`}
        />
        <div className='absolute top-0 flex items-center justify-center h-full right-4'>
          {loading ? (
            <Loading />
          ) : (
            <button className='transition-all hover:scale-125' type='submit'>
              <SendIcon />
            </button>
          )}
        </div>
      </div>
    </form>
  )
}

export default Prompt
