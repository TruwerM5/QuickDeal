import{_ as x,u as C,r as c,o as l,c as r,a,t as d,b as u,F as T,d as g,e as k,w as h,f as w,v as V}from"./index-f6765fe1.js";const M={class:"tasks"},$={class:"tasks__title"},B={class:"tasks__inner"},S={key:0,class:"tasks__list"},D={class:"task__text"},E=["onClick"],F=["onClick"],I={key:0,class:"error"},N={key:2},K={__name:"TasksView",setup(L){const e=C(),o=c(""),v=c(null),n=c(e.currentKey||0),i=c("add");function f(){return e.addItem(n.value,o.value),n.value++,o.value="",!0}function m(_,t){v.value.focus(),i.value="edit",o.value=_,n.value=t}function p(_,t){e.editTask(_,t),o.value="";do n.value++;while(n.value===e.tasks[n.value].key)}return(_,t)=>(l(),r("div",M,[a("h1",$,"Список задач ("+d(u(e).getCount)+")",1),a("div",B,[u(e).getCount>0?(l(),r("ul",S,[(l(!0),r(T,null,g(u(e).tasks,(s,b)=>(l(),r("li",{key:b,class:"task flex items-center"},[a("span",D,d(s.key)+" | "+d(s.text),1),a("button",{class:"task__btn",onClick:y=>u(e).removeTask(s.key)},"Удалить",8,E),a("button",{class:"task__btn task__btn_edit",onClick:y=>m(s.text,s.key)},"Изменить",8,F)]))),128))])):k("",!0),a("form",{class:"tasks__form form flex-col",onSubmit:t[3]||(t[3]=h(()=>{},["prevent"]))},[u(e).errorMsg.length?(l(),r("span",I,d(u(e).errorMsg),1)):k("",!0),w(a("input",{type:"text",class:"form__input","onUpdate:modelValue":t[0]||(t[0]=s=>o.value=s),ref_key:"input",ref:v},null,512),[[V,o.value]]),i.value==="add"?(l(),r("button",{key:1,class:"form__btn",onClick:f},"Добавить")):i.value==="edit"?(l(),r("div",N,[a("button",{class:"form__btn",onClick:t[1]||(t[1]=s=>p(o.value,n.value))},"Изменить"),a("button",{class:"form__btn",onClick:t[2]||(t[2]=s=>i.value="add")}," Отмена")])):k("",!0)],32)])]))}},j=x(K,[["__scopeId","data-v-d372d86c"]]);export{j as default};