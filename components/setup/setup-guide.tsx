import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ClipboardCopy, Check } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export function SetupGuide({ configId = "1f8132" }) {
  const [selectedDevice, setSelectedDevice] = useState("windows-11");
  const { toast } = useToast();

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(
      () => {
        toast({
          description: "Copied to clipboard",
          duration: 2000,
        });
      },
      (err) => {
        console.error("Could not copy text: ", err);
      }
    );
  };

  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle className="text-xl">Setup Guide</CardTitle>
        <CardDescription>
          Follow the instructions below to set up Nexus on your device, browser or router
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <Tabs value={selectedDevice} onValueChange={setSelectedDevice} className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 mb-4">
            <TabsTrigger value="android">Android</TabsTrigger>
            <TabsTrigger value="ios">iOS</TabsTrigger>
            <TabsTrigger value="windows-11">Windows</TabsTrigger>
            <TabsTrigger value="macos">macOS</TabsTrigger>
            <TabsTrigger value="linux">Linux</TabsTrigger>
            <TabsTrigger value="chromeos">ChromeOS</TabsTrigger>
            <TabsTrigger value="browsers">Browsers</TabsTrigger>
            <TabsTrigger value="routers">Routers</TabsTrigger>
          </TabsList>

          {/* Windows 11 Tab Content */}
          <TabsContent value="windows-11" className="space-y-6">
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Recommended</CardTitle>
                  <CardDescription>DNS over HTTPS</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ol className="list-decimal pl-5 space-y-3">
                    <li>Open the Settings app.</li>
                    <li>Go to Network & internet.</li>
                    <li>Click on Wi-Fi (or Ethernet).</li>
                    <li>Click on Hardware properties, or ignore this step if you clicked on Ethernet.</li>
                    <li>Click the Edit button next to DNS server assignment.</li>
                    <li>Select Manual.</li>
                    <li>Enable IPv4.</li>
                    <li className="flex items-start gap-2">
                      <span>Enter <span className="font-mono font-medium">45.90.28.0</span> as Preferred DNS, then select On (manual template) and enter</span>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="h-6 px-2"
                        onClick={() => copyToClipboard("https://dns.Nexus.io/1f8132")}
                      >
                        <ClipboardCopy className="h-3 w-3 mr-1" />
                        <span className="font-mono text-xs">https://dns.Nexus.io/{configId}</span>
                      </Button>
                    </li>
                    <li className="flex items-start gap-2">
                      <span>Enter <span className="font-mono font-medium">45.90.30.0</span> as Alternate DNS, then select On (manual template) and enter</span>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="h-6 px-2"
                        onClick={() => copyToClipboard("https://dns.Nexus.io/1f8132")}
                      >
                        <ClipboardCopy className="h-3 w-3 mr-1" />
                        <span className="font-mono text-xs">https://dns.Nexus.io/{configId}</span>
                      </Button>
                    </li>
                    <li>Click Save.</li>
                  </ol>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Or</CardTitle>
                  <CardDescription>Nexus for Windows</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ol className="list-decimal pl-5 space-y-3">
                    <li>Download the installer <a href="#" className="text-primary hover:underline">here</a>.</li>
                    <li className="flex items-start gap-2">
                      <span>After installing, right-click on Nexus icon in the Systray then open the Settings. Set</span>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="h-6 px-2"
                        onClick={() => copyToClipboard("1f8132")}
                      >
                        <ClipboardCopy className="h-3 w-3 mr-1" />
                        <span className="font-mono text-xs">{configId}</span>
                      </Button>
                      <span>as Configuration ID.</span>
                    </li>
                    <li>Right-click on Nexus icon in the Systray, then click on Enable.</li>
                  </ol>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Or</CardTitle>
                  <CardDescription>IPv4 (with Linked IP)</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ol className="list-decimal pl-5 space-y-3">
                    <li>Click on the Start menu, then click on Control Panel.</li>
                    <li>Click on Network and Internet, then Network and Sharing Center.</li>
                    <li>Click on Change Adapter Settings.</li>
                    <li>Right click on the Wi-Fi network you are connected to, then click Properties.</li>
                    <li>Select Internet Protocol Version 4.</li>
                    <li>Click Properties.</li>
                    <li>Click Use The Following DNS Server Addresses.</li>
                    <li className="flex items-start gap-2">
                      <span>Replace the current addresses (if any) with</span>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="h-6 px-2"
                        onClick={() => copyToClipboard("45.90.28.222")}
                      >
                        <ClipboardCopy className="h-3 w-3 mr-1" />
                        <span className="font-mono text-xs">45.90.28.222</span>
                      </Button>
                      <span>and</span>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="h-6 px-2"
                        onClick={() => copyToClipboard("45.90.30.222")}
                      >
                        <ClipboardCopy className="h-3 w-3 mr-1" />
                        <span className="font-mono text-xs">45.90.30.222</span>
                      </Button>
                    </li>
                    <li>Click OK, then Close. You may need to restart your browser.</li>
                  </ol>
                </CardContent>
              </Card>
              
              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="pt-4">
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-blue-600 mt-0.5" />
                    <p className="text-blue-700">
                      <span className="font-medium">Device Identification: </span>
                      <span className="text-blue-600">Follow these steps to identify your device in Analytics and Logs. For DNS-over-HTTPS, append the device name to the URL (e.g., for "John's PC", use: </span>
                      <span className="font-mono text-blue-700 text-sm">https://dns.Nexus.io/{configId}/John's%20PC</span>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          {/* Android Tab Content */}
          <TabsContent value="android" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Android Setup Instructions</CardTitle>
                <CardDescription>Follow these steps to setup Nexus on Android devices</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Download the Nexus app from Google Play Store and follow the in-app instructions to set up DNS protection.</p>
                <p>You'll need to enter your Configuration ID:</p>
                <div className="flex items-center justify-center my-4">
                  <Button 
                    variant="outline"
                    onClick={() => copyToClipboard(configId)}
                  >
                    <ClipboardCopy className="h-4 w-4 mr-2" />
                    <span className="font-mono">{configId}</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* iOS Tab Content */}
          <TabsContent value="ios" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">iOS Setup Instructions</CardTitle>
                <CardDescription>Follow these steps to setup Nexus on iOS devices</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Download the Nexus app from App Store and follow the in-app instructions to set up DNS protection.</p>
                <p>You'll need to enter your Configuration ID:</p>
                <div className="flex items-center justify-center my-4">
                  <Button 
                    variant="outline"
                    onClick={() => copyToClipboard(configId)}
                  >
                    <ClipboardCopy className="h-4 w-4 mr-2" />
                    <span className="font-mono">{configId}</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Placeholder content for other devices */}
          <TabsContent value="macos" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">macOS Setup Instructions</CardTitle>
                <CardDescription>Follow these steps to setup Nexus on macOS devices</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Detailed setup instructions for macOS coming soon.</p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="linux" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Linux Setup Instructions</CardTitle>
                <CardDescription>Follow these steps to setup Nexus on Linux systems</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Detailed setup instructions for Linux coming soon.</p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="chromeos" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">ChromeOS Setup Instructions</CardTitle>
                <CardDescription>Follow these steps to setup Nexus on ChromeOS devices</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Detailed setup instructions for ChromeOS coming soon.</p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="browsers" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Browser Setup Instructions</CardTitle>
                <CardDescription>Follow these steps to setup Nexus in your browser</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Detailed setup instructions for browsers coming soon.</p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="routers" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Router Setup Instructions</CardTitle>
                <CardDescription>Follow these steps to setup Nexus on your router</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Detailed setup instructions for routers coming soon.</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
} 