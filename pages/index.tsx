import DialogExample from '@/components/Dialog'

export default function Home() {
  return (
    <>
      <header className="flex items-center justify-center w-full bg-gray-500 h-20 text-center text-white">Navbar</header>
      <main className="flex-1 w-full overflow-auto">
        <div className="flex flex-col h-[2000px] py-4 w-full items-center">
          Really long page
          <div className='h-20 w-80 overflow-auto p-4 border border-gray-600 mb-10'>
            <div className='w-[1000px] h-10 bg-green-100'></div>
          </div>
          <DialogExample />
        </div>
      </main>
    </>
  )
}
