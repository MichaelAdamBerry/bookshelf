export async function getVolumeList(query) {
  try {
    const request = `https://www.googleapis.com/books/v1/volumes?q=${query}&orderBy=relevance&printType=books`;
    const data = await fetch(request, {
      method: "GET"
    });
    let items = await data.json();
    return items.totalItems === 0 ? false : items.items;
  } catch (err) {
    console.error(err);
    return false;
  }
}

export async function getVolume(id) {
  try {
    const request = "https://www.googleapis.com/books/v1/volumes/" + id;
    const data = await fetch(request, {
      method: "GET"
    });
    let volume = await data.json();
    return volume;
  } catch (err) {
    console.error(err);
  }
}
