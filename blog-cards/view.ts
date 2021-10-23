const blogs: { name: string, url: string, img: string }[] = input

const blogsContainer: HTMLDivElement = document.querySelector('#blogs')
blogsContainer.innerHTML = ''
blogs.forEach(blog => {
    const blogCard = document.createElement('div')
    blogCard.classList.add('blogCard')
    blogCard.style.display = 'flex'
    blogsContainer.append(blogCard)

    const linkEl = document.createElement('a')
    const imgEl = document.createElement('img')

    blogCard.append(linkEl, imgEl)

    linkEl.innerText = blog.name
    linkEl.href = blog.url
    linkEl.ariaLabel = blog.url

    imgEl.src = blog.img
})