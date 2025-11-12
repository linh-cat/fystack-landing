"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, MessageCircle, Clock, Shield, Zap } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function BuyPage() {
  const [selectedSupport, setSelectedSupport] = useState<string | null>(null);

  const supportPackages = [
    {
      id: "basic",
      name: "Basic Support",
      price: 500,
      sla: "< 2 hours",
      icon: MessageCircle,
      features: [
        "Telegram support channel",
        "Response time < 2 hours (business hours)",
        "Integration support for implementation questions",
        "Technical troubleshooting assistance",
      ],
    },
    {
      id: "professional",
      name: "Professional Support",
      price: 1000,
      sla: "< 1 hour",
      icon: Shield,
      popular: true,
      features: [
        "Priority Telegram support with scheduled check-ins",
        "Integration support with architecture guidance",
        "Best practice reviews for your deployment",
        "Security consultant sessions",
        "Response SLA under 1 hour",
      ],
    },
    {
      id: "enterprise",
      name: "Enterprise Support",
      price: "Flexible",
      sla: "< 30 mins",
      icon: Zap,
      features: [
        "24/7 dedicated support",
        "Immediate response time and escalation path",
        "Feature request prioritization",
        "Influence Fystack roadmap with roadmap workshops",
        "Direct access to the engineering leadership team",
        "Advanced integration support and delivery assistance",
      ],
    },
  ];

  const calculateTotal = () => {
    const basePrice = 10000;
    const selectedPkg = supportPackages.find(p => p.id === selectedSupport);
    if (selectedPkg && typeof selectedPkg.price === 'number') {
      return basePrice + selectedPkg.price;
    }
    return basePrice;
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-950">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-24 md:py-28 text-slate-900 overflow-hidden bg-[linear-gradient(135deg,#c2e3ff_0%,#e1fff5_55%,#ffffff_100%)]">
          <div className="absolute inset-0 -z-10 pointer-events-none">
            <div className="absolute -top-32 -left-16 h-72 w-72 rounded-full bg-sky-300/40 blur-[120px]" />
            <div className="absolute top-16 left-1/3 h-[560px] w-[560px] -translate-x-1/3 rounded-full bg-sky-200/35 blur-[170px]" />
            <div className="absolute top-24 right-1/4 h-[420px] w-[420px] rounded-full bg-emerald-200/35 blur-[160px]" />
            <div className="absolute bottom-[-6rem] left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-emerald-300/40 blur-[140px]" />
            <div className="absolute inset-0 bg-[linear-gradient(150deg,rgba(255,255,255,0.65)_0%,rgba(255,255,255,0.2)_70%)]" />
          </div>
          <div className="container mx-auto px-4 max-w-7xl relative">
            <div className="text-center max-w-3xl mx-auto">
              <Badge className="mb-4 bg-sky-100 text-sky-700 border-sky-200">
                Flexible Pricing Options
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Choose Your Plan
              </h1>
              <p className="text-xl text-slate-600 mb-6">
                Cloud SaaS or Self-Hosted — Pick what works best for your team
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Options */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-7xl">
            <Tabs defaultValue="saas" className="max-w-6xl mx-auto">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
                <TabsTrigger value="saas">Cloud (SaaS)</TabsTrigger>
                <TabsTrigger value="self-hosted">Self-Hosted</TabsTrigger>
              </TabsList>

              {/* SaaS Tab */}
              <TabsContent value="saas">
                <div className="max-w-5xl mx-auto">
                  <div className="grid md:grid-cols-3 gap-6 mb-12">
                    {/* Free Plan */}
                    <Card className="flex flex-col">
                      <CardHeader>
                        <CardTitle className="text-xl">Developer</CardTitle>
                        <CardDescription>For individual developers</CardDescription>
                        <div className="mt-4">
                          <div className="text-3xl font-bold">Free</div>
                        </div>
                      </CardHeader>
                      <CardContent className="flex-1">
                        <ul className="space-y-3">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-none" />
                            <span className="text-sm">Up to 2 MPC wallets</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-none" />
                            <span className="text-sm">1000 Hyper wallets</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-none" />
                            <span className="text-sm">100 crypto payments</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-none" />
                            <span className="text-sm">1 workspace, 3 users</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-none" />
                            <span className="text-sm">Email support</span>
                          </li>
                        </ul>
                      </CardContent>
                      <div className="p-6 pt-0">
                        <Button variant="outline" className="w-full" asChild>
                          <Link href="https://app.fystack.io" target="_blank" rel="noopener noreferrer">
                            Get Started
                          </Link>
                        </Button>
                      </div>
                    </Card>

                    {/* Starter Plan */}
                    <Card className="flex flex-col border-primary relative">
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <Badge className="bg-primary text-primary-foreground">Popular</Badge>
                      </div>
                      <CardHeader>
                        <div className="flex items-center gap-2">
                          <CardTitle className="text-xl">Starter</CardTitle>
                          <Badge className="bg-green-500 text-white">Save 34%</Badge>
                        </div>
                        <CardDescription>For startups and growing businesses</CardDescription>
                        <div className="mt-4">
                          <div className="flex items-baseline gap-2">
                            <span className="text-3xl font-bold">$59</span>
                            <span className="text-muted-foreground line-through">$89</span>
                            <span className="text-sm text-muted-foreground">/month</span>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="flex-1">
                        <ul className="space-y-3">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-none" />
                            <span className="text-sm">Up to 3 MPC wallets</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-none" />
                            <span className="text-sm">3,000 Hyper wallets</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-none" />
                            <span className="text-sm">500 crypto payments</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-none" />
                            <span className="text-sm">2 workspaces, 5 users</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-none" />
                            <span className="text-sm">3 chains</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-none" />
                            <span className="text-sm">Advanced security features</span>
                          </li>
                        </ul>
                      </CardContent>
                      <div className="p-6 pt-0">
                        <Button className="w-full" asChild>
                          <Link href="https://app.fystack.io" target="_blank" rel="noopener noreferrer">
                            Get Started
                          </Link>
                        </Button>
                      </div>
                    </Card>

                    {/* Team Plan */}
                    <Card className="flex flex-col">
                      <CardHeader>
                        <CardTitle className="text-xl">Team</CardTitle>
                        <CardDescription>For growing teams</CardDescription>
                        <div className="mt-4">
                          <div className="flex items-baseline gap-2">
                            <span className="text-3xl font-bold">$99</span>
                            <span className="text-sm text-muted-foreground">/month</span>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="flex-1">
                        <ul className="space-y-3">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-none" />
                            <span className="text-sm">Up to 20 MPC wallets</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-none" />
                            <span className="text-sm">10,000 Hyper wallets</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-none" />
                            <span className="text-sm">2000 crypto payments</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-none" />
                            <span className="text-sm">5 workspaces</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-none" />
                            <span className="text-sm">5 chains</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-none" />
                            <span className="text-sm">Priority Telegram support</span>
                          </li>
                        </ul>
                      </CardContent>
                      <div className="p-6 pt-0">
                        <Button className="w-full" asChild>
                          <Link href="https://app.fystack.io" target="_blank" rel="noopener noreferrer">
                            Get Started
                          </Link>
                        </Button>
                      </div>
                    </Card>
                  </div>

                  {/* Enterprise Plan */}
                  <Card className="bg-gradient-to-br from-blue-50/50 to-cyan-50/50 dark:from-blue-950/20 dark:to-cyan-950/20">
                    <CardContent className="p-8">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                        <div className="flex-1">
                          <Badge className="mb-4 bg-blue-500 text-white">Custom Solution</Badge>
                          <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
                          <p className="text-muted-foreground mb-4">
                            For large organizations with custom requirements
                          </p>
                          <div className="text-3xl font-bold mb-4">Custom pricing</div>
                          <ul className="grid md:grid-cols-2 gap-3">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-none" />
                              <span className="text-sm">Unlimited everything</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-none" />
                              <span className="text-sm">Dedicated support</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-none" />
                              <span className="text-sm">Custom integrations</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-none" />
                              <span className="text-sm">SLA guarantees</span>
                            </li>
                          </ul>
                        </div>
                        <div className="md:w-auto">
                          <Button size="lg" variant="outline" asChild>
                            <Link href="https://t.me/anhthind" target="_blank" rel="noopener noreferrer">
                              Talk to Founders
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* Self-Hosted Tab */}
              <TabsContent value="self-hosted">
            <div className="max-w-4xl mx-auto">
              <Card className="mb-12">
                <CardHeader>
                  <CardTitle className="text-2xl">What's Included</CardTitle>
                  <CardDescription>
                    Everything you need to build secure wallet infrastructure
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-none" />
                        <div>
                          <div className="font-medium">7-Day Deployment Support</div>
                          <div className="text-sm text-muted-foreground">
                            Guided onboarding to launch your infrastructure fast
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-none" />
                        <div>
                          <div className="font-medium">Lifetime License</div>
                          <div className="text-sm text-muted-foreground">
                            No recurring fees, pay once and use forever
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-none" />
                        <div>
                          <div className="font-medium">MPC Technology</div>
                          <div className="text-sm text-muted-foreground">
                            Secure multi-party computation infrastructure
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-none" />
                        <div>
                          <div className="font-medium">Multi-Chain Support</div>
                          <div className="text-sm text-muted-foreground">
                            10+ blockchain networks supported
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-none" />
                        <div>
                          <div className="font-medium">Self-Hosted</div>
                          <div className="text-sm text-muted-foreground">
                            Deploy on your own infrastructure
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-none" />
                        <div>
                          <div className="font-medium">Updates & Security Patches</div>
                          <div className="text-sm text-muted-foreground">
                            Regular updates included for 1 year
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-none" />
                        <div>
                          <div className="font-medium">Documentation</div>
                          <div className="text-sm text-muted-foreground">
                            Comprehensive guides and API docs
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-none" />
                        <div>
                          <div className="font-medium">Commercial Use</div>
                          <div className="text-sm text-muted-foreground">
                            Use in unlimited commercial projects
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Support Packages */}
              <div className="mb-12">
                <div className="text-center mb-8">
                  <Badge className="mb-3 bg-sky-100 text-sky-700 border-sky-200">
                    Optional Add-on
                  </Badge>
                  <h2 className="text-3xl font-bold mb-2">Add Technical Support</h2>
                  <p className="text-muted-foreground">
                    Choose a support package only if you need ongoing help—the license works without it.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {supportPackages.map((pkg) => {
                    const Icon = pkg.icon;
                    const isSelected = selectedSupport === pkg.id;

                    return (
                      <Card
                        key={pkg.id}
                        className={`relative cursor-pointer transition-all ${
                          isSelected
                            ? 'border-blue-500 shadow-lg'
                            : 'hover:border-gray-400'
                        }`}
                        onClick={() => setSelectedSupport(isSelected ? null : pkg.id)}
                      >
                        {pkg.popular && (
                          <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                            <Badge className="bg-blue-600 text-white">Most Popular</Badge>
                          </div>
                        )}
                        <CardHeader>
                          <div className="flex items-center gap-3 mb-2">
                            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
                              <Icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                            </div>
                            {isSelected && (
                              <CheckCircle className="w-5 h-5 text-blue-600 ml-auto" />
                            )}
                          </div>
                          <CardTitle className="text-xl">{pkg.name}</CardTitle>
                          <div className="flex items-baseline gap-1">
                            {typeof pkg.price === 'number' ? (
                              <>
                                <span className="text-3xl font-bold">${pkg.price}</span>
                                <span className="text-muted-foreground">/month</span>
                              </>
                            ) : (
                              <span className="text-3xl font-bold">{pkg.price} Pricing</span>
                            )}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Clock className="w-4 h-4" />
                            <span>SLA: {pkg.sla}</span>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-3">
                            {pkg.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm">
                                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-none" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>

              {/* Contact CTA */}
              <div className="max-w-md mx-auto text-center space-y-4">
                <Button
                  size="lg"
                  className="w-full text-lg"
                  asChild
                >
                  <Link
                    href="https://t.me/anhthind"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Talk to Founders
                  </Link>
                </Button>
                <p className="text-sm text-muted-foreground">
                  Contact us to discuss pricing and get started
                </p>
              </div>

              {/* Why Choose One-Time License */}
              <div className="mt-12 grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <Shield className="w-8 h-8 text-blue-600 mb-2" />
                    <CardTitle className="text-lg">Full Control</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    Self-hosted on your infrastructure. Complete control over your data and keys.
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <Zap className="w-8 h-8 text-blue-600 mb-2" />
                    <CardTitle className="text-lg">Production Ready</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    Battle-tested code used by enterprises. Start building immediately.
                  </CardContent>
                </Card>
              </div>
            </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
