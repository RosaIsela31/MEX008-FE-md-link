const regEx = /\[(.+?)\]\((http|https).+?\)/g; // Patron general para URL
const titleRegEX = /\[.+?\]/g; // Patron para detectar [title]
const urlRegEx = /\((http|https).+?\)/g; // Patron para detectar http | https

const urlArrOfObjects = [];

const findUrls = async (data) => {
  const myPromise = new Promise((resolve) => {
    const findUrl = data.match(regEx);
    for (let i in findUrl) {
      let text = findUrl[i].match(titleRegEX)[0];
      let url = findUrl[i].match(urlRegEx)[0];
      urlArrOfObjects.push({
        text2: text,
        url2: url
      });
    };
    resolve(urlArrOfObjects)
  });
  const newArray = await myPromise
  return newArray;
};

module.exports = findUrls;



