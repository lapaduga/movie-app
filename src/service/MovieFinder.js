export default class MovieFinder {
  async getResource(url) {
    const res = await fetch(url)

    if (!res.ok) {
      throw new Error(`Could't fetch ${url}, received ${res.status}`)
    }

    return await res.json()
  }

  getData(url) {
    return this.getResource(url)
  }
}
