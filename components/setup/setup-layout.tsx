"use client";

import { useState } from "react";
import { 
  Shield, 
  Lock, 
  Eye, 
  UserCheck, 
  Ban, 
  CheckSquare, 
  BarChart, 
  Scroll, 
  Settings,
  Check,
  XCircle,
  AlertTriangle,
  AreaChart,
  ClipboardCopy,
  Info
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { SetupGuide } from "./setup-guide";

export function SetupLayout() {
  const [activeTab, setActiveTab] = useState("setup");
  const [setupComplete, setSetupComplete] = useState(40);
  const { toast } = useToast();
  const router = useRouter();
  const [showSetupGuide, setShowSetupGuide] = useState(false);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text).then(
      () => {
        toast({
          description: `${label} copied to clipboard`,
          duration: 2000,
        });
      },
      (err) => {
        console.error("Could not copy text: ", err);
      }
    );
  };

  return (
    <Tabs 
      defaultValue="setup" 
      className="w-full" 
      onValueChange={setActiveTab}
    >
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <p className="text-sm text-muted-foreground">Setup Progress</p>
          <span className="text-sm font-medium">{setupComplete}%</span>
        </div>
        <Progress 
          value={setupComplete} 
          className="h-2 transition-all duration-500 [&>div]:bg-gradient-to-r [&>div]:from-blue-500 [&>div]:to-indigo-500" 
        />
      </div>

      <TabsList className="grid w-full grid-cols-3 md:grid-cols-9 mb-10  p-1 rounded-xl gap-1 h-20">
        <TabsTrigger 
          value="setup" 
          className="flex flex-col items-center gap-2 p-3 data-[state=active]:bg-white data-[state=active]:shadow-md data-[state=active]:border-b-2 data-[state=active]:border-blue-500 rounded-lg transition-all duration-200 hover:bg-slate-200 hover:data-[state=active]:bg-white"
        >
          <Shield className="h-5 w-5 data-[state=active]:text-blue-500 transition-colors" />
          <span className="text-xs font-medium">Setup</span>
        </TabsTrigger>
        <TabsTrigger 
          value="security" 
          className="flex flex-col items-center gap-2 p-3 data-[state=active]:bg-white data-[state=active]:shadow-md data-[state=active]:border-b-2 data-[state=active]:border-blue-500 rounded-lg transition-all duration-200 hover:bg-slate-200 hover:data-[state=active]:bg-white"
        >
          <Lock className="h-5 w-5 data-[state=active]:text-blue-500 transition-colors" />
          <span className="text-xs font-medium">Security</span>
        </TabsTrigger>
        <TabsTrigger 
          value="privacy" 
          className="flex flex-col items-center gap-2 p-3 data-[state=active]:bg-white data-[state=active]:shadow-md data-[state=active]:border-b-2 data-[state=active]:border-blue-500 rounded-lg transition-all duration-200 hover:bg-slate-200 hover:data-[state=active]:bg-white"
        >
          <Eye className="h-5 w-5 data-[state=active]:text-blue-500 transition-colors" />
          <span className="text-xs font-medium">Privacy</span>
        </TabsTrigger>
        <TabsTrigger 
          value="parental" 
          className="flex flex-col items-center gap-2 p-3 data-[state=active]:bg-white data-[state=active]:shadow-md data-[state=active]:border-b-2 data-[state=active]:border-blue-500 rounded-lg transition-all duration-200 hover:bg-slate-200 hover:data-[state=active]:bg-white"
        >
          <UserCheck className="h-5 w-5 data-[state=active]:text-blue-500 transition-colors" />
          <span className="text-xs font-medium">Parental</span>
        </TabsTrigger>
        <TabsTrigger 
          value="denylist" 
          className="flex flex-col items-center gap-2 p-3 data-[state=active]:bg-white data-[state=active]:shadow-md data-[state=active]:border-b-2 data-[state=active]:border-blue-500 rounded-lg transition-all duration-200 hover:bg-slate-200 hover:data-[state=active]:bg-white"
        >
          <Ban className="h-5 w-5 data-[state=active]:text-blue-500 transition-colors" />
          <span className="text-xs font-medium">Denylist</span>
        </TabsTrigger>
        <TabsTrigger 
          value="allowlist" 
          className="flex flex-col items-center gap-2 p-3 data-[state=active]:bg-white data-[state=active]:shadow-md data-[state=active]:border-b-2 data-[state=active]:border-blue-500 rounded-lg transition-all duration-200 hover:bg-slate-200 hover:data-[state=active]:bg-white"
        >
          <CheckSquare className="h-5 w-5 data-[state=active]:text-blue-500 transition-colors" />
          <span className="text-xs font-medium">Allowlist</span>
        </TabsTrigger>
        <TabsTrigger 
          value="analytics" 
          className="flex flex-col items-center gap-2 p-3 data-[state=active]:bg-white data-[state=active]:shadow-md data-[state=active]:border-b-2 data-[state=active]:border-blue-500 rounded-lg transition-all duration-200 hover:bg-slate-200 hover:data-[state=active]:bg-white"
        >
          <BarChart className="h-5 w-5 data-[state=active]:text-blue-500 transition-colors" />
          <span className="text-xs font-medium">Analytics</span>
        </TabsTrigger>
        <TabsTrigger 
          value="logs" 
          className="flex flex-col items-center gap-2 p-3 data-[state=active]:bg-white data-[state=active]:shadow-md data-[state=active]:border-b-2 data-[state=active]:border-blue-500 rounded-lg transition-all duration-200 hover:bg-slate-200 hover:data-[state=active]:bg-white"
        >
          <Scroll className="h-5 w-5 data-[state=active]:text-blue-500 transition-colors" />
          <span className="text-xs font-medium">Logs</span>
        </TabsTrigger>
        <TabsTrigger 
          value="settings" 
          className="flex flex-col items-center gap-2 p-3 data-[state=active]:bg-white data-[state=active]:shadow-md data-[state=active]:border-b-2 data-[state=active]:border-blue-500 rounded-lg transition-all duration-200 hover:bg-slate-200 hover:data-[state=active]:bg-white"
        >
          <Settings className="h-5 w-5 data-[state=active]:text-blue-500 transition-colors" />
          <span className="text-xs font-medium">Settings</span>
        </TabsTrigger>
      </TabsList>

      {/* Setup tab */}
      <TabsContent value="setup">
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Initial Setup</CardTitle>
                <CardDescription>Configure your Nexus protection</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-green-500" />
                      <span>Create account</span>
                    </div>
                    <Badge variant="outline">Completed</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-green-500" />
                      <span>Configure DNS</span>
                    </div>
                    <Badge variant="outline">Completed</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <XCircle className="h-5 w-5 text-yellow-500" />
                      <span>Add child profiles</span>
                    </div>
                    <Badge variant="outline" className="bg-yellow-50">Pending</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <XCircle className="h-5 w-5 text-yellow-500" />
                      <span>Set content filtering</span>
                    </div>
                    <Badge variant="outline" className="bg-yellow-50">Pending</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <XCircle className="h-5 w-5 text-yellow-500" />
                      <span>Configure time limits</span>
                    </div>
                    <Badge variant="outline" className="bg-yellow-50">Pending</Badge>
                  </div>
                </div>
                <div className="pt-4">
                  <Button 
                    className="w-full" 
                    onClick={() => setSetupComplete(prev => Math.min(prev + 20, 100))}
                  >
                    Continue Setup
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            {/* Nexus Configuration Card */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Nexus Configuration</CardTitle>
                <CardDescription>
                  Set up Nexus to protect your devices
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Info className="h-4 w-4 text-blue-500" />
                    <p className="text-sm text-muted-foreground">
                      This device is using Nexus with no profile. Use the endpoints shown below.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-lg mb-2">Endpoints</h3>
                  
                  <div className="space-y-3 border rounded-md p-4 bg-slate-50">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm font-medium">ID</p>
                        <p className="text-sm font-mono">1f8132</p>
                      </div>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => copyToClipboard("1f8132", "ID")}
                      >
                        <ClipboardCopy className="h-4 w-4 mr-2" />
                        Copy
                      </Button>
                    </div>
                    
                    <Separator />
                    
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm font-medium">DNS-over-TLS/QUIC</p>
                        <p className="text-sm font-mono">1f8132.dns.Nexus.io</p>
                      </div>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => copyToClipboard("1f8132.dns.Nexus.io", "DNS-over-TLS/QUIC")}
                      >
                        <ClipboardCopy className="h-4 w-4 mr-2" />
                        Copy
                      </Button>
                    </div>
                    
                    <Separator />
                    
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm font-medium">DNS-over-HTTPS</p>
                        <p className="text-sm font-mono">https://dns.Nexus.io/1f8132</p>
                      </div>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => copyToClipboard("https://dns.Nexus.io/1f8132", "DNS-over-HTTPS")}
                      >
                        <ClipboardCopy className="h-4 w-4 mr-2" />
                        Copy
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div>
                  <p className="text-sm text-muted-foreground">
                    Not sure how to use those?{" "}
                    <Button 
                      variant="link" 
                      className="p-0 h-auto font-medium"
                      onClick={() => setShowSetupGuide(!showSetupGuide)}
                    >
                      View Setup Guide
                    </Button>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {showSetupGuide && <SetupGuide />}
          
          <div className="flex justify-end mt-4">
            <Button onClick={() => router.push("/dashboard")}>
              Continue to Dashboard
            </Button>
          </div>
        </div>
      </TabsContent>
      
      {/* Security tab */}
      <TabsContent value="security">
        <Card>
          <CardHeader>
            <CardTitle>Security Settings</CardTitle>
            <CardDescription>Configure security protections</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Threat Protection</h3>
                  <p className="text-sm text-muted-foreground">Block malware, phishing, and other threats</p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">DNS-over-HTTPS</h3>
                  <p className="text-sm text-muted-foreground">Encrypt DNS traffic for enhanced security</p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Block New Domains</h3>
                  <p className="text-sm text-muted-foreground">Block recently registered domains often used for attacks</p>
                </div>
                <Switch />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Safe Search</h3>
                  <p className="text-sm text-muted-foreground">Force safe search on Google, Bing, and other search engines</p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      
      {/* Privacy tab */}
      <TabsContent value="privacy">
        <Card>
          <CardHeader>
            <CardTitle>Privacy Settings</CardTitle>
            <CardDescription>Configure privacy protections</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Block Trackers</h3>
                  <p className="text-sm text-muted-foreground">Block tracking scripts and pixels</p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Ad Blocking</h3>
                  <p className="text-sm text-muted-foreground">Block intrusive advertisements</p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Block Social Media Trackers</h3>
                  <p className="text-sm text-muted-foreground">Block tracking from Facebook, Twitter, etc.</p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Block Fingerprinting</h3>
                  <p className="text-sm text-muted-foreground">Prevent browser fingerprinting attempts</p>
                </div>
                <Switch />
              </div>
            </div>
            <div className="mt-4 p-4 bg-blue-50 rounded-lg">
              <div className="flex gap-2 items-start">
                <AlertTriangle className="h-5 w-5 text-blue-500 mt-0.5" />
                <div>
                  <h4 className="font-medium text-blue-700">Privacy Insight</h4>
                  <p className="text-sm text-blue-600">Your privacy settings are strong. 245 tracking attempts were blocked in the last 24 hours.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      
      {/* Parental Control tab */}
      <TabsContent value="parental">
        <Card>
          <CardHeader>
            <CardTitle>Parental Controls</CardTitle>
            <CardDescription>Configure content filtering for children</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Adult Content</h3>
                  <p className="text-sm text-muted-foreground">Block explicit and adult content</p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Gambling</h3>
                  <p className="text-sm text-muted-foreground">Block gambling websites and apps</p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Violence</h3>
                  <p className="text-sm text-muted-foreground">Block violent content</p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Social Media</h3>
                  <p className="text-sm text-muted-foreground">Block or restrict social media platforms</p>
                </div>
                <div className="flex items-center space-x-1">
                  <Badge variant="outline">Restricted</Badge>
                  <Button variant="ghost" size="sm">Edit</Button>
                </div>
              </div>
            </div>
            <div className="grid gap-4 mt-6">
              <div>
                <h3 className="font-medium mb-2">Children Profiles</h3>
                <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
                  <Card>
                    <CardHeader className="p-4">
                      <CardTitle className="text-base">Emma (8)</CardTitle>
                      <CardDescription>Strict filtering</CardDescription>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <Button variant="outline" size="sm" className="w-full">Edit Profile</Button>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="p-4">
                      <CardTitle className="text-base">Add Child</CardTitle>
                      <CardDescription>Create new profile</CardDescription>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <Button variant="outline" size="sm" className="w-full">Add Child</Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      
      {/* Denylist tab */}
      <TabsContent value="denylist">
        <Card>
          <CardHeader>
            <CardTitle>Denylist Configuration</CardTitle>
            <CardDescription>Block specific domains and websites</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center space-x-2">
              <Input placeholder="Enter domain to block (e.g., example.com)" className="flex-1" />
              <Button>Add Domain</Button>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium">Blocked Domains</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-2 border rounded-md">
                  <span>tiktok.com</span>
                  <Button variant="ghost" size="sm">Remove</Button>
                </div>
                <div className="flex items-center justify-between p-2 border rounded-md">
                  <span>instagram.com</span>
                  <Button variant="ghost" size="sm">Remove</Button>
                </div>
                <div className="flex items-center justify-between p-2 border rounded-md">
                  <span>example-games.com</span>
                  <Button variant="ghost" size="sm">Remove</Button>
                </div>
              </div>
            </div>
            <div className="p-4 bg-yellow-50 rounded-lg">
              <div className="flex gap-2 items-start">
                <AlertTriangle className="h-5 w-5 text-yellow-500 mt-0.5" />
                <div>
                  <h4 className="font-medium text-yellow-700">Active Blocking</h4>
                  <p className="text-sm text-yellow-600">15 access attempts to blocked domains were prevented today.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      
      {/* Allowlist tab */}
      <TabsContent value="allowlist">
        <Card>
          <CardHeader>
            <CardTitle>Allowlist Configuration</CardTitle>
            <CardDescription>Always allow specific domains and websites</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center space-x-2">
              <Input placeholder="Enter domain to allow (e.g., school.edu)" className="flex-1" />
              <Button>Add Domain</Button>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium">Allowed Domains</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-2 border rounded-md">
                  <span>khanacademy.org</span>
                  <Button variant="ghost" size="sm">Remove</Button>
                </div>
                <div className="flex items-center justify-between p-2 border rounded-md">
                  <span>schoolportal.edu</span>
                  <Button variant="ghost" size="sm">Remove</Button>
                </div>
                <div className="flex items-center justify-between p-2 border rounded-md">
                  <span>wikipedia.org</span>
                  <Button variant="ghost" size="sm">Remove</Button>
                </div>
              </div>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <div className="flex gap-2 items-start">
                <Check className="h-5 w-5 text-green-500 mt-0.5" />
                <div>
                  <h4 className="font-medium text-green-700">Always Accessible</h4>
                  <p className="text-sm text-green-600">These domains will always be accessible even when other restrictions are enabled.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      
      {/* Analytics tab */}
      <TabsContent value="analytics">
        <Card>
          <CardHeader>
            <CardTitle>Usage Analytics</CardTitle>
            <CardDescription>Monitor internet activity and device usage</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h3 className="font-medium">Usage Overview</h3>
              <div className="h-[200px] bg-slate-100 rounded-lg flex items-center justify-center">
                <div className="flex items-center gap-2 text-slate-500">
                  <AreaChart className="h-5 w-5" />
                  <span>Activity Chart (Last 7 Days)</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-medium">Top Visited Domains</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-2 border rounded-md">
                  <div className="flex items-center gap-2">
                    <span>google.com</span>
                    <Badge variant="secondary">Educational</Badge>
                  </div>
                  <span className="text-sm text-muted-foreground">124 visits</span>
                </div>
                <div className="flex items-center justify-between p-2 border rounded-md">
                  <div className="flex items-center gap-2">
                    <span>youtube.com</span>
                    <Badge variant="secondary">Entertainment</Badge>
                  </div>
                  <span className="text-sm text-muted-foreground">87 visits</span>
                </div>
                <div className="flex items-center justify-between p-2 border rounded-md">
                  <div className="flex items-center gap-2">
                    <span>khanacademy.org</span>
                    <Badge variant="secondary">Educational</Badge>
                  </div>
                  <span className="text-sm text-muted-foreground">53 visits</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-medium">Time Spent By Category</h3>
              <div className="space-y-2">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm">Educational</span>
                    <span className="text-sm">45%</span>
                  </div>
                  <Progress value={45} className="h-2" />
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm">Entertainment</span>
                    <span className="text-sm">30%</span>
                  </div>
                  <Progress value={30} className="h-2" />
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm">Gaming</span>
                    <span className="text-sm">15%</span>
                  </div>
                  <Progress value={15} className="h-2" />
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm">Social Media</span>
                    <span className="text-sm">10%</span>
                  </div>
                  <Progress value={10} className="h-2" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      
      {/* Logs tab */}
      <TabsContent value="logs">
        <Card>
          <CardHeader>
            <CardTitle>Activity Logs</CardTitle>
            <CardDescription>View detailed activity records</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="font-medium">Recent Activity</h3>
                <Button variant="outline" size="sm">Export Logs</Button>
              </div>
              
              <div className="space-y-2">
                <div className="p-3 border rounded-md">
                  <div className="flex justify-between">
                    <div>
                      <p className="font-medium">khanacademy.org</p>
                      <p className="text-sm text-muted-foreground">Emma's iPad</p>
                    </div>
                    <div className="text-right">
                      <Badge variant="outline">Allowed</Badge>
                      <p className="text-sm text-muted-foreground">Today, 3:45 PM</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-3 border rounded-md">
                  <div className="flex justify-between">
                    <div>
                      <p className="font-medium">tiktok.com</p>
                      <p className="text-sm text-muted-foreground">Emma's iPad</p>
                    </div>
                    <div className="text-right">
                      <Badge variant="outline" className="bg-red-50 text-red-700 hover:bg-red-50">Blocked</Badge>
                      <p className="text-sm text-muted-foreground">Today, 2:30 PM</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-3 border rounded-md">
                  <div className="flex justify-between">
                    <div>
                      <p className="font-medium">youtube.com</p>
                      <p className="text-sm text-muted-foreground">Home Computer</p>
                    </div>
                    <div className="text-right">
                      <Badge variant="outline">Allowed</Badge>
                      <p className="text-sm text-muted-foreground">Today, 1:15 PM</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-3 border rounded-md">
                  <div className="flex justify-between">
                    <div>
                      <p className="font-medium">malicioussite.com</p>
                      <p className="text-sm text-muted-foreground">Home Computer</p>
                    </div>
                    <div className="text-right">
                      <Badge variant="outline" className="bg-red-50 text-red-700 hover:bg-red-50">Blocked</Badge>
                      <p className="text-sm text-muted-foreground">Today, 11:45 AM</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-3 border rounded-md">
                  <div className="flex justify-between">
                    <div>
                      <p className="font-medium">google.com</p>
                      <p className="text-sm text-muted-foreground">Emma's iPad</p>
                    </div>
                    <div className="text-right">
                      <Badge variant="outline">Allowed</Badge>
                      <p className="text-sm text-muted-foreground">Today, 10:20 AM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="pt-4">
              <Button variant="outline" className="w-full">Load More</Button>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      
      {/* Settings tab */}
      <TabsContent value="settings">
        <Card>
          <CardHeader>
            <CardTitle>General Settings</CardTitle>
            <CardDescription>Configure Nexuspreferences</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Email Notifications</h3>
                  <p className="text-sm text-muted-foreground">Receive alerts for important events</p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Activity Reports</h3>
                  <p className="text-sm text-muted-foreground">Receive weekly activity summary</p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Override PIN</h3>
                  <p className="text-sm text-muted-foreground">Set a PIN to temporarily override restrictions</p>
                </div>
                <div className="flex gap-2">
                  <Input type="password" placeholder="PIN" className="w-24" />
                  <Button variant="outline" size="sm">Save</Button>
                </div>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Data Retention</h3>
                  <p className="text-sm text-muted-foreground">Keep activity data for 90 days</p>
                </div>
                <Button variant="outline" size="sm">Change</Button>
              </div>
            </div>
            
            <div className="pt-4">
              <Button variant="destructive" className="w-full">Reset All Settings</Button>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
} 