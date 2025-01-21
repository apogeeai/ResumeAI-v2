"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Upload, Loader2 } from "lucide-react";
import { useDropzone } from "react-dropzone";
import { AnimatedText } from "@/components/animated-text";
import { ScoreChart } from "@/components/score-chart";

export default function ATSScorePage() {
  const [jobDescription, setJobDescription] = useState("");
  const [score, setScore] = useState<number | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);

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
    <main className="container py-12">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <AnimatedText
            text="ATS Score Checker"
            className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent"
          />
          <AnimatedText
            text="Compare your resume against job descriptions to optimize your chances"
            className="text-lg md:text-xl text-muted-foreground"
            delay={0.5}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="p-6 h-full">
              <h2 className="text-2xl font-semibold mb-4">Upload Resume</h2>
              <div
                {...getRootProps()}
                className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
                  isDragActive ? "border-primary bg-primary/5" : "border-muted"
                }`}
              >
                <input {...getInputProps()} />
                <Upload className="w-12 h-12 mx-auto mb-4 text-primary" />
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
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="p-6 h-full">
              <h2 className="text-2xl font-semibold mb-4">Job Description</h2>
              <Textarea
                placeholder="Paste the job description here..."
                className="min-h-[200px] mb-4 resize-none"
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
              />
              <Button
                className="w-full"
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
              <Card className="p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="flex justify-center">
                    <ScoreChart score={score} />
                  </div>
                  <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">Analysis Results</h3>
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