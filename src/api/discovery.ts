import fetch from '@/utils/fetch';

/**
 * 获取轮播图
 * @returns {AxiosPromise}
 */
export function getBanner () {
  return fetch({
    method: 'get',
    url: 'banner',
  })
}

/**
 * 获取推荐歌单
 * @returns {AxiosPromise}
 */
export function getPersonalized () {
  return fetch({
    method: 'get',
    url: 'personalized',
    params: {
      limit: 6,
    },
  })
}

/**
 * 获取精品歌单
 * @returns {AxiosPromise}
 */
export function getPlaylistHighquality () {
  return fetch({
    method: 'get',
    url: 'top/playlist/highquality',
    params: {
      limit: 6,
    },
  })
}
