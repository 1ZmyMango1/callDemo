import router from './router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css';
import { getToken, setToken,removeToken} from '@/utils/auth' // get token from cookie
import { getInfo,parkInfo } from '@/api/user'
import { cacheData } from '@/global'
import { judgeObjectNull } from '@/utils'

const whiteList = ['/login/addLogin'] // no redirect whitelist
NProgress.configure({
  showSpinner: false
})

router.beforeEach(async(to, from, next) => {
  // NProgress.start()
  // set page title
  const hasToken = getToken()
  document.title = to.meta.title||''
  if(to.path === '/login'){
    if (hasToken) {
      next({ path: '/' })
    }else{
      next()
    }
  }else if(whiteList.indexOf(to.path)==-1){
    if (hasToken) {
      next()
    } else {
      next({ path: '/login' })
    }
  }else{
    next()
  }
})

router.afterEach(() => {
  NProgress.done()
})
