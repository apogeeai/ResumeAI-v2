"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Upload, Loader2, FileCheck, Brain, FileOutput } from "lucide-react";
import { useDropzone } from "react-dropzone";
import { AnimatedText } from "@/components/animated-text";
import { AnimatedPageTitle } from "@/components/animated-page-title";
import { ScoreChart } from "@/components/score-chart";

export default function ATSScorePage() {
  const [jobDescription, setJobDescription] = useState("");
  const [score, setScore] = useState<number | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);

  const features = [
    {
      icon: FileCheck,
      title: "Step 1: Upload & Analyze",
      description: "Upload your resume and get an instant ATS compatibility score with detailed feedback"
    },
    {
      icon: Brain,
      title: "Step 2: Review & Optimize",
      description: "Get actionable suggestions to improve keyword matching and formatting for ATS systems"
    },
    {
      icon: FileOutput,
      title: "Step 3: Implement & Test",
      description: "Apply the recommended changes and re-test until you achieve a high ATS pass rate"
    }
  ];

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: async (acceptedFiles) => {
      const file = acceptedFiles[0];
      if (file) {
        setFileName(file.name);
        setIsAnalyzing(true);
        await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate API call
        setScore(85);
        setIsAnalyzing(false);
      }
    },
    accept: {
      'application/pdf': ['.pdf'],
      'text/plain': ['.txt']
    },
    multiple: false
  });

  const analyzeMatch = async () => {
    if (!fileName || !jobDescription.trim()) return;
    
    setIsAnalyzing(true);
    await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate API call
    setScore(85);
    setIsAnalyzing(false);
  };

  return (
    <main className="container relative min-h-screen py-12">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_14px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] dark:bg-[linear-gradient(to_right,#8888880D_1px,transparent_1px),linear-gradient(to_bottom,#8888880D_1px,transparent_1px)]" />
      </div>
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <AnimatedPageTitle
            text="ATS Score"
            gradientText="Checker"
            className="text-4xl md:text-6xl font-bold"
          />
          <AnimatedText
            text="Compare your resume against job descriptions to optimize your chances"
            className="text-lg md:text-xl text-muted-foreground"
            delay={0.5}
          />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="p-6 text-center h-full border border-[#e5e7eb] dark:border-border/50 bg-white/85 dark:bg-background/85 backdrop-blur-xl supports-[backdrop-filter]:bg-white/85 dark:supports-[backdrop-filter]:bg-background/85 shadow-[0_1px_3px_0_rgb(0,0,0,0.1),0_1px_2px_-1px_rgb(0,0,0,0.1)] dark:shadow-sm transition-transform duration-300 hover:scale-[1.02] before:absolute before:inset-0 before:border before:border-[#e5e7eb]/50 before:translate-x-[1px] before:translate-y-[1px] dark:before:border-border/30">
                <feature.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="group relative p-6 border border-[#e5e7eb] dark:border-border/50 bg-white/85 dark:bg-background/85 backdrop-blur-xl supports-[backdrop-filter]:bg-white/85 dark:supports-[backdrop-filter]:bg-background/85 overflow-hidden shadow-[0_1px_3px_0_rgb(0,0,0,0.1),0_1px_2px_-1px_rgb(0,0,0,0.1)] dark:shadow-sm transition-transform duration-300 hover:scale-[1.02] before:absolute before:inset-0 before:border before:border-[#e5e7eb]/50 before:translate-x-[1px] before:translate-y-[1px] dark:before:border-border/30">
              {/* Fancy gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-primary/[0.05] to-white/[0.05] dark:from-primary/10 dark:via-primary/5 dark:to-transparent" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" />
              
              <div className="relative">
                <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-br from-foreground to-foreground/80 bg-clip-text text-transparent">Upload Resume</h2>
                <div
                  {...getRootProps()}
                  className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
                    isDragActive ? "border-primary bg-primary/5" : "border-muted"
                  }`}
                >
                  <input {...getInputProps()} />
                  <div className="relative inline-flex rounded-full p-3 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent mb-4">
                    <Upload className="w-12 h-12 text-primary" />
                  </div>
                  {fileName ? (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-primary font-medium"
                    >
                      {fileName}
                    </motion.p>
                  ) : (
                    <p className="text-muted-foreground">
                      {isDragActive
                        ? "Drop your resume here"
                        : "Drag & drop your resume or click to browse"}
                    </p>
                  )}
                  <p className="text-sm text-muted-foreground mt-2">
                    Supports PDF and TXT files
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="group relative p-6 border border-[#e5e7eb] dark:border-border/50 bg-white/85 dark:bg-background/85 backdrop-blur-xl supports-[backdrop-filter]:bg-white/85 dark:supports-[backdrop-filter]:bg-background/85 overflow-hidden shadow-[0_1px_3px_0_rgb(0,0,0,0.1),0_1px_2px_-1px_rgb(0,0,0,0.1)] dark:shadow-sm transition-transform duration-300 hover:scale-[1.02] before:absolute before:inset-0 before:border before:border-[#e5e7eb]/50 before:translate-x-[1px] before:translate-y-[1px] dark:before:border-border/30">
              {/* Fancy gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-primary/[0.05] to-white/[0.05] dark:from-primary/10 dark:via-primary/5 dark:to-transparent" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" />
              
              <div className="relative">
                <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-br from-foreground to-foreground/80 bg-clip-text text-transparent">Job Description</h2>
                <Textarea
                  placeholder="Paste the job description here..."
                  className="min-h-[200px] mb-4 resize-none"
                  value={jobDescription}
                  onChange={(e) => setJobDescription(e.target.value)}
                />
                <Button
                  className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary"
                  onClick={analyzeMatch}
                  disabled={isAnalyzing || !jobDescription || !fileName}
                >
                  {isAnalyzing ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Analyzing...
                    </>
                  ) : (
                    "Analyze Match"
                  )}
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>

        <AnimatePresence>
          {score !== null && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="mt-12"
            >
              <Card className="group relative p-8 border border-[#e5e7eb] dark:border-border/50 bg-white/85 dark:bg-background/85 backdrop-blur-xl supports-[backdrop-filter]:bg-white/85 dark:supports-[backdrop-filter]:bg-background/85 overflow-hidden shadow-[0_1px_3px_0_rgb(0,0,0,0.1),0_1px_2px_-1px_rgb(0,0,0,0.1)] dark:shadow-sm transition-transform duration-300 hover:scale-[1.02] before:absolute before:inset-0 before:border before:border-[#e5e7eb]/50 before:translate-x-[1px] before:translate-y-[1px] dark:before:border-border/30">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-white/10 dark:from-primary/5 dark:via-primary/0 dark:to-primary/5" />
                
                <div className="relative grid md:grid-cols-2 gap-8 items-center">
                  <div className="flex justify-center">
                    <ScoreChart score={score} />
                  </div>
                  <div className="space-y-6">
                    <h3 className="text-2xl font-semibold bg-gradient-to-br from-foreground to-foreground/80 bg-clip-text text-transparent">Analysis Results</h3>
                    <div className="space-y-4">
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        <h4 className="font-medium mb-2">Missing Keywords</h4>
                        <p className="text-muted-foreground">
                          React, TypeScript, Node.js
                        </p>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7 }}
                      >
                        <h4 className="font-medium mb-2">Suggested Improvements</h4>
                        <ul className="list-disc list-inside text-muted-foreground">
                          <li>Add more details about React experience</li>
                          <li>Include TypeScript projects</li>
                          <li>Highlight Node.js backend development</li>
                        </ul>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}