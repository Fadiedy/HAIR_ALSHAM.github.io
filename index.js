// get the data of Book from
document.getElementById('bookForm').addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('full_name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phoneNumber').value;
    var select_time = document.getElementById('select_time').value;
    var date = document.getElementById('date').value;
    var comment = document.getElementById('comment').value;

    var select_service = document.getElementById('select_service').value;
    var data = { "name": name, "email": email, "phone": phone, "select_time": select_time, "date": date, "select_service": select_service, "comment": comment };
    console.log(data);
});

//get the data of contact form 
document.getElementById('contactFrom').addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('fullName').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;
    var data = { "name": name,"email": email, "phone": phone, "subject": subject, "message": message };
    console.log(data);
});
