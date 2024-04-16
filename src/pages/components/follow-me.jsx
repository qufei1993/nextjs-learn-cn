import Image from 'next/image';

export default function FollowMe() {
  return <>
    <h2 class="text-2xl font-semibold mt-6 mb-4">声明</h2>
    <p>之前，有网友表示，这个项目挺好的，对他有帮助，来表示感谢！</p>
    <p class="mt-5">
      在此声明下，本项目只是一个中文翻译版本，纯粹的 “为爱发电了”，原版权仍归 Next.js 官方教程所有，本翻译项目无任何商业行为，也不接受任何金钱上的捐赠哈。
      如果真的感觉有帮助，就点个 Star 吧，关注下 “编程界” 公众号，上面平常也在分享 Next.js 相关内容。
    </p>

    <div class="flex mt-5">
      <div class="w-1/2 items-center flex flex-col pr-2">
        <Image
          src="coding-may.jpg"
          className="mb-4 rounded-md shadow-lg mb-5 rounded-md shadow-lg"
          alt="扫码备注 “nextjs” 加入 Next.js 中文技术交流群"
          width={200}
          height={200}
        />
        <p class="nx-text-xs font-bold text-center">扫码备注「<b>nextjs</b>」<br/>加入 Next.js 中文技术交流群</p>
      </div>
      <div class="w-1/2 items-center flex flex-col pl-2">
        <Image
          src="qrcode_for_coding_world.avif"
          className="mb-5 rounded-md shadow-lg"
          alt="关注公众号编程界获取最新 Next.js 开发资讯"
          width={200}
          height={200}
        />
        <p class="nx-text-xs font-bold text-center">关注公众号「<b>编程界</b>」<br/>获取最新 Next.js 开发资讯</p>
      </div>
    </div>
  </>
}
