import { useConversationStorage } from '@/store/conversation'

export function Debuger() {
  const { code, language, framework } = useConversationStorage(
    ({ code, language, framework }) => ({ code, language, framework })
  )
  const isShow = false

  return (
    <>
      {isShow && (
        <div className='fixed top-0 right-0 bg-white p-4 text-xs text-gray-900'>
          <h1 className='font-bold'>Debug</h1>
          <ul>
            <li>Framework: {framework}</li>
            <li>Language: {language}</li>
            <li>Code: {code}</li>
          </ul>
        </div>
      )}
    </>
  )
}
