import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  CheckCircle,
  Database,
  Globe,
  Lock,
  Server,
  Shield,
  Zap,
} from "lucide-react";
import Link from "next/link";

export default function Hosting() {
  return (
    <section id="hosting" className="py-12 relative">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(40%_40%_at_50%_50%,rgba(var(--primary-rgb),0.05),transparent)]"></div>
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <Badge
              variant="outline"
              className="w-fit mx-auto bg-primary/10 text-primary border-primary/20"
            >
              Deployment Options
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Deployment Options
            </h2>
          </div>
        </div>

        <div className="mt-10">
          <Tabs defaultValue="managed" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid grid-cols-2 w-full h-auto p-1.5 bg-muted/70 rounded-xl border shadow-sm">
              <TabsTrigger
                value="managed"
                className="py-3.5 font-medium rounded-lg transition-all
                data-[state=active]:bg-blue-500 
                data-[state=active]:text-white"
              >
                Managed Service
              </TabsTrigger>
              <TabsTrigger
                value="self-hosted"
                className="py-3.5 font-medium rounded-lg transition-all
                data-[state=active]:bg-blue-500 
                data-[state=active]:text-white"
              >
                Self-Hosted
              </TabsTrigger>
            </TabsList>

            <TabsContent value="managed" className="mt-6">
              <div className="grid md:grid-cols-2 gap-8 p-6 border rounded-xl bg-card">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Zap className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold">Launch in minutes</h3>
                  </div>

                  <p className="text-muted-foreground">
                    Our fully-managed MPC infrastructure provides instant wallet
                    creation with zero setup complexity. Start building secure
                    wallet solutions immediately with our production-ready
                    infrastructure.
                  </p>

                  <ul className="space-y-3 mt-6">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>No infrastructure to maintain or manage</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Automatic security updates and patches</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>99.9% uptime SLA guarantee</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>24/7 monitoring and enterprise support</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Elastic scaling based on your usage</span>
                    </li>
                  </ul>

                  <Button className="mt-4" asChild>
                    <Link
                      href="https://app.fystack.io"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Get Started Now
                    </Link>
                  </Button>
                </div>

                <div className="relative rounded-xl border bg-background/50 flex items-center justify-center p-6">
                  <div className="w-full max-w-xs">
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <div className="h-2 w-full rounded-full bg-primary/20 overflow-hidden">
                          <div className="h-full w-[85%] bg-primary rounded-full"></div>
                        </div>
                        <div className="flex justify-between text-xs text-muted-foreground">
                          <span>Setup Process</span>
                          <span className="font-medium text-primary">
                            1 minutes
                          </span>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <div className="h-8 w-8 rounded-full bg-green-500/10 flex items-center justify-center">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                          </div>
                          <div className="text-sm">Create account</div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="h-8 w-8 rounded-full bg-green-500/10 flex items-center justify-center">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                          </div>
                          <div className="text-sm">Get API keys</div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="h-8 w-8 rounded-full bg-green-500/10 flex items-center justify-center">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                          </div>
                          <div className="text-sm">Integrate SDK</div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                            <Zap className="h-4 w-4 text-primary" />
                          </div>
                          <div className="font-medium">
                            Ready for production!
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="self-hosted" className="mt-6">
              <div className="grid md:grid-cols-2 gap-8 p-6 border rounded-xl bg-card">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Shield className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold">
                      Your keys, your coins
                    </h3>
                  </div>

                  <p className="text-muted-foreground">
                    Deploy our MPC infrastructure within your own environment
                    for complete control over your private keys and data. Ideal
                    for organizations with strict compliance or regulatory
                    requirements.
                  </p>

                  <ul className="space-y-3 mt-6">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Full control over private key management</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Run your own MPC nodes on your infrastructure</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Data residency and sovereignty compliance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>
                        Customizable security policies and key thresholds
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Integration with your existing security tools</span>
                    </li>
                  </ul>

                  <Button variant="outline" className="mt-4" asChild>
                    <Link
                      href="https://docs.fystack.io/mpcium"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Explore Self-Hosted Options
                    </Link>
                  </Button>
                </div>

                <div className="relative rounded-xl border bg-background/50 flex items-center justify-center p-6">
                  <div className="w-full max-w-xs">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 rounded-lg border bg-background hover:bg-primary/5 transition-colors text-center">
                        <Server className="h-8 w-8 mx-auto mb-2 text-primary" />
                        <div className="text-sm font-medium">Your Cloud</div>
                      </div>
                      <div className="p-4 rounded-lg border bg-background hover:bg-primary/5 transition-colors text-center">
                        <Database className="h-8 w-8 mx-auto mb-2 text-primary" />
                        <div className="text-sm font-medium">Your Database</div>
                      </div>
                      <div className="p-4 rounded-lg border bg-background hover:bg-primary/5 transition-colors text-center">
                        <Lock className="h-8 w-8 mx-auto mb-2 text-primary" />
                        <div className="text-sm font-medium">Your Keys</div>
                      </div>
                      <div className="p-4 rounded-lg border bg-background hover:bg-primary/5 transition-colors text-center">
                        <Globe className="h-8 w-8 mx-auto mb-2 text-primary" />
                        <div className="text-sm font-medium">Your Region</div>
                      </div>
                    </div>

                    <div className="mt-6 p-3 border rounded-lg bg-blue-500/10 border-blue-500/20">
                      <div className="flex items-center gap-2">
                        <Shield className="h-5 w-5 text-blue-500" />
                        <span className="text-sm font-medium">
                          Enterprise-grade security with complete control
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
