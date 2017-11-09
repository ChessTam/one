import VueRouter from "vue-router"

import home from "../component/home/home.vue"
import datelist from "../component/home/datelist.vue"
import all from "../component/all/all.vue"
import tulist from "../component/all/tulist.vue"
import wenlist from "../component/all/wenlist.vue"
import yinyuelist from "../component/all/yinyuelist.vue"
import yingshilist from "../component/all/yingshilist.vue"
import notloggedin from "../component/me/notloggedin.vue"
import login from "../component/me/login.vue"
import me from "../component/me/me.vue"
import site from "../component/site/site.vue"
import agreement from "../component/site/agreement.vue"
import advicefeedback from "../component/advicefeedback/advicefeedback.vue"
import feedback from "../component/advicefeedback/feedback.vue"
import q1 from "../component/advicefeedback/q1.vue"
import q2 from "../component/advicefeedback/q2.vue"
import q3 from "../component/advicefeedback/q3.vue"
import submission from "../component/advicefeedback/submission.vue"
import historyfeedback from "../component/advicefeedback/historyfeedback.vue"


export default new VueRouter({
	routes:[
		{path:"/",redirect:"/home"},
		//{path:"*",redirect:"/home"},
		{path:"/home",component:home},
		{path:"/datelist",component:datelist},
		{path:"/all",component:all},
		{path:"/tulist",component:tulist},
		{path:"/wenlist",component:wenlist},
		{path:"/yinyuelist",component:yinyuelist},
		{path:"/yingshilist",component:yingshilist},
		{path:"/me",component:notloggedin},
		{path:"/login",component:login},
		{path:"/site",component:site},
		{path:"/agreement",component:agreement},
		{path:"/advicefeedback",component:advicefeedback},
		{path:"/feedback",component:feedback},
		{path:"/q1",component:q1},
		{path:"/q2",component:q2},
		{path:"/q3",component:q3},
		{path:"/submission",component:submission},
		{path:"/historyfeedback",component:historyfeedback}
	]
})
