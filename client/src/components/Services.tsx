import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: "fa-house-user",
    title: "Residential Solar",
    description:
      "Transform your home with clean, renewable energy. Our residential solar solutions are designed to maximize savings and reduce your carbon footprint.",
  },
  {
    icon: "fa-building",
    title: "Commercial Solar",
    description:
      "Power your business with sustainable energy. We design and install large-scale solar systems tailored to your commercial energy needs.",
  },
  {
    icon: "fa-screwdriver-wrench",
    title: "Installation & Maintenance",
    description:
      "Expert installation and ongoing maintenance services ensure your solar system operates at peak efficiency for years to come.",
  },
  {
    icon: "fa-handshake",
    title: "Consultation",
    description:
      "Free consultation to assess your energy needs, provide cost estimates, and design a custom solar solution that fits your budget.",
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="py-20 md:py-28 bg-background"
      data-testid="section-services"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4"
            data-testid="text-services-heading"
          >
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solar energy solutions available across India
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="hover-elevate active-elevate-2 transition-all duration-300 hover:shadow-lg"
              data-testid={`card-service-${index}`}
            >
              <CardHeader>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center">
                    <i className={`fas ${service.icon} text-primary text-2xl`}></i>
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl font-semibold mb-2">
                      {service.title}
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
