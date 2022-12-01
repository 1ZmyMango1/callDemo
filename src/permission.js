import router from './router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css';
import { getToken, setToken,removeToken} from '@/utils/auth' // get token from cookie
import { getInfo,parkInfo } from '@/api/user'
import { cacheData } from '@/global'
import { judgeObjectNull } from '@/utils'

const whiteList = ['/login'] // no redirect whitelist
NProgress.configure({
  showSpinner: false
})

router.beforeEach(async(to, from, next) => {
  // NProgress.start()
  
  // set page title
  document.title = to.meta.title||''


  next()
  // determine whether the user has logged in
  const hasToken = getToken()

  // if (hasToken) {
  //   if (to.path === '/login') {
  //     next({ path: '/' })
  //   } else {
  //     next()
  //   }
  // } else {
  //   if (whiteList.indexOf(to.path) !== -1) {
  //     next()
  //   } else {
  //     next(`/login?redirect=${to.path}`)
  //   }
  // }
})

router.afterEach(() => {
  NProgress.done()
})
