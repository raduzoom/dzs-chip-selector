<?php


$log_file = "./my-errors.log";
ini_set("log_errors", TRUE);
ini_set("error_log", $log_file);
$options = file_get_contents("options.json");
$subjects = json_decode($options, true);

$DELAY_TIME = 0.3;


$query = '';
$requestVersion = '0';

if (isset($_GET['search']) && $_GET['search']) {
  $query = $_GET['search'];
}
if (isset($_GET['requestVersion']) && $_GET['requestVersion']) {
  $requestVersion = floatval($_GET['requestVersion']);
}
if (isset($_GET['delay']) && $_GET['delay']) {
  $DELAY_TIME = floatval($_GET['delay']);
}

$foundSubjects = array('foundSubjects' => array(), 'requestVersion' => $requestVersion);
if ($query) {
  $query = strtolower($query);
  foreach ($subjects as $subject) {
    $subjectText = strtolower(strip_tags($subject['htmlContent']));

    if (strpos($subjectText, $query) !== false && strpos($subjectText, $query) !== null) {
      array_push($foundSubjects['foundSubjects'], $subject);
    }
  }
}

header('Content-Type: application/json');
header('X-Request-Version: ' . $requestVersion);
sleep($DELAY_TIME);
echo json_encode($foundSubjects);
//echo json_encode($foundSubjects);