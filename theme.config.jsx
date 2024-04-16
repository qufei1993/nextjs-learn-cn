import { useRouter } from "next/router";
import Image from 'next/image';
import codingMayImage from 'public/coding-may.jpg';
import qrcodeImage from 'public/qrcode_for_coding_world.avif';

const metaTags = (
  <>
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    <meta
      name="description"
      content="基于 App Router 架构的免费学习教程，通过构建全栈 Web 应用程序，让您更好的了解 Next.js 主要功能"
    />
    <meta name="keywords" content="Next.js, Next.js 教程, 如何学习 Next.js, React Server Component, React Server Actions" />
    <meta property="og:title" content="Learn Next.js 中文教程" />
    <meta property="og:description" content="基于 App Router 架构的免费学习教程，通过构建全栈 Web 应用程序，让您更好的了解 Next.js 主要功能" />
    <meta property="og:image" content="/chapter0-dashboard.avif" />
  </>
);

const ExtraContent = () => {
  return <>
    <div class="flex flex-col items-center">
      <Image
        src={codingMayImage}
        className="mb-4 rounded-md shadow-lg"
        alt="扫码备注 “nextjs” 加入 Next.js 中文技术交流群"
        width={200}
        height={200}
      />
      <p class="nx-text-xs font-bold text-center">扫码备注 “nextjs”<br/>加入 Next.js 中文技术交流群</p>

      <div class="h-5"></div>

      <Image
        src={qrcodeImage}
        className="mb-4 rounded-md shadow-lg"
        alt="扫码备注 “nextjs” 加入 Next.js 中文技术交流群"
        width={200}
        height={200}
      />
      <p class="nx-text-xs font-bold text-center">关注公众号 “编程界”<br/>接收 Next.js 最新资讯</p>
    </div>
  </>
}

const config = {
  head: metaTags,
  logo: <span>Learn Next.js 中文教程</span>,
  project: {
    link: "https://github.com/qufei1993/nextjs-learn-cn",
  },
  docsRepositoryBase:
    "https://github.com/qufei1993/nextjs-learn-cn/blob/main",
  search: {
    placeholder: "Search",
  },
  sidebar: {
    toggleButton: true,
  },
  toc: {
    backToTop: true,
    extraContent: <ExtraContent />,
  },
  feedback: { content: null },
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath === "/") {
      return {
        titleTemplate: "Learn Next.js 中文教程",
      };
    }

    return {
      titleTemplate: "%s - Learn Next.js 中文教程",
    };
  },
  gitTimestamp: null,
  footer: {
    text: (
      <span>
        <a
          href="https://github.com/qufei1993/nextjs-learn-cn/blob/main/LICENSE"
          target="_blank"
        >
          MIT License - Copyright (c) 2023
        </a>
      </span>
    ),
  },
};

export default config;
