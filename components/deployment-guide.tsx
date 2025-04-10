import Image from "next/image"

export function DeploymentGuide() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">傻瓜式部署指南</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 font-bold text-xl">
                  1
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold mb-2">开机</h3>
                  <p className="text-gray-600">连接电源，按下电源按钮，等待系统启动完成。</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 font-bold text-xl">
                  2
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold mb-2">路由器配置静态 IP 地址</h3>
                  <p className="text-gray-600">登录路由器管理界面，为服务器分配静态 IP 地址，确保网络连接稳定。</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 font-bold text-xl">
                  3
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold mb-2">访问 Web UI</h3>
                  <p className="text-gray-600">
                    在浏览器地址栏输入内网 IP 地址:8080，即可访问 DeepSeek Web UI 开始使用。
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 font-bold text-xl">
                  4
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold mb-2">外网访问（可选）</h3>
                  <p className="text-gray-600">如需外网访问，可购买贝锐向日葵等内网穿透工具，实现远程访问。</p>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=800&width=1200"
                alt="DeepSeek Web UI 界面"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

