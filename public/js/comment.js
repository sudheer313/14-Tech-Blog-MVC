const commentForm = document.querySelector('.comment-form');

//comment
async function commentbuttonHandler(event) {
  commentForm.style.visibility = 'visible';
}

//commentcancel
async function cancelcommentHandler(event) {
  event.preventDefault();
  const id = event.target.getAttribute('data-id');
  document.location.replace(`/blogPost/${id}`);
}
const commentbutton = document.querySelector('.comment-blogpost');
commentbutton.addEventListener('click', commentbuttonHandler);

const cancelcommentbutton = document.querySelector('.cancel-commentbutton');
cancelcommentbutton.addEventListener('click', cancelcommentHandler);
//submitcomment
async function commentsubmitHandler(event) {
  event.preventDefault();
  const id = event.target.getAttribute('data-id');

  const message = document.querySelector('#comment-msg').value.trim();

  if (id && message) {
    const response = await fetch(`/api/blogPostRoutes/${id}/comment`, {
      method: 'POST',
      body: JSON.stringify({ message }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace(`/blogPost/${id}`);
    } else {
      alert('Failed to comment');
    }
  }
}
const commentsubmitbutton = document.querySelector('.commentsubmit-button');
commentsubmitbutton.addEventListener('click', commentsubmitHandler);
