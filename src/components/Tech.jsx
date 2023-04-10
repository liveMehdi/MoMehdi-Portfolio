import { BallCanvas } from "./canvas"
import { technologies } from "../constants"


const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center m-auto gap-2 sm:gap-5 md:gap-10 max-w-7xl">
      {technologies.map((technology) =>(
        <div className="w-28 h-28" key={technology.name}>
          <BallCanvas icon={technology.icon}/>
        </div>
      ))}
    </div>
  )
}

export default Tech