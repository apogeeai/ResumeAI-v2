import { Suspense } from "react";
import ResumeForm from "@/components/resume-form";
import { Card } from "@/components/ui/card";

export default function ResumePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <main className="container relative min-h-screen py-12">
        <div className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          {/* Header content */}
        </div>
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_14px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] dark:bg-[linear-gradient(to_right,#8888880D_1px,transparent_1px),linear-gradient(to_bottom,#8888880D_1px,transparent_1px)]" />
        </div>
        
        {/* Update all card classes to ensure 85% opacity */}
        <Card className="group relative p-6 md:p-8 border border-border/50 bg-white/85 dark:bg-background/85 backdrop-blur-xl supports-[backdrop-filter]:bg-white/85 dark:supports-[backdrop-filter]:bg-background/85 overflow-hidden shadow-sm">
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-white/10 dark:from-primary/5 dark:via-primary/0 dark:to-primary/5" />
          
          {/* Shine effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent dark:via-white/10" />
          </div>
          <ResumeForm />
        </Card>
      </main>
    </Suspense>
  );
}