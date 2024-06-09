"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[5192],{6456:e=>{e.exports=JSON.parse('{"version":{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"category","label":"Generative AI","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"\u7b2c\u4e00\u7ae0 \u591a\u5a92\u4f53\u751f\u6210\u5165\u95e8","href":"/en/docs/generative-ai/intro","docId":"generative-ai/intro","unlisted":false},{"type":"link","label":"\u7b2c\u4e8c\u7ae0 Transformers","href":"/en/docs/generative-ai/transformers","docId":"generative-ai/transformers","unlisted":false},{"type":"link","label":"\u7b2c\u4e09\u7ae0 \u6269\u6563\u6a21\u578b","href":"/en/docs/generative-ai/diffusion-models","docId":"generative-ai/diffusion-models","unlisted":false}],"href":"/en/docs/category/generative-ai"},{"type":"category","label":"Learn JavaScript with p5.js","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"\u7b2c\u4e00\u7ae0 \u5bfc\u5b66","href":"/en/docs/p5-js/intro","docId":"p5-js/intro","unlisted":false},{"type":"link","label":"\u7b2c\u4e8c\u7ae0 \u51c6\u5907\u5de5\u4f5c","href":"/en/docs/p5-js/getting-started","docId":"p5-js/getting-started","unlisted":false},{"type":"link","label":"\u7b2c\u4e09\u7ae0\xa0p5.js\u4e2d\u7684\u989c\u8272","href":"/en/docs/p5-js/colors","docId":"p5-js/colors","unlisted":false},{"type":"link","label":"\u7b2c\u56db\u7ae0 \u64cd\u4f5c\u7b26\u548c\u53d8\u91cf","href":"/en/docs/p5-js/operators-variables","docId":"p5-js/operators-variables","unlisted":false},{"type":"link","label":"\u7b2c\u4e94\u7ae0 \u6761\u4ef6\u8bed\u53e5\u548c\u6bd4\u8f83\u8fd0\u7b97\u7b26","href":"/en/docs/p5-js/conditional-statements","docId":"p5-js/conditional-statements","unlisted":false},{"type":"link","label":"\u7b2c\u516d\u7ae0\xa0p5.js\u4e2d\u7684\u66f4\u591a\u53d8\u91cf","href":"/en/docs/p5-js/more-variables","docId":"p5-js/more-variables","unlisted":false},{"type":"link","label":"\u7b2c\u4e03\u7ae0 \u5faa\u73af","href":"/en/docs/p5-js/loops","docId":"p5-js/loops","unlisted":false},{"type":"link","label":"\u7b2c\u516b\u7ae0 \u51fd\u6570","href":"/en/docs/p5-js/functions","docId":"p5-js/functions","unlisted":false},{"type":"link","label":"\u7b2c\u4e5d\u7ae0 \u5bf9\u8c61","href":"/en/docs/p5-js/objects","docId":"p5-js/objects","unlisted":false},{"type":"link","label":"\u7b2c\u5341\u7ae0 \u6570\u7ec4","href":"/en/docs/p5-js/arrays","docId":"p5-js/arrays","unlisted":false},{"type":"link","label":"\u7b2c\u5341\u4e00\u7ae0 \u4e8b\u4ef6","href":"/en/docs/p5-js/events","docId":"p5-js/events","unlisted":false},{"type":"link","label":"\u7b2c\u5341\u4e8c\u7ae0\xa0p5.js\u6269\u5c55\u77e5\u8bc6","href":"/en/docs/p5-js/more","docId":"p5-js/more","unlisted":false},{"type":"link","label":"\u7b2c\u5341\u4e09\u7ae0 \u6700\u7ec8\u9879\u76ee","href":"/en/docs/p5-js/final-project","docId":"p5-js/final-project","unlisted":false},{"type":"link","label":"\u5199\u5728\u6700\u540e","href":"/en/docs/p5-js/final-words","docId":"p5-js/final-words","unlisted":false}],"href":"/en/docs/category/learn-javascript-with-p5js"},{"type":"category","label":"Python Scripting","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"\u7b2c\u4e00\u7ae0 Python\u811a\u672c\u6982\u8ff0","href":"/en/docs/python-scripting/overview","docId":"python-scripting/overview","unlisted":false}],"href":"/en/docs/category/python-scripting"}]},"docs":{"generative-ai/diffusion-models":{"id":"generative-ai/diffusion-models","title":"\u7b2c\u4e09\u7ae0 \u6269\u6563\u6a21\u578b","description":"\u56fe\u50cf\u751f\u6210\u9886\u57df\u57282014\u5e74\u56e0Ian Goodfellow\u5f15\u5165\u751f\u6210\u5bf9\u6297\u7f51\u7edc\uff08GAN\uff09\u800c\u5e7f\u6cdb\u6d41\u884c\u3002GAN\u7684\u5173\u952e\u7406\u5ff5\u50ac\u751f\u4e86\u4e00\u5927\u6279\u80fd\u591f\u5feb\u901f\u751f\u6210\u9ad8\u8d28\u91cf\u56fe\u50cf\u7684\u6a21\u578b\u3002\u7136\u800c\uff0c\u5c3d\u7ba1GAN\u53d6\u5f97\u4e86\u6210\u529f\uff0c\u5b83\u4e5f\u9762\u4e34\u7740\u6311\u6218\uff0c\u9700\u8981\u5927\u91cf\u53c2\u6570\u5e76\u4e14\u96be\u4ee5\u6709\u6548\u6cdb\u5316\u3002\u8fd9\u4e9b\u9650\u5236\u5f15\u53d1\u4e86\u5176\u5b83\u7684\u7814\u7a76\u5c1d\u8bd5\uff0c\u5e26\u6765\u4e86\u5bf9\u6269\u6563\u6a21\u578b\u7684\u63a2\u7d22\u2014\u2014\u8fd9\u662f\u4e00\u7c7b\u91cd\u65b0\u5b9a\u4e49\u9ad8\u8d28\u91cf\u3001\u7075\u6d3b\u56fe\u50cf\u751f\u6210\u7684\u6a21\u578b\u3002","sidebar":"tutorialSidebar"},"generative-ai/intro":{"id":"generative-ai/intro","title":"\u7b2c\u4e00\u7ae0 \u591a\u5a92\u4f53\u751f\u6210\u5165\u95e8","description":"\u751f\u6210\u5f0f\u6a21\u578b\u5728\u8fd1\u5e74\u6765\u5e7f\u6cdb\u6d41\u884c\u3002\u5728\u9605\u8bfb\u672c\u6587\u65f6\uff0c\u8bfb\u8005\u5f88\u53ef\u80fd\u5df2\u7ecf\u5728\u4e0e\u751f\u6210\u6a21\u578b\u8fdb\u884c\u8fc7\u4e92\u52a8\u3002\u6216\u8bb8\u662f\u4f7f\u7528ChatGPT\u751f\u6210\u6587\u672c\uff0c\u6216\u8bb8\u662f\u5728Instagram\u7b49\u5e94\u7528\u4e2d\u4f7f\u7528\u98ce\u683c\u8f6c\u6362\uff0c\u4ea6\u6216\u662f\u770b\u8fc7\u90a3\u4e9b\u5f15\u53d1\u70ed\u8bae\u7684\u6df1\u5ea6\u4f2a\u9020\u89c6\u9891\u3002\u8fd9\u4e9b\u90fd\u662f\u751f\u6210\u5f0f\u6a21\u578b\u7684\u5b9e\u9645\u5e94\u7528\uff01","sidebar":"tutorialSidebar"},"generative-ai/transformers":{"id":"generative-ai/transformers","title":"\u7b2c\u4e8c\u7ae0 Transformers","description":"\u5f88\u591a\u4eba\u5c06\u6700\u8fd1\u4e00\u6ce2\u751f\u6210\u5f0f\u4eba\u5de5\u667a\u80fd\u7684\u8fdb\u5c55\u8ffd\u6eaf\u52302017\u5e74\u53d1\u5e03\u79f0\u4e3atransformer\u7684\u6a21\u578b\u3002\u5176\u6700\u8457\u540d\u7684\u5e94\u7528\u662f\u5f3a\u5927\u7684\u5927\u8bed\u8a00\u6a21\u578b\uff08LLM\uff09\uff0c\u5982Llama\u548cGPT-4\uff0c\u6bcf\u5929\u6709\u6570\u4ebf\u4eba\u4f7f\u7528\u3002transformer\u5df2\u6210\u4e3a\u73b0\u4ee3\u4eba\u5de5\u667a\u80fd\u5e94\u7528\u7684\u6838\u5fc3\uff0c\u63a8\u52a8\u7740\u804a\u5929\u673a\u5668\u4eba\u3001\u641c\u7d22\u7cfb\u7edf\u4e43\u81f3\u673a\u5668\u7ffb\u8bd1\u548c\u5185\u5bb9\u6458\u8981\u7b49\u5404\u7c7b\u5e94\u7528\u3002\u751a\u81f3\u5df2\u8d85\u8d8a\u4e86\u6587\u672c\u9886\u57df\uff0c\u5728\u8ba1\u7b97\u673a\u89c6\u89c9\u3001\u97f3\u4e50\u751f\u6210\u548c\u86cb\u767d\u8d28\u6298\u53e0\u7b49\u9886\u57df\u5f15\u8d77\u4e86\u5de8\u5927\u53cd\u54cd\u3002\u672c\u7ae0\u4e2d\uff0c\u6211\u4eec\u5c06\u63a2\u8ba8transformer\u80cc\u540e\u7684\u6838\u5fc3\u6982\u5ff5\u53ca\u5176\u5de5\u4f5c\u539f\u7406\uff0c\u91cd\u70b9\u4ecb\u7ecd\u5176\u4e2d\u4e00\u4e2a\u6700\u5e38\u89c1\u7684\u5e94\u7528\uff1a\u8bed\u8a00\u6a21\u578b\u3002","sidebar":"tutorialSidebar"},"p5-js/arrays":{"id":"p5-js/arrays","title":"\u7b2c\u5341\u7ae0 \u6570\u7ec4","description":"\u6570\u7ec4\u662fJavaScript\u4e2d\u53e6\u4e00\u79cd\u6709\u7528\u7684\u6570\u636e\u7ed3\u6784\u3002\u5b83\u4eec\u662f\u5e26\u5e8f\u53f7\u7d22\u5f15\u5b58\u50a8\u6570\u636e\u7684\u5e8f\u5217\u96c6\u5408\uff0c\u5e76\u57fa\u672c\u5bf9\u8c61\uff0c\u8ba9\u67d0\u4e9b\u8fd0\u7b97\u66f4\u6613\u4e8e\u6267\u884c\u3002","sidebar":"tutorialSidebar"},"p5-js/colors":{"id":"p5-js/colors","title":"\u7b2c\u4e09\u7ae0\xa0p5.js\u4e2d\u7684\u989c\u8272","description":"\u65e2\u7136\u5df2\u7ecf\u53ef\u4ee5\u4f7f\u7528p5.js\u7ed8\u5236\u5404\u79cd\u56fe\u5f62\u4e86\uff0c\u5c31\u8ba9\u6211\u4eec\u6765\u5b66\u4e60\u5982\u4f55\u8fdb\u884c\u989c\u8272\u7684\u63a7\u5236\u5427\u3002\u6211\u4eec\u5df2\u7ecf\u5728background\u51fd\u6570\u4e2d\u4f20\u5165220, 220, 220\u6765\u8bbe\u7f6e\u80cc\u666f\u94af\u4e3a\u6d45\u7070\u8272\u4e86\u3002","sidebar":"tutorialSidebar"},"p5-js/conditional-statements":{"id":"p5-js/conditional-statements","title":"\u7b2c\u4e94\u7ae0 \u6761\u4ef6\u8bed\u53e5\u548c\u6bd4\u8f83\u8fd0\u7b97\u7b26","description":"\u5728\u4e0a\u4e00\u7ae0\u4e2d\uff0c\u6211\u4eec\u4e86\u89e3\u4e86p5.js\u4e2d\u53ef\u4ee5\u4f7f\u7528\u7684\u4e00\u4e9b\u53d8\u91cf\u3002\u9700\u8981\u6ce8\u610f\u7684\u662f\u8fd9\u4e9b\u53d8\u91cf\u4ec5\u80fd\u5728p5.js\u4e2d\u7684setup\u548cdraw\u51fd\u6570\u5185\u4f7f\u7528\u3002\u5982\u679c\u5728\u8fd9\u4e24\u4e2a\u51fd\u6570\u5916\u4f7f\u7528\uff0c\u6211\u4eec\u4f1a\u83b7\u5f97\u62a5\u9519\u8bf4\u53d8\u91cf\u672a\u58f0\u660e\u3002","sidebar":"tutorialSidebar"},"p5-js/events":{"id":"p5-js/events","title":"\u7b2c\u5341\u4e00\u7ae0 \u4e8b\u4ef6","description":"\u5728\u7b2c\u516d\u7ae0\u4e2d\uff0c\u6211\u4eec\u5b66\u4e60\u4e86\u540d\u4e3amouseIsPressed\u7684p5.js\u53d8\u91cf\uff0c\u5b83\u5728\u6309\u4e0b\u9f20\u6807\u65f6\u503c\u4e3atrue\u800c\u5176\u5b83\u60c5\u51b5\u4e0b\u503c\u4e3afalse\u3002","sidebar":"tutorialSidebar"},"p5-js/final-project":{"id":"p5-js/final-project","title":"\u7b2c\u5341\u4e09\u7ae0 \u6700\u7ec8\u9879\u76ee","description":"\u672c\u7ae0\u4e2d\uff0c\u6211\u4eec\u5c06\u4f7f\u7528\u5728\u5168\u4e66\u4e2d\u6240\u5b66\u4e60\u7684\u77e5\u8bc6\u6765\u521b\u5efa\u4e00\u4e2a\u6e38\u620f\u3002\u540c\u65f6\u6211\u4eec\u8fd8\u53ef\u4ee5\u5b66\u4e60\u4e00\u4e9b\u6280\u5de7\u3002\u4f7f\u7528p5.js\u5e93\u6765\u521b\u5efa\u4e00\u4e2a\u7b80\u5355\u6e38\u620f\u975e\u5e38\u60ca\u8273\u5e76\u4e14\u8868\u660e\u4e86\u8fd9\u4e2a JS \u5e93\u7684\u5f3a\u5927\u3002","sidebar":"tutorialSidebar"},"p5-js/final-words":{"id":"p5-js/final-words","title":"\u5199\u5728\u6700\u540e","description":"\u5b8c\u6210\u672c\u4e66\u540e\uff0c\u6211\u4eec\u5e94\u8be5\u719f\u6089\u4e86JavaScript\u548c\u7f16\u7a0b\u7684\u57fa\u7840\u77e5\u8bc6\uff0c\u56e0\u4e3a\u6211\u4eec\u5b66\u4e60\u7684\u6982\u5ff5\u5728\u4e0d\u540c\u7684\u7f16\u7a0b\u8bed\u8a00\u4e2d\u90fd\u9002\u7528\u3002","sidebar":"tutorialSidebar"},"p5-js/functions":{"id":"p5-js/functions","title":"\u7b2c\u516b\u7ae0 \u51fd\u6570","description":"\u51fd\u6570\u662fJavaScript\u7684\u4e3b\u8981\u7ec4\u6210\u90e8\u5206\u3002\u901a\u8fc7\u51fd\u6570\u6211\u4eec\u53ef\u4ee5\u66f4\u6709\u6548\u5730\u7f16\u5199\u7a0b\u5e8f\uff0c\u4e5f\u66f4\u5229\u4e8e\u6269\u5c55\u3002\u51fd\u6570\u901a\u8fc7\u4e00\u4e2a\u6267\u884c\u540d\u79f0\u5305\u542b\u548c\u5bf9\u8fd0\u7b97\u5206\u7ec4\u6765\u5e2e\u52a9\u6211\u4eec\u7ba1\u7406\u590d\u6742\u7684\u4ee3\u7801\u3002\u6211\u4eec\u5df2\u7ecf\u901a\u8fc7p5.js\u4e2d\u5185\u7f6e\u7684\u51fd\u6570ellipse\u6216background\u4e86\u89e3\u4e86\u5982\u4f55\u8c03\u7528\u51fd\u6570\u3002\u6211\u4eec\u751a\u81f3\u8fd8\u58f0\u660e\u4e86\u81ea\u5df1\u7684\u51fd\u6570\uff0c\u56e0\u4e3ap5.js\u5f3a\u5236\u6211\u4eec\u5c06\u4ee3\u7801\u653e\u5728\u4e24\u4e2a\u51fd\u6570\u58f0\u660e\u4e2d\uff1asetup\u548cdraw\u3002\u5982\u679c\u6211\u4eec\u60f3\u8981\u521b\u5efa\u81ea\u5df1\u7684\u51fd\u6570\uff0c\u9075\u5faa\u4e0e\u8fd9\u4e9b\u51fd\u6570\u76f8\u540c\u7684\u89c4\u5219\u521b\u5efa\u6216\u58f0\u660e\u5373\u53ef\u3002","sidebar":"tutorialSidebar"},"p5-js/getting-started":{"id":"p5-js/getting-started","title":"\u7b2c\u4e8c\u7ae0 \u51c6\u5907\u5de5\u4f5c","description":"\u5b89\u88c5p5.js","sidebar":"tutorialSidebar"},"p5-js/intro":{"id":"p5-js/intro","title":"\u7b2c\u4e00\u7ae0 \u5bfc\u5b66","description":"\u5728\u6211\u4eec\u751f\u6d3b\u7684\u8fd9\u4e2a\u65f6\u4ee3\uff0c\u7f16\u7a0b\u662f\u65e0\u4ef7\u4e4b\u5b9d\u3002\u5b83\u5177\u6709\u63d0\u5347\u5c31\u4e1a\u3001\u672a\u6765\u53d1\u5c55\u751a\u81f3\u662f\u4f60\u7684\u667a\u529b\u7684\u8d85\u80fd\u529b\u3002\u8ba1\u7b97\u673a\u6b63\u5728\u9a71\u52a8\u4eba\u7c7b\u5386\u53f2\u6700\u5927\u7684\u8d44\u672c\u6269\u5f20\u4e4b\u4e00\uff0c\u6ca1\u6709\u6bd4\u73b0\u5728\u5b66\u4e60\u7f16\u7a0b\u7684\u66f4\u597d\u65f6\u673a\u4e86\u3002","sidebar":"tutorialSidebar"},"p5-js/loops":{"id":"p5-js/loops","title":"\u7b2c\u4e03\u7ae0 \u5faa\u73af","description":"\u91cd\u590d\u662f\u8ba1\u7b97\u673a\u6240\u64c5\u957f\u7684\u4e8b\u60c5\u4e4b\u4e00\u3002\u60f3\u8c61\u4e00\u4e0b\u4f7f\u7528\u4e0d\u540c\u7684\u53c2\u6570\u5728\u5c4f\u5e55\u4e0a\u753b\u4e00\u5343\u4e2a\u56fe\u5f62\u3002\u4ee5\u5f53\u524d\u7684\u7f16\u7a0b\u77e5\u8bc6\u8fd9\u5c06\u8017\u8d39\u6211\u4eec\u5927\u91cf\u7684\u65f6\u95f4\u3002\u5bf9\u4e8e\u8fd9\u79cd\u4ee5\u76f8\u540c\u6216\u5e26\u6709\u53d8\u52a8\u7684\u65b9\u5f0f\u91cd\u590d\u4ee3\u7801\u7684\u60c5\u51b5\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u79f0\u4e4b\u4e3a\u5faa\u73af\u7684\u7f16\u7a0b\u7ed3\u6784\u3002\u5faa\u73af\u8ba9\u6211\u4eec\u53ef\u4ee5\u5bf9\u4e00\u4e2a\u4ee3\u7801\u5757\u53cd\u590d\u7684\u6267\u884c\u3002","sidebar":"tutorialSidebar"},"p5-js/more":{"id":"p5-js/more","title":"\u7b2c\u5341\u4e8c\u7ae0\xa0p5.js\u6269\u5c55\u77e5\u8bc6","description":"\u5b66\u5230\u8fd9\u91cc\uff0c\u6211\u4eec\u57fa\u672c\u4e0a\u505a\u597d\u4e86\u6700\u7ec8\u9879\u76ee\u7684\u51c6\u5907\u5de5\u4f5c\uff0c\u8fd9\u662f\u4e00\u4e2a\u4f7f\u7528JavaScript\u548cp5.js\u521b\u5efa\u7684\u4ea4\u4e92\u6e38\u620f\u3002\u5728\u4e0b\u4e00\u7ae0\u4e2d\u8fdb\u884c\u8bb2\u89e3\u3002\u5728\u90a3\u4e4b\u524d\uff0c\u6211\u60f3\u8981\u6f14\u793ap5.js\u4e2d\u7684\u4e00\u4e9b\u5176\u5b83\u6709\u7528\u7684\u51fd\u6570\u6765\u6269\u5c55\u6211\u4eec\u6240\u80fd\u521b\u5efa\u7a0b\u5e8f\u7684\u9886\u57df\u3002","sidebar":"tutorialSidebar"},"p5-js/more-variables":{"id":"p5-js/more-variables","title":"\u7b2c\u516d\u7ae0\xa0p5.js\u4e2d\u7684\u66f4\u591a\u53d8\u91cf","description":"\u5728\u4e0a\u4e00\u7ae0\u4e2d\uff0c\u6211\u4eec\u5b66\u4e60\u4e86p5.js\u4e2d\u7684frameCount\u53d8\u91cf\uff0c\u7528\u4e8e\u8868\u793adraw\u51fd\u6570\u8c03\u7528\u7684\u6b21\u6570\u3002p5.js\u4e2d\u6709\u5f88\u591a\u975e\u5e38\u6709\u7528\u7684\u53d8\u91cf\uff0c\u672c\u7ae0\u4e2d\u5c06\u7ee7\u7eed\u5b66\u4e60\u4e00\u4e9b\u5176\u5b83\u7684\u53d8\u91cf\u3002","sidebar":"tutorialSidebar"},"p5-js/objects":{"id":"p5-js/objects","title":"\u7b2c\u4e5d\u7ae0 \u5bf9\u8c61","description":"JavaScript\u4e2d\u5305\u542b\u540d\u4e3a\u5bf9\u8c61\u7684\u6570\u636e\u7ed3\u6784\u3002\u5bf9\u8c61\u6709\u52a9\u4e8e\u7ec4\u7ec7\u4ee3\u7801\u5e76\u8ba9\u5176\u6709\u67d0\u4e9b\u60c5\u51b5\u4e0b\u6613\u4e8e\u4f7f\u7528\u3002\u6709\u4e24\u79cd\u521b\u5efa\u5bf9\u8c61\u7684\u65b9\u5f0f\uff1a\u901a\u8fc7\u5bf9\u8c61\u521d\u59cb\u5316\u7a0b\u5e8f\u6216\u6784\u9020\u51fd\u6570\u3002\u672c\u7ae0\u4e2d\u6211\u4eec\u4f7f\u7528\u5bf9\u8c61\u521d\u59cb\u5316\u7a0b\u5e8f\u6765\u521b\u5efa\u4e00\u4e2a\u5bf9\u8c61\uff0c\u800c\u6784\u9020\u51fd\u6570\u50cf\u4e00\u4e2a\u84dd\u672c\uff0c\u53ef\u4ee5\u4f7f\u7528new\u5173\u952e\u8bcd\u6765\u521b\u5efa\u5f88\u591a\u4e2a\u5bf9\u8c61\u5b9e\u4f8b\u3002","sidebar":"tutorialSidebar"},"p5-js/operators-variables":{"id":"p5-js/operators-variables","title":"\u7b2c\u56db\u7ae0 \u64cd\u4f5c\u7b26\u548c\u53d8\u91cf","description":"\u5728\u7b2c\u4e00\u7ae0\u548c\u7b2c\u4e8c\u7ae0\u6211\u4eec\u5b66\u4e60\u4e86 JavaScript \u4e2d\u53ef\u4ee5\u4f7f\u7528\u7684\u53d8\u91cf\u548c\u6570\u5b66\u8fd0\u7b97\u3002\u672c\u7ae0\u4e2d\uff0c\u6211\u4eec\u5c06\u8fd0\u7528\u6240\u5b66\u7684\u77e5\u8bc6\u3002","sidebar":"tutorialSidebar"},"python-scripting/overview":{"id":"python-scripting/overview","title":"\u7b2c\u4e00\u7ae0 Python\u811a\u672c\u6982\u8ff0","description":"\u5728\u5b66\u4e60\u672c\u4e66\u524d\uff0c\u4f60\u5e94\u8be5\u4e86\u89e3\u4e00\u4e9b Python \u7f16\u7a0b\u7684\u57fa\u7840\u77e5\u8bc6\uff0c\u6bd4\u5982\u57fa\u7840\u8bed\u6cd5\u3001\u53d8\u91cf\u7c7b\u578b\u3001\u5143\u7ec4\u6570\u636e\u7c7b\u578b\u3001\u5217\u8868\u5b57\u5178\u3001\u51fd\u6570\u3001\u5b57\u7b26\u4e32\u548c\u65b9\u6cd5\u3002\u5728python.org/downloads/\u4e0a\u67093.7.2\u548c2.7.15\u4e24\u4e2a\u7248\u672c\u53ef\u4f9b\u4e0b\u8f7d\u3002\u672c\u4e66\u4e2d\u6211\u4eec\u5c06\u4f7f\u75283.7\u8fd9\u4e00\u7248\u672c\u6765\u4f5c\u4e3a\u4ee3\u8868\u793a\u4f8b\u548c\u5305\u7684\u5b89\u88c5\u3002","sidebar":"tutorialSidebar"}}}}')}}]);