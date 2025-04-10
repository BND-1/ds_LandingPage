import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <>
      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">立即咨询</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto">如有任何问题或需求，请随时联系我们的客服团队</p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            联系客服
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-gray-900 text-gray-400">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">关于我们</h3>
              <p>专业的 DeepSeek 定制服务器销售服务商，提供一站式 AI 算力解决方案。</p>
            </div>
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">快速链接</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    产品介绍
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    应用案例
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    部署指南
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    售后政策
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">联系方式</h3>
              <ul className="space-y-2">
                <li>电子邮件：contact@example.com</li>
                <li>微信：chatgptosai</li>
                <li>闲鱼 ID：chatgpt酱</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">关注我们</h3>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">微信</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.58,14.99c-0.26,0-0.48-0.22-0.48-0.48c0-0.27,0.22-0.48,0.48-0.48c0.37,0,0.62,0.22,0.62,0.48 C9.2,14.77,8.95,14.99,8.58,14.99z M12.43,14.99c-0.26,0-0.48-0.22-0.48-0.48c0-0.27,0.22-0.48,0.48-0.48 c0.37,0,0.62,0.22,0.62,0.48C13.04,14.77,12.79,14.99,12.43,14.99z M14.3,10.58c0.18,0,0.31,0.13,0.31,0.31 c0,0.17-0.13,0.31-0.31,0.31c-0.18,0-0.36-0.13-0.36-0.31C13.94,10.71,14.12,10.58,14.3,10.58z M11.65,10.58 c0.18,0,0.31,0.13,0.31,0.31c0,0.17-0.13,0.31-0.31,0.31c-0.18,0-0.36-0.13-0.36-0.31C11.29,10.71,11.47,10.58,11.65,10.58z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

