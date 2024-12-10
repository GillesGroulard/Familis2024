import{r,u as F,j as e,U as g,M as E,L as q,T as b,a as A,b as L}from"./index-10ZAl_Du.js";const J=({onSuccess:h})=>{const[p,x]=r.useState(!1),[l,t]=r.useState(null),[y,j]=r.useState("details"),[o,N]=r.useState(""),[n,v]=r.useState(""),[i,w]=r.useState(""),[a,c]=r.useState(null),[m,C]=r.useState(""),[d,k]=r.useState(""),{signUp:S}=F(),f=async s=>{if(s.preventDefault(),t(null),y==="details"){if(!o||!n||!i){t("Please fill in all fields");return}j("family");return}x(!0);try{await S({email:o,password:n,name:i,familyAction:a,familyName:a==="create"?m:void 0,joinCode:a==="join"?d:void 0}),h()}catch(u){console.error("Signup error:",u),t(u instanceof Error?u.message:"An error occurred")}finally{x(!1)}};return y==="details"?e.jsxs("form",{onSubmit:f,className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"Full Name"}),e.jsxs("div",{className:"mt-1 relative",children:[e.jsx("input",{type:"text",value:i,onChange:s=>w(s.target.value),className:"appearance-none block w-full px-3 py-2 pl-10 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500",required:!0}),e.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center",children:e.jsx(g,{className:"h-5 w-5 text-gray-400"})})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"Email address"}),e.jsxs("div",{className:"mt-1 relative",children:[e.jsx("input",{type:"email",value:o,onChange:s=>N(s.target.value),className:"appearance-none block w-full px-3 py-2 pl-10 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500",required:!0}),e.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center",children:e.jsx(E,{className:"h-5 w-5 text-gray-400"})})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"Password"}),e.jsxs("div",{className:"mt-1 relative",children:[e.jsx("input",{type:"password",value:n,onChange:s=>v(s.target.value),className:"appearance-none block w-full px-3 py-2 pl-10 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500",required:!0,minLength:6}),e.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center",children:e.jsx(q,{className:"h-5 w-5 text-gray-400"})})]})]}),l&&e.jsx(b,{message:l,type:"error",onClose:()=>t(null)}),e.jsx("button",{type:"submit",className:"w-full flex justify-center items-center gap-2 py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-500 hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500",children:"Continue"})]}):e.jsxs("form",{onSubmit:f,className:"space-y-6",children:[a?a==="create"?e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"Family Name"}),e.jsx("input",{type:"text",value:m,onChange:s=>C(s.target.value),className:"mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500",required:!0})]}):e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"Family Join Code"}),e.jsx("input",{type:"text",value:d,onChange:s=>k(s.target.value.toUpperCase()),className:"mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500",required:!0})]}):e.jsxs("div",{className:"space-y-4",children:[e.jsxs("button",{type:"button",onClick:()=>c("create"),className:"w-full flex items-center justify-center gap-3 p-4 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors",children:[e.jsx(A,{className:"w-5 h-5"}),e.jsx("span",{className:"font-medium",children:"Create a New Family"})]}),e.jsxs("button",{type:"button",onClick:()=>c("join"),className:"w-full flex items-center justify-center gap-3 p-4 bg-white text-primary-500 border-2 border-primary-500 rounded-lg hover:bg-primary-50 transition-colors",children:[e.jsx(g,{className:"w-5 h-5"}),e.jsx("span",{className:"font-medium",children:"Join Existing Family"})]})]}),l&&e.jsx(b,{message:l,type:"error",onClose:()=>t(null)}),e.jsxs("div",{className:"flex gap-3",children:[e.jsx("button",{type:"button",onClick:()=>c(null),className:"flex-1 py-3 px-4 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors",children:"Back"}),e.jsx("button",{type:"submit",disabled:p||!a||a==="create"&&!m||a==="join"&&!d,className:"flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-primary-500 text-white rounded-lg font-medium hover:bg-primary-600 focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",children:p?e.jsxs(e.Fragment,{children:[e.jsx(L,{className:"w-5 h-5 animate-spin"}),"Creating..."]}):"Create Account"})]})]})};export{J as default};
//# sourceMappingURL=SignupForm-B5__wFG2.js.map
