<html <?php language_attributes();?>>
	<head>
      <title>Title</title>
	</head>
	<body>
    <?php
      $url = get_template_directory_uri();
      $username = "Danila";
      $age = 16;
      $userImage = "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png";
      echo "<h1>$username - $age</h1><br>";
      echo "<img src=$userImage></img><br>";
      echo "<button onclick='getMusic()'>Get music</button><br>";
      echo "<input type='text' placeholder='Email' id='email'></input><br>";
      echo "<input type='text' placeholder='Password' id='password'></input><br>";
      echo "<button onclick='postAuthorization()'>Authorization</button><br>";
      echo "<script src=" . $url . "/api/api.js" . "></script>";
    ?>
 	</body>
 </html>
