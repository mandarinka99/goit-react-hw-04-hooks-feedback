(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],[,function(t,e,s){t.exports={statisticsWrapper:"Statistics_statisticsWrapper__oI7nw",statisticsItem:"Statistics_statisticsItem__Eh6dl"}},,,,,function(t,e,s){t.exports={feedbackWrapper:"FedbackOptions_feedbackWrapper__M5XkB",button:"FedbackOptions_button__2d86r"}},,function(t,e,s){t.exports={container:"Container_container__2nGXs"}},,function(t,e,s){t.exports={notoficationTitle:"Notifications_notoficationTitle__3cW5n"}},function(t,e,s){t.exports={sectionTitle:"Section_sectionTitle__2EknM"}},,,,,,,,,function(t,e,s){},function(t,e,s){"use strict";s.r(e);var c=s(2),n=s(7),a=s.n(n),i=s(3),o=s(5),r=s(12),d=s(8),b=s.n(d),l=s(0),j=function(t){var e=t.children;return Object(l.jsx)("div",{className:b.a.container,children:e})},u=s(23),p=s(6),f=s.n(p),O=function(t){var e=t.onLeaveFeedback,s=t.options;return Object(l.jsx)("div",{className:f.a.feedbackWrapper,children:s.map((function(t){return Object(l.jsx)("button",{type:"button",onClick:function(){return e(t)},className:f.a.button,children:"".concat(t)},Object(u.a)())}))})},h=s(9),m=s.n(h),v=s(10),x=s.n(v);Notification.propTypes={message:m.a.string};var _=function(t){var e=t.message;return Object(l.jsx)("p",{className:x.a.notoficationTitle,children:e})},k=s(11),g=s.n(k),N=function(t){var e=t.title,s=t.children;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h2",{className:g.a.sectionTitle,children:e}),s]})},I=s(1),T=s.n(I),W=function(t){var e=t.good,s=t.neutral,c=t.bad,n=t.total,a=t.positivePercentage;return Object(l.jsxs)("div",{className:T.a.statisticsWrapper,children:[Object(l.jsxs)("div",{className:T.a.statisticsItem,children:["Good: ",e]}),Object(l.jsxs)("div",{className:T.a.statisticsItem,children:["Neutral: ",s]}),Object(l.jsxs)("div",{className:T.a.statisticsItem,children:["Bad: ",c]}),Object(l.jsxs)("div",{className:T.a.statisticsItem,children:["Total: ",n]}),Object(l.jsxs)("div",{className:T.a.statisticsItem,children:["Positive feedback: ",a,"%"]})]})},w={good:0,neutral:0,bad:0},F=function(){var t=Object(c.useState)(w),e=Object(r.a)(t,2),s=e[0],n=e[1],a=function(){return Object.values(s).reduce((function(t,e){return t+e}),0)},d=Object.keys(s);return Object(l.jsxs)(j,{children:[Object(l.jsx)(N,{title:"Please leave feedback"}),Object(l.jsx)(O,{options:d,onLeaveFeedback:function(t){n(Object(o.a)(Object(o.a)({},s),{},Object(i.a)({},t,s[t]+1)))}}),Object(l.jsx)(N,{title:"Statistics",children:a()?Object(l.jsx)(W,{good:s.good,neutral:s.neutral,bad:s.bad,total:a(),positivePercentage:a()>0?Math.round(s.good/a()*100):0}):Object(l.jsx)(_,{message:"No feedback given"})})]})};s(20);a.a.render(Object(l.jsx)(F,{}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.bbc0f287.chunk.js.map