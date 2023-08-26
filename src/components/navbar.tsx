import { signal } from "@preact/signals";

const sideBarStatusSigna = signal(false);

export const SideBar = () => {
  return (
    <aside class="hidden sm:block page-grid-sidebar w-44">
      <div class="flex flex-col  h-screen  px-4  border-r bg-gray-900 border-gray-600">
        <div class="space-y-1 px-2 pb-3 pt-2">
          <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium bg-gray-700" aria-current="page">Dashboard</a>
          <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Banks</a>
          <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Records</a>
        </div>
      </div>
    </aside>
  )
}

export const NavBar = () => {
  return (
    <nav class="bg-gray-800 page-grid-header">
      <div class="mx-auto  px-2 sm:px-6 lg:px-8">
        <div class="relative flex h-14 items-center justify-between">
          <div class="absolute inset-y-0 left-0 flex items-center">
            <button type="button" class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
              <span class="absolute -inset-0.5"></span>
              
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path class="block" stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                <path class="hidden" stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

        </div>
      </div>

    </nav>

  )
}
