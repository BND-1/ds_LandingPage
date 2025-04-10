import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, ChevronRight, ExternalLink, Award } from "lucide-react"

export function CasesSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-50 rounded-full opacity-70 blur-3xl"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-blue-50 rounded-full mb-4">
            <Award className="h-6 w-6 text-blue-500" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">DeepSeek 行业应用案例</h2>
          <p className="text-gray-600 text-lg">探索我们的服务器如何在各行各业创造价值</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="border-0 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-500 hover-lift bg-white overflow-hidden group">
            <div className="h-60 relative overflow-hidden">
              <Image 
                src="/placeholder.svg?height=400&width=600" 
                alt="金融行业应用" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60"></div>
              <div className="absolute bottom-4 left-4 bg-blue-600 text-white px-3 py-1 text-sm font-medium rounded-full">
                金融科技
              </div>
            </div>
            <CardHeader>
              <CardTitle className="text-xl font-bold flex items-center justify-between">
                金融行业应用
                <span className="text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ChevronRight className="h-5 w-5" />
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                DeepSeek 服务器在金融风控、智能投顾、市场分析和欺诈检测等领域的成功应用，显著提升了金融机构的业务效率和安全性。
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-md">风险评估</span>
                <span className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-md">智能投顾</span>
                <span className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-md">欺诈检测</span>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" size="sm" className="hover:bg-blue-50">
                <Download className="mr-2 h-4 w-4" />
                下载案例
              </Button>
              <Button variant="ghost" size="sm" className="text-blue-600 hover:bg-blue-50">
                详细了解
                <ExternalLink className="ml-1 h-3 w-3" />
              </Button>
            </CardFooter>
          </Card>

          <Card className="border-0 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-500 hover-lift bg-white overflow-hidden group">
            <div className="h-60 relative overflow-hidden">
              <Image 
                src="/placeholder.svg?height=400&width=600" 
                alt="医疗行业应用" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60"></div>
              <div className="absolute bottom-4 left-4 bg-green-600 text-white px-3 py-1 text-sm font-medium rounded-full">
                医疗健康
              </div>
            </div>
            <CardHeader>
              <CardTitle className="text-xl font-bold flex items-center justify-between">
                医疗行业应用
                <span className="text-green-500 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ChevronRight className="h-5 w-5" />
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                DeepSeek 服务器在医疗诊断辅助、药物研发、医学影像分析和个性化治疗方案制定等领域的创新应用，加速医疗创新。
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-green-50 text-green-700 text-xs rounded-md">影像分析</span>
                <span className="px-2 py-1 bg-green-50 text-green-700 text-xs rounded-md">药物研发</span>
                <span className="px-2 py-1 bg-green-50 text-green-700 text-xs rounded-md">诊断辅助</span>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" size="sm" className="hover:bg-green-50">
                <Download className="mr-2 h-4 w-4" />
                下载案例
              </Button>
              <Button variant="ghost" size="sm" className="text-green-600 hover:bg-green-50">
                详细了解
                <ExternalLink className="ml-1 h-3 w-3" />
              </Button>
            </CardFooter>
          </Card>

          <Card className="border-0 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-500 hover-lift bg-white overflow-hidden group">
            <div className="h-60 relative overflow-hidden">
              <Image 
                src="/placeholder.svg?height=400&width=600" 
                alt="教育行业应用" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60"></div>
              <div className="absolute bottom-4 left-4 bg-purple-600 text-white px-3 py-1 text-sm font-medium rounded-full">
                智慧教育
              </div>
            </div>
            <CardHeader>
              <CardTitle className="text-xl font-bold flex items-center justify-between">
                教育行业应用
                <span className="text-purple-500 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ChevronRight className="h-5 w-5" />
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                DeepSeek 服务器在智能教学、个性化学习路径规划、教育内容生成和教育管理系统等方面的实践，提升教育质量和效率。
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-purple-50 text-purple-700 text-xs rounded-md">个性化学习</span>
                <span className="px-2 py-1 bg-purple-50 text-purple-700 text-xs rounded-md">内容生成</span>
                <span className="px-2 py-1 bg-purple-50 text-purple-700 text-xs rounded-md">评估系统</span>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" size="sm" className="hover:bg-purple-50">
                <Download className="mr-2 h-4 w-4" />
                下载案例
              </Button>
              <Button variant="ghost" size="sm" className="text-purple-600 hover:bg-purple-50">
                详细了解
                <ExternalLink className="ml-1 h-3 w-3" />
              </Button>
            </CardFooter>
          </Card>
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-blue-200 text-blue-700 hover:bg-blue-50">
            查看更多行业应用案例
            <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}

