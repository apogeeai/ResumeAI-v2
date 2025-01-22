import { Marquee } from "@/components/ui/marquee"

const JobSites = [
  "LinkedIn",
  "Indeed",
  "Monster",
  "ZipRecruiter",
  "Glassdoor",
  "CareerBuilder"
];

export function MarqueeDemo() {
  return (
    <div className="space-y-4 mt-[30px]">
      <h3 className="text-center text-lg text-muted-foreground">
        Used on Sites such as:
      </h3>
      <Marquee speed={25} pauseOnHover={false}>
        {JobSites.map((site, index) => (
          <div
            key={index}
            className="relative h-full w-fit mx-8 flex items-center justify-start"
          >
            <span className="text-foreground dark:text-white text-2xl font-semibold whitespace-nowrap">{site}</span>
          </div>
        ))}
      </Marquee>
    </div>
  )
} 