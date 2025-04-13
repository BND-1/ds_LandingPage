import Image from "next/image"
import { Monitor, Wifi, Globe, ArrowRight, Server } from "lucide-react"

export function DeploymentGuide() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* 装饰背景 */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full opacity-50 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-50 rounded-full opacity-50 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-blue-50 rounded-full mb-5">
            <Server className="h-7 w-7 text-blue-600" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">傻瓜式部署指南</h2>
          <p className="text-gray-600 text-lg">简单四步，轻松部署您的 DeepSeek 服务器</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <div className="space-y-12">
              <div className="flex items-start group">
                <div className="flex-shrink-0 w-16">
                  <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 text-white font-bold text-xl transform transition-transform group-hover:scale-110 group-hover:rotate-3">
                    1
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors">开机</h3>
                  <p className="text-gray-600 leading-relaxed">
                    连接电源，按下电源按钮，等待系统启动完成。系统将自动进行初始化配置。
                  </p>
                  <div className="mt-3 flex items-center text-blue-600">
                    <Monitor className="h-5 w-5 mr-2" />
                    <span className="text-sm font-medium">预计耗时：1-2分钟</span>
                  </div>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="flex-shrink-0 w-16">
                  <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 text-white font-bold text-xl transform transition-transform group-hover:scale-110 group-hover:rotate-3">
                    2
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-green-600 transition-colors">配置网络</h3>
                  <p className="text-gray-600 leading-relaxed">
                    登录路由器管理界面，为服务器分配静态 IP 地址，确保网络连接稳定可靠。
                  </p>
                  <div className="mt-3 flex items-center text-green-600">
                    <Wifi className="h-5 w-5 mr-2" />
                    <span className="text-sm font-medium">预计耗时：3-5分钟</span>
                  </div>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="flex-shrink-0 w-16">
                  <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 text-white font-bold text-xl transform transition-transform group-hover:scale-110 group-hover:rotate-3">
                    3
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-purple-600 transition-colors">访问 Web UI</h3>
                  <p className="text-gray-600 leading-relaxed">
                    在浏览器地址栏输入内网 IP 地址:8080，即可访问 DeepSeek Web UI 开始使用。默认账号和密码将显示在屏幕上。
                  </p>
                  <div className="mt-3 flex items-center text-purple-600">
                    <Globe className="h-5 w-5 mr-2" />
                    <span className="text-sm font-medium">即刻开始使用</span>
                  </div>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="flex-shrink-0 w-16">
                  <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-600 text-white font-bold text-xl transform transition-transform group-hover:scale-110 group-hover:rotate-3">
                    4
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-amber-600 transition-colors">外网访问（可选）</h3>
                  <p className="text-gray-600 leading-relaxed">
                    如需外网访问，可购买贝锐向日葵等内网穿透工具，实现远程访问。我们提供详细的配置指南。
                  </p>
                  <div className="mt-3 flex items-center text-amber-600">
                    <ArrowRight className="h-5 w-5 mr-2" />
                    <span className="text-sm font-medium">可选配置</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="absolute -inset-4">
                <div className="w-full h-full mx-auto opacity-30 blur-lg filter bg-gradient-to-r from-blue-400 to-purple-400"></div>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-700">
                <Image
                  src="/images/deployment-guide.jpg"
                  alt="DeepSeek Web UI 界面"
                  width={600}
                  height={400}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white text-lg font-medium">简洁直观的 Web 管理界面</p>
                  <p className="text-gray-200 text-sm mt-1">快速上手，轻松管理</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

