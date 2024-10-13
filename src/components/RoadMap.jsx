import { check2, grid, loading1 } from "../assets"
import { roadmap } from "../constants"
import Heading from "./Heading"
import Section from "./Section"
import TagLine from "./TagLine"
import Button from "./Button"

const RoadMap = () => {
  return (
    <Section className="overflow-hidden" id="roadmap">
      <Heading tag="Ready to get started" title="What we're working on"/>
      <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem] mx-10">
        {roadmap.map((item)=>{
          const status = item.status == 'done'? "Done":"In Progress";

          return (
            <div className={`md:flex even:md:translate-y-[7rem] p-0.24 justify-center rounded-[2.2rem] ${item.colorful ? "bg-conic-gradient": "bg-n-6"}`} key={item.id}>
              <div className="relative bg-n-8 p-8 rounded-[2rem] overflow-hidden xl:p-15 m-0.5">
                <div className="absolute top-0 left-0 max-w-full">
                  <img
                    src={grid}
                    className="w-full"
                    width={550}
                    height={550}
                    alt="Grid"
                  />
                </div>
                <div className="relative z-1">
                  <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20">
                    <TagLine>{item.date}</TagLine>
                    <div className="flex items-enter px-4 py-1 bg-n-1 rounded ">
                      <img
                        src={item.status == "done" ? check2 : loading1}
                        className="mr-2.5"
                        width={16}
                        height={16}
                        alt="status"
                      />
                      <div className="tagline text-n-8">{item.status}</div>
                      {console.log(item.status)}
                    </div>
                  </div>
                  <div className="mb-10 -my-10 -mx-15">
                    <img
                      src={item.imageUrl}
                      className="w-full"
                      width={640}
                      height={420}
                      alt={item.title}
                    />
                  </div>
                  <h4 className="h4 mb-4">{item.title}</h4>
                  <p className="body-2 text-n-2">{item.text}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex w-full justify-center mt-15">

        <Button>OUR ROADMAP</Button>
      </div>
    </Section>
  )
}

export default RoadMap