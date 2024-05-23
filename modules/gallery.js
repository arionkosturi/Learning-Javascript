const images = [
  'https://images.newscientist.com/wp-content/uploads/2023/02/07104439/SEI_142739270.jpg',
  'https://hips.hearstapps.com/hmg-prod/images/scenic-view-of-waterfall-in-forest-newton-abbot-royalty-free-image-1681937445.jpg',
  'https://hips.hearstapps.com/hmg-prod/images/scenic-view-of-waterfall-in-forest-newton-abbot-royalty-free-image-1681937445.jpg',
  'https://hips.hearstapps.com/hmg-prod/images/scenic-view-of-waterfall-in-forest-newton-abbot-royalty-free-image-1681937445.jpg'
]

export function create_gallery(parent){
  let html = '<div>'
  for (let img of images) {
    html += `<img src="${img}" style= height:"120px" />`
  }
  parent.innerHTML = html
}