/**
 * Created by LvHongwang on 2017-04-07.
 */
// var gif = new GIF({
//     workers: 2,
//     quality: 10,
//     workerScript: 'gif.worker.js',
// });
var config = {
    fpic: "test.gif",
    // fpic: "https://iflytekliusheng.oss-cn-beijing.aliyuncs.com/static/resources/doutu/be269d77c49a2434078151171a2d6b0b.gif",
    fthumb: "https://iflytekliusheng.oss-cn-beijing.aliyuncs.com/static/resources/doutu/1cccce470b0df8bcd5d51b57a3f6f9cb.gif",
    hot: 0,
    id: 16855,
    position: [5,7,398,80],
    scroll: false,
    text: "我在看KPL，别打扰我",
    time: 1490787956,
    title: "教皇王者荣耀持马桶搋子",
    withText:['请跟我到有关部门喝茶','SB一个！s',"你们乡下人讲究自然用这个吧"]
}
var tarImg = document.getElementById('tarImg');
var arrayBuffer=null;
tarImg.src=config.fpic;
// add an image element
// gif.addFrame(tarImg);

// or a canvas element
// gif.addFrame(canvasElement, {delay: 200});

// or copy the pixels from a canvas context
// gif.addFrame(ctx, {copy: true});

// gif.on('finished', function(blob) {
//   window.open(URL.createObjectURL(blob));
// });
//
// gif.render();
 if (arrayBuffer == null) {
     var oReq = new XMLHttpRequest();
     oReq.open("GET", config.fpic, true);
     oReq.responseType = "arraybuffer";
     oReq.onload = function (oEvent) {
         alert('23');
         arrayBuffer = oReq.response; // Note: not oReq.responseText
         if (arrayBuffer) {
             var gif = new GIFDecoder(arrayBuffer);
             var frames = gif.decompressFrames(true);
             // render the gif
             renderGIF(frames, false);
         }
     };
 }
function renderGIF(frames, flag) {
    var frameIndex = 0;
    var width = frames[0].dims.width;
    var height = frames[0].dims.height;
    var gifConfig = {
        width: width,
        height: height,
        workers: 2,
        quality: 30,
        background:'#fff',
        workerScript: 'gif.worker.js',
    }
    var gif = new GIF(gifConfig);
    gif.on('finished', function (blob) {
      config.data = blob;
      if (flag != true) {
          console.log(blob);
        document.getElementById("tarImg").src = URL.createObjectURL(blob);
      }
      if (flag == true) {
        // ajaxLoad();
      }
    });
}

