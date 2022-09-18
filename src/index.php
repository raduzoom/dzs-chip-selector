<!doctype html>

<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title>A Basic HTML5 Template</title>
  <meta name="description" content="A simple HTML5 Template for new projects.">
  <meta name="author" content="SitePoint">

  <meta property="og:title" content="A Basic HTML5 Template">
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://www.sitepoint.com/a-basic-html5-template/">
  <meta property="og:description" content="A simple HTML5 Template for new projects.">
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

      $subjects = array(
        array(
          'htmlContent' => 'Apple',
          'value' => 'apple',
          'currentStatus' => null,
        ),
        array(
          'htmlContent' => 'Orange',
          'value' => 'orange',
          'currentStatus' => null,
        ),
      );
      if (isset($_POST) && isset($_POST['subject'])) {
        ?>
        <h3>Post</h3><?php
        echo '<pre>';
        print_r($_POST);

        echo '<h4>hmm</h4>';
        foreach ($_POST['subject'] as $subj) {
          echo 'subj[] - ';
          print_r($subj);
          foreach ($subjects as $lab => $subject) {
            if ($subject['value'] == $subj) {
              $subjects[$lab]['currentStatus'] = 'checked';
            }
          }
          echo '<br>';
        }
        echo '</pre>';
      }
      ?>

      <h3>Form</h3>
      <form method="post">
        <div class="dzs-chip-selector">
          <div class="dzs-chip-selector--form">
            <?php
            foreach ($subjects as $subject) {
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
                    <button _ngcontent-mua-c151="" matchipremove="" class="dzs-chip-selector--item--remove"
                            type="button">
                      <figure>x</figure>
                    </button>
                  </li>

                </ul>
              </div>
              <label class="dzs-chip-selector--input-new-element--label">
                <input placeholder="New fruit..." class="dzs-chip-selector--input-new-element" autocomplete="off"
                       role="combobox" aria-autocomplete="list" aria-expanded="false" aria-haspopup="listbox"
                       aria-owns="mat-autocomplete-1">
              </label>
            </div>
          </div>
          <div class="dzs-chip-selector--autocompletelist">
            <ul class="dzs-chip-selector--autocompletelist--items">
              <li class="dzs-chip-selector--autocompletelist--items--item">Apple</li>
              <li class="dzs-chip-selector--autocompletelist--items--item">Oranges</li>
              <li class="dzs-chip-selector--autocompletelist--items--item"><span>Apricots</span></li>
            </ul>
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


<script>var exports = {};
  var require = () => {
  }</script>
<!--<script src="../build/dzs-chip-selector/dzs-chip-selector.js" type="module"  ></script>-->
<script src="../dist/dzsChipSelector.js"></script>
<!--<script src="../final.js"  ></script>-->

<link rel="stylesheet" href="style/bootstrap.min.css"/>
<link rel="stylesheet" href="dzs-chip-selector/dzs-chip-selector.css"/>


<script>

  // import {DzsChipSelector} from '../dist/bundle.js';

  function documentReady(callback) {
    new Promise((resolutionFunc, rejectionFunc) => {
      if (document.readyState === 'interactive' || document.readyState === 'complete') {
        resolutionFunc('interactive')
      }
      document.addEventListener('DOMContentLoaded', () => {
        resolutionFunc('DOMContentLoaded')
      }, false);
      setTimeout(() => {
        resolutionFunc('timeout')
      }, 5000);
    }).then(resolution => {
      callback(resolution);
    }).catch(err => {
      callback(err)
    });
  }

  documentReady(() => {

    console.log('doc ready');

    window.dzs_initDzsChipSelector(document.querySelector('.dzs-chip-selector'));
    // new DzsChipSelector(document.querySelector('.dzs-chip-selector'));
  });
</script>
</body>
</html>