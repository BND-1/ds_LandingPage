import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ShoppingCart, ChevronRight, Award, Clock, Tag, CheckCircle2 } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Server Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 to-slate-900/30 backdrop-blur-sm"></div>
      </div>
      
      {/* 装饰元素 */}
      <div className="absolute top-20 left-40 w-24 h-24 bg-blue-500 rounded-full opacity-20 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-40 w-32 h-32 bg-purple-500 rounded-full opacity-20 blur-3xl animate-pulse"></div>
      
      <div className="container mx-auto px-4 z-10 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 text-left animate-fadeIn">
            <div className="inline-flex mb-6 items-center bg-gradient-to-r from-blue-600/20 to-blue-800/20 px-4 py-2 rounded-full backdrop-blur-sm border border-blue-500/30">
              <Tag className="h-5 w-5 text-blue-400 mr-2" />
              <span className="text-blue-300">高性价比 · 一键开箱即用 · 专业售后</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              DeepSeek <span className="text-blue-400">定制服务器</span>
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">AI 算力的最佳选择</span>
            </h1>
            
            <div className="bg-gradient-to-r from-amber-500/20 to-amber-700/20 border border-amber-500/30 p-3 rounded-lg mb-6 backdrop-blur-sm">
              <div className="flex items-center mb-1">
                <Award className="h-5 w-5 text-amber-400 mr-2 flex-shrink-0" />
                <span className="font-bold text-amber-300">限时优惠活动</span>
              </div>
              <div className="text-amber-100 text-sm flex items-start">
                <CheckCircle2 className="h-4 w-4 text-amber-400 mr-1 mt-0.5 flex-shrink-0" />
                <span>即日起至6月30日，购买任意服务器享<span className="text-white font-bold">9折优惠</span></span>
              </div>
              <div className="text-amber-100 text-sm flex items-start mt-1">
                <Clock className="h-4 w-4 text-amber-400 mr-1 mt-0.5 flex-shrink-0" />
                <span className="flex-1">优惠倒计时: <span className="text-white font-bold">30天</span></span>
              </div>
            </div>
            
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl">一键开箱即用，全网最低价格保证，完善的售后服务体系</p>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 transition-all shadow-lg hover:shadow-blue-500/30 animate-pulse-blue">
                <ShoppingCart className="mr-2 h-5 w-5" />
                立即购买
              </Button>
              <Button size="lg" variant="outline" className="border-white/70 text-white hover:bg-white/10 transition-all">
                了解更多
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
            
            <div className="flex items-center mt-6 text-sm text-gray-300">
              <CheckCircle2 className="h-4 w-4 text-green-400 mr-2" />
              购买即送价值2000元模型部署服务
            </div>
          </div>
          
          <div className="lg:w-1/2 relative animate-float">
            <div className="absolute -right-4 -top-4 z-20">
              <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg transform rotate-12">
                热销产品
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/20 border border-blue-500/30">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="DeepSeek 服务器"
                width={600}
                height={400}
                className="object-cover rounded-2xl transform transition-transform hover:scale-105 duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center justify-between">
                  <div className="text-white text-lg font-bold">DeepSeek 服务器</div>
                  <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">¥XX,XXX起</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-lg shadow-xl">
              <div className="text-sm font-bold">现货速发</div>
              <div className="text-xs">48小时内发货</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

