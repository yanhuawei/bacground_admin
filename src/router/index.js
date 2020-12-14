import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login.vue')
  },
  {  //首页
    path: '/home',
    name: 'home',
    component: () => import('../views/home/index.vue'),
    meta: { title: "首页" },
    children:[ {
    path: '/background',
    name: 'background',
    component: () => import('../views/home/background.vue'),
    meta: { title: "后台管理页面" },
  },{
    path: '/album',
    name: 'album',
    component: () => import('../views/home/album.vue'),
     meta: { title: "发票管理" },
  },{
    path: '/shoplist',
    name: 'shoplist',
    component: () => import('../views/home/shoplist.vue'),
    meta: { title: "售后服务" },
  }]
  },
  { //商品列表
    path: '/shop',
    name: 'shop',
    component: () => import('../views/shop/index.vue'),
     meta: { title: "商品列表" },
    children:[{
    path: '/listof',
    name: 'listof',
    component: () => import('../views/shop/listof.vue'),
    meta:{title:'商品列表'}

  },{
    path: '/classlist',
    name: 'classlist',
    component: () => import('../views/shop/classlist.vue'),
    meta:{title:"分类列表"}
  },{
    path:"/product",
     name: 'product',
    component: () => import('../views/shop/product.vue'),
    meta:{title:'商品规格'}
  },{
    path:"/shoptype",
     name: 'shoptype',
    component: () => import('../views/shop/shoptype.vue'),
    meta:{title:'商品类型'}
  },{
    path:"/review",
     name: 'review',
    component: () => import('../views/shop/review.vue'),
    meta:{title:"商品评论"}
  }]
  },{ //订单
    path:"/order",
    name:"order",
    component: () => import('../views/order/index.vue'),
    children:[{
      path:"/management",
     name: 'management',
    component: () => import('../views/order/management.vue'),
    meta:{title:"订单管理"}
    },{
      path:"/invoice",
     name: 'invoice',
    component: () => import('../views/order/invoice.vue'),
    meta:{title:"发票管理"}
    },{
      path:"/after",
     name: 'after',
    component: () => import('../views/order/after.vue'),
    meta:{title:"售后服务"}
    }]
  },{//会员
    path:'/member',
    name:"member",
    component: () => import('../views/member/index.vue'),
    children:[{
      path:"/memberlist",
      name:"memberlist",
      component: () => import('../views/member/memberlist.vue'),
      meta:{title:"会员列表"}
    },{
      path:"/grade",
      name:"grade",
      component: () => import('../views/member/grade.vue'),
      meta:{title:"会员等级"}
    }]
  },{ //设置
  path:'/setup',
    name:"setup",
    component: () => import('../views/setup/index.vue'),
  }
 
]

const router = new VueRouter({
  routes
})

// 路由守卫
router.beforeEach((to, from, next) => {
    // console.log(to, "====", from);
    // next();

    if (localStorage.getItem("token")) {
        next();
    } else {
        if (to.path == "/login") {
            next();
        } else {
            next("/login");
        }//为了防止死循环
    }
});

export default router
