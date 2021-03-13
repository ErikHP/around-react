(this["webpackJsonparound-react"]=this["webpackJsonparound-react"]||[]).push([[0],{16:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(7),c=n.n(o),s=(n(6),n(10)),i=n(2),l=n.p+"static/media/header__logo.4e8e0a1d.svg",u=n(0);function d(e){var t=e.logo;return Object(u.jsx)("header",{className:"header",children:Object(u.jsx)("img",{className:"header__logo",src:t,alt:"Around US logo"})})}var b=Object(a.createContext)();function m(e){var t=e.card,n=e.onCardClick,r=e.onCardLike,o=e.onCardDelete,c=Object(a.useContext)(b),s=t.owner._id===c._id,i=t.likes.some((function(e){return e._id===c._id}));return Object(u.jsxs)("li",{className:"card",children:[s&&Object(u.jsx)("button",{className:"card__delete-button","aria-label":"Delete button",type:"reset",onClick:function(){o(t)}}),Object(u.jsx)("img",{className:"card__image",alt:t.name,src:t.link,onClick:function(){n(t)}}),Object(u.jsxs)("div",{className:"card__group",children:[Object(u.jsx)("h2",{className:"card__text",children:t.name}),Object(u.jsxs)("div",{className:"card__like-container",children:[Object(u.jsx)("button",{className:"card__like-button ".concat(i?"card__like-button_active":null),"aria-label":"Like button",type:"button",onClick:function(){r(t)}}),Object(u.jsx)("p",{className:"card__like-button-count",children:t.likes.length})]})]})]})}function j(e){var t=e.cards,n=e.onEditAvatar,r=e.onEditProfile,o=e.onAddPlace,c=e.onCardClick,s=e.onLikeClick,i=e.onDeleteClick,l=Object(a.useContext)(b);return Object(u.jsxs)("main",{children:[Object(u.jsxs)("section",{className:"profile",children:[Object(u.jsx)("button",{className:"profile__avatar-edit",onClick:n,children:Object(u.jsx)("img",{className:"profile__avatar",src:l.avatar,alt:"profile avatar"})}),Object(u.jsxs)("div",{className:"profile__info",children:[Object(u.jsx)("h1",{className:"profile__text",children:l.name}),Object(u.jsx)("button",{className:"profile__edit-button",onClick:r,"aria-label":"Edit Avatar",type:"button"}),Object(u.jsx)("p",{className:"profile__paragraph",children:l.about})]}),Object(u.jsx)("button",{className:"profile__add-button",onClick:o,"aria-label":"Add button",type:"button"})]}),Object(u.jsx)("section",{className:"elements",children:Object(u.jsx)("ul",{className:"elements__list",children:t.map((function(e){return Object(u.jsx)(m,{card:e,currentUserId:l._id,onCardClick:c,onCardLike:s,onCardDelete:i},e._id)}))})})]})}function f(e){var t=e.footerText;return Object(u.jsx)("footer",{className:"footer",children:Object(u.jsx)("p",{className:"footer__text",children:t})})}function h(e){var t=e.selectedCard,n=e.onClose;return Object(u.jsx)("div",{className:"modal modal_type_image ".concat(t?"modal_is-open":null),children:Object(u.jsxs)("figure",{className:"modal__figure",children:[Object(u.jsx)("button",{className:"form__close-button form__close-button_type-image",onClick:n,"aria-label":"Close button",type:"button"}),Object(u.jsx)("img",{className:"modal__image",src:t?t.link:null,alt:t?t.name:null}),Object(u.jsx)("figcaption",{className:"modal__image-title",children:t?t.name:null})]})})}var p=n(8),_=n(9),O=new(function(){function e(t){var n=t.baseUrl,a=t.headers;Object(p.a)(this,e),this._baseUrl=n,this._headers=a}return Object(_.a)(e,[{key:"getCardList",value:function(){return fetch(this._baseUrl+"/cards",{headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Error!"+e.statusText)}))}},{key:"getUserInfo",value:function(){return fetch(this._baseUrl+"/users/me",{headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Error!"+e.statusText)}))}},{key:"setUserInfo",value:function(e){return fetch(this._baseUrl+"/users/me",{headers:this._headers,method:"PATCH",body:JSON.stringify(e)}).then((function(e){return e.ok?e.json():Promise.reject("Error!"+e.statusText)}))}},{key:"setUserAvatar",value:function(e){return fetch(this._baseUrl+"/users/me/avatar",{method:"PATCH",headers:this._headers,body:JSON.stringify(e)}).then((function(e){return e.ok?e.json():Promise.reject("Error!"+e.statusText)}))}},{key:"addCard",value:function(e){return fetch(this._baseUrl+"/cards",{headers:this._headers,method:"POST",body:JSON.stringify(e)}).then((function(e){return e.ok?e.json():Promise.reject("Error!"+e.statusText)}))}},{key:"removeCard",value:function(e){return fetch(this._baseUrl+"/cards/"+e,{method:"DELETE",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Error!"+e.statusText)}))}},{key:"updateLikes",value:function(e,t){var n="DELETE";return t&&(n="PUT"),fetch(this._baseUrl+"/cards/likes/"+e,{method:n,headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))}))}}]),e}())({baseUrl:"https://around.nomoreparties.co/v1/group-8",headers:{authorization:"26611db9-c358-4822-a371-412fcde828f7","Content-Type":"application/json"}}),v=n.p+"static/media/avatar_type_dark.46e6bf6d.jpg";function x(e){return Object(u.jsx)("div",{className:"modal modal_type_".concat(e.modalName," ").concat(e.isOpen&&"modal_is-open"),children:Object(u.jsxs)("form",{action:"#",className:"form form_".concat(e.formType),onSubmit:e.onSubmit,children:[Object(u.jsx)("h3",{className:"form__title",children:e.formTitle}),e.children,Object(u.jsx)("button",{className:"form__button form__button_type_save",type:"submit",children:e.submitText}),Object(u.jsx)("button",{className:"form__close-button",onClick:e.onClose,"aria-label":"Close button",type:"reset"})]})})}function C(e){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("input",{type:e.type,placeholder:e.placeholder,className:"form__input form__input_".concat(e.inputType),name:e.name,description:e.description,minLength:e.min,maxLength:e.max,onChange:e.handleChange,value:e.value,required:!0}),Object(u.jsx)("span",{id:e.errorType,className:"form__error"})]})}function g(e){var t=Object(a.useContext)(b),n=Object(a.useState)(""),r=Object(i.a)(n,2),o=r[0],c=r[1],s=Object(a.useState)(""),l=Object(i.a)(s,2),d=l[0],m=l[1];return Object(a.useEffect)((function(){c(t.name),m(t.about)}),[t]),Object(u.jsxs)(x,{modalName:"edit_profile",formType:"type_profile",formTitle:"Edit profile",submitText:"Save",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onUpdateUser({name:o,about:d}),e.setSubmitStatus(!0)},children:[Object(u.jsx)(C,{type:"text",name:"profile",placeholder:"Name",inputType:"type_name",min:"2",max:"40",id:"profile-name-error",handleChange:function(e){c(e.target.value)},value:o}),Object(u.jsx)(C,{type:"text",name:"about",placeholder:"About me",inputType:"type_about",min:"2",max:"200",id:"profile-about-error",handleChange:function(e){m(e.target.value)},value:d})]})}function k(e){var t=Object(a.useState)(""),n=Object(i.a)(t,2),r=n[0],o=n[1],c=Object(a.useContext)(b);return Object(a.useEffect)((function(){o(c.avatar)}),[c]),Object(u.jsx)(x,{modalName:"type_avatar",formType:"type_avatar",formTitle:"Edit Change Profile Picture",submitText:"Save",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onUpdateAvatar({avatar:r}),e.setSubmitStatus(!0)},children:Object(u.jsx)(C,{type:"url",name:"avatar",placeholder:"Image Link",inputType:"type_avatar",id:"avatar-url-error",handleChange:function(e){o(e.target.value)},value:r})})}var y=function(e){var t=Object(a.useState)(""),n=Object(i.a)(t,2),r=n[0],o=n[1],c=Object(a.useState)(""),s=Object(i.a)(c,2),l=s[0],d=s[1];return Object(u.jsxs)(x,{modalName:"type_add-card",formType:"type_profile",formTitle:"New Place",submitText:e.submitStatus?"Creating...":"Create",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onAddPlace({name:r,link:l}),e.setSubmitStatus(!0),o(""),d("")},children:[Object(u.jsx)(C,{type:"text",placeholder:"Title",inputType:"card-title",name:"title",id:"card-title-error",handleChange:function(e){o(e.target.value)},value:r}),Object(u.jsx)(C,{type:"url",placeholder:"Image Link",inputType:"card-url",name:"url",id:"card-url-error",handleChange:function(e){d(e.target.value)},value:l})]})};var S=function(e){return Object(u.jsx)(x,{modalName:"type_delete-card",formType:"type_profile",formTitle:"Are you sure?",submitText:e.submitStatus?"Deleting...":"Yes",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onDeleteCard(e.deleteCard),e.setSubmitStatus(!0)},card:e.deleteCard})};function N(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],r=t[1],o=Object(a.useState)(!1),c=Object(i.a)(o,2),m=c[0],p=c[1],_=Object(a.useState)(!1),x=Object(i.a)(_,2),C=x[0],N=x[1],T=Object(a.useState)(!1),E=Object(i.a)(T,2),U=E[0],P=E[1],L=Object(a.useState)(null),A=Object(i.a)(L,2),D=A[0],I=A[1],w=Object(a.useState)(!1),F=Object(i.a)(w,2),J=F[0],B=F[1],H=Object(a.useState)(null),q=Object(i.a)(H,2),z=q[0],M=q[1],Y=Object(a.useState)({name:"",about:"",avatar:v}),G=Object(i.a)(Y,2),K=G[0],Q=G[1],R=Object(a.useState)([]),V=Object(i.a)(R,2),W=V[0],X=V[1];function Z(e){r(!1),p(!1),N(!1),P(!1),I(null),B(!1),te(!1)}function $(e){"Escape"===e.key&&Z()}function ee(e){e.target.classList.contains("modal")&&Z()}function te(e){e?document.addEventListener("keyup",$):document.removeEventListener("keyup",$),e?document.addEventListener("click",ee):document.removeEventListener("click",ee)}function ne(e){O.removeCard(e._id).then((function(){var t=W.filter((function(t){return t._id!==e._id}));X(t),Z()})).catch((function(e){return console.log(e)}))}return Object(a.useEffect)((function(){Promise.all([O.getUserInfo(),O.getCardList({})]).then((function(e){var t=Object(i.a)(e,2),n=t[0],a=t[1];Q(n),X(a)})).catch((function(e){return console.log(e)}))}),[]),Object(u.jsx)(b.Provider,{value:K,children:Object(u.jsxs)("div",{className:"page",children:[Object(u.jsxs)("div",{className:"page__container",children:[Object(u.jsx)(d,{logo:l}),Object(u.jsx)(j,{onEditAvatar:function(){r(!0)},onEditProfile:function(){p(!0),te(!0)},onAddPlace:function(){N(!0),te(!0)},onDeleteClick:function(e){M(e),P(!0),te(!0)},onCardClick:function(e){I(e),te(!0)},cards:W,onDeleteCard:ne,onLikeClick:function(e){var t=e.likes.some((function(e){return e._id===K._id}));O.updateLikes(e._id,!t).then((function(t){var n=W.map((function(n){return n._id===e._id?t:n}));X(n)})).catch((function(e){return console.log(e)}))}}),Object(u.jsx)(f,{footerText:"\xa9 2021 Around The U.S."})]}),Object(u.jsx)(g,{isOpen:m,onClose:Z,onUpdateUser:function(e){O.setUserInfo(e).then((function(e){Q(e),Z()})).catch((function(e){return console.log(e)}))},submitStatus:J,setSubmitStatus:B}),Object(u.jsx)(k,{isOpen:n,onClose:Z,onUpdateAvatar:function(e){O.setUserAvatar(e).then((function(e){Q(e),Z()})).catch((function(e){return console.log(e)}))},submitStatus:J,setSubmitStatus:B}),Object(u.jsx)(y,{isOpen:C,onClose:Z,onAddPlace:function(e){O.addCard({name:e.name,link:e.link}).then((function(e){X([e].concat(Object(s.a)(W))),Z()})).catch((function(e){return console.log(e)}))},submitStatus:J,setSubmitStatus:B}),Object(u.jsx)(S,{isOpen:U,onClose:Z,onDeleteCard:ne,submitStatus:J,setSubmitStatus:B,deleteCard:z}),Object(u.jsx)(h,{onClose:Z,selectedCard:D})]})})}var T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),o(e),c(e)}))};c.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(N,{})}),document.getElementById("root")),T()},6:function(e,t,n){}},[[16,1,2]]]);
//# sourceMappingURL=main.ba68ccf2.chunk.js.map