"use client";

import { Button } from "@/components/ui/button";
import { ShieldCheck } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useWallet } from "@/context/wallet-context";
import { useEffect } from "react";

export function LandingPage() {
  const router = useRouter();
  const { isConnected, connectWallet } = useWallet();

  useEffect(() => {
    if(isConnected) {
      router.push("/dashboard");
    }
  }, [isConnected, router]);


  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <div className="mr-4 flex items-center">
            <ShieldCheck className="h-6 w-6 mr-2 text-primary" />
            <h1 className="text-lg font-bold font-headline">TrustLayer</h1>
          </div>
          <div className="flex flex-1 items-center justify-end">
             <Button onClick={connectWallet} className="bg-accent text-accent-foreground hover:bg-accent/90">
                Connect Wallet
              </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="container grid lg:grid-cols-2 gap-12 items-center py-20 md:py-32">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-headline tracking-tighter">
              Build Your On-Chain Reputation
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              TrustLayer translates your digital and real-world actions into a portable, verifiable reputation score you can use across the decentralized web. Secure, self-sovereign, and built for the future of trust.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
               <Button onClick={connectWallet} size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                Connect Wallet to Get Started
              </Button>
              <Button size="lg" variant="outline">Learn More</Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Image 
              src="https://placehold.co/600x400.png"
              alt="TrustLayer concept art"
              width={600}
              height={400}
              className="rounded-xl shadow-2xl"
              data-ai-hint="digital identity security"
            />
          </div>
        </section>

         <section className="bg-muted py-20 md:py-24">
            <div className="container">
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-headline">How It Works</h2>
                    <p className="text-lg text-muted-foreground mt-4">A simple yet powerful protocol for a new era of digital identity.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8 text-center">
                    <div className="p-6 bg-background rounded-lg shadow-md">
                        <div className="inline-block p-4 bg-primary/10 rounded-full mb-4">
                            <ShieldCheck className="h-8 w-8 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Create Your DID</h3>
                        <p className="text-muted-foreground">Connect your wallet to establish a unique and self-sovereign Decentralized Identity (DID).</p>
                    </div>
                     <div className="p-6 bg-background rounded-lg shadow-md">
                        <div className="inline-block p-4 bg-primary/10 rounded-full mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/></svg>
                        </div>
                        <h3 className="text-xl font-bold mb-2">Verify Actions</h3>
                        <p className="text-muted-foreground">Our protocol verifies your on-chain and off-chain actions, from loan repayments to gig completions.</p>
                    </div>
                     <div className="p-6 bg-background rounded-lg shadow-md">
                        <div className="inline-block p-4 bg-primary/10 rounded-full mb-4">
                           <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M15 10h.01"/><path d="M11 14h.01"/><path d="M7 10h.01"/><path d="M3 10v4c0 1.7 1.3 3 3 3h12c1.7 0 3-1.3 3-3v-4M3 7V6c0-1.7 1.3-3 3-3h12c1.7 0 3 1.3 3 3v1"/></svg>
                        </div>
                        <h3 className="text-xl font-bold mb-2">Unlock Opportunities</h3>
                        <p className="text-muted-foreground">Use your portable reputation score across dApps to get better rates, access exclusive features, and more.</p>
                    </div>
                </div>
            </div>
        </section>
      </main>
      <footer className="bg-background border-t">
          <div className="container py-6 text-center text-muted-foreground text-sm">
            © {new Date().getFullYear()} TrustLayer. All Rights Reserved.
          </div>
      </footer>
    </div>
  );
}
