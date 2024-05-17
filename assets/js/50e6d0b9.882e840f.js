"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[4422],{7685:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var t=s(4848),r=s(8453);const i={sidebar_position:6},o="\u7b2c\u516d\u7ae0\xa0p5.js\u4e2d\u7684\u66f4\u591a\u53d8\u91cf",c={id:"p5-js/more-variables",title:"\u7b2c\u516d\u7ae0\xa0p5.js\u4e2d\u7684\u66f4\u591a\u53d8\u91cf",description:"\u5728\u4e0a\u4e00\u7ae0\u4e2d\uff0c\u6211\u4eec\u5b66\u4e60\u4e86p5.js\u4e2d\u7684frameCount\u53d8\u91cf\uff0c\u7528\u4e8e\u8868\u793adraw\u51fd\u6570\u8c03\u7528\u7684\u6b21\u6570\u3002p5.js\u4e2d\u6709\u5f88\u591a\u975e\u5e38\u6709\u7528\u7684\u53d8\u91cf\uff0c\u672c\u7ae0\u4e2d\u5c06\u7ee7\u7eed\u5b66\u4e60\u4e00\u4e9b\u5176\u5b83\u7684\u53d8\u91cf\u3002",source:"@site/docs/p5-js/more-variables.mdx",sourceDirName:"p5-js",slug:"/p5-js/more-variables",permalink:"/docs/p5-js/more-variables",draft:!1,unlisted:!1,editUrl:"https://github.com/taixr/portal/tree/main/docs/p5-js/more-variables.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"\u7b2c\u4e94\u7ae0 \u6761\u4ef6\u8bed\u53e5\u548c\u6bd4\u8f83\u8fd0\u7b97\u7b26",permalink:"/docs/p5-js/conditional-statements"},next:{title:"\u7b2c\u4e03\u7ae0 \u5faa\u73af",permalink:"/docs/p5-js/loops"}},l={},d=[{value:"mouseIsPressed",id:"mouseispressed",level:2},{value:"mouseX\u548cmouseY",id:"mousex\u548cmousey",level:2},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:2},{value:"\u7ec3\u4e60",id:"\u7ec3\u4e60",level:2}];function a(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"\u7b2c\u516d\u7ae0p5js\u4e2d\u7684\u66f4\u591a\u53d8\u91cf",children:"\u7b2c\u516d\u7ae0\xa0p5.js\u4e2d\u7684\u66f4\u591a\u53d8\u91cf"}),"\n",(0,t.jsx)(e.p,{children:"\u5728\u4e0a\u4e00\u7ae0\u4e2d\uff0c\u6211\u4eec\u5b66\u4e60\u4e86p5.js\u4e2d\u7684frameCount\u53d8\u91cf\uff0c\u7528\u4e8e\u8868\u793adraw\u51fd\u6570\u8c03\u7528\u7684\u6b21\u6570\u3002p5.js\u4e2d\u6709\u5f88\u591a\u975e\u5e38\u6709\u7528\u7684\u53d8\u91cf\uff0c\u672c\u7ae0\u4e2d\u5c06\u7ee7\u7eed\u5b66\u4e60\u4e00\u4e9b\u5176\u5b83\u7684\u53d8\u91cf\u3002"}),"\n",(0,t.jsx)(e.h2,{id:"mouseispressed",children:"mouseIsPressed"}),"\n",(0,t.jsx)(e.p,{children:"mouseIsPressed\u662f\u6211\u4eec\u5c06\u5b66\u4e60\u7684\u7b2c\u4e00\u4e2a\u7528\u4e8e\u5728\u7a0b\u5e8f\u4e2d\u4ea4\u4e92\u7684p5.js \u53d8\u91cf\u3002mouseIsPressed\u662f\u4e00\u4e2ap5.js\u53d8\u91cf\uff0c\u5728\u9f20\u6807\u70b9\u51fb\u753b\u5e03\u533a\u65f6\u503c\u4e3atrue\uff0c\u5426\u5219\u4e3afalse\u3002\u4e0b\u9762\u6211\u4eec\u4fee\u6539\u7b2c\u56db\u7ae0\u4e2d\u7684\u4e00\u4e2a\u4f8b\u5b50\uff08\u793a\u4f8b4-10\uff09\u6765\u770b\u770b\u5982\u4f55\u4f7f\u7528\u8be5\u53d8\u91cf\uff08\u793a\u4f8b6-1\uff09\u3002"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"\u793a\u4f8b6-1."})," \u6309\u6761\u4ef6\u5728\u5706\u5185\u663e\u793a\u77e9\u5f62"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"function setup() {\n\tcreateCanvas(800, 300);\n\trectMode(CENTER);\n}\n\nfunction draw() {\n\tbackground(1, 186, 240);\n\n\t// \u58f0\u660e\u53d8\u91cf\n\tvar x = width / 2;\n\tvar y = height / 2;\n\tvar size = 200; // \u63a7\u5236\u5f62\u72b6\u7684\u5927\u5c0f\n\n\t// \u5706\u5f62\n\tfill(237, 34, 93);\n\tnoStroke();\n\tellipse(x, y, size, size);\n\n\t// \u70b9\u51fb\u9f20\u6807\u65f6\u663e\u793a\u77e9\u5f62\n\tif(mouseIsPressed === true){\n\t\tfill(255);\n\t\trect(x, y, size*0.75, size*0.15);\n\t}\n}\n"})}),"\n",(0,t.jsx)(e.p,{children:"\u5728\u753b\u5e03\u533a\u4e2d\u70b9\u51fb\u9f20\u6807\u5c31\u4f1a\u5728\u5706\u5f62\u4e2d\u663e\u793a\u77e9\u5f62\u3002\u901a\u8fc7\u4f7f\u7528p5.js\u7684mouseIsPressed\u53d8\u91cf\uff0c\u6211\u4eec\u5b9e\u73b0\u4e86\u77e9\u5f62\u6309\u9f20\u6807\u70b9\u51fb\u7684\u6761\u4ef6\u6765\u663e\u793a\u3002"}),"\n",(0,t.jsx)(e.p,{children:"\u901a\u8fc7\u9f20\u6807\u70b9\u51fb\u6765\u5207\u6362\u72b6\u6001\u53ef\u80fd\u53ef\u80fd\u662f\u4e00\u4e2a\u66f4\u73b0\u5b9e\u7684\u4f8b\u5b50\u3002\u4e0b\u9762\u6211\u4eec\u5c31\u6765\u770b\u770b\u5982\u4f55\u5904\u7406\u3002\u5047\u8bbe\u6211\u4eec\u5e0c\u671b\u6bcf\u6b21\u70b9\u51fb\u9f20\u6807\u65f6\u6539\u53d8\u80cc\u666f\u989c\u8272\u3002\u5728\u793a\u4f8b6-2\u4e2d\uff0c\u6211\u4eec\u5c06\u5728\u4e24\u79cd\u989c\u8272\u95f4\u8fdb\u884c\u5207\u6362\u3002"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"\u793a\u4f8b6-2."})," \u70b9\u51fb\u9f20\u6807\u5207\u6362\u663e\u793a"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"var toggle = true;\n\nfunction setup() {\n\tcreateCanvas(800, 300);\n\trectMode(CENTER);\n}\n\nfunction draw() {\n\t// \u6839\u636e\u9f20\u6807\u70b9\u51fb\u4fee\u6539toggle \u7684\u503c\n\tif(mouseIsPressed === true){\n\t\ttoggle = !toggle;\n\t}\n\n\t// \u6839\u636etoggle \u7684\u503c\u663e\u793a\u4e0d\u540c\u7684\u80cc\u666f\u989c\u8272\n\tif(toggle == true){\n\t\tbackground(1, 186, 240);\n\t}else{\n\t\tbackground(250, 150, 50);\n\t}\n\t\n\n\t// \u58f0\u660e\u53d8\u91cf\n\tvar x = width / 2;\n\tvar y = height / 2;\n\tvar size = 200;\n\n\t// \u5706\u5f62\n\tfill(237, 34, 93);\n\tnoStroke();\n\tellipse(x, y, size, size);\n\n\t// \u77e9\u5f62\n\tfill(255);\n\trect(x, y, size*0.75, size*0.15);\n}\n"})}),"\n",(0,t.jsx)(e.p,{children:"\u672c\u4f8b\u4e2d\uff0c\u6211\u4eec\u521b\u5efa\u4e86\u4e00\u4e2a\u540d\u4e3atoggle\u7684\u5168\u5c40\u53d8\u91cf\uff0c\u5b58\u653e\u5e03\u5c14\u503c\u3002\u7136\u540e\u6211\u4f7f\u7528\u611f\u53f9\u53f7\u6765\u5728\u70b9\u51fb\u9f20\u6807\u65f6\u5bf9\u5e03\u5c14\u503c\u53d6\u53cd\u3002\u5728\u5e03\u5c14\u503c\u524d\u52a0\u611f\u53f9\u53f7\u4f1a\u5bf9\u503c\u53d6\u53cd\uff0c\u8868\u793a\u4f1a\u5c06true\u53d8\u4e3afalse\uff0c\u53cd\u4e4b\u4ea6\u7136\u3002"}),"\n",(0,t.jsx)(e.p,{children:"\u4f60\u53ef\u80fd\u6ce8\u610f\u5230\u53d8\u91cfmouseIsPressed\u5728\u6355\u6349\u70b9\u51fb\u65f6\u8fd0\u4f5c\u7684\u5e76\u4e0d\u662f\u5f88\u597d\u3002\u8fd9\u662f\u56e0\u4e3adraw\u51fd\u6570\u5728\u4e00\u79d2\u5185\u4f1a\u88ab\u8c03\u7528\u5f88\u591a\u6b21\uff0c\u8fd9\u4f7f\u7528\u7528\u6761\u4ef6\u8bed\u53e5\u76d1\u6d4b\u9f20\u6807\u70b9\u51fb\u53d8\u5f97\u5f88\u96be\u3002\u540e\u9762\u6211\u4eec\u5b66\u4e60\u4f7f\u7528p5.js\u4e8b\u4ef6\u6765\u66f4\u597d\u7684\u76d1\u6d4b\u9f20\u6807\u70b9\u51fb\u3002"}),"\n",(0,t.jsx)(e.h2,{id:"mousex\u548cmousey",children:"mouseX\u548cmouseY"}),"\n",(0,t.jsx)(e.p,{children:"p5.js\u7684\u53d8\u91cfmouseX\u5b58\u50a8\u9f20\u6807\u5f53\u524d\u7684\u6c34\u5e73\u4f4d\u7f6e\uff0cmouseY\u5b58\u50a8\u5f53\u524d\u7684\u5782\u76f4\u4f4d\u7f6e\u3002\u8fd9\u542c\u8d77\u6765\u5f88\u7b80\u5355\uff0c\u4f46\u6709\u673a\u4f1a\u5728\u6211\u4eec\u7684\u7a0b\u5e8f\u4e2d\u542f\u7528\u5927\u91cf\u7684\u7528\u6237\u4ea4\u4e92\uff0c\u56e0\u6b64\u662f\u975e\u5e38\u6709\u7528\u7684\u53d8\u91cf\u3002\u5982\u679c\u6211\u4eec\u5c06\u5b83\u4eec\u8bbe\u7f6e\u4e3a\u5f62\u72b6\u7684x\u548cy\u5750\u6807\u503c\uff0c\u5c31\u53ef\u4ee5\u5728\u5c4f\u5e55\u4e2d\u901a\u8fc7\u79fb\u52a8\u9f20\u6807\u6765\u79fb\u52a8\u5f62\u72b6\u7684\u4f4d\u7f6e\u3002"}),"\n",(0,t.jsx)(e.p,{children:"\u6211\u4eec\u6765\u901a\u8fc7\u4ee5\u4e0a\u7a0b\u5e8f\uff08\u793a\u4f8b6-1\uff09\u7684\u7b80\u5316\u7248\u672c\u8fdb\u884c\u5c1d\u8bd5\u3002\u793a\u4f8b6-3\u548c\u56fe6-1\u663e\u793a\u4e00\u4e2a\u5c4f\u5e55\u4e2d\u95f4\u753b\u51fa\u5706\u5f62\u7684\u7248\u672c\u3002"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"\u793a\u4f8b6-3."})," \u5728\u5c4f\u5e55\u4e2d\u95f4\u753b\u51fa\u7b80\u5355\u7684\u5706\u5f62"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"function setup() {\n\tcreateCanvas(800, 300);\n}\n\nfunction draw() {\n\tbackground(1, 75, 100);\n\t\n\t// \u58f0\u660e\u53d8\u91cf\n\tvar x = width / 2;\n\tvar y = height / 2;\n\tvar size = 50;\n\n\t// \u5706\u5f62\n\tfill(237, 34, 93);\n\tnoStroke();\n\tellipse(x, y, size, size);\n}\n"})}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.a,{href:"http://alanhou.org/wp-content/uploads/2019/02/2019020208360351.jpg",children:(0,t.jsx)(e.img,{src:"https://i.taixr.com/2019020208360351.jpeg",alt:"\u56fe6-1. \u753b\u5706"})})}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"\u56fe6-1."})," \u753b\u5706"]}),"\n",(0,t.jsx)(e.p,{children:"\u6211\u4eec\u4f7f\u7528mouseX\u6765mouseY\u6765\u5728\u793a\u4f8b6-4\u4e2d\u8bbe\u7f6ex\u548cy\u503c\u3002"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"\u793a\u4f8b6-4."})," \u4f7f\u7528\u53d8\u91cfmouseX\u548cmouseY"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"function setup() {\n\tcreateCanvas(800, 300);\n}\n\nfunction draw() {\n\tbackground(1, 75, 100);\n\t\n\t// \u58f0\u660e\u53d8\u91cf\n\tvar x = mouseX;\n\tvar y = mouseY;\n\tvar size = 50;\n\n\t// \u5706\u5f62\n\tfill(237, 34, 93);\n\tnoStroke();\n\tellipse(x, y, size, size);\n}\n"})}),"\n",(0,t.jsx)(e.p,{children:"\u8bd5\u7740\u5728\u753b\u5e03\u4e0a\u79fb\u52a8\u9f20\u6807\uff0c\u662f\u4e0d\u662f\u5f88\u68d2\uff1f\u901a\u8fc7\u4e24\u4e2a\u5185\u7f6e\u53d8\u91cf\uff0c\u6211\u4eec\u5c06\u539f\u672c\u9759\u6001\u7684\u56fe\u53d8\u6210\u53ef\u4e0e\u7528\u6237\u8fdb\u884c\u4ea4\u4e92\u3002"}),"\n",(0,t.jsx)(e.p,{children:"\u4f60\u6709\u6ca1\u6709\u4f1a\u5947\u602a\u4e3a\u4ec0\u4e48\u5728draw\u51fd\u6570\u5185\u8bbe\u7f6ebackground\u51fd\u6570\uff1f\u770b\u8d77\u6765\u6211\u4eec\u53ea\u9700\u8981\u8bbe\u7f6e\u4e00\u6b21\u503c\uff0c\u6240\u4ee5\u4f60\u53ef\u80fd\u4f1a\u89c9\u5f97\u5e94\u8be5\u5728setup\u51fd\u6570\u4e2d\u8fdb\u884c\u8bbe\u7f6e\u3002"}),"\n",(0,t.jsx)(e.p,{children:"\u5c06background\u51fd\u6570\u653e\u5728draw\u51fd\u6570\u5185\u8ba9\u6211\u4eec\u53ef\u4ee5\u5c06\u4e4b\u524d\u5e27\u4e2d\u7684\u7ed8\u753b\u8986\u76d6\u4e3a\u7eaf\u8272\u3002\u5982\u4e0d\u5728\u5e27\u7684\u8d77\u59cb\u5904\u8fdb\u884c\u8be5\u58f0\u660e\uff0c\u4f60\u4f1a\u770b\u5230\u4e4b\u524d\u7684\u5e27\u4f1a\u4e00\u76f4\u4fdd\u6301\u5728\u5c4f\u5e55\u4e0a\u3002\u4f46\u5728\u67d0\u4e9b\u7528\u4f8b\u4e2d\uff0c\u6211\u4eec\u4f1a\u9700\u8981\u8fdb\u884c\u8fd9\u4e00\u8bbe\u7f6e\u3002"}),"\n",(0,t.jsx)(e.p,{children:"\u793a\u4f8b6-5\u548c\u56fe6-2\u7c7b\u4f3c\u524d\u9762\u7684\u4f8b\u5b50\uff08\u793a\u4f8b6-4\uff09\uff0c\u5706\u7684\u5c3a\u5bf8\u66f4\u5c0f\u3001\u56fe\u5f62\u989c\u8272\u900f\u660e\u5ea6\u66f4\u4f4e\uff0c\u5e76\u4e14background\u4ec5\u5728setup\u51fd\u6570\u4e2d\u58f0\u660e\u4e00\u6b21\u3002"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"\u793a\u4f8b6-5."})," \u5c4f\u5e55\u4e0a\u7ed8\u56fe\u7684\u6301\u4e45\u663e\u793a"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"function setup() {\n\tcreateCanvas(800, 300);\n\tbackground(1, 75, 100);\n}\n\nfunction draw() {\n\t// \u58f0\u660e\u53d8\u91cf\n\tvar x = mouseX;\n\tvar y = mouseY;\n\tvar size = 25;\n\n\t// \u5706\u5f62\n\tfill(237, 34, 93, 100);\n\tnoStroke();\n\tellipse(x, y, size, size);\n}\n"})}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.a,{href:"http://alanhou.org/wp-content/uploads/2019/02/2019020212290842.jpg",children:(0,t.jsx)(e.img,{src:"https://i.taixr.com/2019020212290842.jpeg",alt:"\u56fe6-2. \u4f7f\u7528\u53d8\u91cfmouseX\u548cmouseY\u5728\u5c4f\u5e55\u4e0a\u7ed8\u5236"})})}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"\u56fe6-2."})," \u4f7f\u7528\u53d8\u91cfmouseX\u548cmouseY\u5728\u5c4f\u5e55\u4e0a\u7ed8\u5236"]}),"\n",(0,t.jsx)(e.h2,{id:"\u603b\u7ed3",children:"\u603b\u7ed3"}),"\n",(0,t.jsx)(e.p,{children:"\u5728\u672c\u7ae0\u4e2d\uff0c\u6211\u4eec\u5b66\u4e60\u4e86p5.js\u4e2d\u7684\u66f4\u591a\u5185\u7f6e\u53d8\u91cf\uff0c\u5e2e\u52a9\u6211\u4eec\u521b\u5efa\u53ef\u4ea4\u4e92\u7684\u7a0b\u5e8f\uff1a\u53ef\u5bf9\u7528\u6237\u64cd\u4f5c\u8fdb\u884c\u54cd\u5e94\u7684\u7a0b\u5e8f\u3002"}),"\n",(0,t.jsx)(e.p,{children:"\u6211\u4eec\u5b66\u4e60\u4e86p5.js\u53d8\u91cfmouseIsPressed\uff0c\u5728\u9f20\u6807\u70b9\u51fb\u65f6\u503c\u4e3atrue\u3002\u6211\u4eec\u8fd8\u4e86\u89e3\u5230\u8be5\u53d8\u91cf\u4e0d\u662f\u7528\u5904\u7406\u7528\u6237\u8f93\u5165\u7684\u4e00\u4e2a\u597d\u7684\u65b9\u5f0f\u3002\u6211\u4eec\u4e4b\u540e\u6211\u4e86\u89e3p5.js\u4e2d\u4e8b\u4ef6\u7684\u6982\u5ff5\uff0c\u53ef\u66f4\u597d\u7684\u5904\u7406\u7528\u6237\u8f93\u5165\u3002"}),"\n",(0,t.jsx)(e.p,{children:"\u6211\u4eec\u8fd8\u7528\u5230\u4e86mouseX\u548cmouseY\u53d8\u91cf\uff0c\u4f7f\u7528\u5b83\u4eec\u6839\u636e\u9f20\u6807\u4f4d\u7f6e\u6765\u7ed9\u5bf9\u8c61\u6dfb\u52a0\u52a8\u753b\uff0c\u8fd9\u8ba9\u6211\u4eec\u4ee5\u66f4\u4fbf\u5229\u7684\u65b9\u5f0f\u6765\u8bbe\u7f6e\u66f4\u591a\u7684\u4ea4\u4e92\u3002"}),"\n",(0,t.jsx)(e.h2,{id:"\u7ec3\u4e60",children:"\u7ec3\u4e60"}),"\n",(0,t.jsx)(e.p,{children:"\u521b\u5efa\u4e00\u4e2a\u811a\u672c\uff0c\u5728\u9f20\u6807\u70b9\u51fb\u7684\u4f4d\u7f6e\u7ed8\u5236\u77e9\u5f62\u3002"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"\u8bd1\u8005\u8865\u5145\uff0c\u4ec5\u4f9b\u53c2\u8003\uff1a"})}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.a,{href:"http://alanhou.org/wp-content/uploads/2019/02/2019020212523521.jpg",children:(0,t.jsx)(e.img,{src:"https://i.taixr.com/2019020212523521.jpeg",alt:"\u5728\u9f20\u6807\u70b9\u51fb\u7684\u4f4d\u7f6e\u7ed8\u5236\u77e9\u5f62"})})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"function setup() {\n\tcreateCanvas(800, 300);\n\t// \u5728\u8fd9\u91cc\u8bbe\u7f6e\u80cc\u666f\u7ed8\u5236\u53ef\u6301\u4e45\u663e\u793a\n\tbackground(1, 75, 100);\n}\n\nfunction draw() {\n\t// \u58f0\u660e\u53d8\u91cf\n\tvar x = mouseX;\n\tvar y = mouseY;\n\tvar size = 50;\n\n\tif(mouseIsPressed===true){\n\t\tfill(237, 34, 93);\n\t\tnoStroke();\n\t\trect(x, y, size, size);\n\t}\t\n}\n"})})]})}function p(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(a,{...n})}):a(n)}},8453:(n,e,s)=>{s.d(e,{R:()=>o,x:()=>c});var t=s(6540);const r={},i=t.createContext(r);function o(n){const e=t.useContext(i);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:o(n.components),t.createElement(i.Provider,{value:e},n.children)}}}]);