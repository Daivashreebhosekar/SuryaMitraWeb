import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  {
    icon: "fa-trophy",
    title: "10+ Years Experience",
    description: "A decade of excellence in solar energy solutions",
  },
  {
    icon: "fa-indian-rupee-sign",
    title: "Affordable EMI",
    description: "Flexible payment plans to suit your budget",
  },
  {
    icon: "fa-certificate",
    title: "25-Year Warranty",
    description: "Comprehensive warranty on all solar installations",
  },
  {
    icon: "fa-user-check",
    title: "Certified Experts",
    description: "Trained and certified solar installation professionals",
  },
];

export function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="py-20 md:py-28 bg-muted/30"
      data-testid="section-why-choose-us"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4"
            data-testid="text-why-choose-us-heading"
          >
            Why Choose Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your trusted partner in renewable energy
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="hover-elevate active-elevate-2 transition-all duration-300 text-center"
              data-testid={`card-benefit-${index}`}
            >
              <CardContent className="pt-8 pb-8 px-6">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <i className={`fas ${benefit.icon} text-primary text-3xl`}></i>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
