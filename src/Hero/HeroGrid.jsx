const HeroGrid = () => {
  return (
    <div className="">
      <div className="grid xs:grid-cols-2 gap-y-2 md:grid-cols-5 gap-x-2 mt-24 h-full">
       <div className="grid flex-col gap-y-3 ml-20">
        <img className="rounded-lg lg:w-66" src="Rectangle 2970.png"/>
        <img className="flex rounded-lg lg:w-40 justify-center items-center mb-8" src="Rectangle 2977.png"/>
       </div>
        <img className="rounded-lg lg:w-112 row-span-2" src="Rectangle 2971.png"/>
        <div className="flex-col grid gap-y-3">
        <img className="rounded-lg" src="Rectangle 2973.png"/>
        <img className="rounded-lg lg:mb-16" src="Rectangle 2980.png"/>
        </div>
        <img className="rounded-lg row-span-2" src="Rectangle 2982.png"/>
        <div className="flex-col grid gap-y-3">
        <img className="rounded-lg" src="Rectangle 2976.png"/>
        <img className="rounded-lg" src="Rectangle 2983.png"/>
        </div>
      </div>
    </div>
  )
}

export default HeroGrid