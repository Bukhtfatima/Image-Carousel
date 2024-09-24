let images = ['img1.jpg', 'img2', 'img3.jpg', 'img5', 'img6'];
let imgindex = 0;
let currimg = document.querySelector('.currimg');
let nextimg = document.querySelector('.nextimg');
currimg.innerHTML = `<img src="${images[imgindex]}" alt="image">
`
let keyhandle = (mousekey) => {
    let newindex;
    if (mousekey === 'prev' && imgindex > 0) {
        newindex = imgindex - 1;
        nextimg.innerHTML = `<img src="${images[newindex]}" alt="image">
`;
        nextimg.classList.add('image-slide-prev-in');
        currimg.classList.add('image-slide-prev-out');
        setTimeout(() => {
            currimg.classList.remove('image-slide-prev-out');
            currimg.innerHTML = `<img src="${images[newindex]}" alt="image">
`;
            imgindex = newindex;
            nextimg.classList.remove("image-slide-prev-in");

        }, 1000);
    } else if (mousekey === 'next' && imgindex < images.length - 1) {
        newindex = imgindex + 1;
        nextimg.innerHTML = `<img src="${images[newindex]}" alt="image">`
        nextimg.classList.add('image-slide-next-in');
        currimg.classList.add('image-slide-next-out');
        setTimeout(() => {
            currimg.classList.remove('image-slide-next-out');
            currimg.innerHTML = `<img src="${images[newindex]}" alt="image">
`;
            imgindex = newindex;
            nextimg.classList.remove("image-slide-next-in");

        }, 1000);
    } else {
        return 0;
    }
}