
    document.getElementById('registrationForm').addEventListener('submit', function(e) {
        e.preventDefault(); // Ngăn form submit mặc định

        // Lấy dữ liệu từ form
        const fullName = document.getElementById('fullName').value;
        const phone = document.getElementById('phone').value;
        const email = document.getElementById('email').value;
        const licenseType = document.getElementById('licenseType').value;

        // Tạo object dữ liệu
        const formData = {
            fullName: fullName,
            phone: phone,
            email: email,
            licenseType: licenseType
        };

        // Gửi dữ liệu tới Google Apps Script
        fetch('https://script.google.com/macros/s/AKfycbzez0pZbPzB_ZR6fGvJXLnInAKvAC09QYzKXOvYhsZQjXf7Cps2H99hUvISHvEjX1J5/exec', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {
                if (data.result === 'success') {
                    alert('Đăng ký thành công! Chúng tôi sẽ liên hệ với bạn sớm.');
                    document.getElementById('registrationForm').reset();
                } else {
                    alert('Có lỗi xảy ra. Vui lòng thử lại.');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Có lỗi xảy ra. Vui lòng thử lại.');
            });
    });