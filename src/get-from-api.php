<?php
/**
 * get options from API
 */

$log_file = "./my-errors.log";
ini_set("log_errors", TRUE);
ini_set("error_log", $log_file);


if (!function_exists('print_rr')) {
  function print_rr($arg) {

    $fout = '';
    $fout .= '<pre>';
    $fout .= print_r($arg, true);
    $fout .= '</pre>';

    echo $fout;
  }
}
$options = file_get_contents("options.json");
$allValues = json_decode($options, true);
$listedSubjects = $allValues;
$selectedSubjects = null;

$listedSubjects = array_slice($listedSubjects, 0, 3); // return the first five elements

if (isset($_POST) && isset($_POST['subject'])) {

  $selectedSubjects = $_POST['subject'];
}



function checkInListedSubjects() {

  global $selectedSubjects;
  global $listedSubjects;

  foreach ($selectedSubjects as $selectedSubjectLab => $selectedSubject) {
    foreach ($listedSubjects as $listedSubjectLab => $subject) {
      if ($subject['value'] == $selectedSubject) {
        $listedSubjects[$listedSubjectLab]['currentStatus'] = 'checked';
        unset($selectedSubjects[$selectedSubjectLab]);
      }
    }
  }
}

function checkInAllValues() {
  global $selectedSubjects;
  global $allValues;
  global $listedSubjects;

  // -- add missing listed subject
  foreach ($selectedSubjects as $selectedSubjectLab => $selectedSubject) {
    foreach ($allValues as $allValueLab => $allValue) {
      if ($allValue['value'] == $selectedSubject) {
        $allValue['currentStatus'] = 'checked';
        array_push($listedSubjects, $allValue);
      }
    }
  }
}



if ($selectedSubjects) {

  checkInListedSubjects();
  checkInAllValues();
}


?><!doctype html>

<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title>A Basic HTML5 Template</title>
  <meta name="description" content="A simple HTML5 Template for new projects.">
  <meta name="author" content="SitePoint">

  <meta property="og:title" content="Chip selector">
  <meta property="og:type" content="website">
  <meta property="og:description" content="Web components -> Chip selector">
  <meta property="og:image" content="image.png">

  <!--  <link rel="icon" href="/favicon.ico">-->
  <!--  <link rel="icon" href="/favicon.svg" type="image/svg+xml">-->
  <!--  <link rel="apple-touch-icon" href="/apple-touch-icon.png">-->

  <!--  <link rel="stylesheet" href="css/styles.css?v=1.0">-->

</head>

<body>
<!-- your content here... -->


<div class="container">
  <div class="row">
    <div class="col-md-12">

      <?php

      if (isset($_POST) && isset($_POST['subject'])) {
        ?>
        <h3>Post</h3><?php
        echo '<pre>';
        print_r($_POST);

        echo '<h4>hmm</h4>';
        echo '</pre>';
      }

      echo '$selectedSubjects';
      print_rr($selectedSubjects);
      echo ' <hr>';
      echo '$listedSubjects';
      print_rr($listedSubjects);
      echo ' <hr>';
      //      echo '$allValues';
      //      print_rr($allValues);
      //      echo ' <hr>';


      print_r($selectedSubjects);
      ?>

      <h3>Form</h3>
      <form method="post">
        <div class="dzs-chip-selector dzs-chip-selector--skin-default">
          <div class="dzs-chip-selector--form">
            <?php
            foreach ($listedSubjects as $subject) {
              echo '<label><input type="checkbox" name="subject[]" ';

              if ($subject['currentStatus'] === 'checked') {
                echo ' checked';
              }
              echo ' value="' . $subject['value'] . '">' . $subject['htmlContent'] . ' </label>';
            }
            ?>
          </div>
          <div class="dzs-chip-selector--container">
            <div class="dzs-chip-selector--form-field">
              <div class="dzs-chip-selector--chip-list">
                <ul class="dzs-chip-selector--chip-list-wrapper">

                  <li class="dzs-chip-selector--item">
                    <div class="dzs-chip-selector--item--content">Lemon</div>
                    <button _ngcontent-mua-c151="" matchipremove=""
                            class="dzs-chip-selector--item--remove"
                            type="button">
                      <figure>x</figure>
                    </button>
                  </li>

                </ul>
              </div>
              <label class="dzs-chip-selector--input-new-element--label">
                <input placeholder="New fruit..." class="dzs-chip-selector--input-new-element"
                       autocomplete="off"
                       role="combobox" aria-autocomplete="list" aria-expanded="false"
                       aria-haspopup="listbox"
                       aria-owns="mat-autocomplete-1">
              </label>
            </div>
          </div>
          <div class="dzs-chip-selector--autocompletelist">
            <div class="dzs-chip-selector--autocompletelist--inner">
              <div class="dzs-chip-selector--autocompletelist--placeholder">No items found</div>
              <ul class="dzs-chip-selector--autocompletelist--items">
              </ul>
            </div>
          </div>


        </div>

        <br>
        <br>
        <br>
        <button name="submit-form" value="on" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
