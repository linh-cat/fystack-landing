import { Button } from "@/components/ui/button";

export default function SDKExample() {
  return (
    <section className="w-full py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="order-2 lg:order-1">
            <div className="p-[2px] rounded-lg bg-gradient-to-r from-blue-500 via-cyan-400 to-green-500">
              <div className="bg-gray-950 rounded-lg overflow-hidden">
                <div className="px-4 py-2 bg-gray-900/50 flex items-center">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="ml-4 text-sm text-gray-400">SDK Example</div>
                </div>

                <div className="p-6 text-gray-200 font-mono text-sm">
                  <div className="flex">
                    <span className="text-gray-500 mr-4">1</span>
                    <span className="text-pink-400">import</span>
                    <span className="text-white mx-2">{"{"}</span>
                    <span className="text-white">FystackSDK, Environment</span>
                    <span className="text-white">{"}"}</span>
                    <span className="text-pink-400 mx-2">from</span>
                    <span className="text-green-400">'@fystack/sdk'</span>
                  </div>
                  <div className="flex mt-2">
                    <span className="text-gray-500 mr-4">2</span>
                    <span className="text-pink-400">const</span>
                    <span className="text-white ml-2">sdk</span>
                    <span className="text-white mx-2">=</span>
                    <span className="text-yellow-400">new</span>
                    <span className="text-white ml-2">FystackSDK({"{"}</span>
                  </div>
                  <div className="flex mt-2 ml-10">
                    <span className="text-white">
                      credentials: apiCredentials,
                    </span>
                  </div>
                  <div className="flex mt-2 ml-10">
                    <span className="text-white">
                      environment: Environment.Production,
                    </span>
                  </div>
                  <div className="flex mt-2 ml-10">
                    <span className="text-white">logger: true</span>
                  </div>
                  <div className="flex mt-2">
                    <span className="text-gray-500 mr-4">3</span>
                    <span className="text-white">{"}"}</span>
                    <span className="text-white">)</span>
                  </div>
                  <div className="flex mt-4">
                    <span className="text-gray-500 mr-4">4</span>
                    <span className="text-pink-400">await</span>
                    <span className="text-white ml-2">sdk.</span>
                    <span className="text-cyan-400">createWallet</span>
                    <span className="text-white">({"{"}</span>
                  </div>
                  <div className="flex mt-2 ml-10">
                    <span className="text-white">name: 'MPC wallet 1',</span>
                  </div>
                  <div className="flex mt-2 ml-10">
                    <span className="text-white">walletType: WalletType.MPC</span>
                  </div>
                  <div className="flex mt-2">
                    <span className="text-gray-500 mr-4">5</span>
                    <span className="text-white">{"}"}</span>
                    <span className="text-white">)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex flex-col items-start text-left">
           
            <h2 className="text-3xl font-bold tracking-tighter sm:text-xl md:text-3xl">
              Simple SDK Integration
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Generate secure wallets in seconds with minimal code, no deep crypto expertise required.
            </p>
            
            <div className="mt-6 space-y-4">
              <div className="flex items-start">
                <div className="mr-2 mt-1 flex-shrink-0">
                  <div className="h-4 w-4 rounded-full bg-blue-500"></div>
                </div>
                <p className="text-base text-muted-foreground"><span className="font-medium text-foreground">Zero-Boilerplate:</span> Spin up MPC wallets with a single method call.</p>
              </div>
              
              <div className="flex items-start">
                <div className="mr-2 mt-1 flex-shrink-0">
                  <div className="h-4 w-4 rounded-full bg-blue-500"></div>
                </div>
                <p className="text-base text-muted-foreground"><span className="font-medium text-foreground">Cloud-Agnostic Resilience:</span> Key shards are distributed across multiple cloud providers, no single point of failure.</p>
              </div>
              
              <div className="flex items-start">
                <div className="mr-2 mt-1 flex-shrink-0">
                  <div className="h-4 w-4 rounded-full bg-blue-500"></div>
                </div>
                <p className="text-base text-muted-foreground"><span className="font-medium text-foreground">Multi-Chain by Design:</span> One wallet for every network.</p>
              </div>
            </div>
            
            <div className="mt-6">
              <Button
                size="lg"
                variant="default"
                className="bg-primary hover:bg-primary/90"
              >
                Try it now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

