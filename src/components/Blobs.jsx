export function Blob({ className = '', ...props }) {
  return (
    <div
      {...props}
      className={`${className} absolute rounded-3xl blur-3xl opacity-10 w-96 h-96`}
    />
  )
}

export function Blobs() {
  return (
    <div className='absolute opacity-80'>
      <Blob className='bg-purple-500 bottom-92 right-92' />
      <Blob className='bg-purple-500 bottom-72 right-72' />
      <Blob className='bg-purple-500 bottom-52 right-52' />
    </div>
  )
}
