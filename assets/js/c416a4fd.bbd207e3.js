"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[5478],{2773:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var r=e(4848),i=e(8453);const s={sidebar_position:7},o="\u7b2c\u4e03\u7ae0 \u5faa\u73af",d={id:"p5-js/loops",title:"\u7b2c\u4e03\u7ae0 \u5faa\u73af",description:"\u91cd\u590d\u662f\u8ba1\u7b97\u673a\u6240\u64c5\u957f\u7684\u4e8b\u60c5\u4e4b\u4e00\u3002\u60f3\u8c61\u4e00\u4e0b\u4f7f\u7528\u4e0d\u540c\u7684\u53c2\u6570\u5728\u5c4f\u5e55\u4e0a\u753b\u4e00\u5343\u4e2a\u56fe\u5f62\u3002\u4ee5\u5f53\u524d\u7684\u7f16\u7a0b\u77e5\u8bc6\u8fd9\u5c06\u8017\u8d39\u6211\u4eec\u5927\u91cf\u7684\u65f6\u95f4\u3002\u5bf9\u4e8e\u8fd9\u79cd\u4ee5\u76f8\u540c\u6216\u5e26\u6709\u53d8\u52a8\u7684\u65b9\u5f0f\u91cd\u590d\u4ee3\u7801\u7684\u60c5\u51b5\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u79f0\u4e4b\u4e3a\u5faa\u73af\u7684\u7f16\u7a0b\u7ed3\u6784\u3002\u5faa\u73af\u8ba9\u6211\u4eec\u53ef\u4ee5\u5bf9\u4e00\u4e2a\u4ee3\u7801\u5757\u53cd\u590d\u7684\u6267\u884c\u3002",source:"@site/docs/p5-js/loops.mdx",sourceDirName:"p5-js",slug:"/p5-js/loops",permalink:"/docs/p5-js/loops",draft:!1,unlisted:!1,editUrl:"https://github.com/taixr/portal/tree/main/docs/p5-js/loops.mdx",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"\u7b2c\u516d\u7ae0\xa0p5.js\u4e2d\u7684\u66f4\u591a\u53d8\u91cf",permalink:"/docs/p5-js/more-variables"},next:{title:"Tutorial - Extras",permalink:"/docs/category/tutorial---extras"}},a={},c=[{value:"for \u5faa\u73af",id:"for-\u5faa\u73af",level:2},{value:"random\u548cnoise\u51fd\u6570",id:"random\u548cnoise\u51fd\u6570",level:2},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:2},{value:"\u7ec3\u4e60",id:"\u7ec3\u4e60",level:2}];function l(n){const t={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"\u7b2c\u4e03\u7ae0-\u5faa\u73af",children:"\u7b2c\u4e03\u7ae0 \u5faa\u73af"}),"\n",(0,r.jsx)(t.p,{children:"\u91cd\u590d\u662f\u8ba1\u7b97\u673a\u6240\u64c5\u957f\u7684\u4e8b\u60c5\u4e4b\u4e00\u3002\u60f3\u8c61\u4e00\u4e0b\u4f7f\u7528\u4e0d\u540c\u7684\u53c2\u6570\u5728\u5c4f\u5e55\u4e0a\u753b\u4e00\u5343\u4e2a\u56fe\u5f62\u3002\u4ee5\u5f53\u524d\u7684\u7f16\u7a0b\u77e5\u8bc6\u8fd9\u5c06\u8017\u8d39\u6211\u4eec\u5927\u91cf\u7684\u65f6\u95f4\u3002\u5bf9\u4e8e\u8fd9\u79cd\u4ee5\u76f8\u540c\u6216\u5e26\u6709\u53d8\u52a8\u7684\u65b9\u5f0f\u91cd\u590d\u4ee3\u7801\u7684\u60c5\u51b5\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u79f0\u4e4b\u4e3a\u5faa\u73af\u7684\u7f16\u7a0b\u7ed3\u6784\u3002\u5faa\u73af\u8ba9\u6211\u4eec\u53ef\u4ee5\u5bf9\u4e00\u4e2a\u4ee3\u7801\u5757\u53cd\u590d\u7684\u6267\u884c\u3002"}),"\n",(0,r.jsx)(t.p,{children:"\u6211\u4eec\u5df2\u6709\u719f\u6089\u4e86p5.js\u4e2d\u7684\u5faa\u73af\u6982\u5ff5\u3002\u60f3\u4e00\u4e0b\uff0cdraw\u51fd\u6570\u5c31\u662f\u4e00\u4e2a\u53cd\u590d\u6267\u884c\u7684\u5faa\u73af\uff0c\u76f4\u5230p5.js\u7a0b\u5e8f\u9000\u51fa\u4e3a\u6b62\u3002\u5728\u672c\u7ae0\u4e2d\uff0c\u6211\u4eec\u5c06\u5b66\u4e60\u5982\u4f55\u521b\u5efa\u6211\u4eec\u81ea\u5df1\u7684\u8fd9\u7c7b\u5faa\u73af\u3002"}),"\n",(0,r.jsx)(t.h2,{id:"for-\u5faa\u73af",children:"for \u5faa\u73af"}),"\n",(0,r.jsx)(t.p,{children:"JavaScript\u4e2d\u6709\u51e0\u79cd\u4e0d\u540c\u7684\u5faa\u73af\u7ed3\u6784\uff0c\u4f46for\u5faa\u73af\u662f\u5176\u4e2d\u6700\u4e3a\u5e38\u7528\u7684\u3002\u5b83\u8ba9\u6211\u4eec\u80fd\u4ee5\u6307\u5b9a\u6b21\u6570\u5bf9\u8fd0\u7b97\u8fdb\u884c\u91cd\u590d\u3002for\u5faa\u73af\u6709\u56db\u4e2a\u90e8\u5206\u7ec4\u6210\uff0c\u793a\u4f8b7-1\u6f14\u793a\u4e86\u5982\u4f55\u6784\u5efa\u4e00\u4e2afor\u5faa\u73af\u3002"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"\u793a\u4f8b7-1."})," for\u5faa\u73af\u7684\u793a\u4f8b"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"for (var i = 0; i < 10; i = i + 1) {\n \t//do something\n}\n"})}),"\n",(0,r.jsx)(t.p,{children:"\u5728\u7b2c\u4e00\u90e8\u5206\u4e2d\uff0c\u6211\u4eec\u521d\u59cb\u5316\u4e86\u4e00\u4e2a\u53d8\u91cf\uff0c\u7528\u4e8e\u8bb0\u5f55\u5faa\u73af\u6267\u884c\u7684\u6b21\u6570\uff0c\u6211\u4eec\u79f0\u4e4b\u4e3a\u8bb0\u6570\u53d8\u91cf\u3002"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"var i = 0;\n"})}),"\n",(0,r.jsx)(t.p,{children:"\u6309\u7167\u60ef\u4f8b\uff0c\u5faa\u73af\u4e2d\u5c06\u4f7f\u7528\u7b80\u77ed\u7684\u53d8\u91cf\u540d\uff0c\u5982i\u6216j\uff0c\u5c24\u5176\u662f\u5728\u53d8\u91cf\u4ec5\u7528\u4e8e\u63a7\u5236\u5faa\u73af\u6d41\u7a0b\u65f6\u3002\u4f46\u8bf7\u968f\u610f\u4f7f\u7528\u5176\u5b83\u53d8\u91cf\uff0c\u53ea\u8981\u5728\u4f60\u7684\u7528\u4f8b\u4e2d\u6709\u5177\u4f53\u542b\u4e49\u3002"}),"\n",(0,r.jsx)(t.p,{children:"\u7b2c\u4e8c\u90e8\u5206\u4e2d\uff0c\u6211\u4eec\u5b9a\u4e49\u6bcf\u6b21\u5faa\u73af\u5f00\u59cb\u65f6\u8fd0\u884c\u7684\u6d4b\u8bd5\u6761\u4ef6\u3002\u672c\u4f8b\u4e2d\uff0c\u6211\u4eec\u7ed9\u68c0\u67e5\u8ba1\u7b97\u53d8\u91cf\u662f\u5426\u5c0f\u4e8e\u6570\u5b5710."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"i < 10;\n"})}),"\n",(0,r.jsx)(t.p,{children:"\u7b2c\u4e09\u90e8\u5206\u4e2d\uff0c\u6211\u4eec\u5b9a\u4e49\u4e00\u79cd\u5728\u5faa\u73af\u7ed3\u675f\u65f6\u8fd0\u884c\u7684\u66f4\u65b0\u8ba1\u7b97\u53d8\u91cf\u7684\u65b9\u5f0f\u3002\u672c\u4f8b\u4e2d\uff0c\u6211\u4eec\u83b7\u53d6\u5f53\u524d\u53d8\u91cfi\u7684\u503c\u5e76\u4e3a\u503c\u52a01\u3002"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"i = i + 1;\n"})}),"\n",(0,r.jsx)(t.p,{children:"\u6700\u540e\u5728\u5927\u62ec\u53f7\u5185\u6211\u4eec\u7f16\u5199\u9700\u91cd\u590d\u7684\u4ee3\u7801\u3002\u4e00\u65e6\u8ba1\u7b97\u53d8\u91cf\u65e0\u6cd5\u6ee1\u8db3\u6d4b\u8bd5\u6761\u4ef6\u65f6\uff0c\u5faa\u73af\u7ec8\u6b62\uff0c\u7a0b\u5e8f\u8fd4\u56de\u6b63\u5e38\u8fd0\u884c\u3002"}),"\n",(0,r.jsx)(t.p,{children:"\u5982\u679c\u4e00\u76f4\u80fd\u6ee1\u8db3\u6d4b\u8bd5\u6761\u4ef6\uff0c\u5c31\u4f1a\u5f62\u6210\u65e0\u9650\u5faa\u73af\uff0c\u9664\u975e\u901a\u8fc7\u5916\u90e8\u65b9\u5f0f\u7ec8\u6b62\u7a0b\u5e8f\uff0c\u5426\u5219\u7a0b\u5e8f\u4f1a\u4e00\u76f4\u6267\u884c\u3001\u6c38\u4e0d\u9000\u51fa\u3002p5.js\u4e2d\u7684 draw\u51fd\u6570\u5c31\u662f\u4e00\u4e2a\u65e0\u9650\u5faa\u73af\uff0c\u76f4\u5230\u5173\u95ed\u6d4f\u89c8\u5668\u7a97\u53e3\u4f1a\u4e00\u76f4\u5728\u5c4f\u5e55\u4e0a\u7ed8\u753b\u3002"}),"\n",(0,r.jsx)(t.p,{children:"\u867d\u7136\u65e0\u9650\u5faa\u73af\u662f\u4e00\u4e2a\u6709\u6548\u7528\u4f8b\uff0c\u5faa\u73af\u66f4\u5e38\u7528\u7684\u662f\u6267\u884c\u6709\u9650\u6b21\u6570\u7684\u8fd0\u7b97\u3002\u6211\u4eec\u6765\u4f7f\u7528for\u5faa\u73af\u6765\u5728\u5c4f\u5e55\u4e0a\u753b\u7ed9\u5b9a\u6570\u91cf\u7684\u5706\u5f62\uff08\u793a\u4f8b7-2\u548c\u56fe7-1\uff09\u3002"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"\u793a\u4f8b7-2."})," \u4f7f\u7528for\u5faa\u73af\u753b\u5706"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"function setup() {\n\tcreateCanvas(800, 300);\n}\n\nfunction draw() {\n\tbackground(1, 75, 100);\n\n\t// \u5706\u5f62\u5c5e\u6027\n\tfill(237, 34, 93);\n\tnoStroke();\n\n\tfor(var i=0; i<10; i=i+1){\n\t\tellipse(0, 0, 50, 50);\n\t}\n}\n"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"http://alanhou.org/homepage/wp-content/uploads/2019/02/2019020302481522.jpg",children:(0,r.jsx)(t.img,{src:"https://i.taixr.com/2019020302481522.jpeg",alt:"\u56fe7-1. \u793a\u4f8b7-2\u7684\u8f93\u51fa"})})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"\u56fe7-1."})," \u793a\u4f8b7-2\u7684\u8f93\u51fa"]}),"\n",(0,r.jsx)(t.p,{children:"\u672c\u4f8b\u4e2d\uff0c\u6211\u4eec\u5728\u5c4f\u5e55\u4e0a\u753b\u4e8610\u4e2a\u5706\u5f62\uff0c\u4f46\u901a\u8fc7\u773c\u775b\u662f\u770b\u4e0d\u51fa\u6765\u7684\uff0c\u56e0\u4e3a\u6bcf\u4e2a\u5706\u90fd\u4f1a\u5728\u53e6\u4e00\u4e2a\u5706\u4e4b\u4e0a\u3002\u8fd9\u91cc\u5c31\u4f7f\u7528\u4e86\u5faa\u73af\u8ba1\u6570\u5668\u53d8\u91cf\u3002\u6211\u4eec\u53ef\u4ee5\u5728\u6bcf\u6b21\u5faa\u73af\u8c03\u7528\u65f6\u5bf9\u53d8\u91cf\u6dfb\u52a0\u504f\u79fb\u91cf\uff08\u793a\u4f8b7-3\u548c\u56fe7-2\uff09\u3002"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"\u793a\u4f8b7-3."})," \u5728for\u5faa\u73af\u4e2d\u4f7f\u7528\u5faa\u73af\u8ba1\u6570\u5668"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"function setup() {\n\tcreateCanvas(800, 300);\n}\n\nfunction draw() {\n\tbackground(1, 75, 100);\n\n\t// \u5706\u5f62\u5c5e\u6027\n\tfill(237, 34, 93);\n\tnoStroke();\n\n\tfor(var i=0; i<10; i=i+1){\n\t\tellipse(i*50, 0, 50, 50);\n\t}\n}\n"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"http://alanhou.org/homepage/wp-content/uploads/2019/02/2019020302552334.jpg",children:(0,r.jsx)(t.img,{src:"https://i.taixr.com/2019020302552334.jpeg",alt:"\u56fe7-2. \u793a\u4f8b7-3\u7684\u8f93\u51fa"})})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"\u56fe7-2."})," \u793a\u4f8b7-3\u7684\u8f93\u51fa"]}),"\n",(0,r.jsx)(t.p,{children:"\u6211\u4eec\u5728\u5582\u5165ellipse\u51fd\u6570\u524d\u5bf9\u5faa\u73af\u53d8\u91cf\u4e58\u4e0a\u4e8610\uff08\u5706\u7684\u76f4\u5f84\uff09\u3002\u8fd9\u6837\u6211\u4eec\u753b\u7684\u5f62\u72b6\u5c31\u4e0d\u4f1a\u91cd\u53e0\u3002"}),"\n",(0,r.jsx)(t.p,{children:"\u73b0\u5728\u6267\u884c\u4ee3\u7801\uff0c\u5c31\u53ef\u4ee5\u770b\u5230for\u5faa\u73af\u4e3a\u6211\u4eec\u521b\u5efa\u7684\u6240\u6709\u5706\u4e86\u3002\u6211\u4eec\u8fd9\u91cc\u6240\u521b\u5efa\u7684\u91cd\u590d\u8fd0\u7b97\u7ed3\u6784\u7684\u597d\u5904\u5728\u4e8e\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u4fee\u6539\u5faa\u73af\u5185\u7684\u6761\u4ef6\u503c\u4e3a\u66f4\u5927\u6765\u6269\u5927\u5faa\u73af\u89c4\u6a21\u3002\u628a\u6e32\u67d3\u5706\u7684\u6570\u91cf\u4ece10\u53d8\u6210100\u62161000\u4ec5\u4ec5\u9700\u8981\u4fee\u6539\u4e00\u4e2a\u503c\u5c31\u53ef\u4ee5\u4e86\u3002\u4f46\u662f\uff0c\u5982\u679c\u4f7f\u7528\u7684\u6570\u5f88\u5927\u65f6\u6211\u4eec\u5c31\u4f1a\u53d1\u73b0\u6027\u80fd\u4e0b\u964d\u3002"}),"\n",(0,r.jsx)(t.p,{children:"\u6211\u4eec\u6765\u8c03\u6574\u4ee3\u7801\u8ba9\u5706\u5f62\u7b49\u5e03\u6ee1\u5c4f\u5e55\u4e0a\u7684\u6574\u6392\uff08\u793a\u4f8b7-4\u548c\u56fe7-3\uff09\u3002"}),"\n",(0,r.jsx)(t.p,{children:"\u5982\u679c\u5c4f\u5e55\u5bbd\u662f800\uff0c\u5706\u7684\u76f4\u5f84\u662f50\uff0c\u8fd9\u5c31\u8868\u793a\u9875\u9762\u4e0a\u7684\u4e00\u6392\u53ef\u4ee5\u653e800 / 50 \u4e2a\u5706\u5f62\u3002\u6211\u4eec\u4f1a\u770b\u5230\u9875\u9762\u7684\u6700\u540e\u4f1a\u6709\u4e00\u70b9\u7a7a\u7f3a\uff0c\u8fd9\u662f\u56e0\u4e3a\u7b2c\u4e00\u4e2a\u5706\u6709\u90e8\u5206\u51fa\u753b\u9762\u4e86\u3002\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u5728 x \u8f74\u6dfb\u52a0\u76f4\u5f84\u7684\u4e00\u534a25\u6765\u8fdb\u884c\u504f\u79fb\u6765\u53bb\u9664\u8fd9\u4e2a\u7a7a\u7f3a\u3002\u5982\u4f60\u6240\u77e5\uff0c\u6211\u4eec\u5176\u5b9e\u4e0d\u9700\u8981\u81ea\u5df1\u8fdb\u884c\u8ba1\u7b97\uff0c\u800c\u8ba9JavaScript\u6765\u4e3a\u6211\u4eec\u8ba1\u7b97\u503c\u3002"}),"\n",(0,r.jsx)(t.p,{children:"\u53ef\u4ee5\u770b\u5230\u76ee\u524d\u6211\u4eec\u4ee3\u7801\u4e2d\u5f88\u591a\u503c\u90fd\u662f\u786c\u7f16\u7801\uff0c\u4f7f\u7528\u53d8\u91cf\u6765\u66ff\u6362\u53ef\u589e\u52a0\u7075\u6d3b\uff0c\u4e0b\u9762\u6211\u4eec\u6765\u91cd\u6784\u4ee3\u7801\u5b9e\u73b0\u8fd9\u4e00\u70b9\u3002"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"\u793a\u4f8b7-4."})," \u5728\u5c4f\u5e55\u4e2d\u6574\u6392\u94fa\u6ee1\u5706\u5f62"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"function setup() {\n\tcreateCanvas(800, 300);\n}\n\nfunction draw() {\n\tbackground(1, 75, 100);\n\n\t// \u5706\u5f62\u5c5e\u6027\n\tfill(237, 34, 93);\n\tnoStroke();\n\tvar diameter = 50;\n\n\tfor(var i=0; i<width/diameter; i=i+1){\n\t\tellipse(diameter/2 + i*diameter, 0, diameter, diameter);\n\t}\n}\n"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"http://alanhou.org/homepage/wp-content/uploads/2019/02/2019020304464875.jpg",children:(0,r.jsx)(t.img,{src:"https://i.taixr.com/2019020304464875.jpeg",alt:"\u56fe7-3. \u793a\u4f8b7-4\u7684\u8f93\u51fa"})})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"\u56fe7-3."})," \u793a\u4f8b7-4\u7684\u8f93\u51fa"]}),"\n",(0,r.jsx)(t.p,{children:"\u73b0\u5728\u53ea\u8981\u4fee\u6539\u4e00\u4e2a\u503c\uff0c\u5706\u7684\u76f4\u5f84\uff0c\u6574\u4e2a\u4ee3\u7801\u90fd\u4ecd\u4f1a\u5728\u5c4f\u5e55\u4e0a\u753b\u51fa\u8db3\u591f\u591a\u7684\u5706\u3002\u8fd9\u5bf9\u6211\u4eec\u6765\u8bf4\u5f88\u9177\u3002"}),"\n",(0,r.jsx)(t.p,{children:"\u5047\u5982\u6211\u4eec\u8981\u5728\u5c4f\u5e55\u7eb5\u5411\u4e0a\u4e5f\u94fa\u6ee1\u5c4f\u5e55\u5462\uff1f\u8981\u8fd9\u4e48\u505a\uff0c\u6211\u4eec\u9700\u8981\u518d\u5199\u4e00\u4e2afor\u5faa\u73af\uff0c\u5c06\u539f\u672c\u6a2a\u5411\u94fa\u6ee1\u5c4f\u5e55\u7684\u5706\u5728\u7eb5\u5411\u4e0a\u4e5f\u94fa\u6ee1\u3002\u8fd9\u8981\u6c42\u6211\u4eec\u5728\u7b2c\u4e00\u4e2a\u5faa\u73af\u5185\u518d\u52a0\u4e00\u4e2a\u5faa\u73af\uff0c\u6709\u6548\u7684\u8fd9\u4e00\u4e2a\u5faa\u73af\u4e2d\u5185\u5d4c\u53e6\u4e00\u4e2a\u5faa\u73af\u3002\u53c2\u89c1\u793a\u4f8b7-5\u548c\u56fe7-4\u3002"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"\u793a\u4f8b7-5."})," \u5706\u5f62\u94fa\u6ee1\u5168\u5c4f"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"function setup() {\n\tcreateCanvas(800, 300);\n}\n\nfunction draw() {\n\tbackground(1, 75, 100);\n\n\t// \u5706\u5f62\u5c5e\u6027\n\tfill(237, 34, 93);\n\tnoStroke();\n\tvar diameter = 50;\n\n\tfor(var i=0; i<width/diameter; i=i+1){\n\t\tfor(var j=0; j<height/diameter; j=j+1){\n\t\t\tellipse(\n\t\t\t\tdiameter/2 + i*diameter, \n\t\t\t\tdiameter/2 + j*diameter, \n\t\t\t\tdiameter, \n\t\t\t\tdiameter);\n\t\t}\n\t}\n}\n"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"http://alanhou.org/homepage/wp-content/uploads/2019/02/2019020309523919.jpg",children:(0,r.jsx)(t.img,{src:"https://i.taixr.com/2019020309523919.jpeg",alt:"\u56fe7-4. \u793a\u4f8b7-5\u7684\u8f93\u51fa"})})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"\u56fe7-4."})," \u793a\u4f8b7-5\u7684\u8f93\u51fa"]}),"\n",(0,r.jsx)(t.p,{children:"\u6ce8\u610f\u672c\u4f8b\u4e2dellipse\u51fd\u6570\u7684\u58f0\u660e\u65b9\u5f0f\u3002\u6211\u4eec\u5c06\u4ee3\u7801\u5199\u5728\u591a\u884c\u4e0a\u6765\u589e\u5f3a\u53ef\u8bfb\u6027\u3002JavaScript\u4e2d\u7a7a\u683c\u4e0d\u4f1a\u5f71\u54cd\u6267\u884c\uff0c\u6240\u4ee5\u5c06\u4ee3\u7801\u5199\u5728\u591a\u884c\u4e0a\u4e0d\u4f1a\u4ea7\u751f\u9519\u8bef\u3002"}),"\n",(0,r.jsx)(t.p,{children:"\u8fd9\u6bb5\u4ee3\u7801\u5df2\u7ecf\u975e\u5e38\u6613\u7528\u4e86\u3002\u9996\u5148\u4ee3\u7801\u5f88\u5065\u58ee\uff0c\u6211\u4eec\u53ef\u4ee5\u4fee\u6539\u7ed8\u56fe\u533a\u5927\u5c0f\u6216\u6240\u7ed8\u5236\u5706\u5f62\u7684\u6570\u91cf\uff0c\u4f46\u4ecd\u4f1a\u6b63\u5e38\u8fd0\u884c\u3002"}),"\n",(0,r.jsx)(t.p,{children:"\u6709\u4e00\u70b9\u9700\u8981\u6ce8\u610f\uff0c\u5728\u5faa\u73af\u4e2d\u518d\u52a0\u5faa\u73af\u6839\u636e\u6267\u884c\u7684\u8fd0\u7b97\u6b21\u6570\u4f1a\u8ba9\u7a0b\u5e8f\u53d8\u5f97\u5f88\u6162\u3002\u540c\u65f6\uff0c\u5185\u5d4c\u7684\u7ed3\u6784\u6709\u65f6\u4e5f\u4f1a\u8ba9\u7a0b\u5e8f\u53d8\u5f97\u4e0d\u5bb9\u6613\u9605\u8bfb\u3002"}),"\n",(0,r.jsx)(t.h2,{id:"random\u548cnoise\u51fd\u6570",children:"random\u548cnoise\u51fd\u6570"}),"\n",(0,r.jsx)(t.p,{children:"\u65e2\u7136\u6211\u4eec\u73b0\u5728\u53ef\u4ee5\u521b\u5efa\u5faa\u73af\u6765\u5728\u6bcf\u6b21\u6267\u884c\u65f6\u4f7f\u7528\u4e0d\u540c\u503c\uff0c\u6216\u8bb8\u662f\u5b66\u4e60p5.js\u7684random\u51fd\u6570\u4e0d\u9519\u7684\u65f6\u673a\u3002p5.js\u7684random\u51fd\u6570\u5728\u6bcf\u6b21\u8c03\u7528\u65f6\u90fd\u4f1a\u751f\u6210\u4e00\u4e2a\u968f\u673a\u6570\u3002\u8fd9\u5728\u753b\u56fe\u65f6\u60f3\u8981\u4f7f\u7528\u968f\u673a\u53c2\u6570\u503c\u5c31\u975e\u5e38\u6709\u7528\u4e86\u3002"}),"\n",(0,r.jsx)(t.p,{children:"\u5982\u679c\u6211\u4eec\u8c03\u7528random\u51fd\u6570\u65f6\u4e0d\u4f20\u5165\u53c2\u6570\uff0c\u5c31\u4f1a\u4e3a\u6bcf\u4e2adraw\u51fd\u6570\u8c03\u7528\u6216\u6bcf\u5e27\u751f\u62100\u548c1\u4e4b\u95f4\u7684\u968f\u673a\u503c\u3002\u5982\u679c\u5728random\u51fd\u6570\u4e2d\u4f20\u5165\u4e00\u4e2a\u503c\uff0c\u5c31\u4f1a\u8fd4\u56de0\u4ee5\u4e0a\u4f20\u5165\u503c\u4ee5\u4e0b\u7684\u968f\u673a\u503c\u3002\u5982\u679c\u5728random\u51fd\u6570\u4e2d\u4f20\u5165\u4e24\u4e2a\u503c\uff0c\u5c31\u4f1a\u8fd4\u56de\u6240\u4f20\u5165\u4e24\u4e2a\u503c\u4e4b\u95f4\u7684\u968f\u673a\u503c\u3002\u53c2\u89c1\u793a\u4f8b7-6\u6765\u4e86\u89e3\u8fd9\u4e00\u60c5\u51b5\u3002"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"\u793a\u4f8b7-6."})," \u4f7f\u7528random\u51fd\u6570\u7684\u793a\u4f8b"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"console.log(random()); // 0\u548c1\u4e4b\u95f4\u7684\u968f\u673a\u6570\nconsole.log(random(10)); // 0\u548c10\u4e4b\u95f4\u7684\u968f\u673a\u6570\nconsole.log(random(100, 1000)); // 100\u548c1000\u4e4b\u95f4\u7684\u968f\u673a\u6570\n"})}),"\n",(0,r.jsx)(t.p,{children:"\u793a\u4f8b7-7\u662f\u4e00\u4e2a\u4ee5\u4e0d\u540c\u65b9\u5f0f\u4f7f\u7528random\u51fd\u6570\u7684\u5c0f\u811a\u672c\u3002\u56fe7-5\u663e\u793a\u4e86\u8be5\u811a\u672c\u7684\u8fd0\u884c\u7ed3\u679c\u3002\u663e\u793a\u7684\u6570\u5b57\u662f\u968f\u673a\u751f\u6210\u7684\uff0c\u5728\u6bcf\u6b21\u4ee3\u7801\u6267\u884c\u65f6\u90fd\u4f1a\u4e0d\u540c\u3002"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"\u793a\u4f8b7-7."})," \u4f7f\u7528random\u51fd\u6570"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"function setup() {\n\tcreateCanvas(800, 300);\n\ttextAlign(CENTER, CENTER);\n\tfill(237, 34, 93);\n\tframeRate(1);\n}\n\nfunction draw() {\n\tvar random_0 = random();\n\tvar random_1 = random(10);\n\tvar random_2 = random(100, 1000);\n\tvar offset = 40;\n\n\ttextSize(24);\n\tbackground(255);\n\ttext(random_0, width/2, height/2-offset);\n\ttext(random_1, width/2, height/2-0);\n\ttext(random_2, width/2, height/2+offset);\n\n}\n"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"http://alanhou.org/homepage/wp-content/uploads/2019/02/2019020310241967.jpg",children:(0,r.jsx)(t.img,{src:"https://i.taixr.com/2019020310241967.jpeg",alt:"\u56fe7-5. \u793a\u4f8b7-7\u7684\u8f93\u51fa"})})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"\u56fe7-5."})," \u793a\u4f8b7-7\u7684\u8f93\u51fa"]}),"\n",(0,r.jsx)(t.p,{children:"\u901a\u8fc7\u793a\u4f8b7-8\u548c\u56fe7-6\uff0c\u6211\u4eec\u53ef\u4ee5\u66f4\u65b0\u524d\u9762\u7684\u4ee3\u7801\uff08\u793a\u4f8b7-5\uff09\u6765\u4f7f\u7528random\u51fd\u6570\u3002"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"\u793a\u4f8b7-8."})," \u4f7f\u7528random\u51fd\u6570"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"function setup() {\n\tcreateCanvas(800, 300);\n}\n\nfunction draw() {\n\tbackground(1, 75, 100);\n\n\t// \u5706\u5f62\u5c5e\u6027\n\tfill(237, 34, 93);\n\tnoStroke();\n\tvar diameter = 50;\n\n\tfor(var i=0; i< width/diameter; i=i+1){\n\t\tfor(var j=0; j<height/diameter; j=j+1){\n\t\t\tellipse(\n\t\t\t\tdiameter/2 + i * diameter,\n\t\t\t\tdiameter/2 + j * diameter,\n\t\t\t\tdiameter * random(), // \u4f7f\u7528\u968f\u673a\u51fd\u6570\n\t\t\t\tdiameter\n\t\t\t);\n\t\t}\n\t}\n}\n"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:"https://i.taixr.com/6892a61923ac44c0b0a89ad716d93cc0.gif",alt:""})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"\u56fe7-6."})," \u793a\u4f8b7-8\u7684\u8f93\u51fa"]}),"\n",(0,r.jsx)(t.p,{children:"\u6211\u4eec\u4f7f\u7528random\u51fd\u6570\u751f\u6210\u7684\u7ed3\u679c\u4e58\u4e0a\u5706\u5f62\u7684\u5bbd\uff0c\u8fd9\u4e00\u968f\u673a\u6570\u662f\u8c03\u7528random\u6240\u751f\u6210\u76840\u548c1\u4e4b\u95f4\u503c\u3002\u56e0\u4e3arandom\u51fd\u6570\u53ef\u5728\u4efb\u610f\u5e27\u4e0a\u4f7f\u7528\u8303\u56f4\u5185\u7684\u6570\uff0c\u8fd9\u6837\u7684\u52a8\u753b\u770b\u4e0a\u53bb\u53d8\u52a8\u975e\u5e38\u5267\u70c8\u3002\u5982\u679c\u6211\u4eec\u60f3\u8981\u968f\u673a\u503c\u9010\u6e10\u6539\u53d8\uff0c\u8fd9\u6837\u770b\u4e0a\u53bb\u66f4\u81ea\u7136\uff0c\u90a3\u4e48\u5c31\u5e94\u8be5\u4f7f\u7528noise\u51fd\u6570\u4e86\u3002"}),"\n",(0,r.jsx)(t.p,{children:"\u6211\u4eec\u53ef\u4ee5\u5411noise\u51fd\u6570\u5582\u5165\u4efb\u610f\u6570\u503c\uff0c\u8fd9\u6837\u5b83\u4f1a\u8fd4\u56de0\u548c1\u4e4b\u95f4\u7684\u534a\u968f\u673a\u503c\u3002\u5bf9\u4e8e\u76f8\u540c\u7ed9\u5b9a\u503c\u5b83\u603b\u4f1a\u8fd4\u56de\u76f8\u540c\u7684\u8f93\u51fa\u3002noise\u51fd\u6570\u7684\u597d\u5904\u5927\u4e8e\uff0c\u5982\u679c\u5582\u5165noise\u51fd\u6570\u7684\u503c\u5728\u9012\u589e\uff0c\u8f93\u51fa\u503c\u4e5f\u4f1a\u9012\u589e\u3002\u8fd9\u6837\u901a\u8fc7\u83b7\u53d6\u7684\u968f\u673a\u503c\u8fc7\u6e21\u66f4\u52a0\u5e73\u6ed1\u3002"}),"\n",(0,r.jsx)(t.p,{children:"\u8981\u4e86\u89e3noise\u51fd\u6570\u8fd0\u4f5c\u7684\u6982\u5ff5\uff0c\u53ef\u4ee5\u5c06\u5176\u60f3\u50cf\u4e3a\u62e5\u6709\u65e0\u9650\u6570\u91cf\u50cf\u6ce2\u4e00\u6837\u53d8\u5316\u7684\u968f\u673a\u503c\uff0c\u4f20\u5165noise\u51fd\u6570\u7684\u503c\u53ef\u770b\u4f5c\u8fd9\u4e9b\u968f\u673a\u503c\u7684\u5750\u6807\u3002\u57fa\u672c\u4e0a\u6211\u4eec\u53ea\u662f\u5728\u5bf9\u5df2\u5b58\u5728\u566a\u97f3\u8fdb\u884c\u53d6\u6837\u3002\u65e0\u8bba\u4f55\u65f6\u6211\u4eec\u5411noise\u51fd\u6570\u4f20\u5165\u76f8\u540c\u7684\u503c\uff0c\u90fd\u4f1a\u5f97\u5230\u76f8\u540c\u7684\u534a\u968f\u673a\u8fd4\u56de\u503c\u3002"}),"\n",(0,r.jsx)(t.p,{children:"\u6211\u4eec\u88c5\u9970\u91cd\u5199\u4e0a\u8ff0\u7a0b\u5e8f\uff08\u793a\u4f8b7-8\uff09\u6765\u4f7f\u7528noise\u51fd\u6570\u8fdb\u884c\u66ff\u6362\u3002\u6211\u4eec\u5411noise\u51fd\u6570\u4f20\u5165\u53d8\u91cfframeCount\uff0c\u56e0\u4e3a\u8fd9\u662f\u5728p5.js\u4e2d\u83b7\u53d6\u6709\u5e8f\u6570\u5b57\u5f88\u597d\u7684\u65b9\u5f0f\u3002\u4f46\u6211\u4eec\u4f1a\u5c06frameCount\u9664\u4ee5100\u4ee5\u51cf\u6162\u503c\u6539\u53d8\u7684\u901f\u5ea6\uff0c\u8fd9\u6837\u52a8\u753b\u4e5f\u4f1a\u6162\u4e00\u4e9b\u3002\u53c2\u89c1\u793a\u4f8b7-9\u548c\u56fe7-7\u3002"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"\u793a\u4f8b7-9."})," \u4f7f\u7528noise\u51fd\u6570"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"function setup() {\n\tcreateCanvas(800, 300);\n}\n\nfunction draw() {\n\tbackground(1, 75, 100);\n\n\t// \u5706\u5f62\u5c5e\u6027\n\tfill(237, 34, 93);\n\tnoStroke();\n\tvar diameter = 50;\n\n\tfor(var i=0; i< width/diameter; i=i+1){\n\t\tfor(var j=0; j<height/diameter; j=j+1){\n\t\t\tellipse(\n\t\t\t\tdiameter/2 + i * diameter,\n\t\t\t\tdiameter/2 + j * diameter,\n\t\t\t\tdiameter * noise(frameCount/100), // \u4f7f\u7528noise\u51fd\u6570\n\t\t\t\tdiameter * noise(frameCount/100) // \u4f7f\u7528noise\u51fd\u6570\n\t\t\t);\n\t\t}\n\t}\n}\n"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:"https://i.taixr.com/582a6a197c584e3189f8a7b3e504eda8.gif",alt:""})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"\u56fe7-7."})," \u793a\u4f8b7-9\u7684\u8f93\u51fa"]}),"\n",(0,r.jsx)(t.p,{children:"\u6ce8\u610f\u73b0\u5728\u6240\u6709\u7684\u5f62\u72b6\u90fd\u4f7f\u7528\u76f8\u540c\u7684\u52a8\u753b\u3002\u5982\u4f55\u60f3\u8981\u6bcf\u4e2a\u5f62\u72b6\u7684\u566a\u97f3\u90fd\u4e0d\u76f8\u540c\u5462\uff1f\u73b0\u5728\u6211\u4eec\u7684\u503c\u5728\u91cd\u590d\uff0c\u56e0\u4e3anoise\u51fd\u6570\u5728\u63a5\u6536\u76f8\u540c\u503c\u65f6\uff0c\u8fd4\u56de\u7684\u8f93\u51fa\u4e5f\u76f8\u540c\u3002\u8981\u4f7f\u6bcf\u4e2a\u5f62\u72b6\u83b7\u53d6\u4e0d\u540c\u7684\u8f93\u51fa\u503c\uff0c\u6211\u4eec\u9700\u8981\u4f7f\u7528for \u5faa\u73af\u7684 i \u548c j \u503c\u6765\u91cd\u5199\u4ee5\u4e0a\u51fd\u6570\uff0c\u6765\u8c03\u6574\u566a\u97f3\u7684\u53d6\u6837\u6e90\u3002\u53c2\u89c1\u793a\u4f8b7-10\u548c\u56fe7-8\u3002"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"\u793a\u4f8b7-10."})," \u5bf9\u6bcf\u4e2a\u5706\u5e94\u7528\u4e0d\u540c\u7684\u52a8\u753b"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"function setup() {\n\tcreateCanvas(800, 300);\n}\n\nfunction draw() {\n\tbackground(1, 75, 100);\n\n\t// \u5706\u5f62\u5c5e\u6027\n\tfill(237, 34, 93);\n\tnoStroke();\n\tvar diameter = 50;\n\n\tfor(var i=0; i< width/diameter; i=i+1){\n\t\tfor(var j=0; j<height/diameter; j=j+1){\n\t\t\tellipse(\n\t\t\t\tdiameter/2 + i * diameter,\n\t\t\t\tdiameter/2 + j * diameter,\n\t\t\t\tdiameter * noise(frameCount/100 + j*10000 + i*10000), // \u5bf9\u6bcf\u4e2a\u5706\u5e94\u7528\u4e0d\u540c\u7684\u52a8\u753b\n\t\t\t\tdiameter * noise(frameCount/100 + j*10000 + i*10000)\n\t\t\t);\n\t\t}\n\t}\n}\n"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:"https://i.taixr.com/4cb85e4367c446a1be3a991c91107e3e.gif",alt:""})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"\u56fe7-8."})," \u793a\u4f8b7-10\u7684\u8f93\u51fa"]}),"\n",(0,r.jsx)(t.p,{children:"\u4ee5\u4e0a\u6211\u4eec\u4f7f\u7528\u7684\u4e58\u657010000\u5b8c\u5168\u662f\u968f\u673a\u9009\u53d6\u7684\u3002\u6211\u4eec\u76ee\u7684\u662f\u4f20\u5165noise\u51fd\u6570\u7684\u5750\u6807\u503c\u76f8\u8ddd\u8db3\u591f\u8fdc\u3002"}),"\n",(0,r.jsx)(t.h2,{id:"\u603b\u7ed3",children:"\u603b\u7ed3"}),"\n",(0,r.jsx)(t.p,{children:"\u5faa\u73af\u662f\u7f16\u7a0b\u4e2d\u6700\u5f3a\u5927\u7684\u7ed3\u6784\u4e4b\u4e00\u3002\u8fd9\u8ba9\u6211\u4eec\u8fdb\u5165\u8ba1\u7b97\u673a\u7684\u771f\u5b9e\u8ba1\u7b97\u80fd\u529b\uff0c\u5927\u89c4\u6a21\u7684\u91cd\u590d\u8fd0\u7b97\u5927\u6709\u9650\u65f6\u95f4\u5185\u5bf9\u4eba\u7c7b\u662f\u4e0d\u53ef\u80fd\u5b8c\u6210\u7684\u4efb\u52a1\u3002"}),"\n",(0,r.jsx)(t.p,{children:"\u672c\u7ae0\u4e2d\u6211\u4eec\u5b66\u4e60\u4e86\u5982\u4f55\u521b\u5efafor\u5faa\u73af\u5e76\u901a\u8fc7\u5185\u5d4c\u5faa\u73af\u6765\u6309\u884c\u91cd\u590d\u5f62\u72b6\u6765\u66ff\u4ee3\u4e4b\u524d\u7684\u5355\u884c\u5f62\u72b6\u3002"}),"\n",(0,r.jsx)(t.p,{children:"\u6211\u4eec\u8fd8\u5b66\u4e60\u4e86p5.js\u7684random\u548cnoise\u51fd\u6570\uff0c\u4ee5\u53ca\u5b83\u4eec\u4e4b\u95f4\u7684\u533a\u522b\u3002"}),"\n",(0,r.jsx)(t.h2,{id:"\u7ec3\u4e60",children:"\u7ec3\u4e60"}),"\n",(0,r.jsx)(t.p,{children:"\u521b\u5efa\u4e00\u4e2a\u5faa\u73af\u6765\u521b\u5efa\u4e00\u4e2a\u989c\u8272\u7531\u9ed1\u5230\u767d\u9010\u6e10\u53d8\u5316\u7684\u4e00\u6761\u5217\u77e9\u5f62\uff08\u56fe7-9\uff09\u3002\u5e94\u901a\u8fc7\u5355\u4e2a\u53d8\u91cf\u6765\u63a7\u5236\u6240\u7ed8\u5236\u77e9\u5f62\u6570\u91cf\u3002"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"http://alanhou.org/homepage/wp-content/uploads/2019/02/2019020312232498.jpg",children:(0,r.jsx)(t.img,{src:"https://i.taixr.com/2019020312232498.jpeg",alt:"\u56fe7-9. \u7ec3\u4e60\u56fe\u50cf"})})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"\u56fe7-9."})," \u7ec3\u4e60\u56fe\u50cf"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"\u8bd1\u8005\u8865\u5145\uff0c\u4ec5\u4f9b\u53c2\u8003\uff1a"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"function setup() {\n\tcreateCanvas(800, 300);\n}\n\nfunction draw() {\n\tbackground(255);\n\tnum = 10; // \u7ed8\u5236\u77e9\u5f62\u6570\u91cf\n\t\n\tnoStroke();\n\t\n\tfor(i=0; i<num; i=i+1){\n\t\t// fill(0, 0, 0, noise(i*10000)*255); // \u5b9e\u73b0\u968f\u673a\u989c\u8272\u53d8\u5316\n\t\tfill(0, 0, 0, i/num*255); //i\u4e3a num-i-1\u53ef\u5b9e\u73b0\u4e0e\u539f\u4e66\u76f8\u540c\u987a\u5e8f\u7684\u77e9\u5f62\n\t\trect(i*width/num, 0, width/num, height);\n\t}\n}\n"})})]})}function h(n={}){const{wrapper:t}={...(0,i.R)(),...n.components};return t?(0,r.jsx)(t,{...n,children:(0,r.jsx)(l,{...n})}):l(n)}},8453:(n,t,e)=>{e.d(t,{R:()=>o,x:()=>d});var r=e(6540);const i={},s=r.createContext(i);function o(n){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function d(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:o(n.components),r.createElement(s.Provider,{value:t},n.children)}}}]);