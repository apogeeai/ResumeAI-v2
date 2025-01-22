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
        <Card className="group relative p-6 border border-[#e5e7eb] dark:border-border/50 bg-white/85 dark:bg-background/85 backdrop-blur-xl supports-[backdrop-filter]:bg-white/85 dark:supports-[backdrop-filter]:bg-background/85 overflow-hidden shadow-[0_1px_3px_0_rgb(0,0,0,0.1),0_1px_2px_-1px_rgb(0,0,0,0.1)] dark:shadow-sm transition-transform duration-300 hover:scale-[1.02] before:absolute before:inset-0 before:border before:border-[#e5e7eb]/50 before:translate-x-[1px] before:translate-y-[1px] dark:before:border-border/30">
          {/* Fancy gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-primary/[0.05] to-white/[0.05] dark:from-primary/10 dark:via-primary/5 dark:to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" />
          <ResumeForm />
        </Card>
      </main>
    </Suspense>
  );
}