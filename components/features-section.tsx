import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Zap, CheckCircle, Shield, Server, Gauge, Clock, ArrowDownCircle, CreditCard } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FeaturesSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-gray-50 to-white"></div>
      <div className="absolute -top-96 -right-96 w-[800px] h-[800px] bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute -bottom-96 -left-96 w-[800px] h-[800px] bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-blue-50 rounded-full mb-5 animate-pulse-blue">
            <Zap className="h-7 w-7 text-blue-600" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">为什么选择我们的DeepSeek服务器</h2>
          <p className="text-gray-600 text-lg mb-6">我们提供业内领先的性能和服务，确保您的 AI 应用流畅运行</p>
          <div className="inline-flex items-center justify-center gap-2 bg-amber-50 text-amber-700 px-4 py-2 rounded-full text-sm font-medium">
            <CreditCard className="h-4 w-4" />
            <span>超高性价比 · 全网最低价格保证</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-white rounded-xl overflow-hidden group">
            <div className="h-2 bg-gradient-to-r from-blue-400 to-blue-600"></div>
            <CardHeader className="pb-2">
              <div className="p-3 rounded-lg bg-blue-50 w-fit mb-4 group-hover:bg-blue-100 transition-colors">
                <Gauge className="h-8 w-8 text-blue-600" />
              </div>
              <CardTitle className="text-2xl group-hover:text-blue-600 transition-colors">强大性能</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                  思考速度：3.8-4.2 Tokens/s
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                  生成速度：4-6 Tokens/s
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                  高效稳定的算力表现
                </li>
                <li className="flex items-center gap-2 text-blue-700 font-medium">
                  <ArrowDownCircle className="h-4 w-4 text-blue-600" />
                  同类产品中性能领先
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-white rounded-xl overflow-hidden group">
            <div className="h-2 bg-gradient-to-r from-green-400 to-green-600"></div>
            <CardHeader className="pb-2">
              <div className="p-3 rounded-lg bg-green-50 w-fit mb-4 group-hover:bg-green-100 transition-colors">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <CardTitle className="text-2xl group-hover:text-green-600 transition-colors">一键开箱即用</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                  傻瓜式部署流程
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                  无需复杂配置
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                  开机即可使用
                </li>
                <li className="flex items-center gap-2 text-green-700 font-medium">
                  <ArrowDownCircle className="h-4 w-4 text-green-600" />
                  零技术门槛，立即上手
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-white rounded-xl overflow-hidden group">
            <div className="h-2 bg-gradient-to-r from-purple-400 to-purple-600"></div>
            <CardHeader className="pb-2">
              <div className="p-3 rounded-lg bg-purple-50 w-fit mb-4 group-hover:bg-purple-100 transition-colors">
                <Shield className="h-8 w-8 text-purple-600" />
              </div>
              <CardTitle className="text-2xl group-hover:text-purple-600 transition-colors">完善售后</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                  整机1年质保
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                  1年内提供一次硬盘邮寄升级服务
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                  专业技术支持
                </li>
                <li className="flex items-center gap-2 text-purple-700 font-medium">
                  <ArrowDownCircle className="h-4 w-4 text-purple-600" />
                  7×24小时响应服务
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
        
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-2xl mb-8">
            <p className="text-lg font-medium text-gray-700 mb-4">
              我们承诺提供<span className="text-blue-600 font-bold"> 最优质的服务 </span>和<span className="text-purple-600 font-bold"> 最高性价比 </span>的产品
            </p>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all animate-pulse-blue">
              立即咨询价格
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

