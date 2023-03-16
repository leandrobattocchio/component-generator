import { useConversationStorage } from '@/store/conversation'
import { JavascriptIcon, TypescriptIcon } from './Icons'
import { Select } from './Select'

const LANGUAGES = [
  {
    name: 'Javascript',
    value: 'javascript',
    icon: <JavascriptIcon />
  },
  {
    name: 'Typescript',
    value: 'typescript',
    icon: <TypescriptIcon />
  }
]

const LanguageSelector = () => {
  const [setLanguage, language] = useConversationStorage((state) => [
    state.setLanguage,
    state.language
  ])

  const languageSelected = LANGUAGES.find((l) => l.value === language)

  return (
    <Select
      options={LANGUAGES}
      change={setLanguage}
      label='Languages'
      selected={languageSelected}
      value={language}
    />
  )
}

export default LanguageSelector
