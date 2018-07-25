const download = require('image-downloader')
 
const urls = ['men/40','women/42','women/97','men/90','women/47','women/82','men/61','men/30','men/23','women/38','men/64','women/22','men/52','men/2','men/84','men/87','men/76','men/70','women/5','men/32','men/82','women/3','men/91','women/11','men/85','men/16','women/91','men/50','men/17','men/98','women/18','women/66','men/65','men/74','men/26','women/28','women/76','men/92','men/60','women/69','men/99','men/24','women/58','women/57','men/25','women/8','women/89','men/18','men/4','women/15','women/21','women/36','women/83','women/84','men/8','women/0','women/73','men/33','men/86','women/33','women/49','men/44','men/41','men/73','women/23','women/25','women/17','women/92','men/69','women/46','men/93','women/6','women/62','women/9','men/54','women/86','women/10','men/27','men/21','women/7','men/67','men/19','women/67','men/13','men/71','men/58','women/61','women/94','women/71','men/22','women/20','women/87','women/53','men/6','women/60','men/49','women/64','women/14','women/55','women/78','women/44','men/53','men/56','women/77','men/15','men/0','men/77','women/63','women/45','men/46','men/97','men/28','women/54','men/11','women/88','women/56','women/34','women/37','men/72','women/90','men/66','men/88','women/99','men/20','men/81','women/81','men/59','women/12','men/79','men/55','women/70','men/63','women/65','women/98','men/89','women/74','men/43','men/36','men/48','women/93','men/62','women/27','men/35','women/79','men/45','men/51','men/42','women/31','women/30','men/9','men/1','women/1','women/2','men/57','men/3','men/78','women/68','men/94','women/32','women/80','women/4','men/68','women/43','women/75','women/41','men/39','women/52','women/19','women/40','women/96','women/48','men/96','women/35','women/51','women/95','women/24','women/29','men/37','women/72','men/10','men/47','men/14','women/13','men/80','men/7','men/12','men/83','men/34','men/95','women/26','women/39','men/5','women/59','women/50','men/38','women/85','men/29','men/31','women/16','men/75'];

urls.forEach(url => {
  const num = url.split('/')[1];
  const isMan = url.charAt(0) === 'm';
  const options = {
    url: `https://randomuser.me/api/portraits/thumb/${url}.jpg`,
    dest: `./profilePics/${isMan ? num : +num + 99}.jpg`
  }
  download.image(options)
    .then(({ filename, image }) => {
      console.log('File saved to', filename)
    })
    .catch((err) => {
      console.error(err)
    })
});
