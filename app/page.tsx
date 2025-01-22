import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Upload, FileCheck, Brain, FileOutput } from "lucide-react";
import Link from "next/link";
import { AnimatedText } from "@/components/animated-text";
import { AnimatedLogo } from "@/components/animated-logo";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_14px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] dark:bg-[linear-gradient(to_right,#8888880D_1px,transparent_1px),linear-gradient(to_bottom,#8888880D_1px,transparent_1px)]" />
      </div>
      <div className="container py-12 md:py-24">
        <div className="max-w-[1110px] mx-auto text-center space-y-8">
          <AnimatedLogo className="text-4xl md:text-6xl font-bold" />
          <AnimatedText
            text="Transform your resume into a structured format optimized for ATS systems"
            className="text-lg md:text-xl text-muted-foreground"
            delay={0.5}
          />
          
          <Card className="group relative p-6 md:p-8 mt-8 md:mt-12 border border-[#e5e7eb] dark:border-border/50 bg-white/85 dark:bg-background/85 backdrop-blur-xl supports-[backdrop-filter]:bg-white/85 dark:supports-[backdrop-filter]:bg-background/85 overflow-hidden shadow-[0_1px_3px_0_rgb(0,0,0,0.1),0_1px_2px_-1px_rgb(0,0,0,0.1)] dark:shadow-sm">
            {/* Gradient overlay - adjusted for light/dark modes */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-white/10 dark:from-primary/5 dark:via-primary/0 dark:to-primary/5" />
            
            {/* Shine effect - adjusted for light/dark modes */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent dark:via-white/10" />
            </div>

            <div className="relative space-y-4 md:space-y-6">
              <div className="flex justify-center">
                <div className="relative inline-flex rounded-full p-3 bg-gradient-to-br from-primary/[0.15] via-primary/[0.07] to-transparent dark:from-primary/10 dark:via-primary/5 dark:to-transparent animate-slow-bounce">
                  <Upload className="h-12 w-12 md:h-16 md:w-16 text-primary" />
                </div>
              </div>
              <h2 className="text-xl md:text-2xl font-semibold bg-gradient-to-br from-foreground to-foreground/80 bg-clip-text text-transparent">
                Upload Your Resume
              </h2>
              <p className="text-sm md:text-base text-muted-foreground">
                Drag and drop your resume PDF or click to browse
              </p>
              <div className="max-w-[600px] mx-auto">
                <Link href="/resume" className="block relative group/button">
                  {/* Rainbow border animation - adjusted for light/dark modes */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 rounded-lg blur opacity-60 dark:opacity-75 group-hover/button:opacity-100 transition duration-1000 group-hover/button:duration-200"></div>
                  {/* Inner glow effect - adjusted for light/dark modes */}
                  <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-background/50 dark:from-background/40 dark:to-background/20 rounded-lg"></div>
                  <Button 
                    size="lg" 
                    className="relative w-full bg-gradient-to-r from-primary/90 to-primary/80 hover:from-primary hover:to-primary/90 dark:from-primary to-primary/90 dark:hover:from-primary/90 dark:hover:to-primary group-hover/button:scale-105 transition-all duration-500 hover:shadow-lg"
                  >
                    <span className="relative inline-flex items-center text-lg">
                      Get Started
                      <div className="ml-2 opacity-0 -translate-x-2 group-hover/button:opacity-100 group-hover/button:translate-x-0 transition-all duration-200">→</div>
                    </span>
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-16 max-w-[1110px] mx-auto">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="group relative p-6 text-center border border-[#e5e7eb] dark:border-border/50 bg-white/85 dark:bg-background/85 backdrop-blur-xl supports-[backdrop-filter]:bg-white/85 dark:supports-[backdrop-filter]:bg-background/85 overflow-hidden shadow-[0_1px_3px_0_rgb(0,0,0,0.1),0_1px_2px_-1px_rgb(0,0,0,0.1)] dark:shadow-sm"
              >
                {/* Gradient overlay - adjusted for light/dark modes */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-white/10 dark:from-primary/5 dark:via-primary/0 dark:to-primary/5" />
                
                {/* Shine effect - adjusted for light/dark modes */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent dark:via-white/10" />
                </div>

                {/* Content */}
                <div className="relative">
                  <div className="relative inline-flex rounded-full p-3 bg-gradient-to-br from-white/20 via-white/10 to-transparent dark:from-primary/10 dark:via-primary/5 dark:to-transparent mb-4">
                    <feature.icon className="w-12 h-12 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 bg-gradient-to-br from-foreground to-foreground/80 bg-clip-text text-transparent">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Why Use Us Section */}
      <section className="relative py-16 md:py-24">
        {/* Background with dark aqua blue at 20% opacity */}
        <div className="absolute inset-0 bg-[#0B4F6C] opacity-20 backdrop-blur-xl" />
        
        <div className="container relative">
          <div className="max-w-[1110px] mx-auto text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-br from-foreground to-foreground/80 bg-clip-text text-transparent">
              Why Choose ResumeAI?
            </h2>
            <p className="text-lg text-muted-foreground">
              Elevate your job search with our cutting-edge AI-powered platform
            </p>
          </div>
          
          <div className="max-w-[1110px] mx-auto grid md:grid-cols-3 gap-8">
            <Card className="group relative p-6 border border-[#e5e7eb] dark:border-border/50 bg-white/85 dark:bg-background/85 backdrop-blur-xl supports-[backdrop-filter]:bg-white/85 dark:supports-[backdrop-filter]:bg-background/85 overflow-hidden shadow-[0_1px_3px_0_rgb(0,0,0,0.1),0_1px_2px_-1px_rgb(0,0,0,0.1)] dark:shadow-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-white/10 dark:from-primary/5 dark:via-primary/0 dark:to-primary/5" />
              <div className="relative space-y-4">
                <div className="inline-flex rounded-lg p-3 bg-primary/10">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Lightning Fast</h3>
                <p className="text-muted-foreground">Generate ATS-optimized resumes in seconds, not hours</p>
              </div>
            </Card>

            <Card className="group relative p-6 border border-[#e5e7eb] dark:border-border/50 bg-white/85 dark:bg-background/85 backdrop-blur-xl supports-[backdrop-filter]:bg-white/85 dark:supports-[backdrop-filter]:bg-background/85 overflow-hidden shadow-[0_1px_3px_0_rgb(0,0,0,0.1),0_1px_2px_-1px_rgb(0,0,0,0.1)] dark:shadow-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-white/10 dark:from-primary/5 dark:via-primary/0 dark:to-primary/5" />
              <div className="relative space-y-4">
                <div className="inline-flex rounded-lg p-3 bg-primary/10">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">100% Secure</h3>
                <p className="text-muted-foreground">Your data is encrypted and never shared with third parties</p>
              </div>
            </Card>

            <Card className="group relative p-6 border border-[#e5e7eb] dark:border-border/50 bg-white/85 dark:bg-background/85 backdrop-blur-xl supports-[backdrop-filter]:bg-white/85 dark:supports-[backdrop-filter]:bg-background/85 overflow-hidden shadow-[0_1px_3px_0_rgb(0,0,0,0.1),0_1px_2px_-1px_rgb(0,0,0,0.1)] dark:shadow-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-white/10 dark:from-primary/5 dark:via-primary/0 dark:to-primary/5" />
              <div className="relative space-y-4">
                <div className="inline-flex rounded-lg p-3 bg-primary/10">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Enterprise Ready</h3>
                <p className="text-muted-foreground">Scalable solutions for teams of all sizes</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="container py-16 md:py-24 border-t border-border/50">
        <div className="max-w-[1110px] mx-auto text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-br from-foreground to-foreground/80 bg-clip-text text-transparent">
            What Our Users Say
          </h2>
          <p className="text-lg text-muted-foreground">
            Join thousands of professionals who've transformed their job search
          </p>
        </div>

        <div className="max-w-[1110px] mx-auto grid md:grid-cols-3 gap-8 mt-12">
          <Card className="group relative p-6 border border-[#e5e7eb] dark:border-border/50 bg-white/85 dark:bg-background/85 backdrop-blur-xl supports-[backdrop-filter]:bg-white/85 dark:supports-[backdrop-filter]:bg-background/85 overflow-hidden shadow-[0_1px_3px_0_rgb(0,0,0,0.1),0_1px_2px_-1px_rgb(0,0,0,0.1)] dark:shadow-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-white/10 dark:from-primary/5 dark:via-primary/0 dark:to-primary/5" />
            <div className="relative space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-xl font-semibold text-primary">SJ</span>
                </div>
                <div>
                  <h4 className="font-semibold">Sarah Johnson</h4>
                  <p className="text-sm text-muted-foreground">Software Engineer</p>
                </div>
              </div>
              <p className="text-muted-foreground">"Got callbacks from top tech companies after optimizing my resume with ResumeAI. The ATS optimization really works!"</p>
              <div className="flex text-primary">
                {"★".repeat(5)}
              </div>
            </div>
          </Card>

          <Card className="group relative p-6 border border-[#e5e7eb] dark:border-border/50 bg-white/85 dark:bg-background/85 backdrop-blur-xl supports-[backdrop-filter]:bg-white/85 dark:supports-[backdrop-filter]:bg-background/85 overflow-hidden shadow-[0_1px_3px_0_rgb(0,0,0,0.1),0_1px_2px_-1px_rgb(0,0,0,0.1)] dark:shadow-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-white/10 dark:from-primary/5 dark:via-primary/0 dark:to-primary/5" />
            <div className="relative space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-xl font-semibold text-primary">MP</span>
                </div>
                <div>
                  <h4 className="font-semibold">Michael Park</h4>
                  <p className="text-sm text-muted-foreground">Product Manager</p>
                </div>
              </div>
              <p className="text-muted-foreground">"The AI suggestions helped me highlight achievements I hadn't even thought to include. Landed my dream job!"</p>
              <div className="flex text-primary">
                {"★".repeat(5)}
              </div>
            </div>
          </Card>

          <Card className="group relative p-6 border border-[#e5e7eb] dark:border-border/50 bg-white/85 dark:bg-background/85 backdrop-blur-xl supports-[backdrop-filter]:bg-white/85 dark:supports-[backdrop-filter]:bg-background/85 overflow-hidden shadow-[0_1px_3px_0_rgb(0,0,0,0.1),0_1px_2px_-1px_rgb(0,0,0,0.1)] dark:shadow-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-white/10 dark:from-primary/5 dark:via-primary/0 dark:to-primary/5" />
            <div className="relative space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-xl font-semibold text-primary">AL</span>
                </div>
                <div>
                  <h4 className="font-semibold">Anna Lee</h4>
                  <p className="text-sm text-muted-foreground">UX Designer</p>
                </div>
              </div>
              <p className="text-muted-foreground">"Clean interface and powerful features. The cover letter generator saved me hours of work. Highly recommend!"</p>
              <div className="flex text-primary">
                {"★".repeat(5)}
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="border-t border-border/50 bg-white/85 dark:bg-background/85 backdrop-blur-xl supports-[backdrop-filter]:bg-white/85 dark:supports-[backdrop-filter]:bg-background/85">
        <div className="container py-12 md:py-16">
          <div className="max-w-[1110px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
              {/* Sample Resumes */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold bg-gradient-to-br from-foreground to-foreground/80 bg-clip-text text-transparent">Sample Resumes</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>
                    <Link href="#" className="hover:text-primary transition-colors">Software Engineer</Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-primary transition-colors">Product Manager</Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-primary transition-colors">Data Scientist</Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-primary transition-colors">UX Designer</Link>
                  </li>
                </ul>
              </div>

              {/* Resume Resources */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold bg-gradient-to-br from-foreground to-foreground/80 bg-clip-text text-transparent">Resume Resources</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>
                    <Link href="#" className="hover:text-primary transition-colors">ATS Optimization Guide</Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-primary transition-colors">Action Words Library</Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-primary transition-colors">Skills Database</Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-primary transition-colors">Industry Templates</Link>
                  </li>
                </ul>
              </div>

              {/* Career Tools */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold bg-gradient-to-br from-foreground to-foreground/80 bg-clip-text text-transparent">Career Tools</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>
                    <Link href="#" className="hover:text-primary transition-colors">Salary Calculator</Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-primary transition-colors">Interview Prep</Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-primary transition-colors">Job Search Tips</Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-primary transition-colors">Career Path Explorer</Link>
                  </li>
                </ul>
              </div>

              {/* AI Features */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold bg-gradient-to-br from-foreground to-foreground/80 bg-clip-text text-transparent">AI Features</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>
                    <Link href="#" className="hover:text-primary transition-colors">Experience Enhancer</Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-primary transition-colors">Skills Analyzer</Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-primary transition-colors">Job Match Score</Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-primary transition-colors">Resume Analytics</Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom Footer */}
            <div className="mt-12 pt-8 border-t border-border/50">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <div className="flex items-center space-x-4">
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy</Link>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms</Link>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link>
                </div>
                <div className="flex items-center space-x-6">
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </Link>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </Link>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
                <p className="text-sm text-muted-foreground">© 2024 ResumeAI. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

const features = [
  {
    title: "ATS Optimization",
    description: "Automatically format your resume to pass ATS systems with higher success rates",
    icon: FileCheck,
  },
  {
    title: "Smart Parsing",
    description: "Advanced AI extracts and organizes your experience, skills, and education",
    icon: Brain,
  },
  {
    title: "Easy Export",
    description: "Export your optimized resume in multiple formats ready for job applications",
    icon: FileOutput,
  },
];