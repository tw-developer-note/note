"use strict";(self.webpackChunkmy_note=self.webpackChunkmy_note||[]).push([[13],{8665:function(e,t,a){a.d(t,{Z:function(){return p}});var r=a(3366),n=a(7294),l=a(6010),c=a(4814),s=a(9960),i="sidebar_q+wC",m="sidebarItemTitle_9G5K",o="sidebarItemList_6T4b",u="sidebarItem_cjdF",g="sidebarItemLink_zyXk",d="sidebarItemLinkActive_wcJs",b=a(5999);function v(e){var t=e.sidebar;return 0===t.items.length?null:n.createElement("nav",{className:(0,l.Z)(i,"thin-scrollbar"),"aria-label":(0,b.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},n.createElement("div",{className:(0,l.Z)(m,"margin-bottom--md")},t.title),n.createElement("ul",{className:o},t.items.map((function(e){return n.createElement("li",{key:e.permalink,className:u},n.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:g,activeClassName:d},e.title))}))))}var E=["sidebar","toc","children"];var p=function(e){var t=e.sidebar,a=e.toc,s=e.children,i=(0,r.Z)(e,E),m=t&&t.items.length>0;return n.createElement(c.Z,i,n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},m&&n.createElement("aside",{className:"col col--3"},n.createElement(v,{sidebar:t})),n.createElement("main",{className:(0,l.Z)("col",{"col--7":m,"col--9 col--offset-1":!m}),itemScope:!0,itemType:"http://schema.org/Blog"},s),a&&n.createElement("div",{className:"col col--2"},a))))}},497:function(e,t,a){a.r(t),a.d(t,{default:function(){return o}});var r=a(7294),n=a(8665),l=a(7774),c=a(2822),s="tag_7kA+";function i(e){var t=e.letterEntry;return r.createElement("article",null,r.createElement("h2",null,t.letter),r.createElement("ul",{className:"padding--none"},t.tags.map((function(e){return r.createElement("li",{key:e.permalink,className:s},r.createElement(l.Z,e))}))),r.createElement("hr",null))}var m=function(e){var t=e.tags,a=(0,c.PZ)(t);return r.createElement("section",{className:"margin-vert--lg"},a.map((function(e){return r.createElement(i,{key:e.letter,letterEntry:e})})))};var o=function(e){var t=e.tags,a=e.sidebar,l=(0,c.MA)();return r.createElement(n.Z,{title:l,wrapperClassName:c.kM.wrapper.blogPages,pageClassName:c.kM.page.blogTagsListPage,searchMetadatas:{tag:"blog_tags_list"},sidebar:a},r.createElement("h1",null,l),r.createElement(m,{tags:Object.values(t)}))}},7774:function(e,t,a){a.d(t,{Z:function(){return m}});var r=a(7294),n=a(6010),l=a(9960),c="tag_WK-t",s="tagRegular_LXbV",i="tagWithCount_S5Zl";var m=function(e){var t,a=e.permalink,m=e.name,o=e.count;return r.createElement(l.Z,{href:a,className:(0,n.Z)(c,(t={},t[s]=!o,t[i]=o,t))},m,o&&r.createElement("span",null,o))}}}]);