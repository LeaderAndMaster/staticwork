/**
 * Created by LvHongwang on 2017-04-06.
 */
function isBigEnough(element, index, array) {
    return (element >= 10);
}
var filtered = [12, 5, 8, 130, 44].filter.call([1,3,4,50],isBigEnough);
console.log(filtered);


// [].filter.call(el.parentNode.children, function(child) {
//   return child !== el;
// });