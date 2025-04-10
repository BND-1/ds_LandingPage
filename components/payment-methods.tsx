import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export function PaymentMethods() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">支付方式</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl">电商平台购买</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>闲鱼 ID：chatgpt酱</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>淘宝店：DEEPSEEK整机服务商</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl">对公打款</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">如需发票：【对公账户打款，则必须开发票，按总价的113%打款】</p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>上海微子跃动人工智能科技有限公司</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>税号: 91310104MAE6QTB5X7</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>账户号码: 121979467010001</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>开户银行: 招商银行股份有限公司上海红松东路支行</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>代表人: 李昊燃</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>备注信息：Deepseek整机预定</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl">微信转账</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <p className="text-gray-600 mb-4">添加 chatgptosai 转账</p>
                <div className="w-48 h-48 mx-auto relative">
                  <Image src="/placeholder.svg?height=300&width=300" alt="微信二维码" fill className="object-cover" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

