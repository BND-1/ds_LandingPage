import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Zap, CheckCircle } from "lucide-react"

export function AfterSales() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">完善的售后政策</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <Shield className="h-12 w-12 text-blue-600 mb-2" />
              <CardTitle className="text-2xl">硬件售后</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>整机1年质保，确保硬件稳定运行</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>易碎贴在 CPU 和显卡上，撕毁不保</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>专业技术团队提供远程诊断与支持</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <Zap className="h-12 w-12 text-blue-600 mb-2" />
              <CardTitle className="text-2xl">软件售后</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>1年内提供一次硬盘邮寄升级 KTransformers 服务</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>提供升级 GUFF 文件教程，可自行升级替换</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>软件使用问题远程指导与解答</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

