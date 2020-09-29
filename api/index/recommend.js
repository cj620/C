import { HTTP } from '@/common/js/http.js'

class recommend extends HTTP {
  getBanners (type) {
    return this.request({
      url: '/banner?type='+type,
    });
  }
  getPlaylists (cat, limit = 30, offset = 0) {
    return this.request({
      url: '/top/playlist',
      data: {
        cat: decodeURIComponent(cat),
        limit,
        offset
      }
    });
  }

  getPlaylistTrackId (id) {
    return this.request({
      url: `/playlist/detail?timestamps=${Date.now()}`,
      method: 'post',
      data: {
        id
      }
    });
  }

  getTrack (ids) {
    return this.request({
      url: '/song/detail',
      data: {
        ids
      }
    });
  }

  getSongUrl (id, cookie) {
    return this.request({
      url: '/song/url',
      data: {
        id,
        cookie
      }
    });
  }

  getDailySong (cookie) {
    return this.request({
      url: `/recommend/songs?timestamps=${Date.now()}`,
      method: 'post',
      data: {
        cookie
      }
    });
  }

  getPlaylistCategory () {
    return this.request({
      url: '/playlist/catlist'
    });
  }

  getToplist () {
    return this.request({
      url: '/toplist/detail'
    });
  }

  getSimSong (id) {
    return this.request({
      url: '/simi/song',
      data: { id }
    });
  }

  getSimPlaylist (id) {
    return this.request({
      url: '/simi/playlist',
      data: { id }
    });
  }

}
export {
  recommend
}