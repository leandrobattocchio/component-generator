import { GithubIcon, InstagramIcon, LinkedinIcon } from './Icons'

const Footer = () => {
  return (
    <div className='absolute bottom-20 flex gap-10'>
      Created by Leandro Battocchio
      <div className='flex gap-2'>
        <a
          href='https://github.com/leandrobattocchio'
          target='_blank'
          rel='noreferrer'
        >
          <GithubIcon />
        </a>
        <a
          href='https://www.linkedin.com/in/leandro-battocchio-7ba804226/'
          target='_blank'
          rel='noreferrer'
        >
          <LinkedinIcon />
        </a>
        <a
          href='https://www.instagram.com/leanb3/'
          target='_blank'
          rel='noreferrer'
        >
          <InstagramIcon />
        </a>
      </div>
    </div>
  )
}

export default Footer
