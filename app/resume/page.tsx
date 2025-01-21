import { Suspense } from "react";
import ResumeForm from "@/components/resume-form";

export default function ResumePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ResumeForm />
    </Suspense>
  );
}