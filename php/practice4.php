<html>
  <body>
    <pre>
      <?php 

      $var = $_GET["num"]; 

      $padding = strlen(strval($var * $var));

      echo str_repeat(" ", $padding + 1);
      for ($x = 1; $x <= $var; $x++) {
      printf("%*d ", $padding, $x);
      }
      echo "<br>";


      for ($x = 1; $x <= $var; $x++) {
      printf("%*d ", $padding, $x);
      for ($y = 1; $y <= $var; $y++) {
      $mul = $x * $y;
      printf("%*d ", $padding, $mul);
      }
      echo "<br>";
      }

      ?><br>
    </pre>

  </body>
</html> 
