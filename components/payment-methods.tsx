import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Building2, CreditCard, QrCode, Wallet, Receipt, BadgePercent } from "lucide-react"

export function PaymentMethods() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* 装饰背景 */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full opacity-50 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-50 rounded-full opacity-50 blur-3xl animate-pulse"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-blue-50 rounded-full mb-5">
            <Wallet className="h-7 w-7 text-blue-600" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">支付方式</h2>
          <p className="text-gray-600 text-lg">多种支付方式，安全便捷</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white rounded-2xl overflow-hidden group">
            <div className="h-2 bg-gradient-to-r from-blue-400 to-blue-600"></div>
            <CardHeader>
              <div className="p-3 rounded-lg bg-blue-50 w-fit mb-4 group-hover:bg-blue-100 transition-colors">
                <CreditCard className="h-12 w-12 text-blue-600" />
              </div>
              <CardTitle className="text-2xl group-hover:text-blue-600 transition-colors">电商平台购买</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center p-3 bg-blue-50 rounded-lg transform hover:translate-x-2 transition-transform">
                  <Image src="/images/xianyu.png" alt="闲鱼" width={24} height={24} className="mr-3" />
                  <div>
                    <p className="font-medium text-gray-900">闲鱼 ID：chatgpt酱</p>
                    <p className="text-sm text-gray-600">推荐使用</p>
                  </div>
                </div>
                <div className="flex items-center p-3 bg-blue-50 rounded-lg transform hover:translate-x-2 transition-transform">
                  <Image src="/images/taobao.png" alt="淘宝" width={24} height={24} className="mr-3" />
                  <div>
                    <p className="font-medium text-gray-900">淘宝店：DEEPSEEK整机服务商</p>
                    <p className="text-sm text-gray-600">担保交易</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white rounded-2xl overflow-hidden group">
            <div className="h-2 bg-gradient-to-r from-purple-400 to-purple-600"></div>
            <CardHeader>
              <div className="p-3 rounded-lg bg-purple-50 w-fit mb-4 group-hover:bg-purple-100 transition-colors">
                <Building2 className="h-12 w-12 text-purple-600" />
              </div>
              <CardTitle className="text-2xl group-hover:text-purple-600 transition-colors">对公打款</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-4 p-3 bg-amber-50 rounded-lg">
                <div className="flex items-center mb-2">
                  <Receipt className="h-5 w-5 text-amber-600 mr-2" />
                  <span className="font-medium text-amber-800">发票说明</span>
                </div>
                <p className="text-sm text-amber-700">对公账户打款需开具发票，按总价的113%打款</p>
              </div>
              <div className="space-y-3 divide-y divide-gray-100">
                <div className="flex items-start pt-3">
                  <CheckCircle className="h-5 w-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">上海微子跃动人工智能科技有限公司</p>
                    <p className="text-sm text-gray-600">税号: 91310104MAE6QTB5X7</p>
                  </div>
                </div>
                <div className="flex items-start pt-3">
                  <CheckCircle className="h-5 w-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">招商银行股份有限公司上海红松东路支行</p>
                    <p className="text-sm text-gray-600">账号: 121979467010001</p>
                  </div>
                </div>
                <div className="flex items-start pt-3">
                  <CheckCircle className="h-5 w-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">其他信息</p>
                    <p className="text-sm text-gray-600">代表人: 李昊燃</p>
                    <p className="text-sm text-gray-600">备注: Deepseek整机预定</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white rounded-2xl overflow-hidden group">
            <div className="h-2 bg-gradient-to-r from-green-400 to-green-600"></div>
            <CardHeader>
              <div className="p-3 rounded-lg bg-green-50 w-fit mb-4 group-hover:bg-green-100 transition-colors">
                <QrCode className="h-12 w-12 text-green-600" />
              </div>
              <CardTitle className="text-2xl group-hover:text-green-600 transition-colors">微信转账</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <p className="text-gray-600 mb-4">添加微信号：chatgptosai</p>
                <div className="w-48 h-48 mx-auto relative rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform">
                  <Image src="/images/wechat-qr.jpg" alt="微信二维码" fill className="object-cover" />
                </div>
                <p className="mt-4 text-sm text-gray-500">扫码添加，在线咨询</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 max-w-3xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-2xl shadow-inner">
            <div className="inline-flex items-center justify-center p-3 bg-amber-100 rounded-full mb-4">
              <BadgePercent className="h-6 w-6 text-amber-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">批量采购优惠</h3>
            <p className="text-gray-600">企业采购3台以上可享受额外优惠，详情请联系销售</p>
          </div>
        </div>
      </div>
    </section>
  )
}

