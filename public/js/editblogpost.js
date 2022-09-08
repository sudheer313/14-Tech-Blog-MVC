//update post

async function updateButtonHandler(event) {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    event.preventDefault();

    const title = document.querySelector('#project-name').value.trim();
    const content = document.querySelector('#project-desc').value.trim();

    if (title && content) {
      const response = await fetch(`/api/blogPostRoutes/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ content, title }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to update project');
      }
      console.log(title, content);
    }
  }
}

const updatebutton = document.querySelector('.update-button');

updatebutton.addEventListener('click', updateButtonHandler);

async function cancelHandler(event) {
  event.preventDefault();
  document.location.replace('/');
}

const cancelButton = document.querySelector('.cancel-button');
cancelButton.addEventListener('click', cancelHandler);
console.log(cancelButton);
