let expandedList = document.querySelectorAll('.expand')
expandedList.forEach(x=>{
    return x.style.display = 'none'
})
let show_more = document.querySelectorAll('.expand_more')
console.log(show_more);
console.log(expandedList);

function showMore(id){
    expandedList[id].style.display = 'block'
    show_more[id].style.display = 'none'
    // document.querySelectorAll('.expand').style.display = 'block'
    // document.querySelectorAll('.expand_more').style.display = 'none'
}
function showLess(id){
    show_more[id].style.display = 'block'
    expandedList[id].style.display = 'none'
    // document.querySelectorAll('.expand').style.display = 'none'
    // document.querySelectorAll('.expand_more').style.display = 'inline-block'
}