/**
 * Created by admin on 2017-05-09.
 */
function $(str) {
    return document.querySelectorAll(str).length === 1 ? document.querySelectorAll(str)[0] : document.querySelectorAll(str);
}