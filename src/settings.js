module.exports = {
  /**
   * @description 网站标题
   */
  title: '后台管理',
  /**
   * @description 是否显示 tagsView
   */
  tagsView: true,
  /**
   * @description 固定头部
   */
  fixedHeader: true,
  /**
   * @description 记住密码状态下的token在Cookie中存储的天数，默认1天
   */
  tokenCookieExpires: 1,
  /**
   * @description 记住密码状态下的密码在Cookie中存储的天数，默认1天s
   */
  passCookieExpires: 1,
  /**
   * @description 是否只保持一个子菜单的展开
   */
  uniqueOpened: true,
  /**
   * @description token key
   */
  TokenKey: 'FG-ADMIN-TOEKN',
  /**
   * @description 请求超时时间，毫秒（默认2分钟）
   */
  timeout: 1200000,

  /**
 * 登录url
 */
  loginUrl: 'auth/login',
  /**
   * 获取用户信息url
   */
  userInfoUrl: 'auth/info',
  /**
   * 获取验证码url
   */
  codeUrl: 'auth/code',
  /**
 * 退出url
 */
  logoutUrl: 'auth/logout',
  /**
   * @description 是否显示logo
   */
  sidebarLogo: true,
  /**
   * 是否显示设置的底部信息
   */
  showFooter: false,
  /**
   * 底部文字，支持html语法
   */
  footerTxt: '© 2020 FastG <a href="http://www.apache.org/licenses/LICENSE-2.0" target="_blank">Apache License 2.0</a>',
  /**
   * 备案号
   */
  caseNumber: ''
}
