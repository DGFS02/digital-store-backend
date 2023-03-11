const sendDataForm = (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const formDataJSON = Object.fromEntries(formData);

  if (validateForm(formData)) {
    fetch('/api/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(formDataJSON),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log('Success:', result);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
};

const constaints = {
  name: {
    presence: true,
  },
};

const validateForm = (formData) => {
  const errors = validate(formData, constaints);

  if (errors) {
    showFormErrors(errors);

    return false;
  }

  return true;
};

document.getElementById('register-form').addEventListener('submit', sendDataForm);
