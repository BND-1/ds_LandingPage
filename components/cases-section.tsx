import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, ChevronRight, ExternalLink, Award } from "lucide-react"

export function CasesSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-blue-50 relative overflow-hidden">
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-100 rounded-full opacity-50 blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-100 rounded-full opacity-50 blur-3xl animate-pulse-slow delay-2000"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-full mb-5 shadow-sm">
            <Award className="h-7 w-7 text-blue-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            DeepSeek 行业应用案例
          </h2>
          <p className="text-gray-600 text-lg">探索我们的服务器如何在各行各业创造价值</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <Card className="border border-gray-100 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 bg-white overflow-hidden group flex flex-col">
            <div className="h-52 relative overflow-hidden">
              <Image 
                src="/images/finance-case.jpg"
                alt="金融行业应用" 
                fill 
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
              <div className="absolute bottom-3 left-3 bg-blue-600/90 backdrop-blur-sm text-white px-3 py-1 text-xs font-semibold rounded-md shadow-md">
                金融科技
              </div>
            </div>
            <CardHeader className="pt-5 pb-3">
              <CardTitle className="text-lg font-semibold flex items-center justify-between">
                金融行业应用
                <ChevronRight className="h-5 w-5 text-blue-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                DeepSeek 服务器在金融风控、智能投顾、市场分析和欺诈检测等领域的成功应用，显著提升了金融机构的业务效率和安全性。
              </p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                <span className="px-2 py-0.5 bg-blue-50 text-blue-700 text-[11px] font-medium rounded-full border border-blue-100">风险评估</span>
                <span className="px-2 py-0.5 bg-blue-50 text-blue-700 text-[11px] font-medium rounded-full border border-blue-100">智能投顾</span>
                <span className="px-2 py-0.5 bg-blue-50 text-blue-700 text-[11px] font-medium rounded-full border border-blue-100">欺诈检测</span>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between bg-gray-50/50 py-3 px-5 border-t border-gray-100">
              <Button variant="outline" size="sm" className="bg-white border-gray-200 text-gray-700 hover:bg-blue-50 hover:border-blue-200 hover:text-blue-700 transition-colors">
                <Download className="mr-1.5 h-4 w-4" />
                下载案例
              </Button>
              <Button variant="ghost" size="sm" className="text-blue-600 hover:bg-blue-100 transition-colors px-2">
                详细了解
                <ExternalLink className="ml-1 h-3.5 w-3.5" />
              </Button>
            </CardFooter>
          </Card>

          <Card className="border border-gray-100 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 bg-white overflow-hidden group flex flex-col">
            <div className="h-52 relative overflow-hidden">
              <Image 
                src="/images/medical-case.jpg"
                alt="医疗行业应用" 
                fill 
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
              <div className="absolute bottom-3 left-3 bg-green-600/90 backdrop-blur-sm text-white px-3 py-1 text-xs font-semibold rounded-md shadow-md">
                医疗健康
              </div>
            </div>
            <CardHeader className="pt-5 pb-3">
              <CardTitle className="text-lg font-semibold flex items-center justify-between">
                医疗行业应用
                <ChevronRight className="h-5 w-5 text-green-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                DeepSeek 服务器在医疗诊断辅助、药物研发、医学影像分析和个性化治疗方案制定等领域的创新应用，加速医疗创新。
              </p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                <span className="px-2 py-0.5 bg-green-50 text-green-700 text-[11px] font-medium rounded-full border border-green-100">影像分析</span>
                <span className="px-2 py-0.5 bg-green-50 text-green-700 text-[11px] font-medium rounded-full border border-green-100">药物研发</span>
                <span className="px-2 py-0.5 bg-green-50 text-green-700 text-[11px] font-medium rounded-full border border-green-100">诊断辅助</span>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between bg-gray-50/50 py-3 px-5 border-t border-gray-100">
              <Button variant="outline" size="sm" className="bg-white border-gray-200 text-gray-700 hover:bg-green-50 hover:border-green-200 hover:text-green-700 transition-colors">
                <Download className="mr-1.5 h-4 w-4" />
                下载案例
              </Button>
              <Button variant="ghost" size="sm" className="text-green-600 hover:bg-green-100 transition-colors px-2">
                详细了解
                <ExternalLink className="ml-1 h-3.5 w-3.5" />
              </Button>
            </CardFooter>
          </Card>

          <Card className="border border-gray-100 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 bg-white overflow-hidden group flex flex-col">
            <div className="h-52 relative overflow-hidden">
              <Image 
                src="/images/education-case.jpg"
                alt="教育行业应用" 
                fill 
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
              <div className="absolute bottom-3 left-3 bg-purple-600/90 backdrop-blur-sm text-white px-3 py-1 text-xs font-semibold rounded-md shadow-md">
                智慧教育
              </div>
            </div>
            <CardHeader className="pt-5 pb-3">
              <CardTitle className="text-lg font-semibold flex items-center justify-between">
                教育行业应用
                <ChevronRight className="h-5 w-5 text-purple-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                DeepSeek 服务器在智能教学、个性化学习路径规划、教育内容生成和教育管理系统等方面的实践，提升教育质量和效率。
              </p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                <span className="px-2 py-0.5 bg-purple-50 text-purple-700 text-[11px] font-medium rounded-full border border-purple-100">个性化学习</span>
                <span className="px-2 py-0.5 bg-purple-50 text-purple-700 text-[11px] font-medium rounded-full border border-purple-100">内容生成</span>
                <span className="px-2 py-0.5 bg-purple-50 text-purple-700 text-[11px] font-medium rounded-full border border-purple-100">评估系统</span>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between bg-gray-50/50 py-3 px-5 border-t border-gray-100">
              <Button variant="outline" size="sm" className="bg-white border-gray-200 text-gray-700 hover:bg-purple-50 hover:border-purple-200 hover:text-purple-700 transition-colors">
                <Download className="mr-1.5 h-4 w-4" />
                下载案例
              </Button>
              <Button variant="ghost" size="sm" className="text-purple-600 hover:bg-purple-100 transition-colors px-2">
                详细了解
                <ExternalLink className="ml-1 h-3.5 w-3.5" />
              </Button>
            </CardFooter>
          </Card>
        </div>
        
        <div className="text-center mt-16">
          <Button variant="outline" size="lg" className="bg-white border-blue-200 text-blue-700 hover:bg-blue-50 hover:shadow-md transition-all duration-300 group">
            查看更多行业应用案例
            <ChevronRight className="ml-1.5 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  )
}

