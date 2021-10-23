var blogs = input;
var blogsContainer = document.querySelector('#blogs');
blogsContainer.innerHTML = '';
blogs.forEach(function (blog) {
    var blogCard = document.createElement('div');
    blogCard.classList.add('blogCard');
    blogCard.style.display = 'flex';
    blogsContainer.append(blogCard);
    var linkEl = document.createElement('a');
    var imgEl = document.createElement('img');
    blogCard.append(linkEl, imgEl);
    linkEl.innerText = blog.name;
    linkEl.href = blog.url;
    linkEl.ariaLabel = blog.url;
    imgEl.src = blog.img;
});
