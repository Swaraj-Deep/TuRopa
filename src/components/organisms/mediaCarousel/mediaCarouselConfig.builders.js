class MediaCarouselConfig {
  #id;
  #url;
  setId(id) {
    this.#id = id;
    return this;
  }

  setUrl(url) {
    this.#url = url;
    return this;
  }

  getId() {
    return this.#id;
  }

  getUrl() {
    return this.#url;
  }
}

export default MediaCarouselConfig;
