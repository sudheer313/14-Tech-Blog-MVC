const newFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#project-name').value.trim();
  const content = document.querySelector('#project-desc').value.trim();

  if (title && content) {
    const response = await fetch(`/api/projects`, {
      method: 'POST',
      body: JSON.stringify({ content, title }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create project');
    }
  }
};

//delete
// const delButtonHandler = async (event) => {
//   if (event.target.hasAttribute('data-id')) {
//     const id = event.target.getAttribute('data-id');

//     const response = await fetch(`/api/blogPostRoutes/${id}`, {
//       method: 'DELETE',
//     });

//     if (response.ok) {
//       document.location.replace('/profile');
//     } else {
//       alert('Failed to delete project');
//     }
//   }
// };

//update post

// async function updateButtonHandler(event) {
//   if (event.target.hasAttribute('data-id')) {
//     const id = event.target.getAttribute('data-id');

//     const content = $(this)
//       .parent()
//       .siblings('.project-desc')
//       .children('textarea')
//       .val();
//     console.log('content', content);

//     const title = $(this)
//       .parent()
//       .siblings('.project-title')
//       .children('input')
//       .val();
//     console.log('title', title);

//     const response = await fetch(`/api/blogPostRoutes/${id}`, {
//       method: 'PUT',
//       body: JSON.stringify({ content, title }),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });

//     if (response.ok) {
//       document.location.replace('/profile');
//     } else {
//       alert('Failed to update project');
//     }
//   }
// }

document
  .querySelector('.new-project-form')
  .addEventListener('submit', newFormHandler);

// document
//   .querySelector('.delete-project')
//   .addEventListener('click', delButtonHandler);

// window.addEventListener('load', (event) => {
//   $('.update-project').on('click', function (event) {
//     $(this).parent().siblings('.form').attr('style', 'display: block');
//     $(this).parent().siblings('.col-md-8').attr('style', 'display: none');
//   });

//   $('.update-form').on('click', updateButtonHandler);
// });
