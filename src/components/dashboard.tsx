"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Briefcase, ClipboardCopy, ExternalLink, Info, Landmark, Pencil, Ticket, Trash2, Github, Globe } from "lucide-react";

// Mock data
const actions = [
  { type: "Loan Repaid", platform: "Aave", date: "2023-10-26", tx: "0xabc...", icon: Landmark },
  { type: "Gig Completed", platform: "Fiverr", date: "2023-10-22", tx: "0xdef...", icon: Briefcase },
  { type: "Ticket Bought", platform: "Eventbrite", date: "2023-10-18", tx: "0x123...", icon: Ticket },
  { type: "Loan Repaid", platform: "Compound", date: "2023-10-15", tx: "0x456...", icon: Landmark },
];

const apiKeys = [
  { name: "My DApp", key: "trust_sk_123...xyz", created: "2023-09-01" },
  { name: "Analytics Dashboard", key: "trust_sk_456...uvw", created: "2023-08-15" },
];

export function Dashboard() {
  return (
    <Tabs defaultValue="dashboard" className="w-full">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
        <h1 className="text-3xl font-bold font-headline">My Reputation</h1>
        <TabsList className="self-start sm:self-auto">
          <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          <TabsTrigger value="developer">Developer API</TabsTrigger>
        </TabsList>
      </div>

      <TabsContent value="dashboard">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Left Column */}
          <div className="md:col-span-1 space-y-8">
            <Card className="overflow-hidden">
              <CardHeader className="flex flex-row items-start justify-between bg-muted/50 p-4">
                <CardTitle className="text-lg">Profile</CardTitle>
                <Button variant="ghost" size="icon" className="h-7 w-7 -mt-1 -mr-1">
                  <Pencil className="h-4 w-4" />
                  <span className="sr-only">Edit Profile</span>
                </Button>
              </CardHeader>
              <CardContent className="p-4 flex flex-col items-center text-center">
                <Avatar className="w-24 h-24 mb-4 border-4 border-background ring-2 ring-primary">
                  <AvatarImage src="https://placehold.co/150x150.png" data-ai-hint="profile picture" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <p className="font-bold text-xl font-headline">john.eth</p>
                <p className="text-sm text-muted-foreground">Joined October 2023</p>
                <div className="flex space-x-2 mt-4">
                  <Button variant="outline" size="icon" asChild><a href="#" aria-label="Github Profile"><Github className="h-4 w-4" /></a></Button>
                  <Button variant="outline" size="icon" asChild><a href="#" aria-label="Personal Website"><Globe className="h-4 w-4" /></a></Button>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Claim New Actions</CardTitle>
                <CardDescription>Prove completed actions from other platforms.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button className="w-full justify-start gap-2" variant="outline"><Landmark className="h-4 w-4 text-muted-foreground"/>Claim from Aave</Button>
                <Button className="w-full justify-start gap-2" variant="outline"><Briefcase className="h-4 w-4 text-muted-foreground"/>Claim from Fiverr</Button>
                <Button className="w-full justify-start gap-2" variant="outline"><Ticket className="h-4 w-4 text-muted-foreground"/>Claim from Eventbrite</Button>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="md:col-span-2 space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Reputation Score</span>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Info className="h-4 w-4 text-muted-foreground cursor-pointer" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Your score is calculated based on verified on-chain actions.</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </CardTitle>
                <CardDescription>A measure of your on-chain trustworthiness.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-baseline space-x-2">
                  <p className="text-7xl font-bold text-primary animate-pulse" style={{animationDelay: '0.2s', animationDuration: '1s'}}>850</p>
                  <p className="text-lg font-medium text-primary">(Excellent)</p>
                </div>
                <Progress value={85} className="mt-4 h-3" />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Action Verification Feed</CardTitle>
                <CardDescription>A chronological history of your verified reputation-building actions.</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Action</TableHead>
                      <TableHead className="hidden sm:table-cell">Platform</TableHead>
                      <TableHead className="hidden md:table-cell">Date</TableHead>
                      <TableHead className="text-right">Transaction</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {actions.map((action, index) => (
                      <TableRow key={index}>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <div className="p-2 bg-muted rounded-md">
                               <action.icon className="h-5 w-5 text-muted-foreground" />
                            </div>
                            <span className="font-medium">{action.type}</span>
                          </div>
                        </TableCell>
                        <TableCell className="hidden sm:table-cell">{action.platform}</TableCell>
                        <TableCell className="hidden md:table-cell">{action.date}</TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="icon" asChild>
                            <a href="#" target="_blank" rel="noopener noreferrer" aria-label={`View transaction for ${action.type}`}>
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="developer">
        <div className="grid gap-6 max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>API Key Management</CardTitle>
              <CardDescription>Generate and manage API keys to use the TrustLayer API.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-2">
                <Input placeholder="New API key name..." className="flex-grow"/>
                <Button className="bg-accent text-accent-foreground hover:bg-accent/90">Generate Key</Button>
              </div>
              <Separator />
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Active Keys</h3>
                {apiKeys.map((key) => (
                    <div key={key.key} className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 border rounded-lg gap-4">
                        <div>
                            <p className="font-medium">{key.name}</p>
                            <p className="text-sm text-muted-foreground font-mono bg-muted p-1 rounded-sm inline-block">{key.key}</p>
                            <p className="text-xs text-muted-foreground mt-1">Created: {key.created}</p>
                        </div>
                        <div className="flex items-center gap-2 self-end sm:self-center">
                            <Button variant="outline" size="icon"><ClipboardCopy className="h-4 w-4" /><span className="sr-only">Copy API Key</span></Button>
                            <Button variant="destructive" size="icon"><Trash2 className="h-4 w-4" /><span className="sr-only">Revoke API Key</span></Button>
                        </div>
                    </div>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card>
              <CardHeader>
                <CardTitle>API Playground</CardTitle>
                <CardDescription>Test API endpoints and see sample requests and responses.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="p-8 text-center bg-muted rounded-lg">
                    <p className="text-muted-foreground">The interactive API playground is coming soon. For now, please refer to our developer documentation.</p>
                    <Button className="mt-4" variant="outline">View Docs</Button>
                </div>
              </CardContent>
          </Card>
        </div>
      </TabsContent>
    </Tabs>
  );
}
