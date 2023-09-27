const HeroGrid = () => {
  return (
    <div className="grid xs:grid-cols-3 md:grid-cols-5 gap-x-2 mt-24">
     <div className="grid flex-col gap-y-3 ">
      <img className="rounded-lg lg:w-66 h-40" src="Rectangle 2970.png"/>
      <img className="flex rounded-lg lg:w-40 h-28 justify-center items-center mb-8" src="Rectangle 2977.png"/>
     </div>
      <img className="rounded-lg lg:w-86 h-156  " src="Rectangle 2971.png"/>
      <div className="flex-col grid gap-y-3">
      <img className="rounded-lg" src="Rectangle 2973.png"/>
      <img className="rounded-lg" src="Rectangle 2980.png"/>
      </div>
      <img className="rounded-lg" src="Rectangle 2982.png"/>
      <div className="flex-col grid gap-y-3">
      <img className="rounded-lg" src="Rectangle 2976.png"/>
      <img className="rounded-lg" src="Rectangle 2983.png"/>
      </div>
    </div>
  )
}

export default HeroGrid