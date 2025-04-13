import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Zap, CheckCircle, Clock, Wrench, Cpu, HardDrive, HeadphonesIcon } from "lucide-react"

export function AfterSales() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* 装饰背景 */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full opacity-50 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-50 rounded-full opacity-50 blur-3xl animate-pulse"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-blue-50 rounded-full mb-5">
            <Shield className="h-7 w-7 text-blue-600" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">完善的售后政策</h2>
          <p className="text-gray-600 text-lg">我们提供全方位的售后保障，让您无后顾之忧</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white rounded-2xl overflow-hidden group">
            <div className="h-2 bg-gradient-to-r from-blue-400 to-blue-600"></div>
            <CardHeader>
              <div className="p-3 rounded-lg bg-blue-50 w-fit mb-4 group-hover:bg-blue-100 transition-colors">
                <Shield className="h-12 w-12 text-blue-600" />
              </div>
              <CardTitle className="text-2xl group-hover:text-blue-600 transition-colors">硬件售后</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-start transform hover:translate-x-2 transition-transform">
                  <div className="flex-shrink-0 p-2 bg-blue-50 rounded-lg mr-4">
                    <Clock className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">整机1年质保</h4>
                    <p className="text-gray-600">确保硬件稳定运行，提供完整保修服务</p>
                  </div>
                </div>

                <div className="flex items-start transform hover:translate-x-2 transition-transform">
                  <div className="flex-shrink-0 p-2 bg-blue-50 rounded-lg mr-4">
                    <Cpu className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">核心部件保护</h4>
                    <p className="text-gray-600">CPU和显卡设有易碎贴，保护核心部件</p>
                  </div>
                </div>

                <div className="flex items-start transform hover:translate-x-2 transition-transform">
                  <div className="flex-shrink-0 p-2 bg-blue-50 rounded-lg mr-4">
                    <Wrench className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">专业技术支持</h4>
                    <p className="text-gray-600">技术团队提供远程诊断与支持服务</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white rounded-2xl overflow-hidden group">
            <div className="h-2 bg-gradient-to-r from-purple-400 to-purple-600"></div>
            <CardHeader>
              <div className="p-3 rounded-lg bg-purple-50 w-fit mb-4 group-hover:bg-purple-100 transition-colors">
                <Zap className="h-12 w-12 text-purple-600" />
              </div>
              <CardTitle className="text-2xl group-hover:text-purple-600 transition-colors">软件售后</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-start transform hover:translate-x-2 transition-transform">
                  <div className="flex-shrink-0 p-2 bg-purple-50 rounded-lg mr-4">
                    <HardDrive className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">免费升级服务</h4>
                    <p className="text-gray-600">1年内提供一次硬盘邮寄升级 KTransformers 服务</p>
                  </div>
                </div>

                <div className="flex items-start transform hover:translate-x-2 transition-transform">
                  <div className="flex-shrink-0 p-2 bg-purple-50 rounded-lg mr-4">
                    <Zap className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">自助升级支持</h4>
                    <p className="text-gray-600">提供升级 GUFF 文件教程，支持自行升级替换</p>
                  </div>
                </div>

                <div className="flex items-start transform hover:translate-x-2 transition-transform">
                  <div className="flex-shrink-0 p-2 bg-purple-50 rounded-lg mr-4">
                    <HeadphonesIcon className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">远程技术指导</h4>
                    <p className="text-gray-600">软件使用问题提供专业远程指导与解答</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 max-w-3xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-2xl shadow-inner">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">需要技术支持？</h3>
            <p className="text-gray-600 mb-6">我们的技术支持团队7×24小时待命，随时为您解决问题</p>
            <div className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg">
              <HeadphonesIcon className="h-5 w-5 mr-2" />
              联系技术支持
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

