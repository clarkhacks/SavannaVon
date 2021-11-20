function getPostData() {
    var postTitle = document.getElementById("postTitle");
    var postImg = document.getElementById("postImg");
    var postDate = document.getElementById("postDate");
    var postDesc = document.getElementById("postDesc");
    var postTitleDemo = document.getElementById("postTitleDemo");
    var postImgDemo = document.getElementById("postImgDemo");
    var postDateDemo = document.getElementById("postDateDemo");
    var postDescDemo = document.getElementById("postDescDemo");
    postTitleDemo.innerHTML = postTitle.value;
    postImgDemo.src = postImg.value;
    postDateDemo.innerHTML = postDate.value;
    postDescDemo.innerHTML = postDesc.value;
    // newPost(postTitle.value, postDesc.value, postDate.value); // upload the image to Imgur
}

function newPost(imgt, imgd, imgdt) {
    // imt: image title, imgd: image desc, imgdt: image date
    var data = new FormData();
    data.append("image", "R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"); //demo image for now
    data.append("title", imgt);
    data.append("description", imgd);
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            console.log(this.responseText);
        }
    });
    xhr.open("POST", "https://api.imgur.com/3/image");
    xhr.setRequestHeader("Authorization", "Bearer 15c23f313057e710201bdcc019f0a4e2732a7f52"); // secure this token for production.
    xhr.send(data);
}

function savePost(imgt, imgd, imgdt, imgu) {
    var postFile = "---\ntitle: \"" + imgt + "\"\ndate:\"" + imgdt + "\"\nimage: " + imgu +
        "\"\ndesc: \"" + imgd + "\"\n---";
    var saveAs = encodeURIComponent(imgt + "-" + imgdt + ".md");
    console.log(postFile, saveAs);
}