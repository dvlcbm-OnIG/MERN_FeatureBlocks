// Get the form element and message container
        const employeeForm = document.getElementById('employeeForm');
        const formMessage = document.getElementById('formMessage');

        // Handle form submission
        employeeForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            // Collect form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                password: document.getElementById('password').value,
                age: parseInt(document.getElementById('age').value),
                department: document.getElementById('department').value,
                salary: parseInt(document.getElementById('salary').value)
            };

            try {
                // Send POST request to /SWE endpoint
                const response = await axios.post('/SWE', formData);
                const responseData = Array.isArray(response.data) ? response.data[0] : response.data;
                
                console.log('Employee created successfully:', response.data);
                
                // Show success message
                formMessage.classList.toggle('success', responseData?.success ?? true);
                formMessage.classList.remove('error');
                formMessage.textContent = responseData?.message || 'Employee created successfully';
                formMessage.style.display = 'block';
                
                
                
                // Hide message after 3 seconds
                setTimeout(() => {
                    formMessage.style.display = 'none';
                    // Reset form
                    employeeForm.reset();
                }, 3000);
                
            } catch (error) {
                console.error('Error creating employee:', error.response?.data || error.message);
                
                // Show error message
                formMessage.classList.toggle('error', true);
                formMessage.classList.remove('success');
                formMessage.textContent = error.response?.data?.message || 'Failed to create employee';
                formMessage.style.display = 'block';

                // Hide message after 3 seconds
                setTimeout(() => {
                    formMessage.style.display = 'none';
                }, 3000);
            }
        });