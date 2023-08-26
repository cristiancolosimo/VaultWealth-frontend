import { NavBar, SideBar } from "./navbar";

export const LayoutUser = ({ children }:{children:any}) => {
  return (
    <div class="page-grid">
      <NavBar />
      <SideBar />
      <main class="flex page-grid-main">
        {children}
      </main>
    </div>
  )
}

