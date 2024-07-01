<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>API Interaction Example with Bootstrap</title>
    <!-- Bootstrap CSS -->
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="container mt-5">
        <h1>Contact List</h1>
        <table class="table table-striped mt-3">
            <thead class="thead-dark">
                <tr>
                    <th>ID</th>
                    <th>Postal Code</th>
                    <th>Fax Number</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                    <th>Address</th>
                    <th>Is Active</th>
                </tr>
            </thead>
            <tbody id="tableBody">
                <!-- Table rows will be dynamically added here -->
            </tbody>
        </table>

        <h2 class="mt-5">Add New Contact</h2>
        <form id="addContactForm">
            <div class="form-group">
                <label for="postalCode">Postal Code:</label>
                <input type="text" class="form-control" id="postalCode" name="postalCode" required>
            </div>

            <div class="form-group">
                <label for="faxNumber">Fax Number:</label>
                <input type="text" class="form-control" id="faxNumber" name="faxNumber" required>
            </div>

            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" class="form-control" id="email" name="email" required>
            </div>

            <div class="form-group">
                <label for="phoneNumber">Phone Number:</label>
                <input type="text" class="form-control" id="phoneNumber" name="phoneNumber" required>
            </div>

            <div class="form-group">
                <label for="address">Address:</label>
                <input type="text" class="form-control" id="address" name="address" required>
            </div>

            <div class="form-group form-check">
                <input type="checkbox" class="form-check-input" id="isActive" name="isActive">
                <label class="form-check-label" for="isActive">Is Active</label>
            </div>

            <button type="submit" class="btn btn-primary">Add Contact</button>
        </form>
    </div>

    <!-- Bootstrap JS and dependencies -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <script src="dataReader.js"></script>
</body>
</html>
