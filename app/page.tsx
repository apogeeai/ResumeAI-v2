import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Upload } from "lucide-react";
import Link from "next/link";
import { AnimatedText } from "@/components/animated-text";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-background to-muted">
      <div className="container py-12 md:py-24">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <AnimatedText
            text="ResumeAI"
            className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent"
          />
          <AnimatedText
            text="Transform your resume into a structured format optimized for ATS systems"
            className="text-lg md:text-xl text-muted-foreground"
            delay={0.5}
          />
          
          <Card className="p-6 md:p-8 mt-8 md:mt-12 bg-background/50 backdrop-blur border-muted">
            <div className="space-y-4 md:space-y-6">
              <div className="flex justify-center">
                <Upload className="h-12 w-12 md:h-16 md:w-16 text-primary animate-bounce" />
              </div>
              <h2 className="text-xl md:text-2xl font-semibold">Upload Your Resume</h2>
              <p className="text-sm md:text-base text-muted-foreground">
                Drag and drop your resume PDF or click to browse
              </p>
              <Link href="/resume" className="block">
                <Button size="lg" className="w-full">
                  Get Started
                </Button>
              </Link>
            </div>
          </Card>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-12 md:mt-16">
            {features.map((feature, index) => (
              <Card key={index} className="p-4 md:p-6 bg-background/50 backdrop-blur">
                <feature.icon className="h-6 w-6 md:h-8 md:w-8 text-primary mb-3 md:mb-4" />
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-xs md:text-sm text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

const features = [
  {
    title: "ATS Optimization",
    description: "Automatically format your resume to pass ATS systems with higher success rates",
    icon: Upload,
  },
  {
    title: "Smart Parsing",
    description: "Advanced AI extracts and organizes your experience, skills, and education",
    icon: Upload,
  },
  {
    title: "Easy Export",
    description: "Export your optimized resume in multiple formats ready for job applications",
    icon: Upload,
  },
];