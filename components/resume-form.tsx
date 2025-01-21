"use client";

import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Upload, Save, Plus, Trash2 } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedText } from "@/components/animated-text";

export default function ResumeForm() {
  const [resumeData, setResumeData] = useState({
    personalInfo: {
      name: "",
      email: "",
      phone: "",
      location: "",
    },
    experience: [
      {
        company: "",
        position: "",
        startDate: "",
        endDate: "",
        description: "",
      },
    ],
    education: [
      {
        school: "",
        degree: "",
        field: "",
        graduationDate: "",
      },
    ],
    skills: [""],
  });

  const onDrop = useCallback((acceptedFiles: File[]) => {
    // Existing onDrop logic
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
    },
    multiple: false,
  });

  const addExperience = () => {
    setResumeData(prev => ({
      ...prev,
      experience: [
        ...prev.experience,
        {
          company: "",
          position: "",
          startDate: "",
          endDate: "",
          description: "",
        },
      ],
    }));
  };

  const addEducation = () => {
    setResumeData(prev => ({
      ...prev,
      education: [
        ...prev.education,
        {
          school: "",
          degree: "",
          field: "",
          graduationDate: "",
        },
      ],
    }));
  };

  const addSkill = () => {
    setResumeData(prev => ({
      ...prev,
      skills: [...prev.skills, ""],
    }));
  };

  const removeExperience = (index: number) => {
    setResumeData(prev => ({
      ...prev,
      experience: prev.experience.filter((_, i) => i !== index),
    }));
  };

  const removeEducation = (index: number) => {
    setResumeData(prev => ({
      ...prev,
      education: prev.education.filter((_, i) => i !== index),
    }));
  };

  const removeSkill = (index: number) => {
    setResumeData(prev => ({
      ...prev,
      skills: prev.skills.filter((_, i) => i !== index),
    }));
  };

  return (
    <div className="container py-8 md:py-12">
      <div className="max-w-4xl mx-auto space-y-8">
        <AnimatedText
          text="Resume Builder"
          className="text-3xl md:text-4xl font-bold text-center"
        />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card
            {...getRootProps()}
            className={`p-6 md:p-8 border-2 border-dashed ${
              isDragActive ? "border-primary" : "border-muted"
            } text-center cursor-pointer`}
          >
            <input {...getInputProps()} />
            <Upload className="h-10 w-10 md:h-12 md:w-12 mx-auto mb-4 text-primary" />
            <p className="text-sm md:text-base text-muted-foreground">
              {isDragActive
                ? "Drop your resume here"
                : "Drag and drop your resume PDF or click to browse"}
            </p>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="space-y-6 md:space-y-8"
        >
          {/* Personal Information */}
          <Card className="p-4 md:p-6">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">Personal Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  value={resumeData.personalInfo.name}
                  onChange={(e) =>
                    setResumeData((prev) => ({
                      ...prev,
                      personalInfo: { ...prev.personalInfo, name: e.target.value },
                    }))
                  }
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={resumeData.personalInfo.email}
                  onChange={(e) =>
                    setResumeData((prev) => ({
                      ...prev,
                      personalInfo: { ...prev.personalInfo, email: e.target.value },
                    }))
                  }
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={resumeData.personalInfo.phone}
                  onChange={(e) =>
                    setResumeData((prev) => ({
                      ...prev,
                      personalInfo: { ...prev.personalInfo, phone: e.target.value },
                    }))
                  }
                />
              </div>
              <div>
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  value={resumeData.personalInfo.location}
                  onChange={(e) =>
                    setResumeData((prev) => ({
                      ...prev,
                      personalInfo: { ...prev.personalInfo, location: e.target.value },
                    }))
                  }
                />
              </div>
            </div>
          </Card>

          {/* Experience Section */}
          <Card className="p-4 md:p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl md:text-2xl font-semibold">Experience</h2>
              <Button variant="outline" size="sm" onClick={addExperience}>
                <Plus className="h-4 w-4 mr-2" /> Add Experience
              </Button>
            </div>
            {resumeData.experience.map((exp, index) => (
              <div key={index} className="space-y-4 mb-6 pb-6 border-b last:mb-0 last:pb-0 last:border-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor={`company-${index}`}>Company</Label>
                    <Input
                      id={`company-${index}`}
                      value={exp.company}
                      onChange={(e) =>
                        setResumeData((prev) => {
                          const newExperience = [...prev.experience];
                          newExperience[index].company = e.target.value;
                          return { ...prev, experience: newExperience };
                        })
                      }
                    />
                  </div>
                  <div>
                    <Label htmlFor={`position-${index}`}>Position</Label>
                    <Input
                      id={`position-${index}`}
                      value={exp.position}
                      onChange={(e) =>
                        setResumeData((prev) => {
                          const newExperience = [...prev.experience];
                          newExperience[index].position = e.target.value;
                          return { ...prev, experience: newExperience };
                        })
                      }
                    />
                  </div>
                  <div>
                    <Label htmlFor={`start-date-${index}`}>Start Date</Label>
                    <Input
                      id={`start-date-${index}`}
                      type="month"
                      value={exp.startDate}
                      onChange={(e) =>
                        setResumeData((prev) => {
                          const newExperience = [...prev.experience];
                          newExperience[index].startDate = e.target.value;
                          return { ...prev, experience: newExperience };
                        })
                      }
                    />
                  </div>
                  <div>
                    <Label htmlFor={`end-date-${index}`}>End Date</Label>
                    <Input
                      id={`end-date-${index}`}
                      type="month"
                      value={exp.endDate}
                      onChange={(e) =>
                        setResumeData((prev) => {
                          const newExperience = [...prev.experience];
                          newExperience[index].endDate = e.target.value;
                          return { ...prev, experience: newExperience };
                        })
                      }
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor={`description-${index}`}>Description</Label>
                  <Textarea
                    id={`description-${index}`}
                    value={exp.description}
                    onChange={(e) =>
                      setResumeData((prev) => {
                        const newExperience = [...prev.experience];
                        newExperience[index].description = e.target.value;
                        return { ...prev, experience: newExperience };
                      })
                    }
                    className="min-h-[100px]"
                  />
                </div>
                {resumeData.experience.length > 1 && (
                  <div className="flex justify-end">
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => removeExperience(index)}
                    >
                      <Trash2 className="h-4 w-4 mr-2" /> Remove
                    </Button>
                  </div>
                )}
              </div>
            ))}
          </Card>

          {/* Education Section */}
          <Card className="p-4 md:p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl md:text-2xl font-semibold">Education</h2>
              <Button variant="outline" size="sm" onClick={addEducation}>
                <Plus className="h-4 w-4 mr-2" /> Add Education
              </Button>
            </div>
            {resumeData.education.map((edu, index) => (
              <div key={index} className="space-y-4 mb-6 pb-6 border-b last:mb-0 last:pb-0 last:border-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor={`school-${index}`}>School</Label>
                    <Input
                      id={`school-${index}`}
                      value={edu.school}
                      onChange={(e) =>
                        setResumeData((prev) => {
                          const newEducation = [...prev.education];
                          newEducation[index].school = e.target.value;
                          return { ...prev, education: newEducation };
                        })
                      }
                    />
                  </div>
                  <div>
                    <Label htmlFor={`degree-${index}`}>Degree</Label>
                    <Input
                      id={`degree-${index}`}
                      value={edu.degree}
                      onChange={(e) =>
                        setResumeData((prev) => {
                          const newEducation = [...prev.education];
                          newEducation[index].degree = e.target.value;
                          return { ...prev, education: newEducation };
                        })
                      }
                    />
                  </div>
                  <div>
                    <Label htmlFor={`field-${index}`}>Field of Study</Label>
                    <Input
                      id={`field-${index}`}
                      value={edu.field}
                      onChange={(e) =>
                        setResumeData((prev) => {
                          const newEducation = [...prev.education];
                          newEducation[index].field = e.target.value;
                          return { ...prev, education: newEducation };
                        })
                      }
                    />
                  </div>
                  <div>
                    <Label htmlFor={`graduation-date-${index}`}>Graduation Date</Label>
                    <Input
                      id={`graduation-date-${index}`}
                      type="month"
                      value={edu.graduationDate}
                      onChange={(e) =>
                        setResumeData((prev) => {
                          const newEducation = [...prev.education];
                          newEducation[index].graduationDate = e.target.value;
                          return { ...prev, education: newEducation };
                        })
                      }
                    />
                  </div>
                </div>
                {resumeData.education.length > 1 && (
                  <div className="flex justify-end">
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => removeEducation(index)}
                    >
                      <Trash2 className="h-4 w-4 mr-2" /> Remove
                    </Button>
                  </div>
                )}
              </div>
            ))}
          </Card>

          {/* Skills Section */}
          <Card className="p-4 md:p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl md:text-2xl font-semibold">Skills</h2>
              <Button variant="outline" size="sm" onClick={addSkill}>
                <Plus className="h-4 w-4 mr-2" /> Add Skill
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {resumeData.skills.map((skill, index) => (
                <div key={index} className="flex gap-2">
                  <Input
                    value={skill}
                    onChange={(e) =>
                      setResumeData((prev) => ({
                        ...prev,
                        skills: prev.skills.map((item, i) =>
                          i === index ? e.target.value : item
                        ),
                      }))
                    }
                    placeholder="Enter skill"
                  />
                  {resumeData.skills.length > 1 && (
                    <Button
                      variant="destructive"
                      size="icon"
                      onClick={() => removeSkill(index)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              ))}
            </div>
          </Card>

          <div className="flex justify-end">
            <Button size="lg" className="w-full md:w-auto">
              <Save className="h-4 w-4 mr-2" /> Save Resume
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}