</div>


<script>var exports = {}
  var require = () => {
  }</script>
<!--<script src="../build/dzs-chip-selector/dzs-chip-selector.js" type="module"  ></script>-->
<script src="../dist-webpack/dzsChipSelector.js"></script>
<!--<script src="../final.js"  ></script>-->

<link rel="stylesheet" href="style/bootstrap.min.css"/>
<link rel="stylesheet" href="dzs-chip-selector/dzs-chip-selector.css"/>
<link rel="stylesheet" href="dzs-chip-selector/style/skins/skin-default.css"/>

<script>

  // -- helper functions
  function getOptionFromValue(options, dataValue) {
    const foundItems = options.filter((item) => item.value === dataValue)

    return foundItems[0]
  }

  function documentReady(callback) {
    new Promise((resolutionFunc, rejectionFunc) => {
      if (document.readyState === 'interactive' || document.readyState === 'complete') {
        resolutionFunc('interactive')
      }
      document.addEventListener('DOMContentLoaded', () => {
        resolutionFunc('DOMContentLoaded')
      }, false)
      setTimeout(() => {
        resolutionFunc('timeout')
      }, 5000)
    }).then(resolution => {
      callback(resolution)
    }).catch(err => {
      callback(err)
    })
  }

  // -- helper functions end
</script>
<script>

  // import {DzsChipSelector} from '../dist/bundle.js';


  documentReady(() => {

    let requestVersion = 0;

    console.log('doc ready')

    window.dzs_initDzsChipSelector(document.querySelector('.dzs-chip-selector'), {
      /**
       *
       * @param {DzsChipSelector} selfInstance
       * @param argVal
       * @returns {Promise<unknown>}
       */
      middlewareFilterResults: async (selfInstance, argVal) => {
        selfInstance.$elem_.classList.add('dzs-chip-selector--is-autocomplete-list-loading')

        const finalOptions = []
        selfInstance.persistentOptions.forEach(persistentOption => {
          if (persistentOption.currentStatus === 'checked') {
            finalOptions.push(persistentOption)
          }
        })


        let url = `api-search.php?search=${encodeURIComponent(argVal)}`
        url += '&delay=1&requestVersion=' + (++requestVersion);

        console.log('[index] - ', {url})

        return new Promise((resolve, reject) => {

          if (argVal) {
            let responseSync = fetch(url)
              .then((response) => response.json())
              .then((newResults) => {

                console.log('[index] - ', requestVersion, Number(newResults.requestVersion));
                if (requestVersion == Number(newResults.requestVersion)) {

                  newResults.foundSubjects.forEach(dataItem => {
                    console.log('[index] - ', {dataItem}, getOptionFromValue(finalOptions, dataItem.value))
                    if (getOptionFromValue(finalOptions, dataItem.value) === undefined) {
                      finalOptions.push(dataItem)
                    }
                  })

                  console.log({finalOptions})
                  selfInstance.autoCompleteOptions = finalOptions;

                  console.log('[index] - ', newResults)
                }

                resolve()
              })
              .catch((err) => {
                selfInstance.autoCompleteOptions = finalOptions;
                reject(err)
              })
          } else {
            resolve()
          }
        }).finally(() => {

          selfInstance.$elem_.classList.remove('dzs-chip-selector--is-autocomplete-list-loading')
          selfInstance.createListFromOptions()
          selfInstance.updateFormFromOptions()
        })
      }
    })
    // new DzsChipSelector(document.querySelector('.dzs-chip-selector'));
  })
</script>
</body>
</html>