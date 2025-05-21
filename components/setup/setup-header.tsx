"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { ShieldCheck } from "lucide-react"; 

export function SetupHeader() {
  const router = useRouter();
  
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
            <ShieldCheck className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Setup Guide</h1>
            <p className="text-muted-foreground">
              Complete your Nexus setup for comprehensive family protection
            </p>
          </div>
        </div>
        <Button 
          onClick={() => router.push("/dashboard")}
          variant="outline"
        >
          Skip to Dashboard
        </Button>
      </div>
    </div>
  );
} 