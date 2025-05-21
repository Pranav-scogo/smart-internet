"use client";

import { SetupHeader } from "@/components/setup/setup-header";
import { SetupLayout } from "@/components/setup/setup-layout";

export default function SetupPage() {
  return (
    <div className="flex flex-col gap-6 p-6">
      <SetupHeader />
      <SetupLayout />
    </div>
  );
} 