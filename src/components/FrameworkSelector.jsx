import { useConversationStorage } from '@/store/conversation'
import { ReactIcon, SvelteIcon, JavascriptIcon, VueIcon } from './Icons'
import { Select } from './Select'

const FRAMEWORKS = [
  {
    name: 'Vanilla',
    value: 'vanilla',
    icon: <JavascriptIcon />
  },
  {
    name: 'React',
    value: 'react',
    icon: <ReactIcon />
  },
  {
    name: 'Svelte',
    value: 'svelte',
    icon: <SvelteIcon />
  },
  {
    name: 'Vue',
    value: 'vue',
    icon: <VueIcon />
  }
]

const FrameworkSelector = () => {
  const [setFramework, framework] = useConversationStorage((state) => [
    state.setFramework,
    state.framework
  ])

  const frameworkSelected = FRAMEWORKS.find((f) => f.value === framework)

  return (
    <Select
      options={FRAMEWORKS}
      change={setFramework}
      label='Frameworks'
      selected={frameworkSelected}
      value={framework}
    />
  )
}

export default FrameworkSelector
