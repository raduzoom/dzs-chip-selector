<div id="top"></div>




<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://github.com/raduzoom/dzs-chip-selector
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">

<h3 align="center">Chip Selector</h3>

  <p style="text-align: center">
    Chip selector 
    <br />
    <a href="https://github.com/raduzoom/dzs-chip-selector" target="_blank"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://raduzoom.github.io/dzs-chip-selector/demo.html" target="_blank">View Demo ( GitHub Pages )</a>
    ·
    <a href="https://github.com/raduzoom/dzs-chip-selector/issues" target="_blank">Report Bug</a>
    ·
    <a href="https://github.com/raduzoom/dzs-chip-selector/issues" target="_blank">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project


**Chip selector** is a universal tool that helps you display a chip selector to your project. The chip selector has an input where you can filter out results. It can be linked to a form **&lt;input type="checkbox"&gt;** that can be manipulated in real time.


![skin-default](https://user-images.githubusercontent.com/58981243/211401746-eb089fdd-044f-4034-916c-458fb9dad221.jpg "Chip Selector")

<p align="right">(<a href="#top">back to top</a>)</p>



### Works With

This component has been made to be versatile, it includes both ES6 and UMD builds ( module / bundled ).

* Vanilla javascript / html via UMD embed
* [Typescript](https://www.typescriptlang.org/)
* [Next.js](https://nextjs.org/)
* [React.js](https://reactjs.org/)
* [Angular](https://angular.io/)
* [Bootstrap](https://getbootstrap.com)
* [JQuery](https://jquery.com)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

Git clone this repository.

### Prerequisites

Install npm - tested with at least version 8.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Clone the repo
   ```sh
   git clone https://github.com/raduzoom/dzs-chip-selector
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. To develop -
   ```sh
   npm run dev
   ```

<p align="right">(<a href="#top">back to top</a>)</p>

## Projects

<!-- USAGE EXAMPLES -->
## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#top">back to top</a>)</p>


## Code explanation

Can be used as a web component for creating a chip selector. 

Allows the chip selector to feed from multiple origins. The chip selector allows the user to select one or more options from a list of items. It can either get the options from a form element or from the "data-persistentOptions" attribute on the main element. 

The class has various methods for initializing the structure of the component, handling user input, and updating the view. The class also uses several imported functions and constants from other modules for specific tasks such as removing children from a DOM element, getting the computed style of an element, and inserting HTML. 

The class also extends the HTMLElement interface to add a webComponent property and the Window interface to add a global function "dzs_initDzsChipSelector" which can be used to initialize the component on an HTML element.

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- Options -->
## Options
<table class="table-for-jsDoc">
            <thead>
            <tr>
              <th><label class=" ">propName</label></th>
              <th><label class=" ">description</label></th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td><span class="prop-name">  placeholderNoItemsFound?:</span> <em> string</em></td>
              <td class="prop-description"> text for no items found</td>
            </tr>
            <tr>
              <td><span class="prop-name">  middlewareFilterResults?:</span> <em> any</em></td>
              <td class="prop-description"> include a middleware function like filtering the results</td>
            </tr>
            <tr>
              <td><span class="prop-name">  viewSkin?:</span> <em> string</em></td>
              <td class="prop-description"> the skin can be "skin-default", "skin-flat" - also needs css file being
                loaded
              </td>
            </tr>
            <tr>
              <td><span class="prop-name">  inputPlaceholderText?:</span> <em> string</em></td>
              <td class="prop-description"> the placeholder for Filter Results ... text</td>
            </tr>
            <tr>
              <td><span class="prop-name">  onUpdateFunction?:</span> <em> (...args: any[]) => any</em></td>
              <td class="prop-description"> custom function for onUpdate</td>
            </tr>
            <tr>
              <td><span class="prop-name">  viewIsWrapping?:</span> <em> boolean</em></td>
              <td class="prop-description"> wrap false or true</td>
            </tr>
            <tr>
              <td><span class="prop-name">  persistentOptions?:</span> <em> ChipSelectorItem[]</em></td>
              <td class="prop-description"> the persistent options</td>
            </tr>
            </tbody>
          </table>

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ROADMAP -->
## Roadmap

- [x] Add Changelog
- [x] Add back to top links
- [] Add Additional Templates w/ Examples
- [] Add "components" document to easily copy & paste sections of the readme
- [] Multi-language Support
    - [] Chinese
    - [] Spanish

See the [open issues](https://github.com/raduzoom/dzs-chip-selector/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Your Name - [@ZoomItFlash](https://twitter.com/ZoomItFlash) - email@example.com

Project Link: [https://github.com/raduzoom/dzs-chip-selector#readme](https://github.com/raduzoom/dzs-chip-selector#readme)

<p align="right">(<a href="#top">back to top</a>)</p>




<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/raduzoom/dzs-chip-selector.svg?style=for-the-badge
[contributors-url]: https://github.com/raduzoom/dzs-chip-selector/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/raduzoom/dzs-chip-selector.svg?style=for-the-badge
[forks-url]: https://github.com/raduzoom/dzs-chip-selector/network/members
[stars-shield]: https://img.shields.io/github/stars/raduzoom/dzs-chip-selector.svg?style=for-the-badge
[stars-url]: https://github.com/raduzoom/dzs-chip-selector/stargazers
[issues-shield]: https://img.shields.io/github/issues/raduzoom/dzs-chip-selector.svg?style=for-the-badge
[issues-url]: https://github.com/raduzoom/dzs-chip-selector/issues
[license-shield]: https://img.shields.io/github/license/raduzoom/dzs-chip-selector.svg?style=for-the-badge
[license-url]: https://github.com/raduzoom/dzs-chip-selector/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/radu-hulubas-809404222/
[product-screenshot]: images/screenshot.png