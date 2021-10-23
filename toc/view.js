var currFile = app.workspace.getActiveFile();
var destFile = app.metadataCache.getFirstLinkpathDest(input, currFile);
var headings = app.metadataCache.getFileCache(destFile).headings;
console.log(headings);
// const indent = '    ';
// let toc = '';
// if (headings) {
//     headings.forEach(heading => {
//         const currIndent = indent.repeat(heading.level - 1)
//         toc += `${currIndent} - [[${destFile.path}#${heading.heading}|${heading.heading}]] \n`
//     })
// }
// dv.paragraph(toc)
