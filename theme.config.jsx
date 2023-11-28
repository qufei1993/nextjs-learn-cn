import { useRouter } from "next/router";

const metaTags = (
  <>
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    <meta
      name="description"
      content="Learn Next.js 中文教程"
    />
  </>
);

const ExtraContent = () => {
  return <>
    <div class="flex flex-col items-center">
      <img src="/coding-may.jpeg" alt="Description" class="mb-4 rounded-md shadow-lg" />
      <p class="nx-text-xs font-bold text-center">扫码备注 “nextjs”<br/>加入 Next.js 中文技术交流群</p>
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
    "https://github.com/qufei1993/nextjs-learn-cn",
  search: {
    placeholder: "Search",
  },
  sidebar: {
    toggleButton: true,
    titleComponent({ title, type }) {
      if (['Chapter 10', 'Chapter 11', 'Chapter 12', 'Chapter 13', 'Chapter 14', 'Chapter 15', 'Chapter 16'].includes(title.split('：')[0])) {
        return (
          <div style={{ color: '#d8d8d8', pointerEvents: 'none' }}>{title}</div>
        )
      }

      return title
    }
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
