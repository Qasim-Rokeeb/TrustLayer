"use client";

import { Button } from "@/components/ui/button";
import { Award, Code, Fingerprint, Verified, Building, Users, ShieldCheck } from "lucide-react";
import { useRouter } from "next/navigation";
import { useWallet } from "@/context/wallet-context";
import { useEffect } from "react";
import Image from "next/image";

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
            <Image src="/trustlayer.svg" alt="TrustLayer Logo" width={24} height={24} className="mr-2" />
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
        <section className="relative container grid lg:grid-cols-1 gap-16 items-center py-20 md:py-32">
          <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[radial-gradient(#2d3748_1px,transparent_1px)] [background-size:32px_32px]"></div>
          <div className="space-y-6 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-headline tracking-tighter">
              Build Your On-Chain Reputation
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              TrustLayer translates your digital and real-world actions into a portable, verifiable reputation score you can use across the decentralized web. Secure, self-sovereign, and built for the future of trust.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <Button onClick={connectWallet} size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                Connect Wallet to Get Started
              </Button>
              <Button size="lg" variant="outline">Learn More</Button>
            </div>
          </div>
        </section>

        <section id="why-trustlayer" className="py-20 md:py-24">
            <div className="container">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold font-headline">A New Standard for Digital Trust</h2>
                    <p className="text-lg text-muted-foreground mt-4">Traditional reputation is fragmented and controlled by platforms. TrustLayer gives you ownership of your identity, creating a unified, user-centric trust layer for the entire decentralized ecosystem.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-10">
                    <div className="text-center p-8 border rounded-lg">
                        <h3 className="text-xl font-bold mb-2">The Problem</h3>
                        <ul className="space-y-3 text-muted-foreground text-left">
                            <li className="flex items-start"><span className="text-destructive mr-2 mt-1">✗</span>Reputation is locked in silos.</li>
                            <li className="flex items-start"><span className="text-destructive mr-2 mt-1">✗</span>Users have no control or ownership.</li>
                            <li className="flex items-start"><span className="text-destructive mr-2 mt-1">✗</span>Difficult to establish trust in new dApps.</li>
                        </ul>
                    </div>
                     <div className="text-center p-8 border rounded-lg">
                        <h3 className="text-xl font-bold mb-2">The Solution</h3>
                        <ul className="space-y-3 text-muted-foreground text-left">
                           <li className="flex items-start"><span className="text-primary mr-2 mt-1">✓</span>A single, portable reputation score.</li>
                           <li className="flex items-start"><span className="text-primary mr-2 mt-1">✓</span>Self-sovereign identity owned by you.</li>
                           <li className="flex items-start"><span className="text-primary mr-2 mt-1">✓</span>Instantly verifiable trust for any dApp.</li>
                        </ul>
                    </div>
                     <div className="text-center p-8 border rounded-lg">
                         <h3 className="text-xl font-bold mb-2">The Impact</h3>
                         <ul className="space-y-3 text-muted-foreground text-left">
                           <li className="flex items-start"><span className="text-accent mr-2 mt-1">→</span>Reduced friction and risk in digital interactions.</li>
                           <li className="flex items-start"><span className="text-accent mr-2 mt-1">→</span>New economic opportunities unlocked.</li>
                           <li className="flex items-start"><span className="text-accent mr-2 mt-1">→</span>A more fair and transparent digital world.</li>
                         </ul>
                    </div>
                </div>
            </div>
        </section>

         <section id="how-it-works" className="bg-muted py-20 md:py-24">
            <div className="container">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold font-headline">How It Works</h2>
                    <p className="text-lg text-muted-foreground mt-4">A simple yet powerful protocol for a new era of digital identity.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-10 text-center">
                    <div className="p-8 bg-background rounded-lg shadow-md">
                        <div className="inline-block p-4 bg-primary/10 rounded-full mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg>
                        </div>
                        <h3 className="text-xl font-bold mb-2">Create Your DID</h3>
                        <p className="text-muted-foreground">Connect your wallet to establish a unique and self-sovereign Decentralized Identity (DID).</p>
                    </div>
                     <div className="p-8 bg-background rounded-lg shadow-md">
                        <div className="inline-block p-4 bg-primary/10 rounded-full mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/></svg>
                        </div>
                        <h3 className="text-xl font-bold mb-2">Verify Actions</h3>
                        <p className="text-muted-foreground">Our protocol verifies your on-chain and off-chain actions, from loan repayments to gig completions.</p>
                    </div>
                     <div className="p-8 bg-background rounded-lg shadow-md">
                        <div className="inline-block p-4 bg-primary/10 rounded-full mb-4">
                           <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M15 10h.01"/><path d="M11 14h.01"/><path d="M7 10h.01"/><path d="M3 10v4c0 1.7 1.3 3 3 3h12c1.7 0 3-1.3 3-3v-4M3 7V6c0-1.7 1.3-3 3-3h12c1.7 0 3 1.3 3 3v1"/></svg>
                        </div>
                        <h3 className="text-xl font-bold mb-2">Unlock Opportunities</h3>
                        <p className="text-muted-foreground">Use your portable reputation score across dApps to get better rates, access exclusive features, and more.</p>
                    </div>
                </div>
            </div>
        </section>

        <section id="features" className="py-20 md:py-24">
            <div className="container">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold font-headline">Core Features</h2>
                    <p className="text-lg text-muted-foreground mt-4">Everything you need to build and leverage on-chain reputation.</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                    <div className="p-8 border rounded-lg flex flex-col items-center">
                        <Fingerprint className="h-8 w-8 mb-4 text-primary" />
                        <h3 className="text-xl font-bold mb-2">Decentralized Identity</h3>
                        <p className="text-muted-foreground">Create a unique, self-sovereign identity anchored to your crypto wallet.</p>
                    </div>
                    <div className="p-8 border rounded-lg flex flex-col items-center">
                        <Verified className="h-8 w-8 mb-4 text-primary" />
                        <h3 className="text-xl font-bold mb-2">Action Verification</h3>
                        <p className="text-muted-foreground">A protocol for verifying actions like completed tasks or successful transactions.</p>
                    </div>
                    <div className="p-8 border rounded-lg flex flex-col items-center">
                        <Award className="h-8 w-8 mb-4 text-primary" />
                        <h3 className="text-xl font-bold mb-2">Portable Reputation</h3>
                        <p className="text-muted-foreground">A reputation score that can be leveraged across multiple dApps to unlock new opportunities.</p>
                    </div>
                    <div className="p-8 border rounded-lg flex flex-col items-center">
                        <Code className="h-8 w-8 mb-4 text-primary" />
                        <h3 className="text-xl font-bold mb-2">Developer-Friendly API</h3>
                        <p className="text-muted-foreground">A simple API for developers to query reputation scores and integrate them into applications.</p>
                    </div>
                </div>
            </div>
        </section>

        <section id="use-cases" className="bg-muted py-20 md:py-24">
            <div className="container">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold font-headline">Who is TrustLayer For?</h2>
                    <p className="text-lg text-muted-foreground mt-4">TrustLayer empowers all participants of the decentralized web.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-10 text-center">
                    <div className="p-8 bg-background rounded-lg shadow-md flex flex-col items-center">
                        <Building className="h-8 w-8 mb-4 text-primary" />
                        <h3 className="text-xl font-bold mb-2">For dApps & Protocols</h3>
                        <p className="text-muted-foreground">Reduce risk, prevent fraud, and build trusted communities. Offer better terms to users with a proven track record, and protect your platform from Sybil attacks.</p>
                    </div>
                     <div className="p-8 bg-background rounded-lg shadow-md flex flex-col items-center">
                        <Users className="h-8 w-8 mb-4 text-primary" />
                        <h3 className="text-xl font-bold mb-2">For Individuals</h3>
                        <p className="text-muted-foreground">Build a holistic on-chain identity that you own and control. Leverage your good reputation to access better rates in DeFi, unlock exclusive governance rights in DAOs, and prove your credibility in the metaverse.</p>
                    </div>
                     <div className="p-8 bg-background rounded-lg shadow-md flex flex-col items-center">
                        <ShieldCheck className="h-8 w-8 mb-4 text-primary" />
                        <h3 className="text-xl font-bold mb-2">For the Ecosystem</h3>
                        <p className="text-muted-foreground">Create a fundamental layer of trust that makes the entire decentralized web safer and more efficient. Foster a meritocratic environment where reputation is earned and portable.</p>
                    </div>
                </div>
            </div>
        </section>


        <section id="for-developers" className="py-20 md:py-24">
            <div className="container grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-6 mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold font-headline">Built for Developers</h2>
                    <p className="text-lg text-muted-foreground">
                        Integrating TrustLayer into your dApp is seamless. With just a few lines of code, you can query a user's reputation score to enhance your application's logic.
                    </p>
                    <ul className="space-y-3 text-muted-foreground">
                        <li className="flex items-start"><span className="text-primary mr-2 mt-1">✓</span>Offer lower interest rates on loans</li>
                        <li className="flex items-start"><span className="text-primary mr-2 mt-1">✓</span>Grant access to exclusive features</li>
                        <li className="flex items-start"><span className="text-primary mr-2 mt-1">✓</span>Prevent Sybil attacks</li>
                        <li className="flex items-start"><span className="text-primary mr-2 mt-1">✓</span>Build more trusted communities</li>
                    </ul>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                       <Button size="lg" variant="outline">View Docs</Button>
                    </div>
                </div>
                <div className="bg-background rounded-lg shadow-lg p-6 font-mono text-sm text-foreground overflow-x-auto">
                    <pre><code className="language-bash"><span className="text-[#89b4fa]">curl</span> -X GET <span className="text-[#a6e3a1]">"https://api.trustlayer.io/v1/reputation?address=0x..."</span> \
-H <span className="text-[#a6e3a1]">"Authorization: Bearer YOUR_API_KEY"</span></code></pre>
                    <div className="my-4 border-t border-border -mx-6"></div>
                    <pre><code className="language-json">{`{
  "address": "0x...",
  "score": 850,
  "rank": "Excellent"
}`}
                    </code></pre>
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
