"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Upload, Loader2 } from "lucide-react";
import { useDropzone } from "react-dropzone";
import { AnimatedText } from "@/components/animated-text";

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
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] dark:bg-[linear-gradient(to_right,#8888880D_1px,transparent_1px),linear-gradient(to_bottom,#8888880D_1px,transparent_1px)]" />
      </div>
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <AnimatedText
            text="Cover Letter Generator"
            className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent"
          />
          <AnimatedText
            text="Generate a tailored cover letter based on your resume and job description"
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
            <Card className="p-6 h-full border border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
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
            <Card className="p-6 h-full border border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <h2 className="text-2xl font-semibold mb-4">Job Description</h2>
              <Textarea
                placeholder="Paste the job description here..."
                className="min-h-[200px] mb-4 resize-none"
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
              />
              <Button
                className="w-full"
                onClick={generateCoverLetter}
                disabled={isGenerating || !jobDescription || !fileName}
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Generating...
                  </>
                ) : (
                  "Generate Cover Letter"
                )}
              </Button>
            </Card>
          </motion.div>
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
              <Card className="p-8 border border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <h3 className="text-2xl font-semibold">Your Cover Letter</h3>
                    <Button onClick={() => navigator.clipboard.writeText(coverLetter)}>
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