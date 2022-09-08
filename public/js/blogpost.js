//delete
const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/blogPostRoutes/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      const data = await response.json();
      console.log(data);
      alert(data.message);
    }
  }
};

const deletebuttons = document.querySelectorAll('.delete-blogpost');
console.log(deletebuttons);
for (const deletebutton of deletebuttons) {
  console.log(deletebutton);
  deletebutton.addEventListener('click', delButtonHandler);
}
//update

async function updateButtonHandler(event) {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');
    document.location.replace(`/blogPost/edit/${id}`);
  }
}

const updatebuttons = document.querySelectorAll('.update-blogpost');
console.log(updatebuttons);
for (const updatebutton of updatebuttons) {
  console.log(updatebutton);

  updatebutton.addEventListener('click', updateButtonHandler);
}
window.addEventListener('load', (event) => {
  $('.update-project').on('click', function (event) {
    $(this).parent().siblings('.form').attr('style', 'display: block');
    $(this).parent().siblings('.col-md-8').attr('style', 'display: none');
  });

  // $('.update-form').on('click', updateButtonHandler);
});
