import { Sandpack } from '@codesandbox/sandpack-react'
import { amethyst } from '@codesandbox/sandpack-themes'
import { useConversationStorage } from '@/store/conversation'
import { Toaster, toast } from 'sonner'
import { CopyIcon } from './Icons'

const generatePlaygroundFile = ({ code, framework }) => {
  code ??= ''

  if (framework === 'vanilla') {
    return {
      '/index.js': {
        code: `document.getElementById("app").innerHTML = \`${code.trim()}\``
      }
    }
  }

  if (framework === 'react') {
    return {
      '/App.js': {
        code: `
        import React from 'react' 
        import Component from './Component.jsx' 
        export default function App() { 
          return (
            <div id='app'>
              <Component />
            </div>
          )
        }`
      },
      '/Component.jsx': {
        code: code.trim()
      }
    }
  }

  if (framework === 'vue') {
    return {
      '/src/Component.vue': {
        code: `${code.trim()}`
      },
      '/src/App.vue': {
        code: `
        <template>
          <Component />
        </template>
        <script setup>
          import Component from './Component.vue'
        </script>
      `
      }
    }
  }

  if (framework === 'svelte') {
    return {
      '/Component.svelte': {
        code: `${code.trim()}`
      },
      '/App.svelte': {
        code: `<script>
  import Component from './Component.svelte'
</script>
<Component />`
      }
    }
  }

  return {}
}

const generateOptions = ({ framework, language }) => {
  if (framework === 'vanilla') {
    return {
      activeFile: '/index.js'
    }
  }

  if (framework === 'react') {
    return {
      activeFile: '/Component.jsx',
      visibleFiles: ['/Component.jsx', '/App.js']
    }
  }

  if (framework === 'vue') {
    return {
      activeFile: '/src/Component.vue',
      visibleFiles: ['/src/Component.vue', '/src/App.vue']
    }
  }

  if (framework === 'svelte') {
    return {
      activeFile: '/Component.svelte',
      visibleFiles: ['/Component.svelte', '/App.svelte']
    }
  }
}

const Preview = () => {
  const { code, framework } = useConversationStorage(({ code, framework }) => ({
    code,
    framework
  }))
  const files = generatePlaygroundFile({ code, framework })

  const handleCopy = () => {
    const promise = navigator.clipboard.writeText(code)
    toast.promise(promise, {
      loading: 'Cargando...',
      success: () => 'Código copiado al portapapeles',
      error: 'Error copiando el código al portapapeles'
    })
  }
  return (
    <section className='w-4/5'>
      {code !== null && (
        <>
          <div className='relative'>
            <Sandpack
              options={{ wrapContent: true, ...generateOptions }}
              template={framework}
              theme={amethyst}
              files={files}
            />
            <button
              onClick={handleCopy}
              className='absolute top-0 right-0 bg-gray-600'
            >
              <CopyIcon />
            </button>
          </div>
          <Toaster />
        </>
      )}
    </section>
  )
}

export default Preview
