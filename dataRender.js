const tableBodyObj = document.getElementById("tableBody");
const addContactForm = document.getElementById("addContactForm");

// Function to fetch and render contacts
function fetchAndRenderContacts() {
    const requestOptions = {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
        redirect: "follow"
    };

    fetch("http://localhost:8080/contact/fetch", requestOptions)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.statusText}`);
            }
            return response.json();
        })
        .then(jsonRes => {
            console.log("Fetched data:", jsonRes);
            jsonRes.forEach(contact => {
                renderContactRow(contact);
            });
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
}

// Function to render a contact row
function renderContactRow(contact) {
    const newTrObj = document.createElement("tr");

    const columns = [
        contact.id,
        contact.postalCode,
        contact.faxNumber,
        contact.email,
        contact.phoneNumber,
        contact.address,
        contact.isActive ? "Yes" : "No"
    ];

    columns.forEach(columnValue => {
        const newDataCol = document.createElement("td");
        newDataCol.innerText = columnValue;
        newTrObj.appendChild(newDataCol);
    });

    tableBodyObj.appendChild(newTrObj);
}

// Event listener for form submission to add a new contact
addContactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const formData = new FormData(addContactForm);
    const isActive = formData.get("isActive") === "on"; // Convert checkbox value

    const newContact = {
        postalCode: formData.get("postalCode"),
        faxNumber: formData.get("faxNumber"),
        email: formData.get("email"),
        phoneNumber: formData.get("phoneNumber"),
        address: formData.get("address"),
        isActive: isActive
    };

    saveContact(newContact)
        .then(savedContact => {
            console.log("Contact saved successfully:", savedContact);
            renderContactRow(savedContact); // Render the newly added contact
        })
        .catch(error => {
            console.error("Error saving contact:", error);
        });

    addContactForm.reset();
});

// Function to save a new contact
function saveContact(contactData) {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify(contactData);

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };

    return fetch("http://localhost:8080/contact/save", requestOptions)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.statusText}`);
            }
            return response.json();
        })
        .catch(error => {
            console.error("Error saving contact:", error);
            throw error;
        });
}

// Fetch and render contacts on page load
fetchAndRenderContacts();
