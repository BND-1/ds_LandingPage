import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock } from "lucide-react"

export function DeliveryTimeline() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">交货周期</h2>

        <div className="max-w-3xl mx-auto">
          <Card className="border-0 shadow-lg">
            <CardHeader className="text-center">
              <Clock className="h-16 w-16 text-blue-600 mx-auto mb-4" />
              <CardTitle className="text-2xl">付款后14天内发货</CardTitle>
              <CardDescription className="text-lg">(10个工作日)</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">性能参数</h3>
                <p className="text-lg">
                  测试速度（热身后多轮测试）：
                  <br />
                  <span className="font-medium">思考速度：</span>3.8-4.2 Tokens/s
                  <br />
                  <span className="font-medium">生成速度：</span>4-6 Tokens/s
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

