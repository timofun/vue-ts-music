import fetch from '@/utils/fetch';

/**
 * 获取轮播图
 */
export function getBanner () {
  return fetch({
    url: 'banner',
  })
}
