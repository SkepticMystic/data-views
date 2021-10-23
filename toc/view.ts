const currFile = app.workspace.getActiveFile()
const destFile = app.metadataCache.getFirstLinkpathDest(input, currFile)

const headings = app.metadataCache.getFileCache(destFile).headings

console.log(headings)

// const indent = '    ';
// let toc = '';
// if (headings) {
//     headings.forEach(heading => {
//         const currIndent = indent.repeat(heading.level - 1)
//         toc += `${currIndent} - [[${destFile.path}#${heading.heading}|${heading.heading}]] \n`

//     })
// }

// dv.paragraph(toc)