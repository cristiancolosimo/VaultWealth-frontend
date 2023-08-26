import { LayoutUser } from "../../components/mainLayout"

export const homePage = () => {
  return (
    <LayoutUser>
      <h1>homePage</h1>
      <div class="flex flex-wrap justify-around">
        {Array(4).fill(0).map((_, _1) => (
          <div class="flex-[1_0_150px] h-20">
              <h6>IN + OUT THIS PERIOD</h6>
          </div>
        ))}
        
      </div>

    </LayoutUser>
  )
}