const reminder = (name, email, pass) => `<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
<link href="https://fonts.googleapis.com/css2?family=Sedgwick+Ave+Display&display=swap" rel="stylesheet">
</head>
<body>
<div
  style="width: 600px; padding: 5vw; background-color: white">
  <div
    style="text-align: center; font-size: 30px; color: red; font-family: 'Sedgwick Ave Display', cursive; border: 2px solid red; border-radius: 20px; padding: 5vw;">
    <b>Reminder</b>
    <img
      src="https://seeklogo.com/images/D/death-note-logo-56B2B24A8B-seeklogo.com.png"
      alt="banner"
      style="width: 100%">
    <p
      style="width: 400px; text-align: left; color: dimgray; font-size: 16px; font-family: sans-serif; margin-top: 5px">
      Dear ${email}<br><br>
      You are not marked attendance for 3 days. We think you're in well. Please mark your attendance!
    </p>
    <p style="color: dimgray; font-size: 14px; font-family: sans-serif; text-align: left;">
      Your Wallet Address: <strong>ADDRESS</strong> <br>
      Username: <strong>${name}</strong><br>
      Password: <strong>${pass}</strong><br>
      Folder Lock: <strong>i have permission to access this folder!</strong>
    </p>
  </div>
</div>
<div style="background-color: black; padding: 3vw; width: 620px">
  <div style="width: 100%">
    <img src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Death_Note_logo_%28black_background%29.png" alt="logo" style="width: 100%"></div>
  <p style="color: white">Email received from anonymous server.!</p>
</div>

</body>
</html>`

module.exports = reminder