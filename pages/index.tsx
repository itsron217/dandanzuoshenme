import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import 'flowbite';


const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col justify-center py-2">
      <Head>
        <title>蛋蛋做什么</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full max-w-[85%] md:max-w-[60%] flex-col justify-center mx-auto md:px-10 xl:px-20 text-center">
          <a className="my-16 -ml-4" href="https://weibo.com/dandanzuoshenme">
              <a
                  className="flex items-center justify-center gap-4 md:gap-8"
              >
                  <img src="/头像1.png" alt="logo" className="w-10 h-10 md:w-16 md:h-16" />
                  <img src="/文字logo.png" alt="文字logo" className="h-10 w-auto md:h-16" />
              </a>
          </a>
          <img src="/主图.png" alt="主图" className="mx-auto rounded-lg w-full h-auto" />
          <p className="text-left text-2xl font-bold mt-10 mb-6">关于我们</p>
          <div className="text-left text-[#969696] font-[545] gap-4 flex flex-col">
              <p className="leading-relaxed">在北京的中高纬度，朝阳区东坝，生活着蛋蛋的朋友们和狗狗Paddy。东五环的存在，让他们既适度远离了城市文明，同时又对荒野抱有可接近的幻想；老旧小区，商场和郊野公园组成了这片区域的全部，故事也在这里展开。</p>
              <p className="leading-relaxed">蛋蛋：思想奇特，多重性格，时常很丧；包袱儿爱好者，却很少把人逗笑；喜欢喝牛奶与看书（从不按书页顺序看），沉迷遛弯儿；在与生活的纠缠里，总能找到一种奇妙的平衡。</p>
              <p className="leading-relaxed"> 短发女孩：个性和自信饱和度高，不爱被人说可爱；偶尔刻薄，爱吐槽，但多半并无恶意；喜欢运动，在日常见解上，常有独到之处。</p>
              <p className="leading-relaxed">Paddy：一只半流浪小狗，常年的街头经验养成了人文主义的素养；每天早晨和傍晚要去一趟公园，意图保持野性（你也可以理解为尊严）；最喜欢的玩具是一台加拿大产的灰狼吼叫模拟器。</p>
          </div>
          <p className="text-left text-2xl font-bold mt-10 mb-6">关于作者</p>
          <p className="text-left text-[#969696] font-[545]">一个中年男性。</p>
          <p className="text-left text-2xl font-bold mt-10 mb-6">联系我们</p>
          <div className="text-left text-[#969696] font-[545] gap-2 flex flex-col mb-12">
              <a href="https://weibo.com/dandanzuoshenme">微博：蛋蛋做什么</a>
              <a data-tooltip-target="tooltip-default" type="button" className="w-40">公众号：蛋蛋做什么</a>
              <div id="tooltip-default" role="tooltip"
                   className="absolute z-10 invisible inline-block px-3 py-2 transition-opacity duration-300 bg-white rounded-lg shadow-sm opacity-0 tooltip">
                  <img src="/点击公众号弹出二维码.png" alt="二维码" className="w-32 h-32"/>
                  <div className="tooltip-arrow" data-popper-arrow></div>
              </div>
              <p>邮箱：dandanzuoshenme@gmail.com</p>
          </div>
          <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
      </main>

      <footer className="flex h-40 w-full items-center justify-center">
        <div className="flex flex-col gap-2">
            <a
              className="flex items-center justify-center gap-2"
            >
                <Image src="/头像1.png" alt="logo" width={20} height={20} />
              <Image src="/文字logo.png" alt="文字logo" width={72} height={16} />
            </a>
            <a className="text-gray-400 text-xs mb-10">©2018-2023 All rights reserved.</a>
        </div>
      </footer>
    </div>
  )
}

export default Home
