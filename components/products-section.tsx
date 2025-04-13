import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ShoppingCart, CheckCircle, ChevronRight, AlertCircle, Star, ArrowRight, BadgePercent, HeartHandshake } from "lucide-react"

export function ProductsSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* 装饰背景 */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-blue-50 rounded-full opacity-60 blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-64 h-64 bg-purple-50 rounded-full opacity-60 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-blue-50 rounded-full mb-5">
            <Star className="h-7 w-7 text-amber-500" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">DeepSeek 服务器产品</h2>
          <p className="text-gray-600 text-lg mb-8">根据您的需求选择合适的服务器方案，全网最低价格保证</p>
          
          <div className="inline-block bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-3 rounded-full font-medium text-lg transform rotate-2 shadow-lg hover:rotate-0 transition-transform mb-8 animate-pulse-blue">
            <BadgePercent className="inline-block mr-2 h-5 w-5" />
            限时优惠：立即咨询即享9折优惠
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16">
          <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 rounded-2xl overflow-hidden group relative bg-white">
            <div className="absolute top-0 right-0 z-20 m-4">
              <span className="inline-flex items-center px-3 py-1 text-sm font-medium bg-red-100 text-red-800 rounded-full">
                <AlertCircle className="w-4 h-4 mr-1" />
                暂时售罄
              </span>
            </div>
            <div className="h-[300px] relative overflow-hidden">
              <Image
                src="/images/personal-server.jpg"
                alt="DeepSeek 2.0 服务器"
                fill
                className="object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white font-bold text-lg">个人版 DEEPSEEK 2.0</div>
            </div>
            <div className="absolute top-2 left-2 z-20 flex">
              <span className="flex items-center px-3 py-1 text-xs font-bold bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-full shadow-lg">
                TOP 性能
              </span>
            </div>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-2xl">个人版 DEEPSEEK 2.0</CardTitle>
                  <CardDescription className="text-red-500 font-medium">【暂时售罄】</CardDescription>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-gray-900">¥ XX,XXX</div>
                  <div className="text-sm text-gray-500 line-through">原价: ¥XX,XXX</div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-xl mb-6">
                <div className="font-semibold text-gray-700 mb-2 flex items-center">
                  <HeartHandshake className="h-5 w-5 text-blue-600 mr-2" />
                  <span>高性价比配置</span>
                </div>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center gap-1 text-gray-600">
                    <span className="w-3 h-3 rounded-full bg-blue-100 flex-shrink-0 border border-blue-300"></span>
                    <span>H100/A100 GPU</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-600">
                    <span className="w-3 h-3 rounded-full bg-blue-100 flex-shrink-0 border border-blue-300"></span>
                    <span>128GB 内存</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-600">
                    <span className="w-3 h-3 rounded-full bg-blue-100 flex-shrink-0 border border-blue-300"></span>
                    <span>2TB SSD</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-600">
                    <span className="w-3 h-3 rounded-full bg-blue-100 flex-shrink-0 border border-blue-300"></span>
                    <span>高性能处理器</span>
                  </div>
                </div>
              </div>
              
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>高性能 AI 推理能力，<strong className="text-blue-700">可流畅运行大型模型</strong></span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>一键开箱即用，<strong className="text-blue-700">简单部署，无需技术背景</strong></span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>完善的售后服务与<strong className="text-blue-700">7×24小时技术支持</strong></span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span><strong className="text-blue-700">全网最低价格保证</strong>，性价比无可匹敌</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter className="flex flex-col space-y-3">
              <Button className="w-full bg-blue-600 hover:bg-blue-500 transition-all disabled:bg-gray-400" disabled>
                <ShoppingCart className="mr-2 h-5 w-5" />
                暂时售罄
              </Button>
              <div className="text-center text-sm text-gray-500">
                <span>预计下一批货将在 <strong>6月底</strong> 到货，敬请期待</span>
              </div>
            </CardFooter>
          </Card>

          <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 rounded-2xl overflow-hidden group relative bg-white">
            <div className="absolute top-0 right-0 z-20 m-4">
              <span className="inline-flex items-center px-3 py-1 text-sm font-medium bg-green-100 text-green-800 rounded-full">
                <CheckCircle className="w-4 h-4 mr-1" />
                现货供应
              </span>
            </div>
            <div className="h-[300px] relative overflow-hidden">
              <Image
                src="/images/enterprise-server.jpg"
                alt="DeepSeek 企业版服务器"
                fill
                className="object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white font-bold text-lg">企业版 DEEPSEEK 服务器</div>
            </div>
            <div className="absolute top-2 left-2 z-20 flex">
              <span className="flex items-center px-3 py-1 text-xs font-bold bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-full shadow-lg">
                企业推荐
              </span>
            </div>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-2xl">企业版 DEEPSEEK 服务器</CardTitle>
                  <CardDescription className="text-green-500 font-medium flex items-center">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    现货供应 · 48小时内发货
                  </CardDescription>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-gray-900">¥ XX,XXX</div>
                  <div className="text-sm text-gray-500 line-through">原价: ¥XX,XXX</div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-4 rounded-xl mb-6">
                <div className="font-semibold text-gray-700 mb-2 flex items-center">
                  <HeartHandshake className="h-5 w-5 text-purple-600 mr-2" />
                  <span>企业级配置</span>
                </div>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center gap-1 text-gray-600">
                    <span className="w-3 h-3 rounded-full bg-purple-100 flex-shrink-0 border border-purple-300"></span>
                    <span>多卡 H100/A100 GPU</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-600">
                    <span className="w-3 h-3 rounded-full bg-purple-100 flex-shrink-0 border border-purple-300"></span>
                    <span>256GB+ 内存</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-600">
                    <span className="w-3 h-3 rounded-full bg-purple-100 flex-shrink-0 border border-purple-300"></span>
                    <span>4TB+ SSD</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-600">
                    <span className="w-3 h-3 rounded-full bg-purple-100 flex-shrink-0 border border-purple-300"></span>
                    <span>企业级处理器</span>
                  </div>
                </div>
              </div>
              
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>企业级高性能硬件配置，<strong className="text-purple-700">满足复杂业务需求</strong></span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>多用户并发支持，<strong className="text-purple-700">满足团队协作场景</strong></span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span><strong className="text-purple-700">专属定制服务</strong>，根据企业需求量身定制</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>企业级安全保障与<strong className="text-purple-700">数据隐私保护</strong></span>
                </li>
              </ul>
            </CardContent>
            <CardFooter className="flex flex-col space-y-3">
              <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all shadow-lg animate-pulse-blue">
                <ShoppingCart className="mr-2 h-5 w-5" />
                立即咨询价格
              </Button>
              <Button variant="outline" className="w-full border-blue-200 text-blue-700 hover:bg-blue-50">
                了解更多详细配置
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
              <div className="text-center text-sm text-green-600 font-medium">
                <span>👑 企业购买超过3台可享额外折扣</span>
              </div>
            </CardFooter>
          </Card>
        </div>
        
        <div className="mt-16 max-w-3xl mx-auto text-center bg-gray-50 p-8 rounded-2xl shadow-inner">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">需要定制方案？</h3>
          <p className="text-gray-600 mb-6">根据您的具体需求，我们可以提供完全定制化的服务器解决方案</p>
          <Button variant="outline" size="lg" className="border-blue-300 text-blue-700 hover:bg-blue-50">
            联系销售顾问
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}

