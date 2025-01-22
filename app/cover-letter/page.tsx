"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Upload, Loader2, FileText } from "lucide-react";
import { useDropzone } from "react-dropzone";
import { AnimatedText } from "@/components/animated-text";
import { AnimatedPageTitle } from "@/components/animated-page-title";

export default function CoverLetterPage() {
  const [jobDescription, setJobDescription] = useState("");
  const [coverLetter, setCoverLetter] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: async (acceptedFiles) => {
      const file = acceptedFiles[0];
      if (file) {
        setFileName(file.name);
      }
    },
    accept: {
      'application/pdf': ['.pdf'],
      'text/plain': ['.txt']
    },
    multiple: false
  });

  const generateCoverLetter = async () => {
    if (!fileName || !jobDescription.trim()) return;
    
    setIsGenerating(true);
    await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate API call
    setCoverLetter(`Dear Hiring Manager,

I am writing to express my strong interest in the [Position] role at [Company Name]. After reviewing my resume and the job description, I believe my skills and experience make me an excellent candidate for this position.

[Generated content based on resume and job description will go here...]

Thank you for considering my application. I look forward to discussing how I can contribute to your team.

Best regards,
[Name]`);
    setIsGenerating(false);
  };

  return (
    <main className="container relative min-h-screen py-12">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_14px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] dark:bg-[linear-gradient(to_right,#8888880D_1px,transparent_1px),linear-gradient(to_bottom,#8888880D_1px,transparent_1px)]" />
      </div>
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <AnimatedPageTitle
            text="Cover Letter"
            gradientText="Generator"
            className="text-4xl md:text-6xl font-bold"
          />
          <AnimatedText
            text="Generate a tailored cover letter based on your resume and job description"
            className="text-lg md:text-xl text-muted-foreground"
            delay={0.5}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[1110px] mx-auto">
          <Card className="relative p-6 h-[280px] transition-transform duration-300 hover:scale-[1.02]">
            <div className="absolute inset-0 bg-gradient-to-r from-white/50 via-white/30 to-white/50 dark:from-white/[0.03] dark:via-white/[0.02] dark:to-white/[0.03]" />
            <div className="relative space-y-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Upload className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Upload Resume</h3>
              <p className="text-muted-foreground">Upload your resume to get started. We'll analyze it and help you create a matching cover letter.</p>
              <Button size="lg" className="w-full">
                Upload Resume
              </Button>
            </div>
          </Card>

          <Card className="relative p-6 h-[280px] transition-transform duration-300 hover:scale-[1.02]">
            <div className="absolute inset-0 bg-gradient-to-r from-white/50 via-white/30 to-white/50 dark:from-white/[0.03] dark:via-white/[0.02] dark:to-white/[0.03]" />
            <div className="relative space-y-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Job Description</h3>
              <p className="text-muted-foreground">Paste the job description to help us tailor your cover letter to the specific role.</p>
              <Button size="lg" className="w-full">
                Add Description
              </Button>
            </div>
          </Card>
        </div>

        <AnimatePresence>
          {coverLetter !== null && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="mt-12"
            >
              <Card className="group relative p-8 border border-[#e5e7eb] dark:border-border/50 bg-white/85 dark:bg-background/85 backdrop-blur-xl supports-[backdrop-filter]:bg-white/85 dark:supports-[backdrop-filter]:bg-background/85 overflow-hidden shadow-[0_1px_3px_0_rgb(0,0,0,0.1),0_1px_2px_-1px_rgb(0,0,0,0.1)] dark:shadow-sm transition-transform duration-300 hover:scale-[1.02] before:absolute before:inset-0 before:border before:border-[#e5e7eb]/50 before:translate-x-[1px] before:translate-y-[1px] dark:before:border-border/30">
                {/* Fancy gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-primary/[0.05] to-white/[0.05] dark:from-primary/10 dark:via-primary/5 dark:to-transparent" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" />
                
                <div className="relative space-y-6">
                  <div className="flex justify-between items-center">
                    <h3 className="text-2xl font-semibold bg-gradient-to-br from-foreground to-foreground/80 bg-clip-text text-transparent">Your Cover Letter</h3>
                    <Button 
                      onClick={() => navigator.clipboard.writeText(coverLetter)}
                      className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary"
                    >
                      Copy to Clipboard
                    </Button>
                  </div>
                  <Textarea
                    value={coverLetter}
                    className="min-h-[400px] text-[0.875rem] leading-relaxed"
                    readOnly
                  />
                </div>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
} 