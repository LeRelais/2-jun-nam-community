document.addEventListener('DOMContentLoaded', () => {
    //Like EventHandler
    const likeButton = document.getElementById('like-button');
    likeButton.addEventListener('click', () => {
        const numLikes = document.getElementById('num-likes');
        const element = document.getElementsByClassName('post-num-likes')[0];
        const style = getComputedStyle(element);
        const bgColor = style['background-color'];

        if(rgbToHex(bgColor) == "#d9d9d9"){
            element.style.backgroundColor = "#ACA0EB";
            console.log(numLikes.innerText);
            numLikes.innerText = Number(numLikes.innerText) + 1;
        }
        else if(rgbToHex(bgColor) == "#aca0eb"){
            element.style.backgroundColor = "#d9d9d9";
            numLikes.innerText = Number(numLikes.innerText) - 1;
        }
    })


    //CommentText Change EventHandler
    const registerCommentBtn = document.getElementById('register-comment-button');
    const commentText = document.getElementById('post-write-comment-text');
    commentText.addEventListener('input', () => {
        const content = commentText.value.trim();

        if(content.length == 0){
            registerCommentBtn.disabled = true;
            registerCommentBtn.style.backgroundColor = "#aca0eb";
        }
        else{
            registerCommentBtn.disabled = false;
            registerCommentBtn.style.backgroundColor = "#7f6aee";
        }
    })

    //header profile icon handelr
    const dropdown = document.getElementById("dropdown");
    const profileIcon = document.getElementById("profile-icon")

    profileIcon.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdown.classList.toggle('show');
    })

    window.addEventListener('click', () => {
        dropdown.classList.remove('show');
    })

    //Modify post EventHandler
    const modifyPostBtn = document.getElementById('modify-post');
    modifyPostBtn.addEventListener('click', () => {
        window.location.href = 'editPost.html';
    });


    //Delete post button Eventhandler
    const deletePostBtn = document.getElementById('delete-post');
    const postModalOverlay = document.getElementById('postModalOverlay');
    deletePostBtn.addEventListener('click', e => {
        e.preventDefault();
        postModalOverlay.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    })


    //Modify comment EventHandler
    const modifyCommentBtn = document.getElementById('modify-comment');
    const postCardText = document.getElementById('postCardText').innerText;
    modifyCommentBtn.addEventListener('click', () => {
        commentText.value = postCardText;
        commentText.dispatchEvent(new Event('input'));
        registerCommentBtn.textContent = '댓글 수정';
    });

    //Delete comment EventHandler
    const deleteCommentBtn = document.getElementById('delete-comment');
    const commentModalOverlay = document.getElementById('commentModalOverlay');
    deleteCommentBtn.addEventListener('click', e => {
        e.preventDefault();
        commentModalOverlay.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    });

    //Comment Button Click EventHandler
    registerCommentBtn.addEventListener('click', (e) => {
        e.preventDefault();
    
        if(registerCommentBtn.textContent === "댓글 수정"){
            document.getElementById('postCardText').innerHTML = commentText.value;
            registerCommentBtn.textContent = '댓글 등록';
        }
        commentText.value = "";
        commentText.dispatchEvent(new Event('input'));
    })


    //modal EventHandler
    const postCancelButton = document.getElementById('postCancelButton');
    const postConfirmButton = document.getElementById('postConfirmButton');


    postCancelButton.addEventListener('click', () => {
        postModalOverlay.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    postConfirmButton.addEventListener('click', () => {
        postModalOverlay.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    const commentCancelButton = document.getElementById('commentCancelButton');
    const commentConfirmButton = document.getElementById('commentConfirmButton');


    commentCancelButton.addEventListener('click', () => {
        commentModalOverlay.style.display = 'none';
        document.body.style.overflow = 'auto';
        console.log("hi");
    });

    commentConfirmButton.addEventListener('click', () => {
        commentModalOverlay.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
})

function rgbToHex(rgb) {
    const rgbValues = rgb.match(/\d+/g).map(Number);
    return `#${rgbValues.map(x => x.toString(16).padStart(2, '0')).join('')}`;
}