import React from 'react';

const About = () => {
  return (
    <div>
      <h2>小熊新闻阅读器</h2>
      <h4>特点</h4>
      <ul>
        <li>客观： 不采用任何推荐算法</li>
        <li>全面： 覆盖主流财经媒体的头版新闻 </li>
        <li>高效： 快速浏览新闻标题, 适合上下班阅读 </li>
        <li>纯净： 没有烦人的广告、视频、评论等一切干扰 </li>
      </ul>

      <h4>功能</h4>
      <ul>
        <li className="todo-done">按照新闻类别隐藏新闻</li>
        <li>按照关键词高亮某些新闻标题</li>

      </ul>

      <p>意见和建议请发送至newsreader [at] quantnote.com</p>

    </div>
  );
};


export default About;
