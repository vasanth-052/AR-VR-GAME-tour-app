import React from 'react'

export default function ExitCommunity() {
  return (
    <div>
        <div className="relative flex h-10 w-full items-center justify-center " >
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-left absolute left-2 top-2 h-6 w-9 rounded-full bg-slate-400 hover:bg-slate-500">
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  </div>
  <div className="text-2xl font-bold">Communities</div>
</div>
<div className="flex h-screen flex-row items-center bg-cover bg-[url('data:image/jpeg;base64,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')] justify-center">
  <div className="relative flex h-screen w-7/12 flex-row items-center bg-cover bg-[url('')] justify-center gap-10 rounded-md border border-stone-800 bg-slate-200">
    <div className="absolute left-0">
      <aside className="relative flex h-screen w-48 flex-col bg-slate-300">
        <div className="absolute top-2 mb-3 ml-2 mr-2 rounded-md border border-stone-950 bg-[#2a567f] px-9 py-0 text-white hover:bg-amber-700">
          <a href="#All Communities"> All Communities </a>
        </div>
        <div className="absolute top-16 mb-3 ml-2 mr-2 rounded-md border border-stone-950 bg-[#2a567f] px-9 py-0 text-white hover:bg-amber-700">
          <a href="#All Communities"> Joined Communities </a>
        </div>
      </aside>
    </div>
    <div className="absolute right-24 top-4 flex h-screen items-center">
      <div className="ml-12 flex flex-col">
        <div className="mb-4">Joined Communities</div>
        <input placeholder="Search community ..." className="mb-4 mt-2 rounded-lg" />

        <div className="flex h-96 w-auto flex-col overflow-scroll">
          <div className="flex flex-col items-start justify-start">
            
             <div className="mt-2 flex h-8 w-80 flex-row justify-between rounded bg-[#b6b0b0] text-center ">
              <div className="ml-2 mt-1">community1</div>
              <button className=" mr-1 mt-1 rounded-lg bg-gradient-to-l bg-[#e6d8d8] px-2 py-0.5 text-center mb-1 hover:bg-[#c74e4e]">Exit</button>
            </div>
            <div className="mt-2 flex h-8 w-80 flex-row justify-between rounded bg-[#b6b0b0] text-center ">
              <div className="ml-2 mt-1">community1</div>
              <button className=" mr-1 mt-1 rounded-lg bg-gradient-to-l bg-[#e6d8d8] px-2 py-0.5 text-center mb-1 hover:bg-[#c74e4e]">Exit</button>
            </div>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
    </div>
  )
}
