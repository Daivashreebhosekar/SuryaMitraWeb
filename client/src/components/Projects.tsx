import { Card } from "@/components/ui/card";

const projects = [
  {
    title: "Residential Installation - Delhi",
    location: "New Delhi",
    capacity: "5 kW",
  },
  {
    title: "Commercial Setup - Mumbai",
    location: "Mumbai",
    capacity: "50 kW",
  },
  {
    title: "Industrial Solar Farm",
    location: "Gujarat",
    capacity: "200 kW",
  },
  {
    title: "Apartment Complex - Bangalore",
    location: "Bangalore",
    capacity: "100 kW",
  },
];

export function Projects() {
  return (
    <section
      id="projects"
      className="py-20 md:py-28 bg-background"
      data-testid="section-projects"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4"
            data-testid="text-projects-heading"
          >
            Our Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Successful solar installations across India
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden hover-elevate active-elevate-2 transition-all duration-300 group"
              data-testid={`card-project-${index}`}
            >
              <div className="relative h-64 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{
                    backgroundImage: "url('https://www.suryaamitra.com/assets/images/solar_image.jpg')",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center">
                      <i className="fas fa-location-dot mr-2"></i>
                      {project.location}
                    </span>
                    <span className="flex items-center bg-primary/80 px-3 py-1 rounded-full">
                      <i className="fas fa-bolt mr-2"></i>
                      {project.capacity}
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
