 // Define all DOM elements
        const employeeTableBody = document.getElementById('employeeTableBody');
        const search = document.getElementById('search');

        let allEmployees = [];
        let pendingDeleteId = null;
        let pendingDeleteButton = null;

        function renderEmployees(employees, emptyMessage = 'No employee listed') {
            if (!employees || employees.length === 0) {
                employeeTableBody.innerHTML = `
                    <tr class="employee-row empty-row">
                        <td colspan="8">${emptyMessage}</td>
                    </tr>
                `;
                return;
            }

            employeeTableBody.innerHTML = employees.map((employee) => `
                <tr class="employee-row" data-employee-id="${employee._id}">
                    <td class="employee-id">${employee._id}</td>
                    <td class="employee-name">${employee.name}</td>
                    <td class="employee-email">${employee.email}</td>
                    <td class="employee-age">${employee.age}</td>
                    <td class="employee-department">${employee.department}</td>
                    <td class="employee-salary">$${employee.salary}</td>
                    <td class="employee-createdAt">${new Date(employee.createdAt).toLocaleString()}</td>
                    <td class="employee-updatedAt">${new Date(employee.updatedAt).toLocaleString()}</td>
                    <td class="actions">
                       <!-- <button class="btn btn-edit" onclick="editEmployee('${employee._id}')">Edit</button>-->
                        <button class="btn btn-delete" onclick="showDeleteModal(this)">Delete</button>
                    </td>
                </tr>
            `).join('');
        }

        async function getAllEmployees() {
            renderEmployees([], 'No employee listed');

            try {
                const response = await axios.get('/SWE');
                allEmployees = response.data;
                renderEmployees(allEmployees);
                console.log(JSON.stringify(response.data, null, 2));
            } catch (err) {
                console.log(err.message);
            }
        }

        getAllEmployees();

        let searchTimeout;

        // Debounce the search so it only runs 1 second after the last keystroke.
        search.addEventListener('input', () => {
            clearTimeout(searchTimeout);

            searchTimeout = setTimeout(() => {
                const query = search.value.trim().toLowerCase();

                if (!query) {
                    renderEmployees(allEmployees);
                    return;
                }

                const filteredEmployees = allEmployees.filter((employee) => {
                    const searchableText = [
                        employee.name,
                        employee.email,
                        employee.department,
                        employee.age,
                        employee.salary
                    ].join(' ').toLowerCase();

                    return searchableText.includes(query);
                });

                renderEmployees(filteredEmployees, 'No employees match your search');
                console.log(filteredEmployees);
            }, 1000);
        });

        function editEmployee() {
        }

        function showDeleteModal(button) {
            const row = button.closest('tr');
            pendingDeleteId = row.getAttribute('data-employee-id');
            pendingDeleteButton = button;

            const modal = document.getElementById('deleteModal');
            const rect = button.getBoundingClientRect();

            modal.style.left = `${rect.left + rect.width / 2}px`;
            modal.style.top = `${rect.top - 12}px`;
            modal.classList.remove('hidden');
            modal.setAttribute('aria-hidden', 'false');
        }

        function hideDeleteModal() {
            const modal = document.getElementById('deleteModal');
            modal.classList.add('hidden');
            modal.setAttribute('aria-hidden', 'true');
            pendingDeleteId = null;
            pendingDeleteButton = null;
        }

        document.addEventListener('click', (event) => {
            const modal = document.getElementById('deleteModal');
            const isInsideModal = modal.contains(event.target);
            const isDeleteButton = event.target.closest('.btn-delete');

            if (!isInsideModal && !isDeleteButton && !modal.classList.contains('hidden')) {
                hideDeleteModal();
            }
        });

        document.getElementById('cancelDeleteBtn').addEventListener('click', hideDeleteModal);

        document.getElementById('confirmDeleteBtn').addEventListener('click', async () => {
            if (!pendingDeleteId || !pendingDeleteButton) return;

            try {
                const row = pendingDeleteButton.closest('tr');
                const response = await axios.delete(`/SWE/${pendingDeleteId}`);
                console.log(response);

                row.remove();
                allEmployees = allEmployees.filter((employee) => employee._id !== pendingDeleteId);
                hideDeleteModal();
            } catch (err) {
                console.log(err.message);
                hideDeleteModal();
            }
        });

        console.log('All elements loaded successfully');
